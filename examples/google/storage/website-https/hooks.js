const assert = require("assert");
const { Resolver } = require("dns").promises;

const { retryCallOnError, retryCall } = require("@grucloud/core").Retry;
const Axios = require("axios");
const { pipe, get } = require("rubico");
const { first, find } = require("rubico/x");

const checkDig = async ({ nameServer, domain, type = "A" }) => {
  let commandParam = [domain, type];
  const resolver = new Resolver();

  if (nameServer) {
    const ipDns = await resolver.resolve4(nameServer);
    resolver.setServers(ipDns);
  }

  await retryCall({
    name: `dig ${commandParam}`,
    fn: switchCase([
      () => type === "A",
      () => resolver.resolve4(domain),
      () => {
        //TODO
      },
    ]),
    shouldRetryOnException: ({ error, name }) => {
      return true;
    },
    isExpectedResult: (digResult) => {
      return !isEmpty(digResult);
    },
    config: { retryCount: 200, retryDelay: 5e3 },
  });
};

module.exports = ({ resources, provider }) => {
  const bucketUrl = `https://${resources.bucketPublic.name}`;
  const bucketStorageUrl = `https://storage.googleapis.com/${resources.bucketPublic.name}`;
  const bucketUrlIndex = `${bucketStorageUrl}/index.html`;
  const bucketUrl404 = `${bucketStorageUrl}/404.html`;
  assert(resources.dnsManagedZone);

  const axios = Axios.create({
    timeout: 15e3,
    withCredentials: true,
  });

  return {
    onDeployed: {
      init: async () => {
        const dnsManagedZoneLive = await resources.dnsManagedZone.getLive();
        assert(dnsManagedZoneLive.nameServers);

        const sslCertificateLive = await resources.sslCertificate.getLive();
        return { dnsManagedZoneLive, sslCertificateLive };
      },
      actions: [
        {
          name: `get ${bucketUrlIndex}`,
          command: async ({}) => {
            await retryCallOnError({
              name: `get  ${bucketUrlIndex}`,
              fn: () => axios.get(bucketUrlIndex),
              shouldRetryOnException: ({ error }) => {
                return [404].includes(error.response?.status);
              },
              config: { retryCount: 20, retryDelay: 5e3 },
            });
          },
        },
        {
          name: `get ${bucketStorageUrl}`,
          command: async ({}) => {
            await retryCallOnError({
              name: `get  ${bucketStorageUrl}`,
              fn: () => axios.get(bucketStorageUrl),
              shouldRetryOnException: ({ error }) => {
                return [404].includes(error.response?.status);
              },
              config: { retryCount: 20, retryDelay: 5e3 },
            });
          },
        },
        {
          name: `get ${bucketUrl404}`,
          command: async ({}) => {
            await retryCallOnError({
              name: `get  ${bucketUrl404}`,
              fn: () => axios.get(bucketUrl404),
              shouldRetryOnException: ({ error }) => {
                return [404].includes(error.response?.status);
              },
              config: { retryCount: 20, retryDelay: 5e3 },
            });
          },
        },
        {
          name: `ssl certificate ready`,
          command: async ({ sslCertificateLive }) => {
            assert(
              sslCertificateLive.certificate,
              "ssl certificate not yet ready"
            );
          },
        },
        {
          name: `dig nameservers managedZone ${resources.bucketPublic.name}`,
          command: async ({ dnsManagedZoneLive }) => {
            const nameServer = dnsManagedZoneLive.nameServers[0];
            await checkDig({
              nameServer,
              domain: resources.bucketPublic.name,
            });
          },
        },
        {
          name: `dig nameservers recordSet ${resources.bucketPublic.name}`,
          command: async ({ dnsManagedZoneLive }) => {
            const nameServer = pipe([
              find((record) => record.type === "NS"),
              get("rrdatas"),
              first,
            ])(dnsManagedZoneLive.recordSet);
            await checkDig({
              nameServer,
              domain: resources.bucketPublic.name,
            });
          },
        },
        {
          name: `dig default nameserver ${resources.bucketPublic.name}`,
          command: async ({ dnsManagedZoneLive }) => {
            await checkDig({
              domain: resources.bucketPublic.name,
              dnsManagedZoneLive,
            });
          },
        },
        {
          name: `get ${bucketUrl}`,
          command: async () => {
            await retryCallOnError({
              name: `get  ${bucketUrl}`,
              fn: () => axios.get(bucketUrl),
              shouldRetryOnException: ({ error }) => {
                return [404].includes(error.response?.status);
              },
              config: { retryCount: 200, retryDelay: 5e3 },
            });
          },
        },
      ],
    },
  };
};

const assert = require("assert");
const path = require("path");
const { map } = require("rubico");
const { resolve } = require("path");
const { readdir } = require("fs").promises;
const mime = require("mime-types");

const { GoogleProvider } = require("@grucloud/provider-google");
const hook = require("./hook");

async function getFiles(dir) {
  const dirResolved = resolve(dir);
  const files = await getFilesWalk(dir);
  return files.map((file) => file.replace(`${dirResolved}/`, ""));
}

async function getFilesWalk(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFilesWalk(res) : res;
    })
  );
  return files.flat();
}

exports.createStack = async () => {
  const provider = GoogleProvider({ config: require("./config") });

  const { bucketName, websiteDir } = config;
  assert(bucketName);
  assert(websiteDir);

  const domain = bucketName;
  const files = await getFiles(websiteDir);

  const bucketPublic = await provider.makeBucket({
    name: bucketName,
    properties: () => ({
      iamConfiguration: {
        uniformBucketLevelAccess: {
          enabled: true,
        },
      },
      iam: {
        bindings: [
          {
            role: "roles/storage.objectViewer",
            members: ["allUsers"],
          },
        ],
      },
      website: { mainPageSuffix: "index.html", notFoundPage: "404.html" },
    }),
  });

  await map((file) =>
    provider.makeObject({
      name: file,
      dependencies: { bucket: bucketPublic },
      properties: () => ({
        path: "/",
        contentType: mime.lookup(file),
        source: path.join(websiteDir, file),
      }),
    })
  )(files);

  const sslCertificate = await provider.makeSslCertificate({
    name: "ssl-certificate",
    properties: () => ({
      managed: {
        domains: [domain],
      },
    }),
  });

  const backendBucket = await provider.makeBackendBucket({
    name: "backend-bucket",
    dependencies: { bucket: bucketPublic },
    properties: () => ({
      bucketName,
    }),
  });

  const urlMap = await provider.makeUrlMap({
    name: "url-map",
    dependencies: { service: backendBucket },
    properties: () => ({}),
  });

  const httpsTargetProxy = await provider.makeHttpsTargetProxy({
    name: "https-target-proxy",
    dependencies: { sslCertificate, urlMap },
    properties: () => ({}),
  });

  const globalForwardingRule = await provider.makeGlobalForwardingRule({
    name: "global-forwarding-rule",
    dependencies: { httpsTargetProxy },
    properties: () => ({}),
  });

  const dnsManagedZone = await provider.makeDnsManagedZone({
    name: "dns-managed-zone",
    dependencies: { globalForwardingRule },

    properties: ({ dependencies: { globalForwardingRule } }) => {
      return {
        dnsName: `${domain}.`,
        recordSet: [
          {
            name: `${domain}.`,
            rrdatas: [globalForwardingRule.live?.IPAddress],
            ttl: 86400,
            type: "A",
          },
          {
            name: `www.${domain}.`,
            rrdatas: [globalForwardingRule.live?.IPAddress],
            ttl: 86400,
            type: "A",
          },
        ],
      };
    },
  });

  return {
    provider,
    resources: { bucketPublic, dnsManagedZone, sslCertificate },
    hooks: [hook],
  };
};

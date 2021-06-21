const assert = require("assert");
const { GoogleProvider } = require("@grucloud/provider-google");
const hook = require("./hook");

const createResources = async ({ provider, resources: { serviceAccount } }) => {
  const { stage } = provider.config;
  // Allocate public Ip address
  const ip = await provider.makeAddress({
    name: `ip-webserver-${stage}`,
  });

  const firewall22_80_433 = await provider.makeFirewall({
    name: `firewall-22-80-433-${stage}`,
    properties: () => ({
      allowed: [
        {
          sourceRanges: ["0.0.0.0/0"],
          IPProtocol: "TCP",
          ports: [22, 80, 433],
        },
      ],
    }),
  });
  const firewallIcmp = await provider.makeFirewall({
    name: `firewall-icmp-${stage}`,
    properties: () => ({
      allowed: [
        {
          sourceRanges: ["0.0.0.0/0"],
          IPProtocol: "icmp",
        },
      ],
    }),
  });

  const disk = await provider.makeDisk({
    name: `disk-${stage}`,
    properties: () => ({
      sizeGb: "20",
    }),
  });

  // Allocate a server
  const server = await provider.makeVmInstance({
    name: `webserver-${stage}`,
    dependencies: {
      //TODO broken with serviceAccount
      ip /*serviceAccount */,
      disks: [disk],
    },
    properties: () => ({
      diskSizeGb: "20",
      machineType: "f1-micro",
      sourceImage:
        "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts",
      metadata: {
        items: [
          {
            key: "enable-oslogin",
            value: "True",
          },
        ],
      },
    }),
  });

  return {
    ip,
    server,
    firewall22_80_433,
    firewallIcmp,
  };
};
exports.createResources = createResources;

exports.createStack = async () => {
  const provider = GoogleProvider({ config: require("./config") });
  const { stage } = provider.config;
  assert(stage, "missing stage");

  const serviceAccount = await provider.makeServiceAccount({
    name: `sa-${stage}`,
    properties: () => ({
      serviceAccount: {
        displayName: "SA dev",
      },
    }),
  });

  const resources = await createResources({
    provider,
    resources: { serviceAccount },
  });

  return {
    provider,
    resources,
    hooks: [hook],
  };
};

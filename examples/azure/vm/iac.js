const assert = require("assert");
const { AzureProvider } = require("@grucloud/provider-azure");
const hook = require("./hook");

const createResources = async ({ provider }) => {
  // https://docs.microsoft.com/en-us/rest/api/apimanagement/2019-12-01/apimanagementservice/createorupdate
  const rg = provider.resourceManagement.makeResourceGroup({
    name: `resource-group`,
  });

  // https://docs.microsoft.com/en-us/rest/api/virtualnetwork/virtualnetworks/createorupdate#request-body
  const vnet = provider.virtualNetworks.makeVirtualNetwork({
    name: `virtual-network`,
    dependencies: { resourceGroup: rg },
    properties: () => ({
      properties: {
        addressSpace: { addressPrefixes: ["10.0.0.0/16"] },
        subnets: [
          {
            name: `subnet`,
            properties: {
              addressPrefix: "10.0.0.0/24",
            },
          },
        ],
      },
    }),
  });

  // https://docs.microsoft.com/en-us/rest/api/virtualnetwork/networksecuritygroups/createorupdate#request-body
  const sg = provider.virtualNetworks.makeSecurityGroup({
    name: `security-group`,
    dependencies: { resourceGroup: rg },
    properties: () => ({
      properties: {
        securityRules: [
          {
            name: "SSH",
            properties: {
              access: "Allow",
              direction: "Inbound",
              protocol: "Tcp",
              destinationPortRange: "22",
              destinationAddressPrefix: "*",
              sourcePortRange: "*",
              sourceAddressPrefix: "*",
              priority: 1000,
            },
          },
          {
            name: "ICMP",
            properties: {
              access: "Allow",
              direction: "Inbound",
              protocol: "Icmp",
              destinationAddressPrefix: "*",
              destinationPortRange: "*",
              sourceAddressPrefix: "*",
              sourcePortRange: "*",
              priority: 1001,
            },
          },
        ],
      },
    }),
  });

  // https://docs.microsoft.com/en-us/rest/api/virtualnetwork/publicipaddresses/createorupdate#request-body
  const publicIpAddress = provider.virtualNetworks.makePublicIpAddress({
    name: `ip`,
    dependencies: {
      resourceGroup: rg,
    },
    properties: () => ({
      properties: {
        publicIPAllocationMethod: "Dynamic",
      },
    }),
  });
  // https://docs.microsoft.com/en-us/rest/api/virtualnetwork/networkinterfaces/createorupdate#request-body
  const networkInterface = provider.virtualNetworks.makeNetworkInterface({
    name: `network-interface`,
    dependencies: {
      resourceGroup: rg,
      virtualNetwork: vnet,
      securityGroup: sg,
      subnet: `subnet`,
      publicIpAddress,
    },
    properties: () => ({
      properties: {
        ipConfigurations: [
          {
            name: "ipconfig",
            properties: {
              privateIPAllocationMethod: "Dynamic",
            },
          },
        ],
      },
    }),
  });

  const { MACHINE_ADMIN_USERNAME, MACHINE_ADMIN_PASSWORD } = process.env;
  assert(MACHINE_ADMIN_USERNAME);
  assert(MACHINE_ADMIN_PASSWORD);

  // https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/createorupdate
  const vm = provider.compute.makeVirtualMachine({
    name: `vm`,
    dependencies: {
      resourceGroup: rg,
      networkInterface: networkInterface,
    },
    properties: () => ({
      properties: {
        hardwareProfile: {
          vmSize: "Standard_A1_v2",
        },
        storageProfile: {
          imageReference: {
            // az vm image list
            offer: "UbuntuServer",
            publisher: "Canonical",
            sku: "18.04-LTS",
            version: "latest",
          },
        },
        osProfile: {
          adminUsername: MACHINE_ADMIN_USERNAME,
          computerName: "myVM",
          adminPassword: MACHINE_ADMIN_PASSWORD,
        },
      },
    }),
  });
  return { rg, sg, vnet, publicIpAddress, networkInterface, vm };
};

exports.createResources = createResources;

exports.createStack = async ({ createProvider }) => {
  const provider = createProvider(AzureProvider, {
    config: require("./config"),
  });
  const resources = await createResources({ provider });

  return {
    provider,
    resources,
    hooks: [hook],
  };
};

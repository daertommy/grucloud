const assert = require("assert");
const { defaultsDeep } = require("rubico/x");

const logger = require("../../../../logger")({ prefix: "GcpVmInstance" });
const { tos } = require("../../../../tos");
const GoogleClient = require("../../GoogleClient");
const { buildLabel } = require("../../GoogleCommon");
const { toTagName } = require("../../../TagName");
const { getField } = require("../../../ProviderCommon");
const { isUpByIdCore } = require("../../../Common");
const { GCP_COMPUTE_BASE_URL } = require("./GcpComputeCommon");

module.exports = GoogleVmInstance = ({ spec, config: configProvider }) => {
  assert(spec);
  assert(configProvider);
  assert(configProvider.stage);
  const { project, region, zone, managedByTag } = configProvider;

  const configDefault = ({ name, properties, dependencies }) => {
    logger.debug(`configDefault ${tos({ properties, dependencies })}`);
    const { ip, serviceAccount } = dependencies;
    const {
      machineType,
      diskType,
      sourceImage,
      diskSizeGb,
      metadata,
      ...otherProperties
    } = properties;

    const buildServiceAccount = ({ serviceAccount }) => {
      if (serviceAccount) {
        return [
          {
            email: getField(serviceAccount, "email"),
            scopes: ["https://www.googleapis.com/auth/cloud-platform"],
          },
        ];
      }
    };
    const config = defaultsDeep({
      kind: "compute#instance",
      name,
      zone: `projects/${project}/zones/${zone}`,
      machineType: `projects/${project}/zones/${zone}/machineTypes/${machineType}`,
      labels: buildLabel(configProvider),
      metadata: defaultsDeep({
        kind: "compute#metadata",
      })(metadata || {}),
      serviceAccounts: buildServiceAccount({ serviceAccount }),
      disks: [
        {
          kind: "compute#attachedDisk",
          type: "PERSISTENT",
          boot: true,
          mode: "READ_WRITE",
          autoDelete: true,
          deviceName: toTagName(name, managedByTag),
          initializeParams: {
            sourceImage,
            diskType: `projects/${project}/zones/${zone}/diskTypes/${diskType}`,
            diskSizeGb,
          },
          diskEncryptionKey: {},
        },
      ],
      networkInterfaces: [
        {
          kind: "compute#networkInterface",
          subnetwork: `projects/${project}/regions/${region}/subnetworks/default`,
          accessConfigs: [
            {
              ...(ip && { natIP: getField(ip, "address") }),
              kind: "compute#accessConfig",
              name: "External NAT",
              type: "ONE_TO_ONE_NAT",
              networkTier: "PREMIUM",
            },
          ],
          aliasIpRanges: [],
        },
      ],
      displayDevice: {
        enableDisplay: false,
      },
      canIpForward: false,
      scheduling: {
        preemptible: false,
        onHostMaintenance: "MIGRATE",
        automaticRestart: true,
        nodeAffinities: [],
      },
      deletionProtection: false,
      reservationAffinity: {
        consumeReservationType: "ANY_RESERVATION",
      },
      shieldedInstanceConfig: {
        enableSecureBoot: false,
        enableVtpm: true,
        enableIntegrityMonitoring: true,
      },
      confidentialInstanceConfig: {
        enableConfidentialCompute: false,
      },
    })(otherProperties);
    logger.debug(`configDefault ${name} result: ${tos(config)}`);
    return config;
  };

  const getStateName = (instance) => {
    const { status } = instance;
    assert(status);
    logger.debug(`vm stateName ${status}`);
    return status;
  };

  const isInstanceUp = (instance) => {
    return ["RUNNING"].includes(getStateName(instance));
  };

  const isUpByIdFactory = ({ getById }) =>
    isUpByIdCore({
      isInstanceUp,
      getById,
    });

  return GoogleClient({
    spec,
    baseURL: GCP_COMPUTE_BASE_URL,
    url: `/projects/${project}/zones/${zone}/instances`,
    config: configProvider,
    isUpByIdFactory,
    configDefault,
  });
};

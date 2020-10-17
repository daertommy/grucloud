const assert = require("assert");
const { defaultsDeep } = require("rubico/x");
const logger = require("../../../../logger")({ prefix: "GcpNetwork" });
const { tos } = require("../../../../tos");
const GoogleClient = require("../../GoogleClient");
const { GCP_COMPUTE_BASE_URL } = require("./GcpComputeCommon");

// https://cloud.google.com/compute/docs/reference/rest/v1/networks
module.exports = GcpNetwork = ({ spec, config }) => {
  assert(spec);
  assert(config);

  const { project, managedByDescription } = config;

  const configDefault = ({ name, properties }) =>
    defaultsDeep({
      name,
      description: managedByDescription,
    })(properties);

  const cannotBeDeleted = ({ resource }) => {
    return resource.name === "default";
  };

  return GoogleClient({
    spec,
    baseURL: GCP_COMPUTE_BASE_URL,
    url: `/projects/${project}/global/networks`,
    config,
    configDefault,
    cannotBeDeleted,
  });
};

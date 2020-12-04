const AWS = require("aws-sdk");
const { get, pipe, filter, map } = require("rubico");
const { defaultsDeep, isEmpty } = require("rubico/x");
const assert = require("assert");

const logger = require("../../../logger")({ prefix: "AwsIgw" });
const { tos } = require("../../../tos");
const { retryCall } = require("../../Retry");
const { getByIdCore } = require("../AwsCommon");
const { getByNameCore, isUpByIdCore, isDownByIdCore } = require("../../Common");
const { findNameInTags } = require("../AwsCommon");
const { tagResource } = require("../AwsTagResource");
const { CheckAwsTags } = require("../AwsTagCheck");

module.exports = AwsInternetGateway = ({ spec, config }) => {
  assert(spec);
  assert(config);

  const ec2 = new AWS.EC2();

  const findName = (item) => {
    const name = findNameInTags(item);
    if (name) {
      return name;
    }
    return findId(item);
  };

  const findId = get("InternetGatewayId");

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describeInternetGateways-property
  const getList = async ({ params } = {}) => {
    logger.debug(`list ${tos(params)}`);
    const { InternetGateways } = await ec2
      .describeInternetGateways(params)
      .promise();
    logger.debug(`list ${tos(InternetGateways)}`);

    return {
      total: InternetGateways.length,
      items: InternetGateways,
    };
  };

  const getByName = ({ name }) => getByNameCore({ name, getList, findName });
  const getById = getByIdCore({ fieldIds: "InternetGatewayIds", getList });

  const getStateName = (instance) => {
    const state = instance.Attachments[0]?.State;
    logger.debug(`stateName ${state}`);
    return state;
  };

  const isInstanceUp = (instance) => {
    return ["available"].includes(getStateName(instance));
  };

  const isUpById = isUpByIdCore({
    getById,
    isInstanceUp,
  });

  const isDownById = isDownByIdCore({ getById });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#createInternetGateway-property
  const create = async ({ name, payload, dependencies }) => {
    assert(name);
    //assert(payload);

    logger.debug(`create ${tos({ name, payload })}`);
    const {
      InternetGateway: { InternetGatewayId },
    } = await ec2.createInternetGateway(payload).promise();
    assert(InternetGatewayId);
    logger.debug(`created ig ${InternetGatewayId}`);

    await tagResource({
      config,
      name,
      resourceType: "InternetGateway",
      resourceId: InternetGatewayId,
    });

    const { vpc } = dependencies;
    assert(vpc, "InternetGateway is missing the dependency 'vpc'");
    const vpcLive = await vpc.getLive();
    assert(vpcLive.VpcId);
    const paramsAttach = {
      InternetGatewayId,
      VpcId: vpcLive.VpcId,
    };
    logger.debug(`create, ig attaching vpc ${tos({ vpcLive })}`);
    await ec2.attachInternetGateway(paramsAttach).promise();
    logger.debug(`create ig, vpc attached`);

    const igw = await retryCall({
      name: `isUpById: ${name} id: ${InternetGatewayId}`,
      fn: () => isUpById({ id: InternetGatewayId }),
      config,
    });

    assert(
      CheckAwsTags({
        config,
        tags: igw.Tags,
        name: name,
      }),
      `missing tag for ${name}`
    );
    return { id: InternetGatewayId };
  };

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#detachInternetGateway-property
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#deleteInternetGateway-property
  const destroy = async ({ id, name }) => {
    logger.debug(`destroy ${tos({ name, id })}`);

    if (isEmpty(id)) {
      throw Error(`destroy invalid id`);
    }
    const ig = await getById({ id });
    if (!ig) {
      throw Error(`Cannot get internet gateway: ${id}`);
    }
    const attachment = ig.Attachments[0];
    if (attachment) {
      const paramsDetach = {
        InternetGatewayId: id,
        VpcId: attachment.VpcId,
      };
      logger.debug(`destroy detaching vpc ${attachment.VpcId}`);
      await ec2.detachInternetGateway(paramsDetach).promise();
    }
    await ec2.deleteInternetGateway({ InternetGatewayId: id }).promise();
    logger.debug(`destroyed, ${tos({ name, id })}`);
    return;
  };

  const configDefault = async ({ name, properties }) =>
    defaultsDeep({})(properties);

  const cannotBeDeleted = ({ resource, name }) => {
    logger.debug(`cannotBeDeleted name: ${name} ${tos({ resource })}`);
    return resource.InternetGatewayId === name;
  };

  return {
    type: "InternetGateway",
    spec,
    findId,
    isUpById,
    isDownById,
    getByName,
    getById,
    findName,
    cannotBeDeleted,
    getList,
    create,
    destroy,
    configDefault,
  };
};

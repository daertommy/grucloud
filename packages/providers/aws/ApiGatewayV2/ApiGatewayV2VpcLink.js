const assert = require("assert");
const { map, pipe, tap, eq, get, assign, pick } = require("rubico");
const { defaultsDeep, when } = require("rubico/x");
const { getByNameCore, buildTagsObject } = require("@grucloud/core/Common");

const { createAwsResource } = require("../AwsClient");
const { getField } = require("@grucloud/core/ProviderCommon");
const { tagResource, untagResource } = require("./ApiGatewayCommon");
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html

const model = {
  package: "apigatewayv2",
  client: "ApiGatewayV2",
  ignoreErrorCodes: ["NotFoundException"],
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#getVpcLink-property
  getById: { method: "getVpcLink" },
  getList: { method: "getVpcLinks", getParam: "Items" },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#createVpcLink-property
  create: {
    method: "createVpcLink",
    getErrorMessage: get("VpcLinkStatusMessage", "error"),
    isInstanceError: eq(get("VpcLinkStatus"), "FAILED"),
    isInstanceUp: eq(get("VpcLinkStatus"), "AVAILABLE"),
  },
  update: { method: "updateVpcLink" },
  destroy: { method: "deleteVpcLink" },
};

exports.ApiGatewayV2VpcLink = ({ spec, config }) => {
  const buildResourceArn = ({ VpcLinkId }) =>
    `arn:aws:apigateway:${config.region}::/vpclinks/${VpcLinkId}`;

  return createAwsResource({
    model,
    spec,
    config,
    findName: pipe([get("live.Name")]),
    pickId: pipe([pick(["VpcLinkId"])]),
    findId: get("live.VpcLinkId"),
    findDependencies: ({ live }) => [
      {
        type: "Subnet",
        group: "EC2",
        ids: pipe([() => live, get("SubnetIds")])(),
      },
      {
        type: "SecurityGroup",
        group: "EC2",
        ids: pipe([() => live, get("SecurityGroupIds")])(),
      },
    ],
    decorate: ({ endpoint }) => pipe([assign({})]),
    getByName: getByNameCore,
    configDefault: ({
      name,
      namespace,
      properties: { Tags, ...otherProps },
      dependencies: { subnets, securityGroups },
    }) =>
      pipe([
        () => otherProps,
        defaultsDeep({
          Name: name,
          Tags: buildTagsObject({ config, namespace, name, userTags: Tags }),
        }),
        when(
          () => subnets,
          defaultsDeep({
            SubnetIds: pipe([
              () => subnets,
              map((subnet) => getField(subnet, "SubnetId")),
            ])(),
          })
        ),
        when(
          () => securityGroups,
          defaultsDeep({
            SecurityGroupIds: pipe([
              () => securityGroups,
              map((securityGroup) => getField(securityGroup, "GroupId")),
            ])(),
          })
        ),
      ])(),
    tagResource: tagResource({ buildResourceArn }),
    untagResource: untagResource({ buildResourceArn }),
  });
};
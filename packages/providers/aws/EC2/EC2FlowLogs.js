const assert = require("assert");
const { pipe, tap, get, switchCase, map, not, gte } = require("rubico");
const {
  defaultsDeep,
  first,
  prepend,
  find,
  isEmpty,
  when,
  values,
  keys,
  unless,
} = require("rubico/x");
const { getByNameCore } = require("@grucloud/core/Common");
const { getField } = require("@grucloud/core/ProviderCommon");

const { buildTags, findNameInTagsOrId } = require("../AwsCommon");
const { createAwsResource } = require("../AwsClient");
const { tagResource, untagResource } = require("./EC2Common");

const FlowLogsDependencies = {
  vpc: { type: "Vpc", group: "EC2", ResourceType: "VPC", ResourceId: "VpcId" },
  subnet: {
    type: "Subnet",
    group: "EC2",
    ResourceType: "Subnet",
    ResourceId: "SubnetId",
  },
  networkInterface: {
    type: "NetworkInterface",
    group: "EC2",
    ResourceType: "NetworkInterface",
    ResourceId: "NetworkInterfaceId",
  },
  transitGateway: {
    type: "TransitGateway",
    group: "EC2",
    ResourceType: "TransitGateway",
    ResourceId: "TransitGatewayId",
  },
  transitGatewayVpcAttachment: {
    type: "TransitGatewayVpcAttachment",
    group: "EC2",
    ResourceType: "TransitGatewayAttachment",
    ResourceId: "TransitGatewayAttachmentId",
  },
  transitGatewayAttachment: {
    type: "TransitGatewayAttachment",
    group: "EC2",
    ResourceType: "TransitGatewayAttachment",
    ResourceId: "TransitGatewayAttachmentId",
  },
};

exports.FlowLogsDependencies = FlowLogsDependencies;

const findId = pipe([get("live.FlowLogId")]);

const createModel = ({ config }) => ({
  package: "ec2",
  client: "EC2",
  ignoreErrorCodes: ["InvalidFlowLogId.NotFound"],
  getById: {
    pickId: pipe([
      ({ FlowLogId }) => ({
        FlowLogIds: [FlowLogId],
      }),
    ]),
    method: "describeFlowLogs",
    getField: "FlowLogs",
  },
  getList: {
    method: "describeFlowLogs",
    getParam: "FlowLogs",
    decorate: ({ endpoint, getById }) =>
      pipe([
        tap((params) => {
          assert(true);
        }),
      ]),
  },
  create: {
    method: "createFlowLogs",
    pickCreated: ({ payload }) =>
      pipe([
        get("FlowLogIds"),
        first,
        tap((FlowLogId) => {
          assert(FlowLogId);
        }),
        (FlowLogId) => ({ FlowLogId }),
      ]),
  },
  destroy: {
    method: "deleteFlowLogs",
    pickId: ({ FlowLogId }) => ({ FlowLogIds: [FlowLogId] }),
  },
});

const findDependencyFlowLog =
  ({ live, lives, config }) =>
  ({ type, group }) =>
    pipe([
      tap(() => {
        assert(live.ResourceId);
      }),
      () =>
        lives.getById({
          id: live.ResourceId,
          type,
          group,
          providerName: config.providerName,
        }),
      get("id"),
      unless(isEmpty, (id) => ({ type, group, ids: [id] })),
    ])();

const findNameInDependency =
  ({ live, lives, config }) =>
  ({ type, group }) =>
    pipe([
      tap((name) => {
        assert(live.ResourceId);
      }),
      () =>
        lives.getById({
          id: live.ResourceId,
          type,
          group,
          providerName: config.providerName,
        }),
      get("name"),
    ])();

const findNameInDependencies = ({ live, lives, config }) =>
  pipe([
    tap((params) => {
      assert(config);
      assert(live);
    }),
    () => FlowLogsDependencies,
    values,
    map(findNameInDependency({ live, lives, config })),
    find(not(isEmpty)),
    tap((name) => {
      assert(name, `cannot find flowlog dependency name`);
    }),
    prepend("flowlog::"),
  ])();

const findDependenciesFlowLog = ({ live, lives, config }) =>
  pipe([
    tap((params) => {
      assert(config);
      assert(live);
      assert(lives);
    }),
    () => FlowLogsDependencies,
    values,
    map(
      findDependencyFlowLog({
        live,
        lives,
        config,
      })
    ),
    find(not(isEmpty)),
  ])();

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html
exports.EC2FlowLogs = ({ spec, config }) =>
  createAwsResource({
    model: createModel({ config }),
    spec,
    config,
    findName: pipe([
      tap((params) => {
        assert(true);
      }),
      findNameInTagsOrId({ findId: findNameInDependencies }),
      tap((params) => {
        assert(true);
      }),
    ]),
    findId,
    findDependencies: ({ live, lives }) => [
      findDependenciesFlowLog({ live, lives, config }),
      {
        type: "Role",
        group: "IAM",
        ids: [pipe([() => live.DeliverLogsPermissionArn])()],
      },
      {
        type: "LogGroup",
        group: "CloudWatchLogs",
        ids: [
          pipe([
            () =>
              lives.getByName({
                name: live.LogGroupName,
                type: "LogGroup",
                group: "CloudWatchLogs",
                providerName: config.providerName,
              }),
            get("id"),
          ])(),
        ],
      },
      //TODO S3
    ],
    getByName: getByNameCore,
    tagResource: tagResource,
    untagResource: untagResource,
    configDefault: ({
      name,
      namespace,
      properties: { Tags, ...otherProps },
      dependencies: { s3Bucket, iamRole, cloudWatchLogGroup, ...deps },
    }) =>
      pipe([
        tap((params) => {
          assert(true);
        }),
        () => otherProps,
        when(
          () => iamRole,
          pipe([
            defaultsDeep({
              DeliverLogsPermissionArn: getField(iamRole, "Arn"),
            }),
          ])
        ),
        switchCase([
          () => s3Bucket,
          defaultsDeep({
            LogDestinationType: "s3",
          }),
          () => cloudWatchLogGroup,
          defaultsDeep({
            LogDestinationType: "cloud-watch-logs",
            LogGroupName: get("resource.name")(cloudWatchLogGroup),
          }),
          () => {
            assert(false, "missing flow logs destination dependencies");
          },
        ]),
        defaultsDeep(
          pipe([
            () => deps,
            keys,
            first,
            (key) =>
              pipe([
                tap((params) => {
                  assert(key, `missing dependencies`);
                  assert(FlowLogsDependencies[key]);
                }),
                () => ({
                  ResourceType: FlowLogsDependencies[key].ResourceType,
                  ResourceIds: [
                    getField(deps[key], FlowLogsDependencies[key].ResourceId),
                  ],
                }),
              ])(),
          ])()
        ),
        defaultsDeep({
          TagSpecifications: [
            {
              ResourceType: "vpc-flow-log",
              Tags: buildTags({ config, namespace, name, UserTags: Tags }),
            },
          ],
        }),
        tap((params) => {
          assert(true);
        }),
      ])(),
  });
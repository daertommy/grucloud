const assert = require("assert");
const { pipe, tap, get, pick, eq, map, assign, or } = require("rubico");
const { defaultsDeep, when, first } = require("rubico/x");

const { getField } = require("@grucloud/core/ProviderCommon");

const { buildTags } = require("../AwsCommon");
const { createAwsResource } = require("../AwsClient");

const { tagResource, untagResource } = require("./RedshiftCommon");

const pickId = pipe([pick(["ClusterIdentifier"])]);

const model = ({ config }) => ({
  package: "redshift",
  client: "Redshift",
  ignoreErrorCodes: ["ClusterNotFound"],
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Redshift.html#describeClusters-property
  getById: {
    method: "describeClusters",
    getField: "Clusters",
    pickId,
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Redshift.html#describeClusters-property
  getList: {
    method: "describeClusters",
    getParam: "Clusters",
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Redshift.html#createCluster-property
  create: {
    method: "createCluster",
    filterPayload: pipe([
      ({ ClusterParameterGroups, ...other }) => ({
        ClusterParameterGroupName: pipe([
          () => ClusterParameterGroups,
          first,
          get("ParameterGroupName"),
        ])(),
        ...other,
      }),
    ]),
    pickCreated: ({ payload }) => pipe([get("Cluster")]),

    isInstanceUp: pipe([eq(get("ClusterAvailabilityStatus"), "Available")]),
    isInstanceError: pipe([eq(get("ClusterAvailabilityStatus"), "Failed")]),
    getErrorMessage: get("ClusterAvailabilityStatus", "error"),
  },

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Redshift.html#deleteCluster-property
  destroy: {
    method: "deleteCluster",
    pickId,
    extraParam: { SkipFinalClusterSnapshot: true },
  },
});

// arn:aws:redshift:us-east-2:123456789:cluster:t1
const buildArn = ({ accountId, region }) =>
  pipe([
    ({ ClusterIdentifier }) =>
      `arn:aws:redshift:${region}:${accountId()}:cluster:${ClusterIdentifier}`,
  ]);

exports.RedshiftCluster = ({ spec, config }) =>
  createAwsResource({
    model: model({ config }),
    spec,
    config,
    findName: pipe([get("live.ClusterIdentifier")]),
    findId: pipe([get("live.ClusterIdentifier")]),
    getByName: ({ getList, endpoint, getById }) =>
      pipe([
        ({ name }) => ({
          ClusterIdentifier: name,
        }),
        getById,
      ]),
    tagResource: tagResource({
      buildArn: buildArn(config),
    }),
    untagResource: untagResource({
      buildArn: buildArn(config),
    }),
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Redshift.html#modifyCluster-property
    update:
      ({ endpoint }) =>
      async ({ pickId, payload, diff, live }) =>
        pipe([
          tap((params) => {
            assert(endpoint);
          }),
          () => diff,
          tap.if(
            or([
              get("liveDiff.updated.NumberOfNodes"),
              get("liveDiff.updated.NodeType"),
            ]),
            pipe([
              () => payload,
              pick(["NumberOfNodes", "NodeType", "ClusterIdentifier"]),
              endpoint().modifyCluster,
            ])
          ),
        ])(),
    configDefault: ({
      name,
      namespace,
      properties: { Tags, ...otherProps },
      dependencies: {
        clusterSubnetGroup,
        clusterParameterGroups,
        elasticIp,
        kmsKey,
        iamRoles,
        vpcSecurityGroups,
      },
    }) =>
      pipe([
        () => otherProps,
        defaultsDeep({
          Tags: buildTags({
            name,
            config,
            namespace,
            userTags: Tags,
          }),
        }),
        when(
          () => clusterParameterGroups,
          assign({
            ClusterParameterGroups: pipe([
              () => clusterParameterGroups,
              map((clusterParameterGroup) => ({
                ParameterGroupName: getField(
                  clusterParameterGroup,
                  "ParameterGroupName"
                ),
              })),
            ]),
          })
        ),
        when(
          () => clusterSubnetGroup,
          assign({
            ClusterSubnetGroup: () =>
              clusterSubnetGroup.config.ClusterSubnetGroupName,
          })
        ),
        when(
          () => elasticIp,
          defaultsDeep({ ElasticIp: getField(elasticIp, "PublicIp") })
        ),
        when(() => kmsKey, defaultsDeep({ KmsKeyId: getField(kmsKey, "Arn") })),
        when(
          () => iamRoles,
          assign({
            IamRoles: pipe([
              () => iamRoles,
              map((role) => getField(role, "Arn")),
            ]),
          })
        ),
        when(
          () => vpcSecurityGroups,
          assign({
            VpcSecurityGroupIds: pipe([
              () => vpcSecurityGroups,
              map((sg) => getField(sg, "GroupId")),
            ]),
          })
        ),
      ])(),
  });
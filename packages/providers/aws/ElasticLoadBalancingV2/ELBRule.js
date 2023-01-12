const assert = require("assert");
const { pipe, tap, get, not, switchCase, assign, or, pick } = require("rubico");
const {
  when,
  first,
  defaultsDeep,
  isEmpty,
  identity,
  prepend,
  append,
} = require("rubico/x");

const { getField } = require("@grucloud/core/ProviderCommon");
const { getByNameCore } = require("@grucloud/core/Common");
const logger = require("@grucloud/core/logger")({ prefix: "ELBRule" });
const { buildTags, findNamespaceInTags } = require("../AwsCommon");

const findId = () => get("RuleArn");

const pickId = pick(["RuleArn"]);

const ignoreErrorCodes = ["RuleNotFound", "RuleNotFoundException"];

const { AwsClient } = require("../AwsClient");
const { createELB, tagResource, untagResource } = require("./ELBCommon");

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html
exports.ELBRule = ({ spec, config }) => {
  const elb = createELB(config);
  const client = AwsClient({ spec, config })(elb);

  const findName =
    ({ lives }) =>
    (live) =>
      pipe([
        tap(() => {
          assert(lives);
          assert(live.ListenerArn);
        }),
        () => live,
        get("ListenerArn"),
        lives.getById({
          type: "Listener",
          group: "ElasticLoadBalancingV2",
          providerName: config.providerName,
        }),
        tap((listener) => {
          assert(listener);
        }),
        get("name"),
        tap((listenerName) => {
          assert(listenerName);
        }),
        switchCase([
          () => live.IsDefault,
          prepend("rule-default-"),
          prepend("rule::"),
        ]),
        append(`::${live.Priority}`),
      ])();

  const isDefault = () => get("IsDefault");

  const managedByOther = ({ lives, config }) =>
    pipe([
      or([
        isDefault({ lives, config }),
        (live) =>
          pipe([
            tap(() => {
              assert(lives);
              assert(live.ListenerArn);
            }),
            () => live,
            get("ListenerArn"),
            lives.getById({
              type: "Listener",
              group: "ElasticLoadBalancingV2",
              providerName: config.providerName,
            }),
            tap((listener) => {
              assert(listener);
            }),
            get("live.LoadBalancerArn"),
            tap((LoadBalancerArn) => {
              assert(LoadBalancerArn);
            }),
            lives.getById({
              type: "LoadBalancer",
              group: "ElasticLoadBalancingV2",
              providerName: config.providerName,
            }),
            get("managedByOther"),
          ])(),
      ]),
    ]);

  const findNamespaceInListener =
    ({ lives, config }) =>
    (live) =>
      pipe([
        () => live,
        get("ListenerArn"),
        lives.getById({
          providerName: config.providerName,
          type: "Listener",
          group: "ElasticLoadBalancingV2",
        }),
        tap((listener) => {
          assert(listener);
        }),
        get("namespace"),
        tap((namespace) => {
          assert(true);
        }),
      ])();

  const findNamespace =
    ({ lives, config }) =>
    (live) =>
      pipe([
        () => live,
        findNamespaceInTags({ lives, config }),
        switchCase([
          not(isEmpty),
          identity,
          findNamespaceInListener({ lives, config }),
        ]),
        tap((namespace) => {
          logger.debug(`findNamespace rules ${namespace}`);
        }),
      ])();

  const getList = client.getListWithParent({
    parent: { type: "Listener", group: "ElasticLoadBalancingV2" },
    pickKey: pick(["ListenerArn"]),
    method: "describeRules",
    getParam: "Rules",
    config,
    decorate: ({ lives, parent: { ListenerArn } }) =>
      pipe([
        assign({
          Tags: pipe([
            ({ RuleArn }) => ({ ResourceArns: [RuleArn] }),
            elb().describeTags,
            get("TagDescriptions"),
            first,
            get("Tags"),
          ]),
          ListenerArn: () => ListenerArn,
        }),
      ]),
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#describeRules-property
  const getByName = getByNameCore({ getList, findName });

  const getById = client.getById({
    pickId: ({ RuleArn }) => ({ RuleArns: [RuleArn] }),
    method: "describeRules",
    getField: "Rules",
    ignoreErrorCodes,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#createRule-property
  const create = client.create({
    method: "createRule",
    getById,
    config,
    pickCreated: () => pipe([get("Rules"), first]),
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#deleteRule-property
  const destroy = client.destroy({
    pickId,
    method: "deleteRule",
    ignoreErrorCodes,
    getById,
  });

  const targetGroupProperties = ({ targetGroup }) =>
    when(
      () => targetGroup,
      () => ({
        Actions: [
          {
            Type: "forward",
            TargetGroupArn: getField(targetGroup, "TargetGroupArn"),
            Order: 1,
            ForwardConfig: {
              TargetGroups: [
                {
                  TargetGroupArn: getField(targetGroup, "TargetGroupArn"),
                  Weight: 1,
                },
              ],
              TargetGroupStickinessConfig: {
                Enabled: false,
              },
            },
          },
        ],
      })
    )();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#createRule-property
  const configDefault = ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies: { listener, targetGroup },
  }) =>
    pipe([
      tap(() => {
        assert(listener);
      }),
      () => ({}),
      defaultsDeep(targetGroupProperties({ targetGroup })),
      defaultsDeep(otherProps),
      defaultsDeep({
        ListenerArn: getField(listener, "ListenerArn"),
        Tags: buildTags({ name, namespace, config, UserTags: Tags }),
      }),
    ])();

  const cannotBeDeleted = isDefault;

  return {
    spec,
    findId,
    findNamespace,
    getByName,
    getById,
    findName,
    create,
    destroy,
    getList,
    configDefault,
    isDefault,
    cannotBeDeleted,
    managedByOther,
    tagResource: tagResource({ endpoint: elb }),
    untagResource: untagResource({ endpoint: elb }),
  };
};
const assert = require("assert");
const { pipe, tap, get, eq, assign, pick } = require("rubico");
const { defaultsDeep, when, identity } = require("rubico/x");
const { buildTagsObject } = require("@grucloud/core/Common");
const { getByNameCore } = require("@grucloud/core/Common");

const { createAwsResource } = require("../AwsClient");

const { tagResource, untagResource, assignTags } = require("./BackupCommon");

const buildArn = () => get("BackupPlanArn");

const decorate = ({ endpoint, live }) =>
  pipe([defaultsDeep(live), assignTags({ endpoint, buildArn: buildArn() })]);

const pickId = pipe([pick(["BackupPlanId"])]);

const model = ({ config }) => ({
  package: "backup",
  client: "Backup",
  ignoreErrorCodes: ["ResourceNotFoundException"],
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Backup.html#getBackupPlan-property
  getById: {
    method: "getBackupPlan",
    pickId,
    getField: "BackupPlan",
    decorate,
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Backup.html#listBackupPlans-property
  getList: {
    method: "listBackupPlans",
    getParam: "BackupPlansList",
    decorate: ({ getById, endpoint }) => pipe([getById]),
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Backup.html#createBackupPlan-property
  create: {
    method: "createBackupPlan",
    pickCreated: ({ payload }) => pipe([identity]),
    filterPayload: ({ Tags, ...other }) =>
      pipe([() => ({ BackupPlan: other, BackupPlanTags: Tags })])(),
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Backup.html#updateBackupPlan-property
  update: {
    method: "updateBackupPlan",
    filterParams: ({ payload, live }) =>
      pipe([
        () => payload,
        defaultsDeep({ BackupPlanId: live.BackupPlanId }),
      ])(),
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Backup.html#deleteBackupPlan-property
  destroy: {
    method: "deleteBackupPlan",
    pickId,
  },
});

exports.BackupBackupPlan = ({ spec, config }) =>
  createAwsResource({
    model: model({ config }),
    spec,
    config,
    findName: pipe([get("live.BackupPlanName")]),
    findId: pipe([get("live.BackupPlanId")]),
    getByName: getByNameCore,
    tagResource: tagResource({
      buildArn: buildArn(config),
    }),
    untagResource: untagResource({
      buildArn: buildArn(config),
    }),
    configDefault: ({
      name,
      namespace,
      properties: { Tags, ...otherProps },
      dependencies: {},
    }) =>
      pipe([
        () => otherProps,
        defaultsDeep({
          Tags: buildTagsObject({
            name,
            config,
            namespace,
            userTags: Tags,
          }),
        }),
      ])(),
  });
const assert = require("assert");
const { map, pipe, tap, get, pick, assign, eq } = require("rubico");
const { defaultsDeep, pluck, find, uniq } = require("rubico/x");
const { getField } = require("@grucloud/core/ProviderCommon");

const { buildTags } = require("../AwsCommon");
const { createAwsResource } = require("../AwsClient");
const { tagResource, untagResource } = require("./StepFunctionsCommon");
const { getByNameCore, flattenObject } = require("@grucloud/core/Common");

const model = {
  package: "sfn",
  client: "SFN",
  ignoreErrorCodes: ["StateMachineDoesNotExist"],
  getById: { method: "describeStateMachine" },
  getList: { method: "listStateMachines", getParam: "stateMachines" },
  create: { method: "createStateMachine" },
  update: { method: "updateStateMachine" },
  destroy: { method: "deleteStateMachine" },
};

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/StepFunctions.html
exports.StepFunctionsStateMachine = ({ spec, config }) =>
  createAwsResource({
    model,
    spec,
    config,
    findName: get("live.name"),
    findId: get("live.stateMachineArn"),
    pickId: pick(["stateMachineArn"]),
    findDependencies: ({ live, lives }) => [
      {
        type: "Role",
        group: "IAM",
        ids: [live.roleArn],
      },
      {
        type: "Function",
        group: "Lambda",
        ids: pipe([
          () => live,
          get("definition.States"),
          flattenObject({ filterKey: (key) => key === "FunctionName" }),
          map(
            pipe([
              (id) =>
                lives.getById({
                  id,
                  type: "Function",
                  group: "Lambda",
                  providerName: config.providerName,
                }),
              get("id"),
            ])
          ),
          //TODO move uniq to flattenObject
          uniq,
        ])(),
      },
      {
        type: "Job",
        group: "Glue",
        ids: pipe([
          () => live,
          get("definition.States"),
          flattenObject({ filterKey: (key) => key === "JobName" }),
          map(
            pipe([
              (id) =>
                lives.getById({
                  id,
                  type: "Job",
                  group: "Glue",
                  providerName: config.providerName,
                }),
              get("id"),
            ])
          ),
          //TODO move uniq to flattenObject
          uniq,
        ])(),
      },
      {
        type: "Queue",
        group: "SQS",
        ids: pipe([
          () => live,
          get("definition.States"),
          flattenObject({ filterKey: (key) => key === "QueueUrl" }),
          map((QueueUrl) =>
            pipe([
              () =>
                lives.getByType({
                  type: "Queue",
                  group: "SQS",
                  providerName: config.providerName,
                }),
              find(eq(get("live.QueueUrl"), QueueUrl)),
              get("id"),
            ])()
          ),
          //TODO move uniq to flattenObject
          uniq,
        ])(),
      },
      {
        type: "LogGroup",
        group: "CloudWatchLogs",
        ids: pipe([
          () => live,
          get("loggingConfiguration.destinations"),
          pluck("cloudWatchLogsLogGroup"),
          pluck("logGroupArn"),
          map((logGroupArn) =>
            pipe([
              tap((params) => {
                assert(logGroupArn);
              }),
              () =>
                lives.getByType({
                  type: "LogGroup",
                  group: "CloudWatchLogs",
                  providerName: config.providerName,
                }),
              find(({ id }) => logGroupArn.includes(id)),
              get("id"),
            ])()
          ),
          tap((params) => {
            assert(true);
          }),
        ])(),
      },
    ],
    decorate: ({ endpoint }) =>
      pipe([
        assign({
          definition: pipe([get("definition"), JSON.parse]),
          tags: pipe([
            ({ stateMachineArn }) => ({
              resourceArn: stateMachineArn,
            }),
            endpoint().listTagsForResource,
            get("tags"),
          ]),
        }),
      ]),
    createShouldRetryOnExceptionCodes: ["AccessDeniedException"],
    createFilterPayload: pipe([
      assign({
        definition: pipe([get("definition"), JSON.stringify]),
      }),
    ]),
    getByName: getByNameCore,
    tagResource: tagResource,
    untagResource: untagResource,
    configDefault: ({
      name,
      namespace,
      properties: { tags, ...otherProps },
      dependencies: { role },
    }) =>
      pipe([
        tap((params) => {
          assert(role);
        }),
        () => otherProps,
        defaultsDeep({
          name,
          tags: buildTags({
            name,
            config,
            namespace,
            UserTags: tags,
            key: "key",
            value: "value",
          }),
          roleArn: getField(role, "Arn"),
        }),
      ])(),
  });
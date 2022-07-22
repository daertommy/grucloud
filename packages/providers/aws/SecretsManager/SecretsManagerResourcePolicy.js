const assert = require("assert");
const { pipe, tap, get, assign, eq, tryCatch } = require("rubico");
const { defaultsDeep } = require("rubico/x");
const { getByNameCore } = require("@grucloud/core/Common");
const { getField } = require("@grucloud/core/ProviderCommon");

const { createAwsResource } = require("../AwsClient");

const stringifyResourcePolicy = assign({
  ResourcePolicy: pipe([get("ResourcePolicy"), JSON.stringify]),
});

const paerseResourcePolicy = assign({
  ResourcePolicy: pipe([
    get("ResourcePolicy"),
    tryCatch(JSON.parse, (error, payload) => payload),
  ]),
});

const model = {
  package: "secrets-manager",
  client: "SecretsManager",
  ignoreErrorCodes: ["ResourceNotFoundException"],
  getById: {
    method: "getResourcePolicy",
    decorate: () => pipe([paerseResourcePolicy]),
  },
  create: {
    method: "putResourcePolicy",
    filterPayload: pipe([stringifyResourcePolicy]),
  },
  update: {
    method: "putResourcePolicy",
    filterParams: ({ pickId, payload, diff, live }) =>
      pipe([
        () => payload,
        stringifyResourcePolicy,
        assign({
          SecretId: () => live.ARN,
        }),
      ])(),
  },
  destroy: {
    method: "deleteResourcePolicy",
    isInstanceDown: pipe([eq(get("ResourcePolicy"), undefined)]),
  },
};

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SecretsManager.html
exports.SecretsManagerResourcePolicy = ({ spec, config }) =>
  createAwsResource({
    model,
    spec,
    config,
    findName: pipe([get("live.Name")]),
    pickId: pipe([({ Name }) => ({ SecretId: Name })]),
    findId: pipe([get("live.ARN")]),
    getByName: getByNameCore,
    configDefault: ({
      namespace,
      properties: { Tags, ...otherProps },
      dependencies: { secret },
    }) =>
      pipe([
        () => otherProps,
        defaultsDeep({ SecretId: getField(secret, "ARN") }),
      ])(),
    getList: ({ client, endpoint, getById, config }) =>
      pipe([
        () =>
          client.getListWithParent({
            parent: { type: "Secret", group: "SecretsManager" },
            pickKey: pipe([({ Name }) => ({ SecretId: Name })]),
            method: "getResourcePolicy",
            decorate: ({ lives, parent: { Name } }) =>
              pipe([
                assign({
                  ResourcePolicy: pipe([get("ResourcePolicy"), JSON.parse]),
                }),
              ]),
            config,
          }),
      ])(),
    findDependencies: ({ live }) => [
      { type: "Secret", group: "SecretsManager", ids: [live.ARN] },
    ],
  });
const assert = require("assert");
const { pipe, tap, get, pick, assign } = require("rubico");
const { defaultsDeep, when } = require("rubico/x");

const { getField } = require("@grucloud/core/ProviderCommon");
const { buildTagsObject } = require("@grucloud/core/Common");

const { Tagger } = require("./AmplifyCommon");

const buildArn = () =>
  pipe([
    get("appArn"),
    tap((appArn) => {
      assert(appArn);
    }),
  ]);

const pickId = pipe([
  tap(({ appId }) => {
    assert(appId);
  }),
  pick(["appId"]),
]);

const decorate = ({ endpoint }) =>
  pipe([
    tap((params) => {
      assert(endpoint);
    }),
  ]);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Amplify.html
exports.AmplifyApp = () => ({
  type: "App",
  package: "amplify",
  client: "Amplify",
  propertiesDefault: {},
  omitProperties: [
    "appArn",
    "appId",
    "createTime",
    "updateTime",
    "iamServiceRoleArn",
  ],
  inferName: pipe([
    get("properties.name"),
    tap((Name) => {
      assert(Name);
    }),
  ]),
  findName: () =>
    pipe([
      get("name"),
      tap((name) => {
        assert(name);
      }),
    ]),
  findId: () =>
    pipe([
      get("appId"),
      tap((id) => {
        assert(id);
      }),
    ]),
  environmentVariables: [
    { path: "oauthToken", suffix: "APP_OAUTHTOKEN" },
    { path: "accessToken", suffix: "APP_ACCESSTOKEN" },
    { path: "basicAuthCredentials", suffix: "APP_BASICAUTHCREDENTIALS" },
  ],
  dependencies: {
    iamRole: {
      type: "Role",
      group: "IAM",
      dependencyId: ({ lives, config }) => pipe([get("iamServiceRoleArn")]),
    },
  },
  ignoreErrorCodes: ["ResourceNotFoundException"],
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Amplify.html#getApp-property
  getById: {
    method: "getApp",
    getField: "app",
    pickId,
    decorate,
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Amplify.html#listApps-property
  getList: {
    method: "listApps",
    getParam: "apps",
    decorate: ({ getById }) => pipe([getById]),
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Amplify.html#createApp-property
  create: {
    method: "createApp",
    pickCreated: ({ payload }) => pipe([get("app")]),
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Amplify.html#updateApp-property
  update: {
    method: "updateApp",
    filterParams: ({ pickId, payload, diff, live }) =>
      pipe([() => payload, defaultsDeep(pickId(live))])(),
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Amplify.html#deleteApp-property
  destroy: {
    method: "deleteApp",
    pickId,
  },
  getByName: ({ getById }) =>
    pipe([({ name }) => ({ name: name }), getById({})]),
  tagger: ({ config }) =>
    Tagger({
      buildArn: buildArn({ config }),
    }),
  configDefault: ({
    name,
    namespace,
    properties: { tags, ...otherProps },
    dependencies: { iamRole },
    config,
  }) =>
    pipe([
      () => otherProps,
      defaultsDeep({
        tags: buildTagsObject({ name, config, namespace, userTags: tags }),
      }),
      when(
        () => iamRole,
        assign({ iamServiceRoleArn: getField(iamRole, "Arn") })
      ),
    ])(),
});
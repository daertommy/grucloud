// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Api",
    group: "ApiGatewayV2",
    name: "MyHttpApi",
    properties: ({}) => ({
      ProtocolType: "HTTP",
      ApiKeySelectionExpression: "$request.header.x-api-key",
      DisableExecuteApiEndpoint: false,
      RouteSelectionExpression: "$request.method $request.path",
    }),
  },
  {
    type: "Stage",
    group: "ApiGatewayV2",
    name: "$default",
    dependencies: () => ({
      api: "MyHttpApi",
    }),
  },
  {
    type: "Integration",
    group: "ApiGatewayV2",
    properties: ({}) => ({
      ConnectionType: "INTERNET",
      IntegrationType: "AWS_PROXY",
      IntegrationSubtype: "EventBridge-PutEvents",
      PayloadFormatVersion: "1.0",
      RequestParameters: {
        DetailType: "MyDetailType",
        Source: "WebApp",
        Detail: "$request.body",
      },
      RequestTemplates: {},
      TimeoutInMillis: 10000,
    }),
    dependencies: () => ({
      api: "MyHttpApi",
      eventBus: "MyEventBus",
    }),
  },
  {
    type: "Route",
    group: "ApiGatewayV2",
    properties: ({}) => ({
      ApiKeyRequired: false,
      AuthorizationScopes: [],
      AuthorizationType: "NONE",
      RequestModels: {},
      RouteKey: "POST /",
    }),
    dependencies: () => ({
      api: "MyHttpApi",
      integration: "integration::MyHttpApi::MyEventBus",
    }),
  },
  {
    type: "Deployment",
    group: "ApiGatewayV2",
    properties: ({}) => ({
      Description:
        "Automatic deployment triggered by changes to the Api configuration",
    }),
    dependencies: () => ({
      api: "MyHttpApi",
      stage: "$default",
    }),
  },
  { type: "EventBus", group: "CloudWatchEvents", name: "MyEventBus" },
  {
    type: "Rule",
    group: "CloudWatchEvents",
    name: "ApiEventbridgeStack-EventLoggerRuleC0DD3E40-5CW9EC6LK143",
    properties: ({}) => ({
      Description: "Log all events",
      EventPattern: '{"region":["ap-southeast-2"]}',
      State: "ENABLED",
      Targets: [
        {
          Arn: "arn:aws:logs:us-east-1:840541460064:log-group:/aws/events/MyEventBus",
          Id: "Target0",
        },
      ],
    }),
    dependencies: () => ({
      eventBus: "MyEventBus",
    }),
  },
  {
    type: "LogGroup",
    group: "CloudWatchLogs",
    name: "/aws/events/MyEventBus",
    properties: ({}) => ({
      retentionInDays: 731,
    }),
  },
  {
    type: "LogGroup",
    group: "CloudWatchLogs",
    name: "/aws/lambda/ApiEventbridgeStack-AWS679f53fac002430cb0da5b7982b-bue4fvxoCK8n",
  },
  {
    type: "Repository",
    group: "ECR",
    name: "cdk-hnb659fds-container-assets-840541460064-us-east-1",
    properties: ({}) => ({
      imageTagMutability: "MUTABLE",
      imageScanningConfiguration: {
        scanOnPush: true,
      },
      encryptionConfiguration: {
        encryptionType: "AES256",
      },
    }),
  },
  {
    type: "Role",
    group: "IAM",
    name: "ApiEventbridgeStack-AWS679f53fac002430cb0da5b7982b-CSO0224XWSKH",
    properties: ({}) => ({
      Path: "/",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: "lambda.amazonaws.com",
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
      Policies: [
        {
          PolicyDocument: {
            Version: "2012-10-17",
            Statement: [
              {
                Action: "logs:PutResourcePolicy",
                Resource: `*`,
                Effect: "Allow",
              },
              {
                Action: "logs:DeleteResourcePolicy",
                Resource: `*`,
                Effect: "Allow",
              },
            ],
          },
          PolicyName:
            "EventsLogGroupPolicyApiEventbridgeStackEventLoggerRuleB02679CDCustomResourcePolicy2604DC42",
        },
      ],
      AttachedPolicies: [
        {
          PolicyName: "AWSLambdaBasicExecutionRole",
          PolicyArn:
            "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
        },
      ],
    }),
  },
  {
    type: "Role",
    group: "IAM",
    name: "ApiEventbridgeStack-EventBridgeIntegrationRoleB322-U8MBYFGYOC7W",
    properties: ({ config }) => ({
      Path: "/",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: "apigateway.amazonaws.com",
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
      Policies: [
        {
          PolicyDocument: {
            Version: "2012-10-17",
            Statement: [
              {
                Action: "events:PutEvents",
                Resource: `arn:aws:events:${
                  config.region
                }:${config.accountId()}:event-bus/MyEventBus`,
                Effect: "Allow",
              },
            ],
          },
          PolicyName: "EventBridgeIntegrationRoleDefaultPolicy16371A00",
        },
      ],
    }),
  },
  {
    type: "Role",
    group: "IAM",
    name: "cdk-hnb659fds-cfn-exec-role-840541460064-us-east-1",
    properties: ({}) => ({
      Path: "/",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: "cloudformation.amazonaws.com",
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
      AttachedPolicies: [
        {
          PolicyName: "AdministratorAccess",
          PolicyArn: "arn:aws:iam::aws:policy/AdministratorAccess",
        },
      ],
    }),
  },
  {
    type: "Function",
    group: "Lambda",
    name: "ApiEventbridgeStack-AWS679f53fac002430cb0da5b7982b-bue4fvxoCK8n",
    properties: ({}) => ({
      Handler: "index.handler",
      PackageType: "Zip",
      Runtime: "nodejs12.x",
      Description: "",
      Timeout: 120,
      MemorySize: 128,
    }),
    dependencies: () => ({
      role: "ApiEventbridgeStack-AWS679f53fac002430cb0da5b7982b-CSO0224XWSKH",
    }),
  },
  {
    type: "Object",
    group: "S3",
    name: "assets/f3d3a3cc7f26921b237eff24fc5dd7aef8f0465a1f376b8f7918eb3d4b3e8797.zip",
    properties: ({}) => ({
      ContentType: "application/zip",
      ServerSideEncryption: "aws:kms",
      source:
        "s3/cdk-hnb659fds-assets-840541460064-us-east-1/assets/f3d3a3cc7f26921b237eff24fc5dd7aef8f0465a1f376b8f7918eb3d4b3e8797.zip.zip",
    }),
  },
];
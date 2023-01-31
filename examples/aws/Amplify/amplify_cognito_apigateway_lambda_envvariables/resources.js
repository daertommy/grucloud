// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "App",
    group: "Amplify",
    properties: ({}) => ({
      customHeaders: "",
      customRules: [
        {
          source:
            "</^[^.]+$|\\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|ttf)$)([^.]+$)/>",
          status: "200",
          target: "/index.html",
        },
      ],
      description: "Matching Tool",
      enableAutoBranchCreation: false,
      enableBasicAuth: false,
      enableBranchAutoBuild: false,
      enableBranchAutoDeletion: false,
      environmentVariables: {
        APIURL: "https://f8fd5524q2.execute-api.us-east-1.amazonaws.com/dev",
        cognito_region: "us-east-1",
        user_pools_id: "us-east-1_wWgfLVztf",
        user_pools_web_client_id: "7j6oltlv7jbna36mpijlao0dfs",
      },
      name: "sam-app",
      platform: "WEB",
      repository: "https://github.com/fredericheem/amplify-js-samples",
      repositoryCloneMethod: "SSH",
      accessToken: process.env.SAM_APP_APP_ACCESSTOKEN,
    }),
    dependencies: ({}) => ({
      iamRole: "sam-app-rAmplifyRole-1G6MZMKRYST54",
    }),
  },
  {
    type: "Branch",
    group: "Amplify",
    properties: ({}) => ({
      branchName: "main",
      description: "Branch",
      displayName: "main",
      enableAutoBuild: true,
      enableBasicAuth: false,
      enableNotification: false,
      enablePerformanceMode: false,
      enablePullRequestPreview: false,
      stage: "DEVELOPMENT",
      totalNumberOfJobs: "0",
      ttl: "5",
    }),
    dependencies: ({}) => ({
      app: "sam-app",
    }),
  },
  {
    type: "Authorizer",
    group: "APIGateway",
    name: "MyCognitoAuthorizer",
    properties: ({}) => ({
      authType: "cognito_user_pools",
      identitySource: "method.request.header.Authorization",
      name: "MyCognitoAuthorizer",
      type: "COGNITO_USER_POOLS",
    }),
    dependencies: ({}) => ({
      restApi: "sam-app",
      userPools: ["rUserPool-Q693L6lTFlCl"],
    }),
  },
  {
    type: "RestApi",
    group: "APIGateway",
    properties: ({ config }) => ({
      name: "sam-app",
      apiKeySource: "HEADER",
      endpointConfiguration: {
        types: ["EDGE"],
      },
      schema: {
        openapi: "3.0.1",
        info: {
          title: "sam-app",
          version: "1",
        },
        paths: {
          "/": {},
          "/lambdaExample": {
            get: {
              responses: {},
              "x-amazon-apigateway-integration": {
                httpMethod: "POST",
                passthroughBehavior: "WHEN_NO_MATCH",
                type: "AWS_PROXY",
                uri: `arn:aws:apigateway:${
                  config.region
                }:lambda:path/2015-03-31/functions/arn:aws:lambda:${
                  config.region
                }:${config.accountId()}:function:sam-app-myFunction-eio4yWq2YSR2/invocations`,
              },
            },
            options: {
              responses: {
                200: {
                  description: "200 response",
                  headers: {
                    "Access-Control-Allow-Headers": {
                      schema: {
                        type: "string",
                      },
                    },
                    "Access-Control-Allow-Methods": {
                      schema: {
                        type: "string",
                      },
                    },
                    "Access-Control-Allow-Origin": {
                      schema: {
                        type: "string",
                      },
                    },
                    "Access-Control-Max-Age": {
                      schema: {
                        type: "string",
                      },
                    },
                  },
                },
              },
              "x-amazon-apigateway-integration": {
                passthroughBehavior: "WHEN_NO_MATCH",
                requestTemplates: {
                  "application/json": `{
  "statusCode" : 200
}
`,
                },
                type: "MOCK",
                responses: {
                  default: {
                    responseParameters: {
                      "method.response.header.Access-Control-Allow-Headers":
                        "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
                      "method.response.header.Access-Control-Allow-Methods":
                        "'GET, OPTIONS'",
                      "method.response.header.Access-Control-Allow-Origin":
                        "'*'",
                      "method.response.header.Access-Control-Max-Age": "'500'",
                    },
                    responseTemplates: {
                      "application/json": `{}
`,
                    },
                    statusCode: "200",
                  },
                },
              },
            },
          },
        },
        components: {
          schemas: {},
        },
      },
      deployment: {
        stageName: "dev",
      },
    }),
  },
  {
    type: "Stage",
    group: "APIGateway",
    properties: ({}) => ({
      stageName: "dev",
    }),
    dependencies: ({}) => ({
      restApi: "sam-app",
    }),
  },
  {
    type: "Stage",
    group: "APIGateway",
    properties: ({}) => ({
      stageName: "Stage",
    }),
    dependencies: ({}) => ({
      restApi: "sam-app",
    }),
  },
  {
    type: "UserPool",
    group: "CognitoIdentityServiceProvider",
    properties: ({}) => ({
      PoolName: "rUserPool-Q693L6lTFlCl",
      AdminCreateUserConfig: {
        AllowAdminCreateUserOnly: true,
      },
      UsernameAttributes: ["email"],
    }),
  },
  {
    type: "UserPoolClient",
    group: "CognitoIdentityServiceProvider",
    properties: ({}) => ({
      AccessTokenValidity: 1,
      AllowedOAuthFlows: ["implicit"],
      AllowedOAuthFlowsUserPoolClient: true,
      AllowedOAuthScopes: [
        "aws.cognito.signin.user.admin",
        "email",
        "openid",
        "profile",
      ],
      CallbackURLs: ["http://localhost"],
      ClientName: "rAmplifyCognitoClient-XBef8QRc5euQ",
      ExplicitAuthFlows: [
        "ALLOW_ADMIN_USER_PASSWORD_AUTH",
        "ALLOW_CUSTOM_AUTH",
        "ALLOW_REFRESH_TOKEN_AUTH",
        "ALLOW_USER_PASSWORD_AUTH",
        "ALLOW_USER_SRP_AUTH",
      ],
      IdTokenValidity: 1,
      LogoutURLs: ["http://localhost"],
      ReadAttributes: ["email", "email_verified", "family_name", "given_name"],
      RefreshTokenValidity: 1,
      SupportedIdentityProviders: ["COGNITO"],
      TokenValidityUnits: {
        AccessToken: "hours",
        IdToken: "hours",
      },
    }),
    dependencies: ({}) => ({
      userPool: "rUserPool-Q693L6lTFlCl",
    }),
  },
  {
    type: "Role",
    group: "IAM",
    properties: ({}) => ({
      RoleName: "sam-app-myFunctionRole-1QJAIG8RD8HTR",
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
      AttachedPolicies: [
        {
          PolicyName: "AWSLambdaBasicExecutionRole",
          PolicyArn:
            "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
        },
      ],
      Tags: [
        {
          Key: "lambda:createdBy",
          Value: "SAM",
        },
      ],
    }),
  },
  {
    type: "Role",
    group: "IAM",
    properties: ({}) => ({
      RoleName: "sam-app-rAmplifyRole-1G6MZMKRYST54",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: "amplify.amazonaws.com",
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
                Action: ["amplify:*"],
                Resource: "*",
                Effect: "Allow",
              },
            ],
          },
          PolicyName: "Amplify",
        },
      ],
    }),
  },
  {
    type: "Function",
    group: "Lambda",
    properties: ({ config, getId }) => ({
      Configuration: {
        Environment: {
          Variables: {
            user_pools_id: `${getId({
              type: "UserPool",
              group: "CognitoIdentityServiceProvider",
              name: "rUserPool-Q693L6lTFlCl",
            })}`,
            cognito_region: `${config.region}`,
            user_pools_web_client_id: `${getId({
              type: "UserPoolClient",
              group: "CognitoIdentityServiceProvider",
              name: "rAmplifyCognitoClient-XBef8QRc5euQ",
            })}`,
          },
        },
        FunctionName: "sam-app-myFunction-eio4yWq2YSR2",
        Handler: "app.lambda_handler",
        Runtime: "python3.7",
      },
      Tags: {
        "lambda:createdBy": "SAM",
      },
      Policy: {
        Version: "2012-10-17",
        Id: "default",
        Statement: [
          {
            Sid: "sam-app-myFunctionEmyFunctionPermissiondev-1VIV8TFCY8404",
            Effect: "Allow",
            Principal: {
              Service: "apigateway.amazonaws.com",
            },
            Action: "lambda:InvokeFunction",
            Resource: `arn:aws:lambda:${
              config.region
            }:${config.accountId()}:function:sam-app-myFunction-eio4yWq2YSR2`,
            Condition: {
              ArnLike: {
                "AWS:SourceArn": `arn:aws:execute-api:${
                  config.region
                }:${config.accountId()}:f8fd5524q2/*/GET/lambdaExample`,
              },
            },
          },
        ],
      },
    }),
    dependencies: ({}) => ({
      role: "sam-app-myFunctionRole-1QJAIG8RD8HTR",
      cognitoUserPools: ["rUserPool-Q693L6lTFlCl"],
      cognitoUserPoolClient: ["rAmplifyCognitoClient-XBef8QRc5euQ"],
    }),
  },
];
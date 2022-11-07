// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Bucket",
    group: "S3",
    properties: ({ config }) => ({
      Name: "grucloud-cost-report-2022",
      Policy: {
        Version: "2008-10-17",
        Id: "Policy1335892530063",
        Statement: [
          {
            Sid: "Stmt1335892150622",
            Effect: "Allow",
            Principal: {
              Service: "billingreports.amazonaws.com",
            },
            Action: ["s3:GetBucketAcl", "s3:GetBucketPolicy"],
            Resource: "arn:aws:s3:::grucloud-cost-report-2022",
            Condition: {
              StringEquals: {
                "aws:SourceAccount": `${config.accountId()}`,
                "aws:SourceArn": `arn:aws:cur:${
                  config.region
                }:${config.accountId()}:definition/*`,
              },
            },
          },
          {
            Sid: "Stmt1335892526596",
            Effect: "Allow",
            Principal: {
              Service: "billingreports.amazonaws.com",
            },
            Action: "s3:PutObject",
            Resource: "arn:aws:s3:::grucloud-cost-report-2022/*",
            Condition: {
              StringEquals: {
                "aws:SourceAccount": `${config.accountId()}`,
                "aws:SourceArn": `arn:aws:cur:${
                  config.region
                }:${config.accountId()}:definition/*`,
              },
            },
          },
        ],
      },
    }),
  },
];
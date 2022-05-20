// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Table",
    group: "DynamoDB",
    name: "terraform-state-locking",
    properties: ({}) => ({
      AttributeDefinitions: [
        {
          AttributeName: "LockID",
          AttributeType: "S",
        },
      ],
      KeySchema: [
        {
          AttributeName: "LockID",
          KeyType: "HASH",
        },
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
    }),
  },
  {
    type: "Bucket",
    group: "S3",
    name: "grucloud-terraform-globalnetwork-state-file-storage",
    properties: ({}) => ({
      ServerSideEncryptionConfiguration: {
        Rules: [
          {
            ApplyServerSideEncryptionByDefault: {
              SSEAlgorithm: "AES256",
            },
          },
        ],
      },
    }),
  },
];
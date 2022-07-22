const assert = require("assert");
const { pipe, tap, get } = require("rubico");
const { createEndpoint } = require("../AwsCommon");

exports.createSQS = createEndpoint("sqs", "SQS");

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html#tagQueue-property
exports.tagResource =
  ({ sqs }) =>
  ({ live }) =>
    pipe([(Tags) => ({ QueueUrl: live.QueueUrl, Tags }), sqs().tagQueue]);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html#untagQueue-property
exports.untagResource =
  ({ sqs }) =>
  ({ live }) =>
    pipe([
      (TagKeys) => ({ QueueUrl: live.QueueUrl, TagKeys }),
      sqs().untagQueue,
    ]);
// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "NetworkPerformanceMetricSubscription",
    group: "EC2",
    properties: ({}) => ({
      Source: "us-east-1",
      Destination: "eu-west-2",
    }),
  },
];
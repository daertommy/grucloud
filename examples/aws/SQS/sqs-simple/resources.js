// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Queue",
    group: "SQS",
    name: "my-queue",
    properties: ({}) => ({
      tags: {
        "my-tag": "my-value",
      },
    }),
  },
];
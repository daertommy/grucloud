const assert = require("assert");
const { AwsProvider } = require("../../AwsProvider");
const { ConfigLoader } = require("@grucloud/core/ConfigLoader");
const { tryCatch, pipe, tap } = require("rubico");
const { ECSTaskSet } = require("../ECSTaskSet");

describe("ECSTaskSet", async function () {
  let config;
  let provider;
  let taskset;

  before(async function () {
    try {
      config = ConfigLoader({ path: "../../../examples/multi" });
    } catch (error) {
      this.skip();
    }
    provider = AwsProvider({ config });
    taskset = ECSTaskSet({ config: provider.config });
    await provider.start();
  });
  it(
    "delete with invalid id",
    pipe([
      () =>
        taskset.destroy({
          live: {
            cluster: "arn:aws:ecs:eu-west-2:840541460064:cluster/not-existing",
            service:
              "arn:aws:ecs:eu-west-2:840541460064:service/demo/service-demo",
            taskSet:
              "arn:aws:ecs:eu-west-2:840541460064:task-set/not-existing/service-demo/ecs-svc/1234567890123456789",
          },
        }),
    ])
  );
});
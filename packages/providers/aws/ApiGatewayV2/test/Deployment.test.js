const assert = require("assert");
const { AwsProvider } = require("../../AwsProvider");
const { pipe } = require("rubico");

describe("Api Gateway V2 Deployment", async function () {
  let config;
  let provider;
  let deployment;

  before(async function () {
    provider = AwsProvider({ config });
    deployment = provider.getClient({ groupType: "ApiGatewayV2::Deployment" });
    await provider.start();
  });
  after(async () => {});
  it(
    "delete with invalid id",
    pipe([
      () =>
        deployment.destroy({
          live: { ApiId: "12345", DeploymentId: "12345" },
        }),
    ])
  );
  it(
    "getById with invalid id",
    pipe([
      () =>
        deployment.getById({
          ApiId: "12345",
          DeploymentId: "12345",
        }),
    ])
  );
});
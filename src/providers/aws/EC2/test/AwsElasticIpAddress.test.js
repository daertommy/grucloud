const assert = require("assert");
const { ConfigLoader } = require("ConfigLoader");
const { AwsProvider } = require("../../AwsProvider");
const { testPlanDeploy, testPlanDestroy } = require("test/E2ETestUtils");
const { CheckAwsTags } = require("../../AwsTagCheck");

describe("AwsElasticIpAddress", async function () {
  let config;
  let provider;
  let eip;
  const resourceName = "myip";

  before(async function () {
    try {
      config = ConfigLoader({ path: "examples/multi" });
    } catch (error) {
      this.skip();
    }
    provider = AwsProvider({
      name: "aws",
      config: config.aws,
    });

    await provider.start();

    const { error } = await provider.destroyAll();
    assert(!error);

    const { results: lives } = await provider.listLives({ our: true });
    assert.equal(lives.length, 0);

    eip = await provider.makeElasticIpAddress({
      name: resourceName,
      properties: () => ({}),
    });

    server = await provider.makeEC2({
      name: "ec2",
      dependencies: { eip },
      properties: () => ({}),
    });
  });
  after(async () => {
    //await provider?.destroyAll();
  });
  it("eip name", async function () {
    assert.equal(eip.name, resourceName);
  });
  it.skip("eip apply and destroy", async function () {
    await testPlanDeploy({ provider });
    const eipLive = await eip.getLive();

    CheckAwsTags({
      config: provider.config(),
      tags: eipLive.Tags,
      name: eip.name,
    });

    const {
      results: [eips],
    } = await provider.listLives({ types: ["ElasticIpAddress"] });
    const resource = eips.resources[0].data;
    assert.equal(eips.type, "ElasticIpAddress");
    assert.equal(resource.Domain, "vpc");
    assert(resource.PublicIp);

    await testPlanDestroy({ provider });
  });
});

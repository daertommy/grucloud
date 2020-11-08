const assert = require("assert");
const { ConfigLoader } = require("ConfigLoader");
const { AwsProvider } = require("../../AwsProvider");
const { testPlanDeploy, testPlanDestroy } = require("test/E2ETestUtils");
const { CheckTagsEC2 } = require("../../AwsTagCheck");

describe("AwsRouteTables", async function () {
  let config;
  let provider;
  let vpc;
  let subnet;
  let rt;
  const resourceName = "rt";

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

    vpc = await provider.makeVpc({
      name: "vpc",
      properties: () => ({
        CidrBlock: "10.1.0.1/16",
      }),
    });
    subnet = await provider.makeSubnet({
      name: "subnet",
      dependencies: { vpc },
      properties: () => ({
        CidrBlock: "10.1.0.1/24",
      }),
    });
    rt = await provider.makeRouteTables({
      name: resourceName,
      dependencies: { vpc, subnet },
      properties: () => ({}),
    });
  });
  after(async () => {
    //await provider?.destroyAll();
  });
  it("rt name", async function () {
    assert.equal(rt.name, resourceName);
  });
  it.skip("rt getLive", async function () {
    await rt.getLive();
  });
  it("rt apply and destroy", async function () {
    await testPlanDeploy({ provider });
    const rtLive = await rt.getLive();
    const subnetLive = await subnet.getLive();
    const vpcLive = await vpc.getLive();

    CheckTagsEC2({
      config: provider.config(),
      tags: rtLive.Tags,
      name: rt.name,
    });

    const {
      results: [rts],
    } = await provider.listLives({ types: ["RouteTables"] });
    assert.equal(rts.type, "RouteTables");

    const { data: routeTable } = rts.resources.find(
      (resource) => resource.managedByUs
    );
    assert(routeTable);
    assert.equal(routeTable.Associations[0].SubnetId, subnetLive.SubnetId);
    assert.equal(routeTable.VpcId, vpcLive.VpcId);

    await testPlanDestroy({ provider });
  });
});

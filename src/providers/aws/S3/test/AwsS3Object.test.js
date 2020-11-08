const assert = require("assert");
const path = require("path");
const { ConfigLoader } = require("ConfigLoader");
const { AwsProvider } = require("../../AwsProvider");
const { testPlanDeploy, testPlanDestroy } = require("test/E2ETestUtils");

describe("AwsS3Object", async function () {
  let config;
  let provider;
  const bucketName = "grucloud-s3bucket-test";

  console.log(`Current directory: ${process.cwd()}`);

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
    assert(!error, "destroyAll failed");
  });

  it.skip("s3 object apply and destroy", async function () {
    const s3Bucket = await provider.makeS3Bucket({
      name: `${bucketName}-basic-for-object`,
      properties: () => ({}),
    });

    const s3Object = await provider.makeS3Object({
      name: `file-test`,
      dependencies: { bucket: s3Bucket },
      properties: () => ({
        ACL: "public-read",
        ContentType: "text/plain",
        ServerSideEncryption: "AES256",
        Tagging: "key1=value1&key2=value2",
        source: path.join(
          process.cwd(),
          "examples/aws/s3/fixtures/testFile.txt"
        ),
      }),
    });

    await testPlanDeploy({ provider });

    const s3BucketLive = await s3Bucket.getLive();
    assert(s3BucketLive);

    await testPlanDestroy({ provider });
  });
});

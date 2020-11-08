const { AwsProvider } = require("@grucloud/core");
const { pipe, map } = require("rubico");

const createResources = async ({ provider }) => {
  const maxBuckets = 2;
  const resources = await pipe([
    (maxBuckets) =>
      Array(maxBuckets)
        .fill("")
        .reduce(
          (acc, value, index) => [...acc, `grucloud-bucket-${index}`],
          []
        ),
    async (buckets) =>
      await map(
        async (bucket) =>
          await provider.makeS3Bucket({
            name: bucket,
            properties: () => ({}),
          })
      )(buckets),
  ])(maxBuckets);

  return resources;
};

exports.createResources = createResources;

exports.createStack = async ({ name = "aws", config }) => {
  const provider = AwsProvider({ name, config });
  const resources = await createResources({ provider });
  return { provider, resources };
};

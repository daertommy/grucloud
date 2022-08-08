const { AzureProvider } = require("@grucloud/provider-azure");

const { createResources } = require("./resources");

exports.createStack = ({ createProvider }) => ({
  provider: createProvider(AzureProvider, {
    createResources,
    config: require("./config"),
  }),
  //hooks: [require("./hook")],
});

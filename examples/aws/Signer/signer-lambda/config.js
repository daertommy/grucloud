const pkg = require("./package.json");
module.exports = () => ({
  projectName: pkg.name,
  includeGroups: ["Lambda", "Signer", "S3"],
});

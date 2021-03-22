const hiddenCredentials = "****************";

const exlusionList = {
  // aws
  AccountId: hiddenCredentials,
  AWSAccessKeyId: hiddenCredentials,
  AWSSecretKey: hiddenCredentials,
  // gcp
  accessToken: hiddenCredentials,
  // az
  tenantId: hiddenCredentials,
  subscriptionId: hiddenCredentials,
  appId: hiddenCredentials,
  password: hiddenCredentials,
  adminPassword: hiddenCredentials,
};

const exlusionListKeys = Object.keys(exlusionList);

const replacerCredentials = (name, value) => {
  //console.log(name, " = ", value);
  if (exlusionListKeys.includes(name)) {
    return exlusionList[name];
  } else {
    return value;
  }
};

exports.hiddenCredentials = hiddenCredentials;
exports.replacerCredentials = replacerCredentials;
exports.tos = (x) => {
  try {
    return JSON.stringify(x, replacerCredentials, 4);
  } catch (error) {
    console.log("Cannot stringify", error);
    return x;
  }
};

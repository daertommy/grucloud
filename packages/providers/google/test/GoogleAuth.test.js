const assert = require("assert");
const path = require("path");
const { JWT } = require("google-auth-library");
const { ConfigLoader } = require("@grucloud/core/ConfigLoader");
const { authorize } = require("../GoogleProvider");
const expandTilde = require("expand-tilde");

describe("GoogleAuth", function () {
  let config;
  before(async function () {
    try {
      config = ConfigLoader({ path: "../../../examples/multi" });
    } catch (error) {
      assert(error.code, 422);
      this.skip();
    }
  });

  it.skip("auth ok", async function () {
    const applicationCredentials = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    assert(applicationCredentials);

    const keys = require(path.resolve(
      process.env.CONFIG_DIR,
      expandTilde(applicationCredentials)
    ));

    const client = new JWT({
      email: keys.client_email,
      key: keys.private_key,
      scopes: ["https://www.googleapis.com/auth/cloud-platform"],
    });

    const accessToken = await new Promise((resolve, reject) => {
      client.authorize((err, response) => {
        if (response.access_token) {
          resolve(response.access_token);
        }
        reject(err);
      });
    });

    assert(accessToken);
  });
  it("auth ko: account not found", async function () {
    const applicationCredentialsFile = path.resolve(
      __dirname,
      "grucloud-credentials-invalid.json"
    );
    try {
      await authorize({ applicationCredentialsFile });
    } catch (error) {
      assert.equal(
        error.message,
        "invalid_grant: Invalid grant: account not found"
      );
    }
  });
});

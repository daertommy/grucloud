const Axios = require("axios");
const urljoin = require("url-join");
const MockAdapter = require("axios-mock-adapter");

const { BASE_URL } = require("./config.common");

const createAxios = ({ url }) => {
  const axios = Axios.create({ baseURL: urljoin(BASE_URL, url) });
  const mock = new MockAdapter(axios, { onNoMatch: "passthrough" });
  mock.onPost("").reply(500);
  mock.onDelete(/.*/).reply(500);
  return axios;
};
module.exports = () => ({
  createAxios,
});

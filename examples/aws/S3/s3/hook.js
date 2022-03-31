const assert = require("assert");

module.exports = ({ resources, provider }) => {
  return {
    onDeployed: {
      init: async () => {
        const host = "myhost";
        return { host };
      },
      actions: [
        {
          name: "Perform deploy check",
          command: async ({}) => {},
        },
      ],
    },
    onDestroyed: {
      init: async () => {
        return {};
      },
      actions: [
        {
          name: "Perform destroy check",
          command: async ({}) => {},
        },
      ],
    },
  };
};

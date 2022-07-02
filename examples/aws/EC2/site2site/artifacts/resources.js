// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "CustomerGateway",
    group: "EC2",
    name: "cgw",
    properties: ({}) => ({
      BgpAsn: "65000",
      IpAddress: "1.1.1.1",
    }),
  },
  {
    type: "VpnGateway",
    group: "EC2",
    name: "vpw",
    properties: ({}) => ({
      AmazonSideAsn: 64512,
    }),
  },
  {
    type: "VpnConnection",
    group: "EC2",
    name: "vpn-connection",
    properties: ({}) => ({
      Category: "VPN",
    }),
    dependencies: ({}) => ({
      customerGateway: "cgw",
      vpnGateway: "vpw",
    }),
  },
];
// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  { type: "KeyPair", group: "EC2", name: "kp-ec2-example" },
  { type: "Vpc", group: "EC2", name: "vpc-default", isDefault: true },
  {
    type: "Subnet",
    group: "EC2",
    name: "vpc-default::subnet-default-a",
    isDefault: true,
    dependencies: ({}) => ({
      vpc: "vpc-default",
    }),
  },
  {
    type: "SecurityGroup",
    group: "EC2",
    name: "sg::vpc-default::default",
    isDefault: true,
    dependencies: ({}) => ({
      vpc: "vpc-default",
    }),
  },
  { type: "ElasticIpAddress", group: "EC2", name: "eip" },
  {
    type: "ElasticIpAddressAssociation",
    group: "EC2",
    dependencies: ({}) => ({
      eip: "eip",
      instance: "web-server-ec2-example",
    }),
  },
  {
    type: "Instance",
    group: "EC2",
    name: "web-server-ec2-example",
    properties: ({ config }) => ({
      InstanceType: "t2.micro",
      Placement: {
        AvailabilityZone: `${config.region}a`,
      },
      Image: {
        Description: "Amazon Linux 2 AMI 2.0.20211001.1 x86_64 HVM gp2",
      },
    }),
    dependencies: ({}) => ({
      subnets: ["vpc-default::subnet-default-a"],
      keyPair: "kp-ec2-example",
      securityGroups: ["sg::vpc-default::default"],
    }),
  },
];
// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "LogGroup",
    group: "CloudWatchLogs",
    name: "/aws/rds/cluster/aurora-serverless/error",
  },
  {
    type: "Vpc",
    group: "EC2",
    name: "Vpc8378EB38",
    properties: ({}) => ({
      CidrBlock: "10.0.0.0/16",
      DnsHostnames: true,
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "VpcauroraisolatedSubnet1Subnet5370B90B",
    properties: ({ config }) => ({
      CidrBlock: "10.0.0.0/17",
      AvailabilityZone: `${config.region}a`,
    }),
    dependencies: () => ({
      vpc: "Vpc8378EB38",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "VpcauroraisolatedSubnet2SubnetCB56E2A8",
    properties: ({ config }) => ({
      CidrBlock: "10.0.128.0/17",
      AvailabilityZone: `${config.region}b`,
    }),
    dependencies: () => ({
      vpc: "Vpc8378EB38",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: "VpcauroraisolatedSubnet1RouteTableA8F6E99C",
    dependencies: () => ({
      vpc: "Vpc8378EB38",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: "VpcauroraisolatedSubnet2RouteTableBF363B67",
    dependencies: () => ({
      vpc: "Vpc8378EB38",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: () => ({
      routeTable: "VpcauroraisolatedSubnet1RouteTableA8F6E99C",
      subnet: "VpcauroraisolatedSubnet1Subnet5370B90B",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: () => ({
      routeTable: "VpcauroraisolatedSubnet2RouteTableBF363B67",
      subnet: "VpcauroraisolatedSubnet2SubnetCB56E2A8",
    }),
  },
  {
    type: "DBSubnetGroup",
    group: "RDS",
    name: "aurora-serverless-subnet-group",
    properties: ({}) => ({
      DBSubnetGroupDescription: "Subnet group to access aurora",
    }),
    dependencies: () => ({
      subnets: [
        "VpcauroraisolatedSubnet1Subnet5370B90B",
        "VpcauroraisolatedSubnet2SubnetCB56E2A8",
      ],
    }),
  },
  {
    type: "DBCluster",
    group: "RDS",
    name: "aurora-serverless",
    properties: ({}) => ({
      DatabaseName: "dbname",
      Engine: "aurora",
      EngineVersion: "5.6.10a",
      Port: 3306,
      MasterUsername: process.env.AURORA_SERVERLESS_MASTER_USERNAME,
      PreferredBackupWindow: "03:02-03:32",
      PreferredMaintenanceWindow: "tue:06:58-tue:07:28",
      EngineMode: "serverless",
      ScalingConfiguration: {
        MinCapacity: 2,
        MaxCapacity: 2,
        SecondsUntilAutoPause: 3600,
      },
      MasterUserPassword: process.env.AURORA_SERVERLESS_MASTER_USER_PASSWORD,
    }),
    dependencies: () => ({
      dbSubnetGroup: "aurora-serverless-subnet-group",
      secret: "demordsservice-demostage-credentials",
    }),
  },
  {
    type: "Secret",
    group: "SecretsManager",
    name: "demordsservice-demostage-credentials",
    properties: ({ generatePassword }) => ({
      SecretString: {
        password: generatePassword({ length: 32 }),
        username: "demousername",
        DBClusterIdentifier: "aurora-serverless",
        port: 3306,
      },
    }),
  },
];
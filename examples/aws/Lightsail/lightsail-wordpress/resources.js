// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Database",
    group: "Lightsail",
    properties: ({ config }) => ({
      relationalDatabaseName: "Database-1",
      availabilityZone: `${config.region}a`,
      engine: "postgres",
      engineVersion: "12.11",
      hardware: {
        cpuCount: 2,
        diskSizeInGb: 40,
        ramSizeInGb: 1,
      },
      masterDatabaseName: "dbmaster",
      masterUsername: process.env.DATABASE_1_MASTER_USERNAME,
      preferredBackupWindow: "08:41-09:11",
      preferredMaintenanceWindow: "sun:10:16-sun:10:46",
      relationalDatabaseBlueprintId: "postgres_12",
      relationalDatabaseBundleId: "micro_2_0",
    }),
  },
  {
    type: "Disk",
    group: "Lightsail",
    properties: ({ config }) => ({
      diskName: "Disk-1",
      availabilityZone: `${config.region}a`,
      iops: 100,
      path: "/dev/xvdf",
      sizeInGb: 8,
    }),
  },
  {
    type: "DiskAttachment",
    group: "Lightsail",
    properties: ({}) => ({
      diskPath: "/dev/xvdf",
    }),
    dependencies: ({}) => ({
      disk: "Disk-1",
      instance: "WordPress-1",
    }),
  },
  {
    type: "Instance",
    group: "Lightsail",
    properties: ({ config }) => ({
      instanceName: "WordPress-1",
      availabilityZone: `${config.region}a`,
      blueprintId: "wordpress",
      blueprintName: "WordPress",
      bundleId: "nano_2_0",
      ipAddressType: "dualstack",
      sshKeyName: "LightsailDefaultKeyPair",
    }),
    dependencies: ({}) => ({
      disks: ["Disk-1"],
    }),
  },
  {
    type: "InstancePublicPorts",
    group: "Lightsail",
    properties: ({}) => ({
      portInfos: [
        {
          cidrListAliases: [],
          cidrs: ["0.0.0.0/0"],
          fromPort: 80,
          ipv6Cidrs: ["::/0"],
          protocol: "tcp",
          toPort: 80,
        },
        {
          cidrListAliases: [],
          cidrs: ["0.0.0.0/0"],
          fromPort: 22,
          ipv6Cidrs: ["::/0"],
          protocol: "tcp",
          toPort: 22,
        },
        {
          cidrListAliases: [],
          cidrs: ["0.0.0.0/0"],
          fromPort: 443,
          ipv6Cidrs: ["::/0"],
          protocol: "tcp",
          toPort: 443,
        },
      ],
    }),
    dependencies: ({}) => ({
      instance: "WordPress-1",
    }),
  },
  {
    type: "KeyPair",
    group: "Lightsail",
    properties: ({}) => ({
      keyPairName: "mykp-ligthsail",
    }),
  },
  {
    type: "LoadBalancer",
    group: "Lightsail",
    properties: ({}) => ({
      loadBalancerName: "LoadBalancer-1",
      configurationOptions: {
        SessionStickinessEnabled: "false",
        SessionStickiness_LB_CookieDurationSeconds: "86400",
      },
      healthCheckPath: "/",
      httpsRedirectionEnabled: false,
      instancePort: 80,
      ipAddressType: "dualstack",
      tlsPolicyName: "TLS-2016-08",
    }),
  },
  {
    type: "LoadBalancerAttachment",
    group: "Lightsail",
    dependencies: ({}) => ({
      loadBalancer: "LoadBalancer-1",
      instance: "WordPress-1",
    }),
  },
  {
    type: "LoadBalancerCertificate",
    group: "Lightsail",
    properties: ({}) => ({
      certificateDomainName: "grucloud.org",
      certificateAlternativeNames: ["grucloud.org"],
      loadBalancerName: "LoadBalancer-1",
      certificateName: "LoadBalancerTlsCertificate-1",
    }),
    dependencies: ({}) => ({
      loadBalancer: "LoadBalancer-1",
    }),
  },
  {
    type: "StaticIp",
    group: "Lightsail",
    properties: ({}) => ({
      staticIpName: "StaticIp-1",
    }),
  },
  {
    type: "StaticIpAttachment",
    group: "Lightsail",
    dependencies: ({}) => ({
      staticIp: "StaticIp-1",
      instance: "WordPress-1",
    }),
  },
  {
    type: "HostedZone",
    group: "Route53",
    properties: ({}) => ({
      Name: "grucloud.org.",
    }),
    dependencies: ({}) => ({
      domain: "grucloud.org",
    }),
  },
  {
    type: "Record",
    group: "Route53",
    properties: ({}) => ({
      Name: "_ac743fd9d201d950d4311c7684850a40.grucloud.org.grucloud.org.",
      Type: "CNAME",
      TTL: 300,
      ResourceRecords: [
        {
          Value:
            "_92496104b15f0b22682dfa4d6123f63c.yzdtlljtvc.acm-validations.aws.",
        },
      ],
    }),
    dependencies: ({}) => ({
      hostedZone: "grucloud.org.",
    }),
  },
  {
    type: "Domain",
    group: "Route53Domains",
    name: "grucloud.org",
    readOnly: true,
  },
];
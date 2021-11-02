// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.EC2.makeKeyPair({
    name: "kp-ec2-vpc",
  });

  provider.EC2.makeVolume({
    name: "volume",
    properties: ({ config }) => ({
      Size: 5,
      VolumeType: "standard",
      AvailabilityZone: `${config.region}a`,
    }),
  });

  provider.EC2.makeVpc({
    name: "vpc-ec2-example",
    properties: ({ config }) => ({
      CidrBlock: "10.1.0.0/16",
    }),
  });

  provider.EC2.makeInternetGateway({
    name: "ig",
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc-ec2-example"],
    }),
  });

  provider.EC2.makeSubnet({
    name: "subnet",
    properties: ({ config }) => ({
      CidrBlock: "10.1.0.0/24",
      AvailabilityZone: `${config.region}a`,
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc-ec2-example"],
    }),
  });

  provider.EC2.makeRouteTable({
    name: "route-table",
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc-ec2-example"],
    }),
  });

  provider.EC2.makeRouteTableAssociation({
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["route-table"],
      subnet: resources.EC2.Subnet["subnet"],
    }),
  });

  provider.EC2.makeRoute({
    properties: ({ config }) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["route-table"],
      ig: resources.EC2.InternetGateway["ig"],
    }),
  });

  provider.EC2.makeSecurityGroup({
    name: "security-group",
    properties: ({ config }) => ({
      Description: "Managed By GruCloud",
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc-ec2-example"],
    }),
  });

  provider.EC2.makeSecurityGroupRuleIngress({
    name: "sg-rule-ingress-icmp",
    properties: ({ config }) => ({
      IpPermission: {
        IpProtocol: "icmp",
        FromPort: -1,
        ToPort: -1,
        IpRanges: [
          {
            CidrIp: "0.0.0.0/0",
          },
        ],
        Ipv6Ranges: [
          {
            CidrIpv6: "::/0",
          },
        ],
      },
    }),
    dependencies: ({ resources }) => ({
      securityGroup: resources.EC2.SecurityGroup["security-group"],
    }),
  });

  provider.EC2.makeSecurityGroupRuleIngress({
    name: "sg-rule-ingress-ssh",
    properties: ({ config }) => ({
      IpPermission: {
        IpProtocol: "tcp",
        FromPort: 22,
        ToPort: 22,
        IpRanges: [
          {
            CidrIp: "0.0.0.0/0",
          },
        ],
        Ipv6Ranges: [
          {
            CidrIpv6: "::/0",
          },
        ],
      },
    }),
    dependencies: ({ resources }) => ({
      securityGroup: resources.EC2.SecurityGroup["security-group"],
    }),
  });

  provider.EC2.makeElasticIpAddress({
    name: "myip",
  });

  provider.EC2.makeInstance({
    name: "web-server-ec2-vpc",
    properties: ({ config }) => ({
      InstanceType: "t2.micro",
      ImageId: "ami-02e136e904f3da870",
      UserData:
        "#!/bin/bash\necho \"Mounting /dev/xvdf\"\nwhile ! ls /dev/xvdf > /dev/null\ndo \n  sleep 1\ndone\nif [ `file -s /dev/xvdf | cut -d ' ' -f 2` = 'data' ]\nthen\n  echo \"Formatting /dev/xvdf\"\n  mkfs.xfs /dev/xvdf\nfi\nmkdir -p /data\nmount /dev/xvdf /data\necho /dev/xvdf /data defaults,nofail 0 2 >> /etc/fstab\n",
    }),
    dependencies: ({ resources }) => ({
      subnet: resources.EC2.Subnet["subnet"],
      keyPair: resources.EC2.KeyPair["kp-ec2-vpc"],
      eip: resources.EC2.ElasticIpAddress["myip"],
      securityGroups: [resources.EC2.SecurityGroup["security-group"]],
      volumes: [resources.EC2.Volume["volume"]],
    }),
  });
};

exports.createResources = createResources;
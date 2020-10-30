---
id: RouteTables
title: Route Tables
---

Provides a [Route Tables](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html)

```js
const rt = await provider.makeRouteTable({
  name: "rt",
  dependencies: { vpc, subnet },
});
```

### Examples

- [simple example](https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2-vpc/iac.js)

### Dependencies

- [Vpc](./Vpc)
- [Subnet](./Subnet)

### AWS CLI

List the route tables

```
aws ec2 describe-route-tables
```

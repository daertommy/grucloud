---
id: AwsMisc
title: Miscellaneous
---

## Commands

```
aws configure
aws ec2 describe-regions
aws ec2 describe-availability-zones --region eu-west-2
aws ec2 create-default-subnet --availability-zone eu-west-2a
aws ec2 describe-instances
aws ec2 describe-instances --filters "Name=tag:name,Values=web-server"
aws ec2 describe-tags
aws ec2 describe-account-attributes
aws ec2 describe-images --filters "Name=name,Values=ubuntu*"
aws ec2 describe-images --filters "Name=Description,Values=*20.04*"

aws ec2 describe-images --filters "Name=description,Values=Ubuntu Server 20.04 LTS" "Name=architecture,Values=x86_64"

aws iam list-users
aws iam list-user-tags --user-name Alice
```

## Useful Links

- https://docs.aws.amazon.com/
- https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ec2-example-creating-an-instance.html
- https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html
- https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html
- https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Welcome.html
- https://github.com/awsdocs/aws-doc-sdk-examples
- https://aws.amazon.com/sdk-for-node-js/
- https://github.com/aws/aws-sdk-js-v3

## LocalStack

```bash
sudo easy_install pip
pip install awscli
pip install awscli-local
```

// https://github.com/terraform-aws-modules/terraform-aws-vpc/tree/master

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.1.2"

  name = join("-", ["vpc", local.name])
  cidr = local.vpc_cidr_block

  azs              = local.vpc_azs
  private_subnets  = [for k, v in local.vpc_azs : cidrsubnet(local.vpc_cidr_block, 8, k)]
  public_subnets   = [for k, v in local.vpc_azs : cidrsubnet(local.vpc_cidr_block, 8, k + 4)]
  database_subnets = [for k, v in local.vpc_azs : cidrsubnet(local.vpc_cidr_block, 8, k + 8)]

  create_database_subnet_group = true

  enable_dns_hostnames = true
  enable_dns_support   = true

  enable_nat_gateway = true
  single_nat_gateway = true
}

provider "aws" {
  region = local.region

  default_tags {
    tags = {
      Terraform   = "true"
      Amplication = "true"
      Environment = local.environment
    }
  }
}

data "aws_availability_zones" "available" {}

locals {
  name        = ""
  region      = "eu-west-1"
  environment = "development"

  vpc_cidr_block = "10.0.0.0/16"
  vpc_azs        = slice(data.aws_availability_zones.available.names, 0, 3)
}

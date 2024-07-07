terraform {
    backend "s3" {
      bucket = "bucket-name"
      key    = "path/to/key"
      region = "eu-west-1"
    }
  }
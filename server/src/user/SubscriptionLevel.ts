import { registerEnumType } from "@nestjs/graphql";

export enum SubscriptionLevel {
    Base = "BASE",
    Silver = "SILVER",
    Premium = "PREMIUM"
}

registerEnumType(SubscriptionLevel, {
    name: "SubscriptionLevel",
  });
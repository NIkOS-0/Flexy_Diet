import { JsonValue } from "type-fest";
import { Diet } from "../diet/Diet";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  diets?: Array<Diet>;
  subscriptionLevel?: "Option1" | null;
  monthlyPoints: number | null;
};

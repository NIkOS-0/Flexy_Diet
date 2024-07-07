import { InputJsonValue } from "../../types";
import { DietCreateNestedManyWithoutUsersInput } from "./DietCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  diets?: DietCreateNestedManyWithoutUsersInput;
};

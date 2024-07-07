import { InputJsonValue } from "../../types";
import { DietUpdateManyWithoutUsersInput } from "./DietUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  diets?: DietUpdateManyWithoutUsersInput;
};

import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DietListRelationFilter } from "../diet/DietListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  diets?: DietListRelationFilter;
  subscriptionLevel?: "Option1";
  monthlyPoints?: IntNullableFilter;
};

import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DietUpdateInput = {
  filePath?: string | null;
  user?: UserWhereUniqueInput | null;
};

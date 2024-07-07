import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DietCreateInput = {
  filePath?: string | null;
  user?: UserWhereUniqueInput | null;
};

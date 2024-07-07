import { DietWhereInput } from "./DietWhereInput";
import { DietOrderByInput } from "./DietOrderByInput";

export type DietFindManyArgs = {
  where?: DietWhereInput;
  orderBy?: Array<DietOrderByInput>;
  skip?: number;
  take?: number;
};

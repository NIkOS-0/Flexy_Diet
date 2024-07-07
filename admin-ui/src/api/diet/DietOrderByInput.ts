import { SortOrder } from "../../util/SortOrder";

export type DietOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  filePath?: SortOrder;
  userId?: SortOrder;
};

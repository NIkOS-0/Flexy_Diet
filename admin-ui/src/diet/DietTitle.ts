import { Diet as TDiet } from "../api/diet/Diet";

export const DIET_TITLE_FIELD = "filePath";

export const DietTitle = (record: TDiet): string => {
  return record.filePath?.toString() || String(record.id);
};

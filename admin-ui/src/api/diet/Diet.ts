import { User } from "../user/User";

export type Diet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  filePath: string | null;
  user?: User | null;
};

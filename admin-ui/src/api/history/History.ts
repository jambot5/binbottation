import { User } from "../user/User";

export type History = {
  action: string | null;
  createdAt: Date;
  customer: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};

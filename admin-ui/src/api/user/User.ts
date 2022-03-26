import { Company } from "../company/Company";

export type User = {
  company?: Array<Company>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};

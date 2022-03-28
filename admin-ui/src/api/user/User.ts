import { Company } from "../company/Company";
import { History } from "../history/History";

export type User = {
  company?: Array<Company>;
  createdAt: Date;
  firstName: string | null;
  histories?: Array<History>;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};

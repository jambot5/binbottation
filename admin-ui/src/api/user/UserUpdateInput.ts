import { CompanyUpdateManyWithoutUsersInput } from "./CompanyUpdateManyWithoutUsersInput";
import { HistoryUpdateManyWithoutUsersInput } from "./HistoryUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  company?: CompanyUpdateManyWithoutUsersInput;
  firstName?: string | null;
  histories?: HistoryUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};

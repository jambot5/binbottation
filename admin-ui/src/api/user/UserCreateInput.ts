import { CompanyCreateNestedManyWithoutUsersInput } from "./CompanyCreateNestedManyWithoutUsersInput";
import { HistoryCreateNestedManyWithoutUsersInput } from "./HistoryCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  company?: CompanyCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  histories?: HistoryCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};

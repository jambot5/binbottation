import { CompanyUpdateManyWithoutUsersInput } from "./CompanyUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  company?: CompanyUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};

import { CompanyCreateNestedManyWithoutUsersInput } from "./CompanyCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  company?: CompanyCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};

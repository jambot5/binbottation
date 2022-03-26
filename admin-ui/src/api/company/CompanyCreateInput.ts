import { UserCreateNestedManyWithoutCompaniesInput } from "./UserCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  name?: string | null;
  users?: UserCreateNestedManyWithoutCompaniesInput;
};

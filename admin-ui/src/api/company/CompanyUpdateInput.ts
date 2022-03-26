import { UserUpdateManyWithoutCompaniesInput } from "./UserUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  name?: string | null;
  users?: UserUpdateManyWithoutCompaniesInput;
};

import { ClientsGroupCreateNestedManyWithoutCustomersInput } from "./ClientsGroupCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  clientsGroup?: ClientsGroupCreateNestedManyWithoutCustomersInput;
  name?: string | null;
  notes?: string | null;
};

import { CustomerCreateNestedManyWithoutClientsGroupsInput } from "./CustomerCreateNestedManyWithoutClientsGroupsInput";

export type ClientsGroupCreateInput = {
  customers?: CustomerCreateNestedManyWithoutClientsGroupsInput;
  name?: string | null;
};

import { CustomerCreateNestedManyWithoutClientsGroupsInput } from "./CustomerCreateNestedManyWithoutClientsGroupsInput";

export type ClientsGroupCreateInput = {
  customers?: CustomerCreateNestedManyWithoutClientsGroupsInput;
  name?: "RoundA" | "RoundB" | "RoundC" | null;
};

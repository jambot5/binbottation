import { CustomerUpdateManyWithoutClientsGroupsInput } from "./CustomerUpdateManyWithoutClientsGroupsInput";

export type ClientsGroupUpdateInput = {
  customers?: CustomerUpdateManyWithoutClientsGroupsInput;
  name?: "RoundA" | "RoundB" | "RoundC" | null;
};

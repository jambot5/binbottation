import { CustomerUpdateManyWithoutClientsGroupsInput } from "./CustomerUpdateManyWithoutClientsGroupsInput";

export type ClientsGroupUpdateInput = {
  customers?: CustomerUpdateManyWithoutClientsGroupsInput;
  name?: "Round" | null;
};

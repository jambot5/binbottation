import { ClientsGroupUpdateManyWithoutCustomersInput } from "./ClientsGroupUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  clientsGroup?: ClientsGroupUpdateManyWithoutCustomersInput;
  name?: string | null;
  notes?: string | null;
};

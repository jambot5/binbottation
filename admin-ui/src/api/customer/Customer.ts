import { ClientsGroup } from "../clientsGroup/ClientsGroup";

export type Customer = {
  address: string | null;
  clientsGroup?: Array<ClientsGroup>;
  createdAt: Date;
  id: string;
  name: string | null;
  notes: string | null;
  updatedAt: Date;
};

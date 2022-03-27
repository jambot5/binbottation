import { Customer } from "../customer/Customer";

export type ClientsGroup = {
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  name?: "RoundA" | "RoundB" | "RoundC" | null;
  updatedAt: Date;
};

import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  notes?: SortOrder;
  updatedAt?: SortOrder;
};

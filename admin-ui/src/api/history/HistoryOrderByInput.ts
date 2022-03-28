import { SortOrder } from "../../util/SortOrder";

export type HistoryOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  customer?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

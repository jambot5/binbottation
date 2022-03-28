import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HistoryUpdateInput = {
  action?: string | null;
  customer?: string | null;
  user?: UserWhereUniqueInput | null;
};

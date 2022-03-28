import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HistoryCreateInput = {
  action?: string | null;
  customer?: string | null;
  user?: UserWhereUniqueInput | null;
};

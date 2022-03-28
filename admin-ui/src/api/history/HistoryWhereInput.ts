import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HistoryWhereInput = {
  action?: StringNullableFilter;
  customer?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};

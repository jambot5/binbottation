import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ClientsGroupWhereInput = {
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};

import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientsGroupWhereInput = {
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  name?: "RoundA" | "RoundB" | "RoundC";
};

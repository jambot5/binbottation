import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientsGroupListRelationFilter } from "../clientsGroup/ClientsGroupListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  clientsGroup?: ClientsGroupListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  notes?: StringNullableFilter;
};

import { ClientsGroup as TClientsGroup } from "../api/clientsGroup/ClientsGroup";

export const CLIENTSGROUP_TITLE_FIELD = "name";

export const ClientsGroupTitle = (record: TClientsGroup): string => {
  return record.name || record.id;
};

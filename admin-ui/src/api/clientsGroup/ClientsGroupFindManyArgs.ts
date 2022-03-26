import { ClientsGroupWhereInput } from "./ClientsGroupWhereInput";
import { ClientsGroupOrderByInput } from "./ClientsGroupOrderByInput";

export type ClientsGroupFindManyArgs = {
  where?: ClientsGroupWhereInput;
  orderBy?: Array<ClientsGroupOrderByInput>;
  skip?: number;
  take?: number;
};

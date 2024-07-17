import { SortOrder } from "../../util/SortOrder";

export type UserAuthOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
};

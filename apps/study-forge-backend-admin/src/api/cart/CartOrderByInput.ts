import { SortOrder } from "../../util/SortOrder";

export type CartOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  items?: SortOrder;
  user?: SortOrder;
};

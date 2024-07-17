import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  items?: SortOrder;
  totalPrice?: SortOrder;
  status?: SortOrder;
  user?: SortOrder;
};

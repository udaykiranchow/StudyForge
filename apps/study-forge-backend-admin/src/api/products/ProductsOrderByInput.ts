import { SortOrder } from "../../util/SortOrder";

export type ProductsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  author?: SortOrder;
  price?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  isFree?: SortOrder;
};

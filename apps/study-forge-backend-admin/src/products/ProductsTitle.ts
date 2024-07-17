import { Products as TProducts } from "../api/products/Products";

export const PRODUCTS_TITLE_FIELD = "title";

export const ProductsTitle = (record: TProducts): string => {
  return record.title?.toString() || String(record.id);
};

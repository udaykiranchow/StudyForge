import { Cart as TCart } from "../api/cart/Cart";

export const CART_TITLE_FIELD = "user";

export const CartTitle = (record: TCart): string => {
  return record.user?.toString() || String(record.id);
};

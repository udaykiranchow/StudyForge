import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "status";

export const OrderTitle = (record: TOrder): string => {
  return record.status?.toString() || String(record.id);
};

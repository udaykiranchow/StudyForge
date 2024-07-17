import { InputJsonValue } from "../../types";

export type OrderUpdateInput = {
  items?: InputJsonValue;
  totalPrice?: number | null;
  status?: string | null;
  user?: string | null;
};

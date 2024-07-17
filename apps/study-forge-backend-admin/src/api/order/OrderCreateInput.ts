import { InputJsonValue } from "../../types";

export type OrderCreateInput = {
  items?: InputJsonValue;
  totalPrice?: number | null;
  status?: string | null;
  user?: string | null;
};

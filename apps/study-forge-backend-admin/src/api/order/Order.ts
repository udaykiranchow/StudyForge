import { JsonValue } from "type-fest";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  items: JsonValue;
  totalPrice: number | null;
  status: string | null;
  user: string | null;
};

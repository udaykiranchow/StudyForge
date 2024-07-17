import { JsonValue } from "type-fest";

export type Cart = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  items: JsonValue;
  user: string | null;
};

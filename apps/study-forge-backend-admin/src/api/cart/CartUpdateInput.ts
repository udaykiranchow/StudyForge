import { InputJsonValue } from "../../types";

export type CartUpdateInput = {
  items?: InputJsonValue;
  user?: string | null;
};

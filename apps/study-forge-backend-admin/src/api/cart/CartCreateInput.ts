import { InputJsonValue } from "../../types";

export type CartCreateInput = {
  items?: InputJsonValue;
  user?: string | null;
};

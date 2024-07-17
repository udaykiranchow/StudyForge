import { CartWhereUniqueInput } from "./CartWhereUniqueInput";
import { CartUpdateInput } from "./CartUpdateInput";

export type UpdateCartArgs = {
  where: CartWhereUniqueInput;
  data: CartUpdateInput;
};

import { CartWhereInput } from "./CartWhereInput";
import { CartOrderByInput } from "./CartOrderByInput";

export type CartFindManyArgs = {
  where?: CartWhereInput;
  orderBy?: Array<CartOrderByInput>;
  skip?: number;
  take?: number;
};

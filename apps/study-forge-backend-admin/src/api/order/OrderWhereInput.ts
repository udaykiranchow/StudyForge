import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  items?: JsonFilter;
  totalPrice?: FloatNullableFilter;
  status?: StringNullableFilter;
  user?: StringNullableFilter;
};

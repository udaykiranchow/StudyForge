import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ProductsWhereInput = {
  id?: StringFilter;
  author?: StringNullableFilter;
  price?: FloatNullableFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  isFree?: BooleanNullableFilter;
};

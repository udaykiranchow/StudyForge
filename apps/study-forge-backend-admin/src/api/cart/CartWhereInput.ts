import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CartWhereInput = {
  id?: StringFilter;
  items?: JsonFilter;
  user?: StringNullableFilter;
};

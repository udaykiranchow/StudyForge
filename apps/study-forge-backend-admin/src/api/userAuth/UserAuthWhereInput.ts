import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserAuthWhereInput = {
  id?: StringFilter;
  username?: StringNullableFilter;
  password?: StringNullableFilter;
  email?: StringNullableFilter;
};

import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FileWhereInput = {
  id?: StringFilter;
  fileName?: StringNullableFilter;
  fileType?: StringNullableFilter;
  fileUrl?: StringNullableFilter;
  fileSize?: IntNullableFilter;
};

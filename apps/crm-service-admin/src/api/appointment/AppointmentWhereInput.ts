import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  location?: StringNullableFilter;
  client?: ClientWhereUniqueInput;
  property?: PropertyWhereUniqueInput;
};

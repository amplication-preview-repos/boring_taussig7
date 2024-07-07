import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { PropertyListRelationFilter } from "../property/PropertyListRelationFilter";

export type ClientWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  name?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
  properties?: PropertyListRelationFilter;
};

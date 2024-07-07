import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentUpdateInput = {
  date?: Date | null;
  location?: string | null;
  client?: ClientWhereUniqueInput | null;
  property?: PropertyWhereUniqueInput | null;
};

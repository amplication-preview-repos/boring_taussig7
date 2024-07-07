import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentCreateInput = {
  date?: Date | null;
  location?: string | null;
  client?: ClientWhereUniqueInput | null;
  property?: PropertyWhereUniqueInput | null;
};

import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";
import { PropertyCreateNestedManyWithoutClientsInput } from "./PropertyCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  email?: string | null;
  phoneNumber?: string | null;
  name?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  properties?: PropertyCreateNestedManyWithoutClientsInput;
};

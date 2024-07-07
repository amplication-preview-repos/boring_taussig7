import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";
import { PropertyUpdateManyWithoutClientsInput } from "./PropertyUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  email?: string | null;
  phoneNumber?: string | null;
  name?: string | null;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  properties?: PropertyUpdateManyWithoutClientsInput;
};

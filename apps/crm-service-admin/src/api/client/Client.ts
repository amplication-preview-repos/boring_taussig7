import { Appointment } from "../appointment/Appointment";
import { Property } from "../property/Property";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  phoneNumber: string | null;
  name: string | null;
  appointments?: Array<Appointment>;
  properties?: Array<Property>;
};

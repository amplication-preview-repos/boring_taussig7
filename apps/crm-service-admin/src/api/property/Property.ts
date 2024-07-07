import { Appointment } from "../appointment/Appointment";
import { Client } from "../client/Client";
import { AgentAssignment } from "../agentAssignment/AgentAssignment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  price: number | null;
  status?: "Option1" | null;
  appointments?: Array<Appointment>;
  client?: Client | null;
  agentAssignments?: Array<AgentAssignment>;
};

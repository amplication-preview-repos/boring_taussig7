import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { AgentAssignmentUpdateManyWithoutPropertiesInput } from "./AgentAssignmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  price?: number | null;
  status?: "Option1" | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  client?: ClientWhereUniqueInput | null;
  agentAssignments?: AgentAssignmentUpdateManyWithoutPropertiesInput;
};

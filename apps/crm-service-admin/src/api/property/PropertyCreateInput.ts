import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { AgentAssignmentCreateNestedManyWithoutPropertiesInput } from "./AgentAssignmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  price?: number | null;
  status?: "Option1" | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  client?: ClientWhereUniqueInput | null;
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutPropertiesInput;
};

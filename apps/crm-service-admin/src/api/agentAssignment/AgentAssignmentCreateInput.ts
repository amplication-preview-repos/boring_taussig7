import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentCreateInput = {
  agentName?: string | null;
  assignmentDate?: Date | null;
  property?: PropertyWhereUniqueInput | null;
};

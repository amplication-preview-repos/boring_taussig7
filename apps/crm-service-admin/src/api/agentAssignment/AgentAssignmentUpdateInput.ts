import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentUpdateInput = {
  agentName?: string | null;
  assignmentDate?: Date | null;
  property?: PropertyWhereUniqueInput | null;
};

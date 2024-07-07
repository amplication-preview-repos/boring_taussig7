import { SortOrder } from "../../util/SortOrder";

export type AgentAssignmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  agentName?: SortOrder;
  assignmentDate?: SortOrder;
  propertyId?: SortOrder;
};

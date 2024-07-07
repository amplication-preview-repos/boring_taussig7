import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { AgentAssignmentListRelationFilter } from "../agentAssignment/AgentAssignmentListRelationFilter";

export type PropertyWhereInput = {
  id?: StringFilter;
  address?: StringNullableFilter;
  price?: FloatNullableFilter;
  status?: "Option1";
  appointments?: AppointmentListRelationFilter;
  client?: ClientWhereUniqueInput;
  agentAssignments?: AgentAssignmentListRelationFilter;
};

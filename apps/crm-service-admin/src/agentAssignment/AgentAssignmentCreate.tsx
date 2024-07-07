import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PropertyTitle } from "../property/PropertyTitle";

export const AgentAssignmentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="agentName" source="agentName" />
        <DateTimeInput label="assignmentDate" source="assignmentDate" />
        <ReferenceInput
          source="property.id"
          reference="Property"
          label="property"
        >
          <SelectInput optionText={PropertyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

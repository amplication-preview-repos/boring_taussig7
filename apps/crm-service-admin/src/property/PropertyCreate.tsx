import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { ClientTitle } from "../client/ClientTitle";
import { AgentAssignmentTitle } from "../agentAssignment/AgentAssignmentTitle";

export const PropertyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <NumberInput label="price" source="price" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="appointments"
          reference="Appointment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="client.id" reference="Client" label="client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="agentAssignments"
          reference="AgentAssignment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AgentAssignmentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

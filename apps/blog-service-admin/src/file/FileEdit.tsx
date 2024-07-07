import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fileName" source="fileName" />
        <TextInput label="fileType" source="fileType" />
        <TextInput label="fileUrl" source="fileUrl" />
        <NumberInput step={1} label="fileSize" source="fileSize" />
      </SimpleForm>
    </Edit>
  );
};

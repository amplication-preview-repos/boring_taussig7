import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const FileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="fileName" source="fileName" />
        <TextField label="fileType" source="fileType" />
        <TextField label="fileUrl" source="fileUrl" />
        <TextField label="fileSize" source="fileSize" />
      </SimpleShowLayout>
    </Show>
  );
};

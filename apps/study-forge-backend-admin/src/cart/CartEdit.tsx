import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CartEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Edit>
  );
};

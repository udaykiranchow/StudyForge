import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CartCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Create>
  );
};

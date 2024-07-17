import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const UserAuthCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="username" source="username" />
        <TextInput label="password" source="password" />
        <TextInput label="email" source="email" type="email" />
      </SimpleForm>
    </Create>
  );
};

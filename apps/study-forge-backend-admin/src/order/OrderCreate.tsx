import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <NumberInput label="totalPrice" source="totalPrice" />
        <TextInput label="status" source="status" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <NumberInput label="totalPrice" source="totalPrice" />
        <TextInput label="status" source="status" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="items" source="items" />
        <TextField label="totalPrice" source="totalPrice" />
        <TextField label="status" source="status" />
        <TextField label="user" source="user" />
      </SimpleShowLayout>
    </Show>
  );
};

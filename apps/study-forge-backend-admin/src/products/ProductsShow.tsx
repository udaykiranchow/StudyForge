import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const ProductsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="author" source="author" />
        <TextField label="price" source="price" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <BooleanField label="isFree" source="isFree" />
      </SimpleShowLayout>
    </Show>
  );
};

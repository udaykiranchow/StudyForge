import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const ProductsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <NumberInput label="price" source="price" />
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="isFree" source="isFree" />
      </SimpleForm>
    </Create>
  );
};

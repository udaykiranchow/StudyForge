import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const ProductsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <NumberInput label="price" source="price" />
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="isFree" source="isFree" />
      </SimpleForm>
    </Edit>
  );
};

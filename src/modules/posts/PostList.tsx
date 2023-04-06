import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  DeleteButton,
  ReferenceInput,
  TextInput,
} from "react-admin";

// filtros
const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />, // alwaysOn is a prop that allows the filter to be displayed by default
  <ReferenceInput source="userId" label="User" reference="users" />, // reference is the name of the resource and it's optional
];

export const PostList = () => (
  <List filters={postFilters}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" />
      <TextField source="title" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

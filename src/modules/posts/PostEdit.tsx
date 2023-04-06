import { Edit, SimpleForm, ReferenceInput, TextInput } from "react-admin";

import { PostTitle } from "./components";

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled fullWidth />
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="id" fullWidth />
      <TextInput source="title" fullWidth />
      <TextInput source="body" multiline rows={5} fullWidth />
    </SimpleForm>
  </Edit>
);

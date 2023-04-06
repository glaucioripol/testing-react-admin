import { Edit, SimpleForm, ReferenceInput, TextInput, Form } from "react-admin";

export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput
        source="userId"
        reference="users"
        sx={{
          width: "100%",
        }}
      />
      <TextInput source="id" fullWidth />
      <TextInput source="title" fullWidth />
      <TextInput source="body" multiline fullWidth />
    </SimpleForm>
  </Edit>
);

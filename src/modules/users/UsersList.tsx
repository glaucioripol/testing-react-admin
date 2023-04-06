import { List, Datagrid, TextField, EmailField } from "react-admin";
import { MyUrlField } from "../../components";

export const UsersList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      {/* <TextField source="username" /> */}
      <EmailField source="email" />
      {/* <TextField source="address.street" /> */}
      <TextField source="phone" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);

// ----------------------------- Card e pegand com callbacks -----------------------------
// import { useCallback } from "react";
// import { List, SimpleList } from "react-admin";

// type User = {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//     street: string;
//   };
//   phone: string;
//   website: string;
//   company: {
//     name: string;
//   };
// };

// // with Callback
// export const UserList = () => {
//   const primaryText = useCallback(
//     ({ id, name, username }: User) => (
//       <h4>{`#${id} - ${username}, ${name} `}</h4>
//     ),
//     []
//   );

//   return (
//     <List>
//       <SimpleList
//         primaryText={primaryText}
//         secondaryText={({ company }: User) => company.name}
//         tertiaryText={({ email }: User) => email}
//       />
//     </List>
//   );
// };

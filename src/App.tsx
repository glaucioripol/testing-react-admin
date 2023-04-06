import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import {
  UsersList,
  PostList,
  PostEdit,
  PostCreate,
  Dashboard,
  authFunctions,
} from "./modules";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={Dashboard}
    authProvider={authFunctions.authProvider}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource
      name="users"
      list={UsersList}
      recordRepresentation="name"
      icon={UserIcon}
    />
  </Admin>
);

export default App;

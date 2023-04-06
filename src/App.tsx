import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UsersList, PostList } from "./modules";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
    <Resource name="users" list={UsersList} recordRepresentation="name" />
  </Admin>
);

export default App;

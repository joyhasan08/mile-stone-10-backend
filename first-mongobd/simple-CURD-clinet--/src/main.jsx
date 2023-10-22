import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import RegPage from "./component/RegPage";
import Users from "./component/Users";
import Upadate from "./component/Upadate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/reg",
    element: <RegPage></RegPage>
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch(`http://localhost:5000/users`)
  },
  {
    path: "/update/:id",
    element: <Upadate></Upadate>,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
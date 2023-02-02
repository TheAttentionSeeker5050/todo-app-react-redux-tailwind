import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import Root from "../components/Root";
import ErrorPage from "../components/ErrorPage";
import HomePage from "../components/Home";
import LoginPage from "../components/auth/Login";
import RegisterPage from "../components/auth/Register";
import ListTodos from "../components/todos/ListTodos";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element:<HomePage/>
        },
        {
          path: "/login",
          element:<LoginPage/>
        },
        {
          path: "/register",
          element:<RegisterPage/>
        },
        {
          path: "/todos",
          element:<ListTodos/>
        },
      ]
    },
  ]);

export default router;
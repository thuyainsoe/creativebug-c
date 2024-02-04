import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Template from "@/Template";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Template />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;

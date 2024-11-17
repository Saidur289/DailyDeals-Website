import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Home from "../Pages/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home/>,
        }
      ]
    },
  ]);
  export default router
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Home from "../Pages/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import Brands from "../Pages/Brands/Brands";
import Details from "../components/Details/Details";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
          path: '/brands',
          element:<Brands></Brands>,
          loader: () => fetch('/brands.json'),
        },
        {
          path: '/brand/:id',
          element: <Details></Details>,
          loader: async ({params}) => {
            const res = await fetch('/brands.json')
            const data = await res.json()
            const singleData = data.find((brand) => brand.id === params.id)
            return singleData;
          }
        }
      ]
    },
  ]);
  export default router
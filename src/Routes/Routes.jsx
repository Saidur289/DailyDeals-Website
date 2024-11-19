import {
    createBrowserRouter,
  } from "react-router-dom";

import Home from "../Pages/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import Brands from "../Pages/Brands/Brands";
import Details from "../components/Details/Details";
import BrandsDetails from "../Pages/Brands/BrandsDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <p>Status 404 | Page Not Found</p>,
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
        },
        {
          path: '/brandsDetails/:id',
          element: <BrandsDetails></BrandsDetails>,
          loader: async ({params}) => {
            const res = await fetch('/brands.json')
            const data = await res.json()
            const singleData = data.find((brand) => brand.id === params.id)
            return singleData;
          }
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>,
        },
        {
          path: '/profile',
          element: <Profile></Profile>,
        },
        {
          path: '/updatePro',
          element: <UpdateProfile></UpdateProfile>
        }
      ]
    },
  ]);
  export default router
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Home/Menu/Menu";
import MenuCard from "../pages/MenuCard/MenuCard/MenuCard";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menuCard',
          element:<MenuCard></MenuCard>
        },
        {
          path:'/order/:cartegore',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    },
  ]);
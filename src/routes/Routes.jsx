import { createBrowserRouter } from "react-router";
import Roots from "../roots/Roots";
import Home from "../childs/home/Home";
import App from "../App";
import Installation from "../childs/installation/Installation";
import Apps from "../childs/apps/Apps";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children:[
      
      {
      index:true,
      element:<Home></Home>
    },

    {
      path:'/apps',
      element:<Apps></Apps>
    },

    {
      path:'/installation',
      element:<Installation></Installation>
    }
  
  ]
  },
]);
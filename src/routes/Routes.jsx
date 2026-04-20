import { createBrowserRouter } from "react-router";
import Roots from "../roots/Roots";
import Home from "../childs/home/Home";
import App from "../App";
import Installation from "../childs/installation/Installation";
import Apps from "../childs/apps/Apps";
import GlobalError from "../childs/error pages/global error page/GlobalError";
import LocalErrorPage from "../childs/error pages/localPageError/LocalErrorPage";
import AllProduct from "../childs/AllProduct/AllProduct";

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
      element:<Installation></Installation>,
     
    },

    {
      path:'/allproducts',
      element:<AllProduct></AllProduct>

    },
  
    //set the error page globally...that means for all the children route

    {
      path:'*',
      element:<GlobalError></GlobalError>

    }
  ]
  },
]);
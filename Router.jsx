import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Customer from "../customer/Customer";
import About from "../components/About";
import Blog from "../components/Blog";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
        {
          path:"/customer",
          element:<Customer/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/blog",
          element:<Blog/>
        }
      ]
    },
  ]);

  export default router;
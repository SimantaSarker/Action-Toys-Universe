import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddToys from "../pages/AddToys/AddToys";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"blog",
        element:<Blog></Blog>
      },
      {
        path:"allToys",
        element:<AllToys></AllToys>
      },
      {
        path:"myToys",
        element:<MyToys></MyToys>
      },
      {
        path:"addToys",
        element:<AddToys></AddToys>
      },
      {
        path:'login',
        element:<Login></Login>,
      },
      {
        path:"register",
        element:<Register></Register>
      }
    
    ]
  },
]);


export default router;
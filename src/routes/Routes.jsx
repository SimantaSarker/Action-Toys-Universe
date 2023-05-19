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
import PrivateRoutes from "./PrivateRoutes";
import ToysDetails from "../pages/ToysDetails/ToysDetails";
import UpdateMyToys from "../pages/MyToys/UpdateMyToys";

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
        element:<AllToys></AllToys>,
        
      },
      {
        path:"myToys",
        element:<PrivateRoutes><MyToys></MyToys></PrivateRoutes>
      },
      {
        path:"addToys",
        element:<PrivateRoutes><AddToys></AddToys></PrivateRoutes>
      },
      {
        path:'login',
        element:<Login></Login>,
      },
      {
        path:"register",
        element:<Register></Register>
      },
      {
        path:'/update/:id',
        element:<PrivateRoutes><UpdateMyToys></UpdateMyToys></PrivateRoutes>,
        loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)

      },
      {
        path:"toys/:id",
        element:<PrivateRoutes><ToysDetails></ToysDetails></PrivateRoutes>,
        loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
      }
    
    ]
  },
]);


export default router;
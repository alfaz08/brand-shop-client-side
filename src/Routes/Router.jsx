import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import CardDetails from "../Pages/CardDetails/CardDetails";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
   path: "/",
   element: <MainLayout></MainLayout>,
   errorElement: <ErrorPage></ErrorPage>,
   children:[
    {
      path: "/",
       element: <Home></Home>,
    },
    {
      path: "/login",
       element: <Login></Login>,
    },
    {
      path: "/register",
       element: <Register></Register>,
    },
    {
      path: "/product",
       element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
    },
    {
      path: "/cart",
       element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
    },
    {
      path: "/carddetails",
      element: <PrivateRoute> <CardDetails></CardDetails></PrivateRoute>
    }

   
  
   ]
  },
   ]);

export default router;
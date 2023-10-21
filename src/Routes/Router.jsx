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
import Contact from "../Pages/Contact/Contact";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import UpdateProduct from "../Pages/AddProduct/UpdateProduct";
import MyCartDetails from "../Pages/MyCart/MyCartDetails";
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
       element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
       loader:()=>fetch('https://brand-shop-server-ij8udurzt-alfaz-hossains-projects.vercel.app/cart')
    },
    
    {
      path: "/carddetails/:id",
      element: <PrivateRoute> <CardDetails></CardDetails></PrivateRoute>,
      loader:()=>fetch('https://brand-shop-server-ij8udurzt-alfaz-hossains-projects.vercel.app/products')
    },
    {
      path: "/productdetails/:id",
      element: <PrivateRoute> <ProductDetails></ProductDetails> </PrivateRoute>,
      loader:()=>fetch('https://brand-shop-server-ij8udurzt-alfaz-hossains-projects.vercel.app/products')
    },
    {
    path:"/update/:id",
    element: <PrivateRoute> <UpdateProduct></UpdateProduct> </PrivateRoute>,
    loader:({params})=>fetch(`https://brand-shop-server-ij8udurzt-alfaz-hossains-projects.vercel.app/products/${params.id}`)
    },
    {
      path:"/contact",
      element: <Contact></Contact>,
    
    }
    

   
  
   ]
  },
   ]);

export default router;
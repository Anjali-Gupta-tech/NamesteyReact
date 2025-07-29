import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "../src/component/Contact";
import RestaurantMenu from "./component/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import Error from "./component/Error.js";
//import Grocery from "./component/Grocery";


//lazy loading/ondemand loading/ chunking/code splitting
const Grocery =lazy(()=>import("./component/Grocery"));

const AppLayout = () => {
  console.log("render");
  return (
  

    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  //creating route
  {
    path: "/",
    element: <AppLayout />,
    
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
       {
        path: "/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense> ,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      
    ],
    errorElement:<Error/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

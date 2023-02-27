import React, { Children } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestrauntDetail from "./components/RestruantDetail";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/Profile";
// jsx


const AppLayout = () =>{
return(
    <>
    <Header/>
{/** Outlet Children component on the basis of route path e.g. /, /about, /contact etc */}
    <Outlet/>
    <Footer/>
    </>
)
}

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement: <Error/>,  // if no path match then this error occurent e.g.: /xyz 
      children:[
        {
            path: "/",
            element: <Body/>
          },
        {
            path: "/about",//locahost:1234/about
            element: <About/>, 
            children:[{
            path: "profile",//locahost:1234/about/profile
            element: <Profile/>, 
            }]
          },
          {
            path: "/contact",
            element: <Contact/>
          },
          {
            path: "/restruant/:id",
            element: <RestrauntDetail/>
          },
      ]  
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>); // render react component
//Render according to routes using Router Provider and takes config from appRouter
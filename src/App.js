import React, { lazy, Suspense, useState } from "react";
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
import Shimmer from "./components/Shimmer";
import InstaMart from "./components/InstaMart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//const InstaMart = lazy(()=> import("./components/InstaMart")); // its lazy import

const AppLayout = () =>{
  const [user, setUser] = useState({
    name: "Abhijeet Nigoskar",
    email: "abhijeet@zenspace.io"
  })

  
return(
  <Provider store={store}>
  <UserContext.Provider value={{user:user, setUser: setUser}}>
    <>
    <Header/>
{/** Outlet Children component on the basis of route path e.g. /, /about, /contact etc */}
    <Outlet/>
    <Footer/>
    </>
    </UserContext.Provider>
    </Provider>
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
          {
            path: "/instamart",
            element: <InstaMart/>
            //element: <Suspense fallback={<Shimmer/>}><InstaMart/></Suspense>
          },
          {
            path: "/cart",
            element: <Cart/>
          },
      ]  
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>); // render react component
//Render according to routes using Router Provider and takes config from appRouter
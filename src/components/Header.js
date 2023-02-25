import { useState } from "react";
const Title = () =>(
    <a href="/">
        <img 
        className="logo"
         alt="logo"
         src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"/>
    </a>
    );

//React Functional Component is function
const Header = () =>
{
    const [isLoggedIn, setIsLoggedIn]= useState(false)
    return( 
    <div className="header">
    <Title/> {/**call title component */}
    <div className="nav-items">
        <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
    </ul>
    </div>
    {isLoggedIn ? (
        <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
    ):(
    <button onClick={()=>setIsLoggedIn(true)}>Login</button>
    ) }
    
    
    </div>
    ); // multiple lines
}
    export default Header; //export header as default


import { useState } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Title = () =>(
    <a className="flex justify-center sm:justify-start" href="/">
        <img 
        className="h-28 p-2"
         alt="logo"
    src={Logo}/>
         </a>
    );

//React Functional Component is function
const Header = () =>
{
    const [isLoggedIn, setIsLoggedIn]= useState(false)
    return( 
    <div className="sm:flex justify-between bg-pink-50 shadow-lg">
    <Title/> {/**call title component */}
    <div className="nav-items">
        <ul className="flex py-10">
        <li className="px-2"><Link to="/">Home
        </Link></li>
        <li className="px-2"><Link to="/about">        
        About Us
        </Link></li>
        <li className="px-2"><Link to="/contact">
        Contact Us
        </Link ></li>
        <li className="px-2"><Link to="/instamart">
        InstaMart
        </Link></li>
        <li className="px-2"><Link to="/cart">
            Cart
        </Link>  
        </li>  
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


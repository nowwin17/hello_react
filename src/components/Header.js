import { useState } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Title = () =>(
    <a href="/">
        <img 
        className="logo"
         alt="logo"
    src={Logo}/>
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
        <li><Link to="/">Home
        </Link></li>
        <li><Link to="/about">        
        About Us
        </Link></li>
        <li><Link to="/contact">
        Contact Us
        </Link></li>
        <li><Link to="/instamart">
        InstaMart
        </Link></li>
        <li><Link to="/cart">
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


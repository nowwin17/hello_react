import { useState, useContext } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
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
    const cartItems = useSelector(store=> store.cart.items); // i want to subscribe my cartItems from store
   console.log(cartItems)
    const [isLoggedIn, setIsLoggedIn]= useState(false)
    const {user} = useContext(UserContext)
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
            Cart - {cartItems.length} items
        </Link>  
        </li>  
    </ul>
    </div>
    <h1>get user from context</h1>
    <span className="p-10 font-bold text-red-400">{user.name}</span>
    <span className="p-10 font-bold text-red-400">{user.email}</span>

    {isLoggedIn ? (
        <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
    ):(
    <button onClick={()=>setIsLoggedIn(true)}>Login</button>
    ) }
    
    
    </div>
    ); // multiple lines
}
    export default Header; //export header as default


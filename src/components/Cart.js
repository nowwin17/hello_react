import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";
const Cart = () => {
    const cartItems = useSelector(store=>store.cart.items) //it only re-render component when cart.items updated 
    const dispatch = useDispatch()
    const handleClearCart = () =>{
       dispatch(clearCart())
    }
    return (
        <div>
            <h1 className="font-bold text-3xl"> Cart Items- {cartItems.length}</h1>
       <button className="bg-green-100 p-2 m-5" onClick={()=>handleClearCart()}> clearCart</button>
       <div className="flex"> 
       {cartItems.map((cartItem)=>(

            <FoodItem key={cartItem.id} {...cartItems[0]} />
        ))
    }
    </div>
        
        </div>
    )
}

export default Cart
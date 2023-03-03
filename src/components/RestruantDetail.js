import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "../utils/hooks/useRestaurant";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";



const RestrauntDetail = () =>{
    const params = useParams();
    const{id} = params;
    const restaurant = useRestaurant(id);
    const [getRestaurants] = useState(restaurant)
    const dispatch = useDispatch(); //dispatch hooks
const addFoodItem = (item) =>{
    dispatch(addItem(item)); //dispatch action addItem with payload -> item
}    

    return(!restaurant)?(<Shimmer/>):(
        <div className="flex m-2">
            <div className="m-2">
            <h1>Restraunt id:{id}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={IMG_CDN_URL+restaurant?.cloudinaryImageId}></img>
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} Star</h3>
           
            </div>
            <div className="m-2">    
            <h1 className="text-bold" >Menu</h1>
            
            <ul data-testid="menu">
              {Object.values(restaurant?.menu?.items).map((item)=>{
            return  <li key={item.id}>{item.name} - <button className="p-1 bg-green-100" 
            onClick={()=>addFoodItem(item)} data-testid="add-btn"
            >Add</button> </li>  }
                )}
                
            </ul>
            </div>

        </div>
    )
}
export default RestrauntDetail
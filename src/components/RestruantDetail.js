import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestrauntDetail = () =>{
    const params = useParams();
    const{id} = params;
    const [restaurant, setRestaurant]= useState(null);
    useEffect(()=>{
        getRestrauntInfo()
    },[])
    async function getRestrauntInfo(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=23.1436697&lng=75.7691262&menuId=${id}`);
        
        const json = await data?.json()
        
        setRestaurant(json?.data)
        

        
        
    }
    
    return(!restaurant)?(<Shimmer/>):(
        <div className="menu">
            <div>
            <h1>Restraunt id:{id}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={IMG_CDN_URL+restaurant?.cloudinaryImageId}></img>
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} Star</h3>
            </div>
            <div>    
            <h1>Menu</h1>
            
            <ul>
              {Object.values(restaurant?.menu?.items).map((item)=>{
            return  <li key={item.id}>{item.name} </li>  }
                )}
                
            </ul>
            </div>

        </div>
    )
}
export default RestrauntDetail
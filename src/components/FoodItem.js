import { Link } from "react-router-dom"
import { IMG_CDN_URL } from "../constants";

const FoodItem = ({name,description,cloudinaryImageId,price}) =>{
    return(
       <div className="card w-56 h-72 p-2 m-2 shadow-lg bg-pink-50">
        <img alt="card-image" src={IMG_CDN_URL+cloudinaryImageId}/>
        <h3 className="font-bold text-xl">{name}</h3>{/*optional chainging data?.name (if name not exits*/}
        <h4>{description}</h4>{/** join array element with "," e.g:Burgers,Snacks */}
        <h5>Rupees: {price/100}</h5>
    </div>
    )}

export default FoodItem;
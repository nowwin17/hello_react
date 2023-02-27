import { useState,useEffect } from "react";
import { FETCH_RESTAURANT_URL } from "../../constants";

const useRestaurant = (id) =>{
    const [restaurant, setRestaurant] = useState(null)

    useEffect(()=>{
        getRestrauntInfo()
    },[])
    async function getRestrauntInfo(){
        const data = await fetch(FETCH_RESTAURANT_URL+id);
        
        const json = await data?.json()
        
        setRestaurant(json?.data)    
        
    }
    return restaurant;
};

export default useRestaurant
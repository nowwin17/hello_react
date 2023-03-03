import { useState, useEffect, useContext } from "react";
import { restrauntList } from "../constants"
import RestrauntCard from "./RestruantCard"
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/hooks/useOnline";
import UserContext from "../utils/UserContext";


const Body = () =>{
    const [allRestaurants, setAllRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const {user, setUser} = useContext(UserContext);

    useEffect(()=>{
        getRestaurants(); 
    }, []);

    async function getRestaurants(){
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1436697&lng=75.7691262&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
       // console.log(json)
        setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }
    const isOnline = useOnline();
    if(!isOnline){
        return <h1> Offline, please check your internet connection</h1>
    }
    //if(!allRestaurants) return null; //Early return
    //if(filteredRestaurants?.length ===0) return <h1>No match found</h1>
    return allRestaurants?.length === 0 ?( <Shimmer/>
    ):(
      <>        
      <div className="search-conatainer p-5 bg-pink-50 my-5">
        <input type="text" 
        data-testid="search-input"
        className="focus:bg-purple-200"
         placeholder="Search"
         value={searchText}
         onChange= {(e)=>{
            //on every keypress re-render component
            //e.target.value=> whatever you write in input
            setSearchText(e.target.value)
         }} />
         <button data-testid="search-btn" className="btn p-2 m-2 bg-purple-500 hover:bg-purple-900 text-white rounded-md"
         onClick={()=>{
      // filterData()
      const filteredData = filterData(searchText,allRestaurants);
      setFilteredRestaurant(filteredData)
       }}> 
         Search 
         </button>
         <input value={user.name} onChange={(e)=>{
            setUser({
                ...user,
                name: e.target.value,
                
            })
         }}></input>
           <input value={user.email} onChange={(e)=>{
            setUser({
            ...user,
            email:e.target.value
            })
         }}></input>
      </div>
        <div className="flex flex-wrap m-3" data-testid="restlist">
            
            {
              filteredRestaurants.length > 0
              ?
                filteredRestaurants.map((restaurant, index)=>{
                    return <RestrauntCard {...restaurant.data} key={restaurant.data.id}/> 
                }):
                <p>No Restraunt Found !!</p>
              
            }
    
        </div>
        </>
    )
    }
    export default Body
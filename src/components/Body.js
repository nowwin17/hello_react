import { useState } from "react";
import { restrauntList } from "../constants"
import RestrauntCard from "./RestruantCard"

const filterData = (searchText,restaurants) =>{
    const filterData = restaurants.filter((restraunt)=>
    restraunt.data.name.includes(searchText))
return filterData
}
const Body = () =>{
    const [restaurants, setRestaurant] = useState(restrauntList);
    const [searchText, setSearchText] = useState("");
    return(
      <>        
      <div className="search-conatainer">
        <input type="text" 
        className="search-input"
         placeholder="Search"
         value={searchText}
         onChange= {(e)=>{
            //e.target.value=> whatever you write in input
            setSearchText(e.target.value)
         }} />
         <button 
         className="btn"
         onClick={()=>{
      // filterData()
      const filteredData = filterData(searchText,restaurants);
      setRestaurant(filteredData)
       }}> 
         Search 
         </button>
      </div>
        <div className="restaurant-list">
            {
                restaurants.map((restaurant, index)=>{
                    return <RestrauntCard {...restaurant.data} key={restaurant.data.id}/> 
                })
              
            }
    
        </div>
        </>

    )
    }
    export default Body
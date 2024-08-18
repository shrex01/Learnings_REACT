import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
    //creating a state Variable
    //  -default value in arguement of useState
    // - array's first arguement is current state of the variable
    // - array's second arguement is a functn that needs to be given a value in the parameter for which the state needs to be updated TO
    const [listOfRestaurants,setListOfRestaurant]=useState(resList);
    //CAN ALSO BE DESTRUCTURED AS A NORMAL ARRAY
    // - 

  return (
      <div className='body'>
          <div className='search'>
              <button 
                onClick={()=>{ 
                    debugger
                    const filteredRestaurant=listOfRestaurants.filter((res)=>res.info.avgRating>4);
                    setListOfRestaurant(filteredRestaurant);
                }}>
                Top Rated
              </button>
          </div>
          <div className='res-container'>
          {
          listOfRestaurants.map((item)=>{
              //not using Key <<< index as a key <<< unique key as a key
              return(<RestaurantCard resData={item} key={item.info.id}/>)
              })
          }
          </div>
      </div>
  )
}

export default Body;

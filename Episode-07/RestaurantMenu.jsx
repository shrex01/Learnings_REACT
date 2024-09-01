import { useEffect, useState } from "react"
import { Shimmer } from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = ({props}) => {
  const [resInfo, setResInfo] = useState();
  useEffect(() => {
    fetchMenu();
  }, []);
  const {resId}= useParams()
  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resId+"&catalog_qa=undefined");
    const response = await data.json();
    setResInfo(response.data);
  }
  console.log('resInfo:', resInfo)
  if(resInfo == null){
   return <Shimmer />;
  } 

  //USE NESTINGS AS PER CURRENT DAY NESTING OF API RESPONSE
  const { name, cusines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info||{};
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card||[];
  return(
  <div className="menu">
        <h2>{name}</h2>
        <h3>{cusines?.join(",")}</h3>
        <h3>{costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
          {(itemCards||[]).map(item=>{
            return <li>{item?.card?.info?.name} - ₹ {item?.card?.info?.price/100}</li>
          })}
        </ul>
  </div>
    )
}
export default RestaurantMenu

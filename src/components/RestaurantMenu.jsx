import { useEffect, useState } from "react"
import { Shimmer } from "./shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=65797&catalog_qa=undefined&submitAction=ENTER"
    );
    const response = await data.json();
    setResInfo(response.data);
  }
  console.log('resInfo:', resInfo)

  const { name, cusines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info||{};
  return (resInfo == null) ? (<Shimmer />) :
    (
      <div className="menu">
        <h2>{name}</h2>
        <h2>Menu</h2>
        <h3>{cusines?.join(",")}</h3>
        <h3>{costForTwoMessage}</h3>
      </div>
    )
}
export default RestaurantMenu

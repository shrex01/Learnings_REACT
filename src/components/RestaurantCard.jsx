import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  //can also destructure props in the argument as { name , cuisines , rating , delivery}
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime

  } = props?.resData?.info;
  //can also destructure like above (optional chaining)
  return (
    <div className='res-card'>
      <img
        className='res-logo'
        src={
          CDN_URL + `${cloudinaryImageId}`
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  )
}

export default RestaurantCard;

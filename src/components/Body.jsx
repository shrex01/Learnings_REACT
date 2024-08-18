import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./shimmer";
const Body = () => {
    //creating a state Variable
    //  -default value in arguement of useState
    // - array's first arguement is current state of the variable
    // - array's second arguement is a functn that needs to be given a value in the parameter for which the state needs to be updated TO
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [searchListing, setSearchListing] = useState('');
    const [listOfRestaurantsCopy, setListOfRestaurantCopy] = useState([])
    //CAN ALSO BE DESTRUCTURED AS A NORMAL ARRAY
    // - 
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        //need to use CORS extention  to make cross server requests
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            //use a cors proxy if not using cors extention plugin
        );
        const response = await data.json();
        setListOfRestaurant(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurantCopy(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // change data reference asper swiggys present day's fetch api's keys
    }

    // if(listOfRestaurants.length==0){
    //     //Can add spinning loader GIF instead
    //     return <h1>Loading ...</h1>
    // }
    //SHIMMER UI - Showing fake UI skeleton to depict loading for better UX
    //shimmer UI can be used instead of the shit loaders
    if (listOfRestaurants.length === 0 || listOfRestaurantsCopy.length === 0) {
        return (<Shimmer />)
    }

    return (
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input className="search-field" onChange={(e) => {
                        const { value } = e.target;
                        setSearchListing(value)
                    }} value={searchListing} />
                    <button className="search-btn" onClick={() => {
                        if (!!searchListing) {

                            const filteredList = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchListing.toLowerCase()));
                            setListOfRestaurantCopy(filteredList);
                        }
                        else {
                            setListOfRestaurantCopy(listOfRestaurants);
                        }
                    }}>
                        Search
                    </button>

                </div>
                <button
                    onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter((res) => res.info.avgRating >= 4.4);
                        setListOfRestaurantCopy(filteredRestaurant);
                    }}>
                    Top Rated
                </button>
            </div>
            <div className='res-container'>
                {
                    listOfRestaurantsCopy.map((item) => {
                        //not using Key <<< index as a key <<< unique key as a key
                        return (<RestaurantCard resData={item} key={item.info.id} />)
                    })
                }
            </div>
        </div>
    )
}

export default Body;

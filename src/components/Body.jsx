import { useEffect, useState } from "react";
import resLists from "../utils/mocData";
import RestaurantCard from "./RestaurantCard";


const Body = () => {

    // Filtering the restaurants from the data
    const filteredRestaurants = resLists
        .map((item) => item.card?.card)
        .filter((card) => card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");
    const [lisOfRestaurants, setListOfRestaurants] = useState(filteredRestaurants);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
        const res = await data.json()
        console.log(res)
    }


    return (
        <div className='body'>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = lisOfRestaurants.filter((res) => res?.info?.avgRating > 4)
                    setListOfRestaurants(filteredList)
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    lisOfRestaurants?.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
}

export default Body;
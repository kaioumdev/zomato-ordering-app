import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
    const [lisOfRestaurants, setListOfRestaurants] = useState([]);
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const res = await data.json()
        const restaurants = await res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(restaurants)
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
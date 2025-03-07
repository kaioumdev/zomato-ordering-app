import { useState } from "react";
import resLists from "../utils/mocData";
import RestaurantCard from "./RestaurantCard";


const Body = () => {

    const filteredRestaurants = resLists
        .map((item) => item.card?.card)
        .filter((card) => card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");
    const [lisOfRestaurants, setListOfRestaurants] = useState(filteredRestaurants);


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
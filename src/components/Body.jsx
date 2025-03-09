import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


const Body = () => {
    const [lisOfRestaurants, setListOfRestaurants] = useState([]);
    // console.log(lisOfRestaurants[0].info?.name)
    const [searchText, setSearchText] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    //Whenever state variable update, react trigger a reconciliation cycle(re-render the component)
    console.log("Body Rendering")

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const res = await data.json()
        setListOfRestaurants(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return lisOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className='body'>
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search for Restaurants" />
                    <button onClick={() => {
                        const filteredRestaurant = lisOfRestaurants.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filteredRestaurant)
                        console.log(searchText)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = lisOfRestaurants.filter((res) => res?.info?.avgRating > 4)
                    setListOfRestaurants(filteredList)
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants?.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
}

export default Body;
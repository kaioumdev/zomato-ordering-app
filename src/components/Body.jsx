import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    const [lisOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    //Whenever state variable update, react trigger a reconciliation cycle(re-render the component)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const res = await data.json()
        setListOfRestaurants(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return <h1>Looks like you're offline!! Please check your interner connection.</h1>
    }


    return lisOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className='body'>
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search for Restaurants" />
                    <button className="px-4 py-2 bg-green-100 m-4 cursor-pointer rounded-lg" onClick={() => {
                        const filteredRestaurant = lisOfRestaurants.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filteredRestaurant)
                        console.log(searchText)
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 cursor-pointer rounded-lg" onClick={() => {
                        const filteredList = lisOfRestaurants.filter((res) => res?.info?.avgRating > 4)
                        setFilteredRestaurants(filteredList)
                    }}>Top Rated Restaurant</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants?.map((restaurant) =>
                    (<Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`} >
                        {
                            restaurant?.info?.isOpen === true ? <RestaurantCardPromoted resData={restaurant}></RestaurantCardPromoted> : <RestaurantCard resData={restaurant} />
                        }
                    </Link>)
                    )
                }
            </div>
        </div>
    )
}

export default Body;
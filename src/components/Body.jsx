import resLists from "../utils/mocData";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
    const filteredRestaurants = resLists
        .map((item) => item.card?.card)
        .filter((card) => card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");

    return (
        <div className='body'>
            <div className="search">
                Search
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
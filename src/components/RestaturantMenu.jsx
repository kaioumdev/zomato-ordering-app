/* eslint-disable no-unsafe-optional-chaining */
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaturantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    console.log(resId)


    if (resInfo === null) return <Shimmer></Shimmer>

    // Ensure resInfo and the path exist before destructuring
    const restaurantInfo = resInfo?.cards?.find(card => card?.card?.card?.info) ?? {};
    const { name, cuisines, costForTwoMessage } = restaurantInfo.card?.card?.info || {};

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(categories)

    return (
        <div className='text-center'>
            <h1 className='font-bold my-6 text-2xl'>{name || "Restaurant Name Not Available"}</h1>
            <p className='font-bold text-lg'>{cuisines?.join(", ")} - {costForTwoMessage}</p>
            {/* <h2>Menu</h2>
            <ul>
                {
                    itemCards?.map((item) => (
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {"$"} {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</li>
                    ))
                }
            </ul> */}
        </div>
    )
}

export default RestaturantMenu

/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaturantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null)

    if (resInfo === null) return <Shimmer></Shimmer>

    // Ensure resInfo and the path exist before destructuring
    const restaurantInfo = resInfo?.cards?.find(card => card?.card?.card?.info) ?? {};
    const { name, cuisines, costForTwoMessage } = restaurantInfo.card?.card?.info || {};

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className='text-center'>
            <h1 className='font-bold my-6 text-2xl'>{name || "Restaurant Name Not Available"}</h1>
            <p className='font-bold text-lg'>{cuisines?.join(", ")} - {costForTwoMessage}</p>
            {/* categories accordian */}
            {
                categories.map((category, index) =>
                    // controlled component
                    <RestaurantCategory key={index} data={category?.card?.card} showItems={showIndex === index ? true : false} setShowIndex={(prevIndex) => setShowIndex(prevIndex => (prevIndex === index ? null : index))}></RestaurantCategory>)
            }
        </div>
    )
}

export default RestaturantMenu

import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/contants';

const RestaturantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    console.log(resId)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        try {
            const data = await fetch(MENU_URL + resId)
            const res = await data.json()
            setResInfo(res.data)
            console.log(res)
        } catch (error) {
            console.error("Error fetching menu:", error)
        }
    }

    if (resInfo === null) return <Shimmer></Shimmer>

    // Ensure resInfo and the path exist before destructuring
    const restaurantInfo = resInfo?.cards?.find(card => card?.card?.card?.info) ?? {};
    const { name, cuisines, costForTwoMessage } = restaurantInfo.card?.card?.info || {};

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)

    return (
        <div className='menu'>
            <h1>{name || "Restaurant Name Not Available"}</h1>
            <h3>{cuisines?.join(", ")} - {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards?.map((item) => (
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {"$"} {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default RestaturantMenu

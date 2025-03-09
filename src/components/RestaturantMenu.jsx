import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'

const RestaturantMenu = () => {
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=16866&catalog_qa=undefined&submitAction=ENTER")
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
                        <li>{item?.card?.info?.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default RestaturantMenu

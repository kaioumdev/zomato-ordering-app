import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'

const RestaturantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=16866&catalog_qa=undefined&submitAction=ENTER")
        const res = await data.json()
        setResInfo(res.data)
        console.log(res)
    }
    return resInfo === null ? (<Shimmer></Shimmer>) : (
        <div>
            <h1>{resInfo?.cards[0]?.card?.card?.text}</h1>
        </div>
    )
}

export default RestaturantMenu
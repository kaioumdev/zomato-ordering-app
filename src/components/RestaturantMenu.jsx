import React, { useEffect } from 'react'

const RestaturantMenu = () => {
    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=16866&catalog_qa=undefined&submitAction=ENTER")
        const res = await data.json()
        console.log(res)
    }
    return (
        <div>RestaturantMenu</div>
    )
}

export default RestaturantMenu
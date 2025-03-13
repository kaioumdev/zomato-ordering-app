import React from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({ data }) => {
    return (
        <div>
            <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between'>
                <span>{data?.title} ({data?.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {/* accordian body */}
            <ItemList></ItemList>
        </div>
    )
}

export default RestaurantCategory
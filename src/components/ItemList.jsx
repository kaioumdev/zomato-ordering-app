import React from 'react'
import { CDN_URL } from '../utils/contants'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleCartItem = (item) => {
        dispatch(addItem(item))
    }
    return (
        <div>
            {
                items.map((item) => (
                    <div key={item.card.info.id} className='p-2 m-2 bg-gray-200 border-b-2 text-left flex justify-between'>
                        <div className='w-9/12'>
                            <div className='py-2'>
                                <span>{item?.card?.info?.name}</span>
                                <span> - $ {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                            </div>
                            <p className='text-xs'>{item?.card?.info?.description}</p>
                        </div>
                        <div className='w-3/12 p-4'>
                            <div className='absolute'>
                                <button onClick={() => handleCartItem(item)} className='p-2 mx-16 rounded-lg text-white bg-black shadow-lg m-auto'>Add +</button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId} alt="" className='w-full' />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList
import React from 'react'
import { useSelector } from 'react-redux'
import ItemList from './ItemList'

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items)
    return (
        <div className='text-center m-4 p-4'>
            <h1 className='text-2xl font-bold'>Cart</h1>
            <div>
                <ItemList items={cartItems}></ItemList>
            </div>
        </div>
    )
}

export default Cart
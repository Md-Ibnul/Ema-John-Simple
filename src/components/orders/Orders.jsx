import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../reviewItems/ReviewItem';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromId = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    console.log(savedCart);
    return (
        <div className='shop-container'>
            <div className='review-container'>

                {
                    cart.map(product => <ReviewItem
                    product = {product}
                    key={product.id}
                    handleRemoveFromId = {handleRemoveFromId}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;
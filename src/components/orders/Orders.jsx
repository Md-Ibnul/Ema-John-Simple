import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../reviewItems/ReviewItem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromId = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
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
                <Cart 
                cart={cart}
                handleClearCart = {handleClearCart}
                >
                    <Link to='/checkout'>
                        <button className='proceed-btn'>
                            Proceed Checkout
                            <FontAwesomeIcon icon={faCreditCard} />
                            </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
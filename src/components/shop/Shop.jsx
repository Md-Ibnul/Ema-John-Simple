import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb.js';
import Cart from '../cart/Cart.jsx';
import Product from '../product/Product.jsx';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        // step-1 get id of the addedProduct
        for(const id in storedCart){
            // step-2 get product from product state by using id
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
            // step-3 added quantity
            const quantity = storedCart[id];
            addedProduct.quantity =quantity;
            // step-4 add the addedProduct to the saved Cart
            saveCart.push(addedProduct)
        }
        // step-5 set cart
        setCart(saveCart);
        }
    },[products])


    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart (newCart); 

        addToDb(product.id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
            {
                products.map(product => <Product
                product = {product}
                key = {product.id}
                handleAddToCart = {handleAddToCart}
                ></Product>)
            }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                handleClearCart = {handleClearCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;
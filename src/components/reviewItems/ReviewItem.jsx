import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({product, handleRemoveFromId}) => {
    const {id, img, price, name, quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span>${price}</span></p>
                <p>Order Quantity: <span>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveFromId(id)} className='btn-dlt'>
            <FontAwesomeIcon className='dlt-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;
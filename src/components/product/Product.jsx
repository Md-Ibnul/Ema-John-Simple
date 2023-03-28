import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, seller, price, ratings, img } = props.product;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <small>Manufacture: {seller}</small>
        <br />
        <small>Ratting: {ratings} stars</small> <br />
      </div>
      <button onClick={() => handleAddToCart(props.product)}>
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;

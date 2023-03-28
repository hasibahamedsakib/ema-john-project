import React from "react";
import "./product.css";

const Product = ({ product }) => {
  const { img, name, price, ratings, seller } = product;

  return (
    <div className="product-container">
      <div className="product-cart">
        <img draggable="false" src={img} alt="product-image" />
        <div className="cart-items">
          <h5>{name}</h5>
          <h6>Price: ${price}</h6>
          <div>
            <p>Manufacturer : {seller}</p>
            <p>Rating : {ratings} stars</p>
          </div>
        </div>
      </div>
      <button>Add to Cart </button>
    </div>
  );
};

export default Product;

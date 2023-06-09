import { faCartPlus, faEraser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./product.css";
const shoppingCart = <FontAwesomeIcon icon={faCartPlus} />;
const DeleteLeft = <FontAwesomeIcon icon={faEraser} />;

const Product = ({ product, handleClick, removeClick }) => {
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
      <button onClick={() => handleClick(product)}>
        Add to Cart {shoppingCart}
      </button>
      <button onClick={() => removeClick(product.id)}>
        Remove to cart {DeleteLeft}
      </button>
    </div>
  );
};

export default Product;

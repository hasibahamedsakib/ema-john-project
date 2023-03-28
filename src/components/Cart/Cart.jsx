import React from "react";
import "./cart.css";
const Cart = ({ cart }) => {
  let price = 0;
  for (const product of cart) {
    price = price + product.price;
  }
  return (
    <>
      <div className="order-summary">
        <h1>Order Summary</h1>

        <div>
          <h3>Selected items : {cart.length}</h3>

          <h3>Total Price : ${price} </h3>

          <h3>Total shopping Charge : $-- </h3>
        </div>
      </div>
    </>
  );
};

export default Cart;

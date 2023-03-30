import React from "react";
import "./cart.css";
const Cart = ({ cart }) => {
  // local storage part

  let totalShipping = 0;
  let totalPrice = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * quantity;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="order-summary">
      <h1>Order Summary</h1>

      <div>
        <h3>Selected items : {cart.length}</h3>

        <h3>Total Price : $ {totalPrice} </h3>

        <h3>Total shopping Charge : $ {totalShipping} </h3>
        <h3>Tax : $ {tax}</h3>
        <h2>Grand Total: $ {grandTotal}</h2>
      </div>
    </div>
  );
};

export default Cart;

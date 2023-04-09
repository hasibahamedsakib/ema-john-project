import { faCreditCard, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./cart.css";
const Cart = ({ cart, clearCart }) => {
  // local storage part

  let totalShipping = 0;
  let totalPrice = 0;
  let quantity = 0;
  let totalTax = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    quantity = quantity + product.quantity;
    totalPrice += product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;

    totalTax = totalPrice + product.price;
  }
  let tax = (totalTax * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="order-summary">
      <h1>Order Summary</h1>

      <div>
        <h3>Selected items : {quantity}</h3>

        <h3>Total Price : $ {totalPrice} </h3>

        <h3>Total shopping Charge : $ {totalShipping} </h3>
        <h3>Tax : $ {tax}</h3>
        <h2>Grand Total: $ {grandTotal}</h2>
      </div>
      <button
        onClick={clearCart}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "40px",
          width: "100%",
          fontSize: "22px",
          backgroundColor: "#ff3030",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          color: "white",
          marginTop: "50px",
        }}
      >
        Clear Cart <FontAwesomeIcon icon={faTrashCan} style={{}} />{" "}
      </button>
      <button
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "40px",
          width: "100%",
          fontSize: "22px",
          backgroundColor: "#ff9900",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          color: "white",
          marginTop: "15px",
        }}
      >
        Proceed Checkout{" "}
        <FontAwesomeIcon
          onClick={() => deleteItem(product.id)}
          icon={faCreditCard}
        />{" "}
      </button>
    </div>
  );
};

export default Cart;

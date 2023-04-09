import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import "../Cart/cart.css";
import ReviewItem from "../RevewItem/RevewItem";

const Order = () => {
  const product = useLoaderData();
  const [cart, setCart] = useState(product);

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((pd) => pd.id !== id);

    setCart(remaining);
    removeFromDb(id);
  };
  return (
    <div className="orderPage">
      <div className="product-dec">
        {cart.map((pd) => (
          <ReviewItem key={pd.id} product={pd} deleteItem={handleRemoveItem} />
        ))}
      </div>
      <div className="product-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Order;

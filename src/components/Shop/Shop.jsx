import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleClick = (product) => {
    cart.map((c) => setPrice(price + c.price));

    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="all-products">
        {products.map((product) => (
          <Product
            product={product}
            handleClick={handleClick}
            key={product.id}
          />
        ))}
      </div>
      <div className="order-summary">
        <h1>Order Summary</h1>

        <div>
          <h3>Selected items : {cart.length}</h3>

          <h3>Total Price : ${price} </h3>

          <h3>Total shopping Charge : $-- </h3>
        </div>
      </div>
    </div>
  );
};

export default Shop;

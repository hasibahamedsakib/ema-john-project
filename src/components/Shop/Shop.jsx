import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleClick = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  useEffect(() => {
    const saveCart = [];
    const storeCart = getShoppingCart();
    for (let id in storeCart) {
      const findProductObj = products.find((pd) => pd?.id === id);
      if (findProductObj) {
        const storeQuantity = storeCart[id];
        findProductObj.quantity = storeQuantity;

        saveCart.push(findProductObj);
      }
    }
    setCart(saveCart);
  }, [products]);

  const removeClick = (id) => {
    // get shopping cart
    let getShoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));

    alert(`product delete function is coming`, id);
  };

  return (
    <div className="shop-container">
      <div className="all-products">
        {products.map((product) => (
          <Product
            product={product}
            handleClick={handleClick}
            removeClick={removeClick}
            key={product.id}
          />
        ))}
      </div>
      <div className="Cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;

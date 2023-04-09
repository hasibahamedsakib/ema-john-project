import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
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
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
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
        <Cart cart={cart} clearCart={handleClearCart}>
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
            Review Order{" "}
            <FontAwesomeIcon
              onClick={() => deleteItem(product.id)}
              icon={faCreditCard}
            />{" "}
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;

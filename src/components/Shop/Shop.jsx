import React, { useEffect, useState } from "react";
import { addToDb } from "../../utilities/fakedb";
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
  const removeClick = (id) => {
    // get shopping cart
    let getShoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));

    if (getShoppingCart) {
      getShoppingCart.slice(getShoppingCart.find((pd) => pd.id === id).id, 1);
      localStorage.setItem("shopping-cart", JSON.stringify(getShoppingCart));

      // let shoppingCart = JSON.parse(getShoppingCart);
      // if (id in shoppingCart) {
      //   delete shoppingCart[id];
      //   localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
      // }
    }
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

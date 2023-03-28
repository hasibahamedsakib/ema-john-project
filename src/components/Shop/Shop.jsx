import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="all-products">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      <div>
        <h1>order summery</h1>
      </div>
    </div>
  );
};

export default Shop;

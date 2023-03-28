import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav-bar">
        <img src={logo} alt="image" />

        <div className="nav-link">
          <a href="/order">Order</a>
          <a href="/order-review">Orders Review</a>
          <a href="/manage-inventory">Manage Inventory</a>
          <a href="/login">LogIn</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;

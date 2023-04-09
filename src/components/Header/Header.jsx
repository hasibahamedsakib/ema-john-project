import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav-bar">
        <Link to="/">
          {" "}
          <img src={logo} alt="image" />
        </Link>

        <div className="nav-link">
          <Link to="/order">Order</Link>
          <Link to="/order-review">Orders Review</Link>
          <Link to="/inventory">Manage Inventory</Link>
          <Link to="/login">LogIn</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;

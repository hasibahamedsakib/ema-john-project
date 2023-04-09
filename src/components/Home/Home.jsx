import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./Navigation.css";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="nav-container">
        <h3>
          <Link to="/">Shoppingo!</Link>
        </h3>
        <div className="nav-container-pages">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;

import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = ({ cartItem }) => {
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
            <li>
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping cart-icon">
                  <p>{cartItem}</p>
                </i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;

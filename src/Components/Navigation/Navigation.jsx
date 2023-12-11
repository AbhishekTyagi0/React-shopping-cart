import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="nav-container">
        <h3>Shoppingo!</h3>
        <div className="nav-container-pages">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;

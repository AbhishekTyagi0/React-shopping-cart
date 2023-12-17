import React from "react";
import "./Banner.css";
import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();

  const shopNow = () => {
    navigate("/shop");
  };

  return (
    <div className="banner-container">
      <div className="banner-img-container"></div>
      <div className="banner-led">
        <div>
          <h3>LED SmartTV 65'</h3>
          <h2>
            Starting <span>@55,999</span>* only
          </h2>
          <button onClick={() => shopNow()}>Shop Now</button>
        </div>
        <div>
          <p>Pay on delivery</p>
          <p>7 days money-back guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

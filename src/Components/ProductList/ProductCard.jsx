import React from "react";

const ProductCard = ({ image, title, price, rating, review }) => {
  return (
    <div className="cards">
      <img src={image} alt="images" />
      <h3>{title}</h3>
      <p>
        Price: <span>${price}</span>
      </p>
      <div>
        <p>
          Reviews: <span>({review})</span>
        </p>
        <p>
          Rating: <span>({rating})</span>
        </p>
      </div>
      <div className="cards-button">
        <button>Buy Now</button>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

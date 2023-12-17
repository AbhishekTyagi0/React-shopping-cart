import React, { useEffect, useState } from "react";
import CartProduct from "../Components/CartProduct/CartProduct";
import { useLocation, useNavigate } from "react-router";

const Cart = ({
  cartItem,
  setCartItem,
  decreaseItem,
  increaseItem,
  onRemove,
  totalAmount,
}) => {
  console.log(cartItem);
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/shop");
  };
  const handleCheckout = () => {
    setCartItem([]);
    navigate("/shop");
    alert("Are you sure you wants to checkout!");
  };

  return (
    <>
      {cartItem.length > 0 && (
        <div className="checkout-cart">
          <button className="btn1" onClick={() => handleShopNow()}>
            Shop More
          </button>
          <h2>
            Gross Amount: ${cartItem.length > 0 ? totalAmount().toFixed(2) : 0}
          </h2>
          <button className="btn2" onClick={() => handleCheckout()}>
            Checkout Now
          </button>
        </div>
      )}
      <div className="main-cart-container">
        {cartItem.length === 0 && <h1>Cart empty: Shop Now</h1>}
        {cartItem.length > 0 && (
          <CartProduct
            cartItem={cartItem}
            decreaseItem={decreaseItem}
            increaseItem={increaseItem}
            cartItemQuantity={cartItem[0].cartItemQuantity}
            onRemove={onRemove}
          />
        )}
      </div>
    </>
  );
};

export default Cart;

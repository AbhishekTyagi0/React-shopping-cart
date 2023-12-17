import React from "react";
import CartProduct from "../Components/CartProduct/CartProduct";

const Cart = ({ cartItem, decreaseItem, increaseItem, onRemove }) => {
  console.log(cartItem);

  return (
    <>
      {cartItem.length > 0 && (
        <div className="checkout-cart">
          <button className="btn1">Shop More</button>
          <h2>Gross Amount: 100$</h2>
          <button className="btn2">Checkout Now</button>
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

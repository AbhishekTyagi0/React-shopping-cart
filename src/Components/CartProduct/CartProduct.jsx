import "./cartProduct.css";

const CartProduct = ({ cartItem, decreaseItem, increaseItem, onRemove }) => {
  return (
    <>
      {cartItem.map((carts) => (
        <div className="cart-container" key={carts.id}>
          <img src={carts.image} alt="image" />
          <div className="title-price">
            <h3>{carts.title}</h3>
            <h5>Price: ${carts.price}</h5>
          </div>
          <div>
            <button onClick={() => decreaseItem(carts.id)}>-</button>
            <span>
              {isNaN(carts.cartItemQuantity) ? 0 : carts.cartItemQuantity}
            </span>
            <button onClick={() => increaseItem(carts.id)}>+</button>
          </div>
          <div>
            <p>Total Price: ${carts.cartItemQuantity * carts.price}</p>
            <p onClick={() => onRemove(carts.id)}>
              remove <span>x</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartProduct;

import React, { useEffect, useState } from "react";
import Navigation from "./Components/Navigation/Navigation";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Cart from "./Pages/Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          mode: "cors",
        });
        if (!response.ok) {
          throw new Error(
            `This is an HTTP Error: The error is ${response.error}`
          );
        }
        const data = await response.json();
        console.log(data);
        setProducts(data);
        setError(null);
      } catch (error) {
        setError(error);
        setProducts(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    const updateCart = [...cartItem];
    const findItem = updateCart.find((cartItem) => cartItem.id === item.id);

    if (findItem) {
      handleIncrement(item.id);
    } else {
      updateCart.push({ ...item, cartItemQuantity: 1 });
      setCartItem(updateCart);
    }
  };

  const handleBuyNow = (item) => {
    const updateCart = [...cartItem];
    const findItem = updateCart.find((items) => items.id === item.id);

    if (findItem) {
      handleIncrement(item.id);
    } else {
      updateCart.push({ ...item, cartItemQuantity: 1 });
      setCartItem(updateCart);
    }
  };

  const handleIncrement = (cartId) => {
    setCartItem((cartItem) =>
      cartItem.map((item) =>
        item.id === cartId
          ? { ...item, cartItemQuantity: item.cartItemQuantity + 1 }
          : item
      )
    );
  };

  const handleDecrement = (cartId) => {
    setCartItem((cartItem) =>
      cartItem.map((item) =>
        item.id === cartId
          ? { ...item, cartItemQuantity: item.cartItemQuantity - 1 }
          : item
      )
    );
  };

  const totalAmount = () => {
    return cartItem.reduce(
      (total, item) => total + item.price * item.cartItemQuantity,
      0
    );
  };

  const removeHandler = (removeId) => {
    setCartItem((cartItem) => cartItem.filter((item) => item.id !== removeId));
  };

  return (
    <Router>
      <Navigation cartItem={cartItem.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              products={products}
              error={error}
              loading={loading}
              onAddToCart={handleAddToCart}
              onBuy={handleBuyNow}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItem={cartItem}
              setCartItem={setCartItem}
              increaseItem={handleIncrement}
              decreaseItem={handleDecrement}
              onRemove={removeHandler}
              totalAmount={() => totalAmount()}
            />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

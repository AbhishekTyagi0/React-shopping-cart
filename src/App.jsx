import React, { useEffect, useState } from "react";
import Navigation from "./Components/Navigation/Navigation";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop products={products} error={error} loading={loading} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

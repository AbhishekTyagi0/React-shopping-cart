import React from "react";
import "./pages.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-page">
        <h2>About My Shopping Cart App</h2>
        <p>Welcome to my innovative shopping cart app built with React!</p>
        <h3>Key Features:</h3>
        <ul>
          <li>Intuitive User Interface</li>
          <li>Effortless Cart Management</li>
          <li>Secure Checkout Process</li>
          <li>Responsive Design for Various Devices</li>
        </ul>
        <h3>Technology Stack:</h3>
        <p>
          This shopping cart app is powered by React, leveraging the flexibility
          and efficiency of this popular JavaScript library. This also uses of
          other technologies such as <b>React Router</b> for navigation and
          state management.
        </p>
        <p>
          Feel free to explore this app, add products to your cart, and
          experience the convenience of online shopping at its best!
        </p>

        <h3>Contact Me</h3>
        <p>
          If you have any questions, suggestions, or just want to say hello,
          feel free to contact me at <b>abhishektyagigi4310@gmail.com</b>.
        </p>
      </div>
    </div>
  );
};

export default About;

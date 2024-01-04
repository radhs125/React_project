// Logo.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"; // Replace with the actual path to your logo
import './Logo.css';

const Logo = () => {
  return (
    <Link to="/" className="home">
      <img src={logo} alt="LittleJoy Logo" className="logo-img" />
      <span className="trailblazer">LittleJoy</span>
    </Link>
  );
};

export default Logo;

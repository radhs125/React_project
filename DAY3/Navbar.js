// Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from "./Logo";

const Navbar = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("loggedInUsername");
    localStorage.removeItem("loggedInPassword");
    navigate("/login");
  };

  // Check if a user is logged in
  const isLoggedIn = localStorage.getItem("loggedInUsername");

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav1">
          <Logo />
          <Link to="/" className="home"></Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/categories" className="nav-link">
            Categories
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        {isLoggedIn ? (
          // Display logout button if logged in
          <li className="nav-item">
            <li className="logout-button" onClick={handleLogout}>
              Logout
            </li>
          </li>
        ) : (
          // Display login/signup link if not logged in
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login/Register
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

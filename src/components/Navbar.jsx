import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <center><h1>Women Business Directory</h1></center>
      <div>
        <Link to="/">Home</Link>

        <Link to="/register">Register Business</Link>

        <Link to="/admin">Admin Panel</Link>
      </div>
    </nav>
  );
};

export default Navbar;

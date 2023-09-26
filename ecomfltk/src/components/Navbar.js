import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="links">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/store">STORE</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
        </div>
      </nav>
    </>
  );
};

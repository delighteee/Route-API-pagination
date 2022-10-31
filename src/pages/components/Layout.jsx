import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    textDecoration: "underline",
    color: "white",
    transition: "all 2s",
  };

  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? activeStyle : { textDecoration: "none" }
      }
      to={to}
      end
      {...props}
    />
  );
};

export default function Layout() {
  return (
    <nav className="nav--bar">
      <div className="logo">
        <h1>Welcome to Breakfast Spots</h1>
      </div>
      <div>
        {" "}
        <CustomNavLink to="/">Home</CustomNavLink> |{" "}
        <CustomNavLink to="/about">About | </CustomNavLink>{" "}
        <CustomNavLink to="/users">Users</CustomNavLink>{" "}
        
      </div>
    </nav>
  );
}

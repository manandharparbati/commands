import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <p>Synical</p>
          <p>Bot</p>
        </div>
        <div className="nav-bar">
          <nav>
            <NavLink to="/Home">Home </NavLink>
            <NavLink to="/Commands">Commands</NavLink>
            <NavLink to="/Developers">Developers</NavLink>
            <NavLink to="/Docs">Doc</NavLink>
            <NavLink to="/Contact Us">Contact Us</NavLink>
            <NavLink to="/Add to Discord">Add to Discord</NavLink>
          </nav>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;

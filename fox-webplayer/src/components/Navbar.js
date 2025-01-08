import React from 'react';
import { Link } from "react-router-dom";
//import { FaHome, FaSearch, FaMusic, FaUserAlt, FaHeadphones } from "react-icons/fa";

const Navbar = () => {
    return (
      <>
      <nav className="navbar">
        <div className="logo-container">
          <img src="/foxlogo.png" alt="logo" className="navbar-logo" />
          <span className="app-name">Foxplayer</span>
        </div>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/account">Account</Link></li>



          </ul>
      </nav>
      </>

    );
  }
  
  export default Navbar;
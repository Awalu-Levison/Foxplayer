import React from 'react';
import { Link } from "react-router-dom";
//import { FaHome, FaSearch, FaMusic, FaUserAlt, FaHeadphones } from "react-icons/fa";

function Navbar() {
    return (
      <nav className="navbar">
        <h2 className="navbar-logo">FoxPlayer</h2>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/library">Library</Link></li>
          <li><Link to="/playlist">Playlist</Link></li>
          <li><Link to="/account">Account</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
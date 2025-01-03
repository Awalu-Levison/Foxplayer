import React from 'react';
import { FaHome, FaSearch, FaMusic, FaUserAlt, FaHeadphones } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        {/** navigation menu */}
        <ul className="nav-menu">
            <li className="nav-item">
                <FaHome />
                <span>Home</span>
            </li>
            <li className="nav-item">
                <FaSearch />
                <span>Search</span>
            </li>
            <li className="nav-item">
                <FaMusic />
                <span>Library</span>
            </li>
            <li className="nav-item">
                <FaHeadphones />
                <span>Radio</span>
            </li>
            <li className="nav-item">
                <FaUserAlt />
                <span>Profile</span>
            </li>
      </ul>
    </nav>
  );
};

export default Navbar;
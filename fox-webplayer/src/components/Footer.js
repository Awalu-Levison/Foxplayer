import React from "react";
import "../styles/Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>© {new Date().getFullYear()} Foxplayer, All rights reserved.</p>
        </div>
        <div className="footer-section">
        <a href="/terms">About Us</a> |<a href="/Contact">Contact Us</a> | <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a> | <a href="/terms">Testimonials</a>
        </div>
        <div className="footer-section social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// src/components/Contact.js
import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          Have questions or need support? We'd love to hear from you! Reach out to us using the form below or connect with us on social media.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
          </div>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
        <div className="social-links">
          <a href="https://web.facebook.com/awalu.levison.3/" aria-label="Facebook">Facebook</a>
          <a href="https://x.com/LevisonAwalu" aria-label="Twitter">Twitter</a>
          <a href="https://www.instagram.com/awalulevison/" aria-label="Instagram">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

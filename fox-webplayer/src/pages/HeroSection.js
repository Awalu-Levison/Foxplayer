import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img className="hero-image"
      src="./firstpage2.png"
        //src="https://via.placeholder.com/1500x600"
        alt="Hero Background"
      />
      <div className="hero-content">
        <h1>Welcome to Foxplayer streaming platform</h1>
        <p>Discover music you love, curated just for you.</p>
        <button className="hero-button">Explore Music</button>
      </div>
    </div>
  );
};

export default HeroSection;

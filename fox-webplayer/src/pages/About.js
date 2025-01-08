import React from "react";
import "../styles/About.css"; // Import CSS for styling

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Foxplayer</h2>
          <p>
            Welcome to <strong>Foxplayer</strong>, the ultimate destination for all your music needs! 
            Discover, stream, and enjoy the unlimited list of songs from around the world. 
            Whether you're a fan of pop, rock, jazz, or classical, we've got you covered.
          </p>
          <p>
            Our mission is to bring the joy of music to everyone, everywhere. 
            With personalized playlists, curated recommendations, and seamless streaming, 
            we make it easy to find the perfect soundtrack for every moment.
          </p>
        </div>
        <div className="about-image">
          <img src="./music-illustration.jpg" alt="Music Illustration" />
        </div>
      </div>
    </section>
  );
};

export default About;

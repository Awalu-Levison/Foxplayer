import React from 'react';
import '../styles/Trending.css';

const Trending = () => {
  // Mock data for trending songs/albums
  const trendingData = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      cover: "https://via.placeholder.com/150", // Replace with actual album cover URLs
    },
    {
      id: 2,
      title: "Levitating",
      artist: "Dua Lipa",
      cover: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Save Your Tears",
      artist: "The Weeknd",
      cover: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      cover: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="trending-container">
      <h2>Trending Now</h2>
      <div className="trending-grid">
        {trendingData.map((item) => (
          <div key={item.id} className="trending-card">
            <img src={item.cover} alt={item.title} className="trending-cover" />
            <h3>{item.title}</h3>
            <p>{item.artist}</p>
            <button className="play-button">Play</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;

import React, { useState } from 'react';
import '../styles/Recommendations.css';

const Recommendations = () => {
  // Mock data for recommended songs
  const recommendedSongs = [
    {
      id: 1,
      title: "Shape of You",
      artist: "Ed Sheeran",
      cover: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      id: 2,
      title: "Someone Like You",
      artist: "Adele",
      cover: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Believer",
      artist: "Imagine Dragons",
      cover: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Dance Monkey",
      artist: "Tones and I",
      cover: "https://via.placeholder.com/150",
    },
  ];

  // State to track the currently playing song
  const [playingSong, setPlayingSong] = useState(null);

  // Function to handle play button click
  const handlePlay = (song) => {
    setPlayingSong(song.id);
    console.log(`Now playing: ${song.title} by ${song.artist}`);
  };

  return (
    <div className="recommendations-container">
      <h2>Recommended for You</h2>
      <div className="recommendations-grid">
        {recommendedSongs.map((song) => (
          <div key={song.id} className="recommendation-card">
            <img src={song.cover} alt={song.title} className="recommendation-cover" />
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            <button
              className={`play-button ${playingSong === song.id ? 'playing' : ''}`}
              onClick={() => handlePlay(song)}
            >
              {playingSong === song.id ? 'Playing...' : 'Play'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;

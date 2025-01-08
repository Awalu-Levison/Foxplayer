import React, { useState } from 'react';
import '../styles/Recommendations.css';

const Recommendations2 = () => {
  // Mock data for recommended songs with audio URLs
  const recommendedSongs = [
    {
      id: 1,
      title: "Shape of You",
      artist: "Ed Sheeran",
      cover: "https://via.placeholder.com/150",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Example audio file
    },
    {
      id: 2,
      title: "Someone Like You",
      artist: "Adele",
      cover: "https://via.placeholder.com/150",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 3,
      title: "Believer",
      artist: "Imagine Dragons",
      cover: "https://via.placeholder.com/150",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      id: 4,
      title: "Dance Monkey",
      artist: "Tones and I",
      cover: "https://via.placeholder.com/150",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
  ];

  // State to track the currently playing song
  const [playingSong, setPlayingSong] = useState(null);
  const [audioPlayer, setAudioPlayer] = useState(null);

  // Function to handle play button click
  const handlePlay = (song) => {
    if (audioPlayer) {
      audioPlayer.pause(); // Pause the current audio
    }

    if (playingSong === song.id) {
      setPlayingSong(null); // Stop playback
    } else {
      const newAudio = new Audio(song.audio);
      newAudio.play();
      setAudioPlayer(newAudio);
      setPlayingSong(song.id);

      // Listen for the end of playback to reset the playing state
      newAudio.onended = () => {
        setPlayingSong(null);
        setAudioPlayer(null);
      };
    }
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
              {playingSong === song.id ? 'Pause' : 'Play'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations2;

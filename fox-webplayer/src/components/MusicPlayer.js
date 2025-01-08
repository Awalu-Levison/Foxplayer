import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import '../styles/MusicPlayer.css';

const MusicPlayer = ({ playingSong, audioPlayer, setAudioPlayer, setPlayingSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  // Function to handle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      audioPlayer.pause();
      setIsPlaying(false);
    } else {
      audioPlayer.play();
      setIsPlaying(true);
    }
  };

  // Function to handle repeat button click
  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
    audioPlayer.loop = !isRepeat; // Toggle repeat functionality
  };

  // Function to handle shuffle button click
  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
    // For simplicity, shuffle isn't implemented in the current audio array
    // but you can shuffle the playlist and play a random song.
  };

  // When song changes, update the player
  useEffect(() => {
    if (playingSong && audioPlayer) {
      audioPlayer.play();
      setIsPlaying(true);
    }
  }, [playingSong, audioPlayer]);

  // Function to display the current song
  const getCurrentSongInfo = () => {
    return playingSong ? `${playingSong.title} - ${playingSong.artist}` : "No song playing";
  };

  return (
    <div className="music-player">
      <div className="song-info">
        <p>{getCurrentSongInfo()}</p>
      </div>
      <div className="controls">
        <button className="control-button" onClick={toggleShuffle}>
          <i className={`fa ${isShuffle ? 'fa-random active' : 'fa-random'}`} />
        </button>
        <button className="control-button" onClick={toggleRepeat}>
          <i className={`fa ${isRepeat ? 'fa-repeat active' : 'fa-repeat'}`} />
        </button>
        <button className="control-button" onClick={togglePlayPause}>
          <i className={`fa ${isPlaying ? 'fa-pause' : 'fa-play'}`} />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;

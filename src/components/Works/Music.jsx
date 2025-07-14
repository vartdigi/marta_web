import React, { useRef, useState, useEffect } from 'react';
import Libertango from '../../../assets/Libertango.wav';
import gangsta from '../../../assets/gangsta.wav';
import Bach from '../../../assets/Bach.wav';
import './Music.css';
import Marta from '../../../assets/marta.png';

const tracks = [
  { title: 'Libertango - Astor Piazzolla', file: Libertango },
  { title: "Gangsta's Paradise", file: gangsta },
  { title: 'Bach - Air', file: Bach },
];

const Music = () => {
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const currentTrack = tracks[currentTrackIndex];

  const handleTrackClick = (index) => {
    setCurrentTrackIndex(index);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentTrackIndex]);

  return (
    <div className="music-container">
      <div className="main-player">
        <img src={Marta} alt="Album" className="album-photo" />
        <div className="player-details">
          <h3>{currentTrack.title}</h3>
          <p className="band-name">Marta Duo</p>
          <audio ref={audioRef} controls key={currentTrack.file}>
            <source src={currentTrack.file} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>

      <div className="track-list">
        {tracks.map((track, index) => (
          <div
            key={index}
            className={`track-item ${
              index === currentTrackIndex ? 'active' : ''
            }`}
            onClick={() => handleTrackClick(index)}
          >
            <span className="track-number">{index + 1}.</span>
            <span className="track-title">{track.title}</span>
            <button className="play-button">▶</button>
          </div>
        ))}
        <button class="more-music-btn">More Music</button>
      </div>
    </div>
  );
};

export default Music;

import React from "react";
import { useParams, useLocation } from "react-router-dom";

function SongDetail() {
  const { title } = useParams();
  const location = useLocation();
  const { song } = location.state || {};

  if (!song) {
    return <p style={{ color: "#00f0ff" }}>No song data available for {title}</p>;
  }

  return (
    <>
      <style>
        {`
          .song-detail-container {
            padding: 40px;
            background: #000;
            color: #00f0ff;
            min-height: 100vh;
            font-family: 'Courier New', monospace;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          /* Album cover block */
          .album-cover {
            width: 220px;
            height: 220px;
            background: linear-gradient(135deg, #00f0ff, #001f3f);
            border-radius: 12px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: #fff;
            text-shadow: 0 0 10px #00f0ff;
            box-shadow: 0 0 25px rgba(0,255,255,0.6);
          }

          .song-title {
            font-size: 2rem;
            margin: 10px 0;
            text-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff;
          }

          .song-artist {
            font-size: 1.2rem;
            color: #fff;
            margin-bottom: 30px;
          }

          /* Futuristic audio player */
          audio {
            width: 100%;
            max-width: 500px;
            margin-bottom: 40px;
            border-radius: 12px;
            background: rgba(0,255,255,0.05);
            padding: 10px;
            box-shadow: 0 0 20px rgba(0,255,255,0.6);
            filter: drop-shadow(0 0 5px #00f0ff);
          }

          audio::-webkit-media-controls-panel {
            background: rgba(0, 0, 0, 0.85);
            border-radius: 12px;
            border: 1px solid #00f0ff;
          }

          audio::-webkit-media-controls-play-button,
          audio::-webkit-media-controls-pause-button {
            background-color: #00f0ff;
            border-radius: 50%;
            box-shadow: 0 0 10px #00f0ff;
          }

          audio::-webkit-media-controls-current-time-display,
          audio::-webkit-media-controls-time-remaining-display {
            color: #00f0ff;
            text-shadow: 0 0 5px #00f0ff;
          }

          audio::-webkit-media-controls-volume-slider {
            background: #00f0ff;
          }

          /* Info panel */
          .info-panel {
            margin-top: 20px;
            padding: 20px;
            border: 1px solid #00f0ff;
            border-radius: 10px;
            background: rgba(0,255,255,0.05);
            box-shadow: 0 0 20px rgba(0,255,255,0.4);
            max-width: 500px;
            text-align: left;
          }

          .info-panel h3 {
            margin: 0 0 10px;
            color: #00f0ff;
            text-shadow: 0 0 5px #00f0ff;
          }

          .info-panel p {
            margin: 5px 0;
            color: #fff;
          }
        `}
      </style>

      <div className="song-detail-container">
        {/* Album cover */}
        <div className="album-cover">🎶</div>

        {/* Title + Artist */}
        <h2 className="song-title">{song.title}</h2>
        <p className="song-artist">Artist: {song.artist}</p>

        {/* Audio player */}
        <audio controls src={song.url}></audio>

        {/* Extra info panel */}
        <div className="info-panel">
          <h3>Song Details</h3>
          <p><strong>Genre:</strong> {song.genre || "Unknown"}</p>
          <p><strong>Duration:</strong> {song.duration || "3:45"}</p>
          <p><strong>Album:</strong> {song.album || "N/A"}</p>
          <p><strong>Release Year:</strong> {song.year || "2026"}</p>
        </div>
      </div>
    </>
  );
}

export default SongDetail;

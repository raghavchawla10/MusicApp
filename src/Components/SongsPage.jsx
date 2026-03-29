import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SongsPage() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/songs")
      .then(res => res.json())
      .then(data => setSongs(data));
  }, []);

  return (
    <>
      <style>
        {`
          .songs-container {
            text-align: center;
            padding: 30px;
            font-family: 'Courier New', monospace;
            background: #000;
            color: #00f0ff;
            min-height: 100vh;
          }

          .songs-container h2 {
            font-size: 2rem;
            margin-bottom: 20px;
            text-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff;
          }

          .songs-grid {
            display: flex;
            gap: 25px;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 20px;
          }

          .song-card {
            background: rgba(0, 255, 255, 0.05);
            border: 1px solid #00f0ff;
            border-radius: 10px;
            width: 240px;
            padding: 20px;
            box-shadow: 0 0 15px rgba(0,255,255,0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
          }

          .song-card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 25px rgba(0,255,255,0.6);
          }

          .song-image {
            width: 100%;
            height: 120px;
            background: linear-gradient(135deg, #00f0ff, #001f3f);
            border-radius: 8px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 2rem;
            text-shadow: 0 0 10px #00f0ff;
          }

          .song-card h3 {
            margin: 0;
            color: #ffffff;
            text-shadow: 0 0 5px #00f0ff;
          }

          .song-card p {
            margin: 8px 0 12px;
            color: #00f0ff;
            font-weight: bold;
          }
        `}
      </style>

      <div className="songs-container">
        <h2>🎵 My Songs</h2>
        <div className="songs-grid">
          {songs.map(song => (
            <Link 
              key={song.title} 
              to={`/song/${song.title}`} 
              state={{ song }} 
              style={{ textDecoration: "none" }}
            >
              <div className="song-card">
                <div className="song-image">🎶</div>
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default SongsPage;

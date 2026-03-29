import React from "react";
import { Link, Router, Routes , Route } from "react-router-dom";
import SongsPage from "./SongsPage";


function Navbar() {
  return (
    <>
      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #000;
            padding: 14px 28px;
            font-family: 'Courier New', monospace;
            border-bottom: 2px solid #00f0ff;
            box-shadow: 0 0 15px rgba(0,240,255,0.4);
          }

          .navbar-logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #00f0ff;
            text-shadow: 0 0 8px #00f0ff, 0 0 15px #ffffff;
            animation: glitch 2s infinite;
          }

          @keyframes glitch {
            0% { text-shadow: 2px 2px #00f0ff, -2px -2px #ffffff; }
            50% { text-shadow: -2px 2px #ffffff, 2px -2px #00f0ff; }
            100% { text-shadow: 2px 2px #00f0ff, -2px -2px #ffffff; }
          }

          .navbar-links {
            list-style: none;
            display: flex;
            gap: 25px;
            margin: 0;
            padding: 0;
          }

          .navbar-links li a {
            text-decoration: none;
            color: #ffffff;
            font-weight: 600;
            letter-spacing: 1px;
            transition: color 0.3s ease, text-shadow 0.3s ease;
          }

          .navbar-links li a:hover {
            color: #00f0ff;
            text-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff;
          }
        `}
      </style>

      <nav className="navbar">
        <div className="navbar-logo">🎵 MusicApp</div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/songs">Songs</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

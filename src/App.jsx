import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import GenresPage from "./Components/GenresPage";
import SongsPage from "./Components/SongsPage";
import SongDetail from "./Components/SongDetail";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="header">
        <Navbar />
      </div>
      <Link to="/songs" style={{ textDecoration: "none", color: "#00f0ff" }}>
  <div style={{ margin: "20px", display: "flex", gap: "10px", alignItems: "center" , backgroundColor : "pink"}}>
    <span>🎵</span>
    <input 
      type="text" 
      placeholder="Type your song name" 
      style={{ 
        padding: "8px", 
        borderRadius: "6px", 
        border: "1px solid #00f0ff", 
        background: "black", 
        color: "#00f0ff" 
      }} 
    />
  </div>
</Link>

      <div className="body">
        <Routes>
          <Route path="/" element={<GenresPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/songs" element={<SongsPage/>}/>
          <Route path="/song/:title" element={<SongDetail />} />
          {/* add more routes here later */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

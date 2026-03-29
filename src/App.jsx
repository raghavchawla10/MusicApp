import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import GenresPage from "./Components/GenresPage";
import SongsPage from "./Components/SongsPage";
import SongDetail from "./Components/SongDetail";

function App() {
  return (
    <Router>
      <div className="header">
        <Navbar />
      </div>
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

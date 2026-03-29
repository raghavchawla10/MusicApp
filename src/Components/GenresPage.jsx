import React from "react";

function GenresPage() {
  const genres = [
    { name: "Rock", description: "Powerful riffs and timeless energy." },
    { name: "Jazz", description: "Smooth improvisation and soulful rhythms." },
    { name: "Hip-Hop", description: "Beats, rhymes, and urban culture." },
    { name: "Classical", description: "Orchestral masterpieces and elegance." },
    { name: "Electronic", description: "Synths, bass drops, and futuristic vibes." },
    { name: "Pop", description: "Catchy hooks and global hits." }
  ];

  return (
    <>
      <style>
        {`
          .genres-container {
            text-align: center;
            padding: 30px;
            font-family: 'Courier New', monospace;
            background: #000;
            color: #00f0ff;
            min-height: 100vh;
          }

          .genres-title {
            font-size: 2.5rem;
            margin-bottom: 30px;
            text-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff;
          }

          .genres-grid {
            display: flex;
            gap: 25px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .genre-card {
            background: rgba(0, 255, 255, 0.05);
            border: 1px solid #00f0ff;
            border-radius: 12px;
            width: 240px;
            padding: 20px;
            box-shadow: 0 0 15px rgba(0,255,255,0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .genre-card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 25px rgba(0,255,255,0.6);
          }

          .genre-card h3 {
            margin: 0;
            color: #ffffff;
            text-shadow: 0 0 5px #00f0ff;
          }

          .genre-card p {
            margin-top: 10px;
            color: #00f0ff;
            font-size: 0.95rem;
          }
        `}
      </style>

      <div className="genres-container">
        <h2 className="genres-title">🎶 Explore Genres</h2>
        <div className="genres-grid">
          {genres.map((genre) => (
            <div key={genre.name} className="genre-card">
              <h3>{genre.name}</h3>
              <p>{genre.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GenresPage;

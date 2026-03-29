import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1 className="about-title">About Our Company</h1>
        <p className="about-subtitle">Innovation • Integrity • Impact</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            We are a forward‑thinking organization dedicated to building
            solutions that redefine industries. Our mission is not just to
            deliver products, but to craft experiences that inspire trust,
            efficiency, and growth.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            To be the <span className="highlight">benchmark of excellence</span>
            in technology and design, empowering businesses and individuals
            worldwide with tools that make life simpler, smarter, and more
            connected.
          </p>
        </section>

        <section className="about-section">
          <h2>Core Values</h2>
          <ul className="about-list">
            <li>Integrity in every decision</li>
            <li>Innovation at every step</li>
            <li>Collaboration across boundaries</li>
            <li>Sustainability for the future</li>
          </ul>
        </section>
      </div>

      <footer className="about-footer">
        © 2026 Corporate MusicApp • All Rights Reserved
      </footer>
    </div>
  );
}

export default About;

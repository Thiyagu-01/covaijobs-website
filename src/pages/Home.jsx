import React, { useState, useEffect } from "react";
import slideImage from "../Images/Hero.webp";
import "../CSS/HeroSection.css";

const HeroSlider = () => {
  const [step, setStep] = useState(0);

  // Auto change every 4 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <img src={slideImage} alt="hero" className="hero-bg" />

      <div className="hero-overlay">
        
        {step === 0 && (
          <div className="hero-content fade-in">
            <h1>
              எனுங்க! இனிமா வேலை தேடி <br />
              அலஞ்செட்டு இருக்கீங்கோ!
            </h1>

            <button
              className="hero-btn"
            >
              Explore Jobs →
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="hero-content fade-in">
            <h1>
              Hire Developers and <br />
              manage them with <span className="highlight">ease</span>
            </h1>

            <button
              className="hero-btn"
            >
              Hire Developer →
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default HeroSlider;
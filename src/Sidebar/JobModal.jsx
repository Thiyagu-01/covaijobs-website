import { useEffect } from "react";
import "./JobModal.css";

export default function JobModal({ onClose }) {

  // Close when pressing ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="indeed-overlay" onClick={onClose}>
      <div
        className="indeed-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="indeed-close" onClick={onClose}>
          ×
        </button>

        <h2 className="indeed-title">Looking for a job?</h2>

        <div className="indeed-illustration">
          🔎
        </div>

        <p className="indeed-text">
          Let's get you to the right place.
        </p>

        <button className="indeed-button">
          Search jobs
        </button>
      </div>
    </div>
  );
}
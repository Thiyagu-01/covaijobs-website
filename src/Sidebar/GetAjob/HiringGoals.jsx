import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HiringGoals.css";

export default function HiringGoals() {
  const navigate = useNavigate();

  const [timeline, setTimeline] = useState("");
  const [count, setCount] = useState(0);

  const handleDecrement = () => setCount((prev) => Math.max(0, prev - 1));
  const handleIncrement = () => setCount((prev) => prev + 1);

  const handleCountChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 0) setCount(val);
    else if (e.target.value === "") setCount(0);
  };

  const handleContinue = () => {
    if (!timeline || count === 0) {
      alert("Please fill in all required fields.");
      return;
    }

     navigate("/job-details", {
  state: { timeline, count }
});
  };

  return (
    <div className="hg-page">
      <div className="hg-card">
        <h1 className="hg-title">Hiring goals</h1>

        <div className="hg-field">
          <label className="hg-label">
            Recruitment timeline for this job{" "}
            <span className="hg-required">*</span>
          </label>

          <div className="hg-select-wrapper">
            <select
              className="hg-select"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
            >
              <option value="">Select an option</option>
              <option value="1-3">1–3 days</option>
              <option value="1-2weeks">1–2 weeks</option>
              <option value="2-4weeks">2–4 weeks</option>
              <option value="1-3months">1–3 months</option>
              <option value="3+months">3+ months</option>
            </select>
            <span className="hg-chevron">▼</span>
          </div>
        </div>

        <div className="hg-field">
          <label className="hg-label">
            Number of people to hire in the next 30 days{" "}
            <span className="hg-required">*</span>
          </label>

          <div className="hg-counter">
            <input
              className="hg-counter-input"
              type="number"
              min="0"
              value={count}
              onChange={handleCountChange}
            />

            <button
              type="button"
              className="hg-counter-btn"
              onClick={handleDecrement}
            >
              −
            </button>

            <button
              type="button"
              className="hg-counter-btn"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>

        <div className="hg-actions">
          <button
            type="button"
            className="hg-continue-btn"
            onClick={handleContinue}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
import { useNavigate } from "react-router-dom";
import "./JobTitle.css";

export default function JobTitle() {
  const navigate = useNavigate();

  return (
    <div className="job-page">
      <div className="job-container">
        <h1 className="job-heading">Add job basics</h1>

        <p className="job-language">
          The job post will be in <strong>English in India</strong>
          <span className="edit-icon"
          onClick={() => navigate("/edit-job-title")}
          > 
          ✎
          </span>
        </p>

        <div className="divider"></div>

        {/* Job Title */}
        <div className="form-group">
          <label>Job title *</label>
          <input type="text" />
        </div>

        <div className="divider"></div>

        {/* Location Type */}
        <div className="form-group">
          <label>Job location type *</label>
          <select>
            <option>In person</option>
            <option>Remote</option>
            <option>Hybrid</option>
          </select>
        </div>

        {/* Location */}
        <div className="form-group">
          <label>What is the job location? *</label>
          <span className="sub-text">Enter a city or location</span>
          <input type="text" />
        </div>

        {/* Buttons */}
        <div className="button-row">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>

          <button className="continue-btn"
          onClick={() => navigate("/hiring-goals")}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
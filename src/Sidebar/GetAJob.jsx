import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import JobModal from "./JobModal";   // ✅ IMPORT MODAL
import { useNavigate } from "react-router-dom";
import "./GetAJob.css";

export default function GetAJob() {
  const [phone, setPhone] = useState("");
  const [showModal, setShowModal] = useState(false); 
  const navigate = useNavigate();

  return (
    <div className="form-wrapper">
      <div className="form-box">
        <h1>Create an employer account</h1>
        <a
          type="button"
          className="job-link"
          onClick={() => setShowModal(true)}
        >
          I'm looking for a job →
        </a>

        <div className="form-group">
          <label>Company name *</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Company website (optional)</label>
          <input type="text" placeholder="https://www.example.com" />
        </div>

        <div className="row">
          <div className="form-group">
            <label>First name *</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Last name *</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-group">
          <label>Phone number</label>
          <p className="sub-text">
            For account management communication. Not visible to job seekers.
          </p>

          <PhoneInput
            country="in"
            value={phone}
            onChange={setPhone}
            enableSearch
            containerClass="phone-container"
            inputClass="phone-input"
            buttonClass="phone-button"
          />
        </div>

        <div className="form-group">
          <label>How did you hear about us?</label>
          <select>
            <option>Select an option</option>
            <option>Word of mouth</option>
            <option>TV</option>
            <option>Social media</option>
            <option>Newspaper</option>
            <option>Radio(AM/FM/XM)</option>
            <option>Mail</option>
            <option>AI Assistant(ex.ChatGPT,Google Gemini)</option>
            <option>Online Video</option>
            <option>Streaming audio(ex.Spotify,Pandora)</option>
            <option>Search engine(Google,Bing,Yahoo)</option>
            <option>Podcast</option>
            <option>Billboard</option>
            <option>Other</option>
          </select>
        </div>

        <div className="checkbox-area">
          <input type="checkbox" />
          <p>
            By clicking this box and providing your telephone number,
            you agree to receive marketing calls.
          </p>
        </div>

        <div className="button-wrapper">
          <button className="continue-btn"
           onClick={() => navigate("/job-title")}
          >Continue →</button>
        </div>
      </div>
       {showModal && <JobModal onClose={() => setShowModal(false)} />}
    </div>

    
  );
}
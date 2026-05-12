import { useState } from "react";
import "../FileStyle/Step1Profile.css"


function Step1Profile({ nextStep }) {
  const [english, setEnglish] = useState("");

  return (
    <div className="profile-step-wrapper">
      <h2 className="profile-title">Profile</h2>

      <div className="profile-form">

        <div className="form-row">
          <label>First name *</label>
          <input type="text" placeholder="e.g.mohan" />
        </div>

        <div className="form-row">
          <label>Last name *</label>
          <input type="text" placeholder="S" />
        </div>

        <div className="form-row">
          <label>Country *</label>
          <select>
            <option>Please select a country</option>
            <option>India</option>
            <option>USA</option>
          </select>
        </div>

        <div className="form-row">
          <label>City *</label>
          <input type="text" placeholder="e.g.Karur" />
        </div>

        <div className="form-row">
          <label>Citizenship *</label>
          <input type="text" placeholder="e.g. Andorra" />
        </div>

        {/* English Proficiency */}
        <div className="form-row">
          <label>English proficiency *</label>

          <div className="radio-group">
            {["Basic", "Intermediate", "Advanced", "Native/Fluent"].map(
              (level) => (
                <label key={level} className="radio-item">
                  <input
                    type="radio"
                    name="english"
                    value={level}
                    checked={english === level}
                    onChange={() => setEnglish(level)}
                  />
                  <span className="radio-dot"></span>
                  {level}
                </label>
              )
            )}
          </div>
        </div>

      </div>

      {/* Next button */}
      <div className="step-footer">
        <button 
        type="button"
        className="next-btn" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Step1Profile;

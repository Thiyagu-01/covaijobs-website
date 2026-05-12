import React, { useState } from "react";
import "../FileStyle/Step6Education.css";

const Step6Education = ({ nextStep, prevStep }) => {
  const [educationRows, setEducationRows] = useState([{}]);
  const [certRows, setCertRows] = useState([{}]);

  return (
    <div className="edu-wrapper">
      {/* ===== EDUCATION ===== */}
      <h3>Education History</h3>

      {educationRows.map((_, index) => (
        <div className="edu-grid" key={index}>
          <select>
            <option>Select Degree</option>
            <option>School</option>
            <option>Diploma</option>
            <option>Bachelors</option>
            <option>Masters</option>
            <option>PhD</option>
          </select>

          <input placeholder="Major" />
          <input placeholder="University" />
          <input type="date" />
          <input type="date" />

          <div className="actions">
            <button
              className="remove-btn"
              disabled={educationRows.length === 1}
              onClick={() =>
                setEducationRows(educationRows.filter((_, i) => i !== index))
              }
            >
              −
            </button>

            <button
              className={`add-btn ${
                index !== educationRows.length - 1 ? "hidden" : ""
              }`}
              onClick={() => setEducationRows([...educationRows, {}])}
            >
              +
            </button>
          </div>
        </div>
      ))}

      {/* ===== CERTIFICATIONS ===== */}
      <h3>Certifications</h3>

      {certRows.map((_, index) => (
        <div className="cert-grid" key={index}>
          <input placeholder="Name" />
          <input placeholder="Issuer" />
          <input placeholder="Year" />

          <div className="actions">
            <button
              className="remove-btn"
              disabled={certRows.length === 1}
              onClick={() =>
                setCertRows(certRows.filter((_, i) => i !== index))
              }
            >
              −
            </button>

            <button
              className={`add-btn ${
                index !== certRows.length - 1 ? "hidden" : ""
              }`}
              onClick={() => setCertRows([...certRows, {}])}
            >
              +
            </button>
          </div>
        </div>
      ))}

      {/* ===== FOOTER ===== */}
      <div className="footer-buttons">
        <button className="back-btn" onClick={prevStep}>Back</button>
        <button className="next-btn" onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step6Education;

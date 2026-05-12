import React from "react";
import "../FileStyle/Step7Finish.css";

const Step7Finish = ({ prevStep }) => {

  const handleFinish = (e) => {
    e.preventDefault();

    alert("Application submitted successfully ✅");

    // API call can go here
  };

  return (
    <form className="vendor-wrapper" onSubmit={handleFinish}>
      <h2 className="title">Set up your professional profile</h2>

      {/* PROFESSIONAL PHOTO */}
      <h3 className="section-title">Professional photo *</h3>

      <div className="photo-row">
        <div className="photo-circle">
          <span>AugmntX<br />Resource Profile</span>
        </div>

        <div className="photo-content">
          <p>Please upload a high-quality profile photo</p>
          <p>
            Professional photos are prioritized and see more jobs with Covaijobs
            clients.
          </p>
          <p className="muted">Minimum resolution: 500 × 500 pixels</p>
          <p className="muted">Maximum file size: 10MB</p>

          <input type="file" />
        </div>
      </div>

      {/* PRICE */}
      <h3 className="section-title-1">Price per month (160 hours)</h3>

      <div className="price-row">
        <div>
          <label>Currency *</label>
          <select>
            <option>₹ INR</option>
            <option>$ USD</option>
          </select>
        </div>

        <div>
          <label>Minimum *</label>
          <input type="number" defaultValue={0} />
        </div>

        <div>
          <label>Maximum *</label>
          <input type="number" defaultValue={0} />
        </div>
      </div>

      {/* BIO */}
      <div className="bio-section">
        <label>Short bio *</label>
        <textarea placeholder="Short bio" />
      </div>

      {/* FOOTER */}
      <div className="button-row">
        <button
          type="button"
          className="btn-back"
          onClick={prevStep}
        >
          Back
        </button>

        <button
          type="submit"
          className="btn-submit"
        >
          Finish
        </button>
      </div>
    </form>
  );
};

export default Step7Finish;

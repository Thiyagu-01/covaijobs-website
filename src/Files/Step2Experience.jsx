import { useState } from "react";
import "../FileStyle/Step2Experience.css"

export default function Step2Experience({ nextStep, prevStep }) {
  const [remoteStatus, setRemoteStatus] = useState("no");
  const [commitment, setCommitment] = useState("full-time");
  const [noticePeriod, setNoticePeriod] = useState("immediately");
  const [noticeWeeks, setNoticeWeeks] = useState("1");
  const [workLocation, setWorkLocation] = useState({
    remote: false,
    onsite: true,
    currentCity: false,
    anywhereCountry: true,
    anywherePermit: false
  });

  const handleWorkLocationChange = (key) => {
    setWorkLocation(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="exp-page">
      <h2 className="exp-title">Professional experience</h2>

      {/* Years */}
      <label className="label">
        How many years of professional experience do you have in your field overall? *
      </label>
      <input className="input" type="number" placeholder="0" />

      {/* Job Title */}
      <label className="label">Primary job title *</label>
      <input className="input" type="text" placeholder="Web Developer" />
      {/* Work Location */}
<label className="label">Work Location:</label>

<div className="check-row">
  <label>
    <input
      type="checkbox"
      checked={workLocation.remote}
      onChange={() => handleWorkLocationChange("remote")}
    />
    Remote
  </label>

  <label>
    <input
      type="checkbox"
      checked={workLocation.onsite}
      onChange={() => handleWorkLocationChange("onsite")}
    />
    Onsite
  </label>
</div>

{/* SHOW ONLY WHEN ONSITE IS TRUE */}
{workLocation.onsite && (
  <div className="check-sub">
    <label>
      <input
        type="checkbox"
        checked={workLocation.currentCity}
        onChange={() => handleWorkLocationChange("currentCity")}
      />
      Current City
    </label>

    <label>
      <input
        type="checkbox"
        checked={workLocation.anywhereCountry}
        onChange={() => handleWorkLocationChange("anywhereCountry")}
      />
      Anywhere in Current Country
    </label>

    <label>
      <input
        type="checkbox"
        checked={workLocation.anywherePermit}
        onChange={() => handleWorkLocationChange("anywherePermit")}
      />
      Anywhere with Work Permit
    </label>
  </div>
)}


      {/* Remote Job Status */}
      <label className="label">
        Are you actively looking for remote jobs? *
      </label>

      <div className="radio-cards">
        <label className={`radio-card ${remoteStatus === "ready" ? "active" : ""}`}>
          <input
            type="radio"
            name="remote"
            checked={remoteStatus === "ready"}
            onChange={() => setRemoteStatus("ready")}
          />
          <div>
            <div className="card-title">Ready to Interview</div>
            <p>
              I am actively looking for a new remote job. Mark me available
              to interview for the next 30 days.
            </p>
          </div>
        </label>

        <label className={`radio-card ${remoteStatus === "open" ? "active" : ""}`}>
          <input
            type="radio"
            name="remote"
            checked={remoteStatus === "open"}
            onChange={() => setRemoteStatus("open")}
          />
          <div>
            <div className="card-title">Open to Offers</div>
            <p>
              I am not actively looking for a new remote job, but I am
              available to hear about new job opportunities.
            </p>
          </div>
        </label>

        <label className={`radio-card ${remoteStatus === "no" ? "active" : ""}`}>
          <input
            type="radio"
            name="remote"
            checked={remoteStatus === "no"}
            onChange={() => setRemoteStatus("no")}
          />
          <div>
            <div className="card-title">Unavailable for jobs</div>
            <p>I am not looking for a new remote job at the moment.</p>
          </div>
        </label>
      </div>

      {/* Commitment */}
      <label className="label">
        Which type of commitment do you prefer? *
      </label>

      <div className="radio-list">
        <label>
          <input 
            type="radio" 
            name="commit" 
            checked={commitment === "full-time"}
            onChange={() => setCommitment("full-time")}
          /> 
          Full-time (40 hours/week) (Recommended)
        </label>
        <label>
          <input 
            type="radio" 
            name="commit" 
            checked={commitment === "part-time"}
            onChange={() => setCommitment("part-time")}
          /> 
          Part-time (20 hours/week)
        </label>
        <label>
          <input 
            type="radio" 
            name="commit" 
            checked={commitment === "hourly"}
            onChange={() => setCommitment("hourly")}
          /> 
          Hourly (upto 10 hours/week)
        </label>
      </div>

     {/* Notice Period */}
<label className="label">
  What is your notice period for resigning from your current job and starting full-time with AugmntX? *
</label>

<div className="radio-list">

  {/* Immediately */}
  <label className="notice-row">
    <input
      type="radio"
      name="notice"
      checked={noticePeriod === "immediately"}
      onChange={() => setNoticePeriod("immediately")}
    />
    <span>Immediately</span>
  </label>
{/* Weeks option */}
<div className="notice-row">
  <input
    type="radio"
    name="notice"
    checked={noticePeriod === "weeks"}
    onChange={() => setNoticePeriod("weeks")}
  />
   In

  <input
    type="number"
    className="notice-number"
    value={noticeWeeks}
    onChange={(e) => setNoticeWeeks(e.target.value)}
    
  />

   week after I get the offer
</div>

  
      {/* Links */}
      <label className="label">LinkedIn</label>
      <input className="input" placeholder="LinkedIn profile link" />

      <label className="label">Github</label>
      <input className="input" placeholder="Github profile link" />

      {/* Footer Buttons */}
      <div className="footer">
        <button className="back" onClick={prevStep}>
          Back
        </button>
        <button className="next" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
    </div>
  );
}
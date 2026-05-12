import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/ApplySuccess.css';

const ApplySuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="checkmark-animation" aria-hidden="true">
          <svg className="checkmark" viewBox="0 0 52 52">
            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
            <path className="checkmark-check" fill="none" d="M14 27l7 7 16-16" />
          </svg>
        </div>
        <h2 className="success-title">Application Submitted!</h2>
        <p className="success-text">
          Your application has been successfully sent. We'll get back to you soon.
        </p>
        <div className="success-actions">
          <button className="success-btn home" onClick={() => navigate('/')}>
            Go to Home
          </button>
          <button className="success-btn jobs" onClick={() => navigate('/currentjobs')}>
            View Other Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplySuccess;

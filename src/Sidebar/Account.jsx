import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css";

const Account = () => {
       const navigate = useNavigate();
     const [emailReminder, setEmailReminder] = useState(true);

  return (
    <div className="account-container">

      <div className="account-header">
        <h2>My Account</h2>
        <button 
        className="edit-btn"
        onClick={() => navigate("/edit-account")}
        >Edit Account</button>
      </div>

      <div className="account-table">

        <div className="table-row">
          <div className="table-label">Type</div>
          <div className="table-value">Individual</div>
        </div>

        <div className="table-row">
          <div className="table-label">Email</div>
          <div className="table-value">
            pradeepasaravanan0404@gmail.com
          </div>
        </div>

        <div className="table-row">
          <div className="table-label">First Name</div>
          <div className="table-value">Pradeepa</div>
        </div>

        <div className="table-row">
          <div className="table-label">Last Name</div>
          <div className="table-value">S</div>
        </div>

        <div className="table-row">
          <div className="table-label">Gender</div>
          <div className="table-value">Not Set</div>
        </div>

        <div className="table-row">
          <div className="table-label">Phone</div>
          <div className="table-value">06374883807</div>
        </div>

        <div className="table-row">
          <div className="table-label">City</div>
          <div className="table-value">Erode</div>
        </div>

        <div className="table-row">
          <div className="table-label">Referral Code</div>
          <div className="table-value referral">N551740Q</div>
        </div>
           <div className="table-row">
          <div className="table-label">Profile</div>
          <div className="table-value">
            <a href="#" className="profile-link">
              Link
            </a>
          </div>
        </div>

        {/* Email Reminder Toggle */}
        <div className="table-row">
          <div className="table-label">Email Reminders</div>
          <div className="table-value">
            <label className="switch">
              <input
                type="checkbox"
                checked={emailReminder}
                onChange={() => setEmailReminder(!emailReminder)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Account;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditAccount.css";

const EditAccount = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "pradeepasaravanan0404@gmail.com",
    firstName: "Pradeepa",
    lastName: "S",
    phone: "06374883807",
    city: "Erode",
    referral: "N551740Q",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Changes Saved Successfully!");
    navigate("/account");
  };

  return (
    <div className="edit-account-container">
      <h2 className="page-title">Update Information</h2>

      <form className="edit-table" onSubmit={handleSubmit}>
        
        {/* ROW */}
        {[
          { label: "Email", name: "email" },
          { label: "First Name", name: "firstName" },
          { label: "Last Name", name: "lastName" },
          { label: "Phone", name: "phone" },
          { label: "City", name: "city" },
          { label: "Referral Code", name: "referral" },
        ].map((field) => (
          <div className="table-row" key={field.name}>
            <div className="table-label">{field.label}</div>
            <div className="table-value">
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
              />
            </div>
          </div>
        ))}

        {/* Gender Row */}
        <div className="table-row">
          <div className="table-label">Gender</div>
          <div className="table-value">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
              />{" "}
              Male
            </label>

            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
              />{" "}
              Female
            </label>
          </div>
        </div>

        {/* GREEN MESSAGE ROW */}
        <div className="table-message">
          Leave the password field empty if you don't want to change.
        </div>

        {/* Password */}
        <div className="table-row">
          <div className="table-label">Password</div>
          <div className="table-value">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="table-row">
          <div className="table-label">Confirm Password</div>
          <div className="table-value">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Buttons Row */}
        <div className="table-buttons">
          <button type="submit" className="btn-save">
            Save Changes
          </button>

          <button
            type="button"
            className="btn-back"
            onClick={() => navigate("/account")}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAccount;
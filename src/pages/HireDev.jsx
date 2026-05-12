import React, { useState } from "react";
import { api } from "../api";
import "../CSS/DeveloperHiringForm.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DeveloperHiringForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    companyName: "",
    email: "",
    phone: "",
    hearAbout: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required.";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!formData.hearAbout) newErrors.hearAbout = "This field is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/contact/send-emailss", formData);
      toast.success(response.data.message || "Form submitted successfully!");
      setFormData({
        name: "",
        jobTitle: "",
        companyName: "",
        email: "",
        phone: "",
        hearAbout: "",
      });
    } catch (error) {
      toast.error("Error submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <ToastContainer position="top-right" autoClose={3000} />
      <form onSubmit={handleSubmit} className="form-grid">
        <h2 className="form-title">Hire the best dedicated developers</h2>
        <p className="form-subtitle">
          Hire pre-vetted developers with strong technical and communication skills at unbeatable prices.
          <br />If you decide to stop within one week, you pay nothing.
        </p>

        {[
          { label: "Name", name: "name" },
          { label: "Job Title", name: "jobTitle" },
          { label: "Company Name", name: "companyName" },
          { label: "Work Email", name: "email", type: "email" },
          { label: "Phone", name: "phone", type: "tel" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name}>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={`${label} *`}
              disabled={loading}
              className={`form-input ${errors[name] ? "is-invalid" : ""}`}
            />
            {errors[name] && <div className="error-msg">{errors[name]}</div>}
          </div>
        ))}

        <div>
          <select
            name="hearAbout"
            value={formData.hearAbout}
            onChange={handleChange}
            disabled={loading}
            className={`form-input ${errors.hearAbout ? "is-invalid" : ""}`}
          >
            <option value="" disabled>
              How did you hear about us? *
            </option>
            <option value="email">Email</option>
            <option value="search">Search engine</option>
            <option value="social">Social media</option>
            <option value="others">Others</option>
          </select>
          {errors.hearAbout && <div className="error-msg">{errors.hearAbout}</div>}
        </div>

        <div className="form-button-container">
          <button type="submit" disabled={loading} className="form-button">
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeveloperHiringForm;

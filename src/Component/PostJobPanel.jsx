import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/PostJob.css';
import Footer from '../Home/Footer';
import { postJob } from '../api';

const JobForm = () => {
  const [formData, setFormData] = useState({
    title: '', company: '', location: '', type: '',
    salary: '', description: '', experience: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();
  const username = JSON.parse(localStorage.getItem('user'))?.userName;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMsg('');

    if (!username || username !== 'admin') {
      setError('Unauthorized: Only admins can post jobs.');
      setLoading(false);
      return;
    }

    try {
      const jobData = { ...formData, postedBy: username };
      await postJob(jobData); 

      setFormData({
        title: '', company: '', location: '', type: '',
        salary: '', description: '', experience: '',
      });

      setSuccessMsg('✅ Job posted successfully! Redirecting...');
      setTimeout(() => navigate('/currentjobs'), 1500);
    } catch (err) {
      const message =
        err.response?.data?.error ||
        err.message ||
        'Something went wrong. Please try again.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="job-form-page">
        <div className="job-form-wrapper">
          <h2 className="form-heading">Post a New Job</h2>
          <form className="job-form" onSubmit={handleSubmit}>
            <div className="job-form-grid">
              {/* Inputs (unchanged) */}
              <div className="form-group">
                <label>Job Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Job Type</label>
                <select name="type" value={formData.type} onChange={handleChange} required>
                  <option value="">Select Type</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                </select>
              </div>
              <div className="form-group">
                <label>Salary</label>
                <input type="text" name="salary" value={formData.salary} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Experience</label>
                <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
              </div>
              <div className="form-group full-width">
                <label>Job Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Provide a detailed job description here..."
                  required
                ></textarea>
              </div>
            </div>

            {loading && <p className="loading-text">⏳ Posting job...</p>}
            {error && <p className="error-text text-danger">{error}</p>}
            {successMsg && <p className="success-text text-success">{successMsg}</p>}

            <div className="submit-container">
              <button type="submit" disabled={loading} className="submit-btn">
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobForm;

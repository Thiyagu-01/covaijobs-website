import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { applyToJob } from '../api.js'; // ✅ New centralized call
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './JobApplication.css';

const JobApplication = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const jobDetails = location.state?.jobDetails;

  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setApplicationData((prev) => ({
        ...prev,
        name: storedUser.userName || '',
        email: storedUser.email || '',
        phone: storedUser.phone || '',
      }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData({ ...applicationData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file?.type !== 'application/pdf') {
      setErrors((prev) => ({ ...prev, resume: 'Only PDF files are allowed' }));
      setApplicationData((prev) => ({ ...prev, resume: null }));
    } else {
      setErrors((prev) => ({ ...prev, resume: '' }));
      setApplicationData((prev) => ({ ...prev, resume: file }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const { name, email, phone, resume } = applicationData;

    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Enter a valid email address';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!resume) newErrors.resume = 'Resume is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append('jobId', jobDetails._id);
    formData.append('name', applicationData.name);
    formData.append('email', applicationData.email);
    formData.append('phone', applicationData.phone);
    formData.append('resume', applicationData.resume);

    setLoading(true);
    try {
      await applyToJob(formData); // ✅ Centralized API call

      toast.success(
        <>
          <strong>✅ Application Sent</strong>
          <div>Thank you! We'll be in touch soon.</div>
        </>,
        {
          autoClose: 2500,
          style: {
            background: '#e6ffed',
            color: '#256029',
            borderLeft: '6px solid #4caf50',
            fontWeight: '500',
          },
        }
      );

      setTimeout(() => navigate('/apply-success'), 2800);
    } catch {
      toast.error(
        <>
          <strong>❌ Failed</strong>
          <div>Please try again later.</div>
        </>,
        {
          autoClose: 3000,
          style: {
            background: '#ffecec',
            color: '#8a1f11',
            borderLeft: '6px solid #f44336',
            fontWeight: '500',
          },
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <ToastContainer position="top-right" />
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow rounded position-relative">
            <button
              className="btn btn-outline-secondary close-btn"
              onClick={() => navigate(-1)}
              title="Go Back"
            >
              &times;
            </button>

            <div className="card-body">
              <h3 className="text-center mb-4">Apply for Job</h3>

              {jobDetails ? (
                <div className="mb-4">
                  <h5><strong>Job Title:</strong> {jobDetails.title}</h5>
                  <p><strong>Company:</strong> {jobDetails.company}</p>
                  <p><strong>Description:</strong> {jobDetails.description}</p>
                </div>
              ) : (
                <p className="text-danger">Job details unavailable</p>
              )}

              <form onSubmit={handleSubmitApplication}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    name="name"
                    value={applicationData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    name="email"
                    value={applicationData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    name="phone"
                    maxLength="10"
                    value={applicationData.phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Resume (PDF only)</label>
                  <input
                    type="file"
                    className={`form-control ${errors.resume ? 'is-invalid' : ''}`}
                    accept="application/pdf"
                    onChange={handleResumeUpload}
                  />
                  {applicationData.resume && (
                    <small className="text-success mt-2 d-block">
                      Selected: {applicationData.resume.name}
                    </small>
                  )}
                  {errors.resume && <div className="invalid-feedback">{errors.resume}</div>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;

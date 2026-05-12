import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { api } from '../api';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/ForgotPassword.css';
import Footer from '../Home/Footer';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleForgot = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your registered email.");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post('/auth/forgot-password', { email });
      toast.success(res.data.message || "Reset link sent to your email.", { autoClose: 2500 });
      setEmail('');
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Something went wrong.';
      toast.error(errorMsg, { autoClose: 2500 });

      // Redirect to signup if user not found
      if (
        errorMsg.toLowerCase().includes('user not found') ||
        errorMsg.toLowerCase().includes('user name not found')
      ) {
        setTimeout(() => navigate('/signup'), 3000);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="forgot-container">
        <ToastContainer position="top-right" />
        <form className="forgot-form" onSubmit={handleForgot}>
          <h2>Forgot Password</h2>
          <p>Enter your registered email to receive a reset link.</p>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;

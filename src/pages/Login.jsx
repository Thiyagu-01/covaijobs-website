import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { api } from "../api.js"; 
import "../CSS/Auth.css";
import Footer from "../Home/Footer";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!identifier.trim()) {
      newErrors.identifier = "Username or email is required.";
    } else if (identifier.includes("@") && !/^\S+@\S+\.\S+$/.test(identifier)) {
      newErrors.identifier = "Enter a valid email address.";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the highlighted errors.", { autoClose: 2000 });
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/auth/login", { identifier, password });

      if (res.data.success) {
        const { userName, role, email, phone } = res.data.user;
        const user = { userName, role, email, phone };
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("adminUsername", userName);

        toast.success("Login successful!", { autoClose: 1500 });

        const targetPath = userName === "admin" ? "/postjob" : "/dashboard";
        setTimeout(() => {
          window.location.href = targetPath;
        }, 1600);
      } else {
        toast.error(res.data.message || "Invalid credentials.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="auth-container login-page">
        <ToastContainer position="top-right" />
        <div className="auth-form">
          <h2 className="auth-title">Login to Your Account</h2>
          <form onSubmit={handleLogin} noValidate>
            <div className="input-group">
              <label>Email or Username</label>
              <input
                type="text"
                placeholder="Enter email or username"
                value={identifier}
                onChange={(e) => {
                  setIdentifier(e.target.value);
                  setErrors((prev) => ({ ...prev, identifier: "" }));
                }}
                className={errors.identifier ? "is-invalid" : ""}
              />
              {errors.identifier && <div className="error-msg">{errors.identifier}</div>}
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="password-wrapper">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((prev) => ({ ...prev, password: "" }));
                  }}
                  className={errors.password ? "is-invalid" : ""}
                />
                <span className="toggle-password" onClick={() => setPasswordVisible(!passwordVisible)}>
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && <div className="error-msg">{errors.password}</div>}
            </div>

            <div className="forgot-password">
              <span onClick={() => navigate("/forgot-password")} className="link-text">
                Forgot Password?
              </span>
            </div>

            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="account-message">
            <p>
              Don’t have an account?{" "}
              <span onClick={() => navigate("/signup")} className="link-text">
                Sign Up here
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

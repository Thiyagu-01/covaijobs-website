import React, { useState, useEffect, useRef } from "react";
import { Link,  NavLink, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../Images/Logo 1.png";
import "../CSS/Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const dropdownRef = useRef(null); // ✅ For outside click
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !e.target.closest(".profile-link")
      ) {
        dropdownRef.current.classList.remove("show");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleClick = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  const confirmLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowLogoutModal(false);
    toast.success("👋 Successfully logged out!", {
      position: "top-right",
      autoClose: 1000,    
      theme: "colored",
    });
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <>
      <ToastContainer theme="colored" />

      <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
        <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleClick}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto custom-nav-list">
            <li className="nav-item custom-nav-item">
             <NavLink
             to="/"
             end
             className={({ isActive }) =>
             isActive ? "nav-link active-link" : "nav-link"
          }
            onClick={handleLinkClick}
            >
            Home
           </NavLink>
           </li>

           <li className="nav-item custom-nav-item">
            <NavLink
            to="/about"
            className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
         }
             onClick={handleLinkClick}
           >
             About Us
            </NavLink>
            </li>

           <li className="nav-item custom-nav-item">
           <Link
           className="nav-link"
           to="/staff-augmentation"
           onClick={handleLinkClick}
           >
             Staff Augmentation
            </Link>
            </li>

            {user?.userName === "admin" && (
              <li className="nav-item custom-nav-item">
                <Link className="nav-link" to="/postjob" onClick={handleLinkClick}>
                  Post Jobs
                </Link>
              </li>
            )}

            <li className="nav-item custom-nav-item profile-nav">
              <div
                className="nav-link d-flex align-items-center gap-2 cursor-pointer profile-link position-relative"
                onClick={() => {
                  if (window.innerWidth >= 992) {
                    document.getElementById("desktopProfileDropdown")?.classList.toggle("show");
                  } else {
                    setShowLogoutModal(true);
                  }
                }}
              >
                <i className="bi bi-person-circle fs-5"></i>
                <span className="d-none d-sm-inline">{user ? user.userName : "Profile"}</span>

                <div
                  id="desktopProfileDropdown"
                  className="dropdown-menu dropdown-menu-end mt-2"
                  ref={dropdownRef}
                >
                  {user ? (
                    <>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          navigate("/dashboard");
                          document.getElementById("desktopProfileDropdown")?.classList.remove("show");
                        }}
                      >
                        <i className="bi bi-speedometer2 me-2"></i> Dashboard
                      </button>
                      <button
                        className="dropdown-item text-danger"
                        onClick={confirmLogout}
                      >
                        <i className="bi bi-box-arrow-right me-2"></i> Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          navigate("/login");
                          document.getElementById("desktopProfileDropdown")?.classList.remove("show");
                        }}
                      >
                        <i className="bi bi-box-arrow-in-right me-2"></i> Login
                      </button>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          navigate("/signup");
                          document.getElementById("desktopProfileDropdown")?.classList.remove("show");
                        }}
                      >
                        <i className="bi bi-person-plus me-2"></i> Sign Up
                      </button>
                    </>
                  )}
                </div>
              </div>
            </li>

            <li className="nav-item custom-nav-item">
              <Link className="nav-link" to="/contact" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Profile Modal */}
      <Modal
        show={showLogoutModal}
        onHide={() => setShowLogoutModal(false)}
        centered
      >
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="text-primary d-flex align-items-center gap-2">
            <i className="bi bi-person-circle fs-4"></i> {user ? "Account" : "Welcome"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {user ? (
            <>
              <Button
                variant="outline-primary"
                className="w-100 mb-2"
                onClick={() => {
                  setShowLogoutModal(false);
                  navigate("/dashboard");
                }}
              >
                <i className="bi bi-speedometer2 me-2"></i> Go to Dashboard
              </Button>
              <Button
                variant="danger"
                className="w-100"
                onClick={confirmLogout}
              >
                <i className="bi bi-box-arrow-right me-2"></i> Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="primary"
                className="w-100 mb-2"
                onClick={() => {
                  setShowLogoutModal(false);
                  navigate("/login");
                }}
              >
                <i className="bi bi-box-arrow-in-right me-2"></i> Login
              </Button>
              <Button
                variant="secondary"
                className="w-100"
                onClick={() => {
                  setShowLogoutModal(false);
                  navigate("/signup");
                }}
              >
                <i className="bi bi-person-plus me-2"></i> Sign Up
              </Button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navbar;

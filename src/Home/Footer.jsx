import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from '../Images/logo.png';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-black text-white pt-4 pb-2 px-4 w-100">
      <div className="w-100 px-4">

        <div className="row text-center text-md-start mb-3">
          <div className="col-md-4 mb-3 mb-md-0">
            <img src={Logo} alt="Orca Infomatics Logo" style={{ width: '140px' }} className="mb-2" />
            <p className="small mb-2">Orca Infomatics – Trusted Job Consultancy</p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-5">
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-white"><FaWhatsapp /></a>
              <a href="https://www.linkedin.com/company/orca-infomatics" target="_blank" rel="noreferrer" className="text-white"><FaLinkedin /></a>
              <a href="https://www.instagram.com/orca_infomatics" target="_blank" rel="noreferrer" className="text-white"><FaInstagram /></a>
              <a href="tel:+919876543210" className="text-white"><FaPhone /></a>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="fw-bold mt-2">Quick Links</h6>
            <ul className="list-unstyled small mt-3">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/contact" className="text-white">Contact Us</Link></li>
              <li><Link to="/signup" className="text-white">Sign Up</Link></li>
              <li><Link to="/login" className="text-white">Employer Login</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold">Address</h6>
            <p className="small mb-2">
                No.45, 2nd Main Road,<br />
                East Balaji Nagar,<br />
                Kallikuppam, Ambattur,<br />
                Chennai - 600053
            </p>
            <div className="map-responsive">
              <iframe
                title="Orca Informatics Map"
                src="https://www.google.com/maps?q=East%20Balaji%20Nagar%20Ambattur%20Chennai&output=embed"
                height="200"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="text-center small text-muted mt-3">
          © 2025 Orca Infomatics | <Link to="/terms" className="text-light me-2">Terms</Link>
          <Link to="/privacy" className="text-light">Privacy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

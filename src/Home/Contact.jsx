import React, { useState } from "react";
import "../CSS/ContactPage.css";
import Footer from "./Footer";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.37a16 16 0 006.72 6.72l1.73-1.34a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneInputIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.37a16 16 0 006.72 6.72l1.73-1.34a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const PenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const ChatBubbleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <div className="cp-page">
        <div className="cp-dots cp-dots--tl" />
        <div className="cp-dots cp-dots--br" />

        <div className="cp-wrapper">
          {/* Header */}
          <div className="cp-header">
            <h1 className="cp-title">Contact Us</h1>
            <p className="cp-subtitle">
              We'll help you hire the best talent<br />and grow your business.
            </p>
          </div>

          {/* Card */}
          <div className="cp-card">

            {/* LEFT PANEL */}
            <div className="cp-left">
              <div className="cp-left__circle cp-left__circle--1" />
              <div className="cp-left__circle cp-left__circle--2" />

              <div className="cp-left__content">
                <div className="cp-left__chat-icon">
                  <ChatBubbleIcon />
                </div>
                <h2 className="cp-left__heading">Get In Touch</h2>
                <p className="cp-left__sub">We are always ready to help you.</p>
                <div className="cp-left__divider" />

                <ul className="cp-info-list">
                  <li className="cp-info-item">
                    <span className="cp-info-icon"><PhoneIcon /></span>
                    <span className="cp-info-text">
                      <strong>Phone</strong>
                      +91 93456 87654
                    </span>
                  </li>
                  <li className="cp-info-item">
                    <span className="cp-info-icon"><EmailIcon /></span>
                    <span className="cp-info-text">
                      <strong>Email</strong>
                      contact@covaijobs.com
                    </span>
                  </li>
                  <li className="cp-info-item">
                    <span className="cp-info-icon"><LocationIcon /></span>
                    <span className="cp-info-text">
                      <strong>Location</strong>
                      Coimbatore, India
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="cp-right">
              <h2 className="cp-right__heading">Send Message</h2>
              <div className="cp-right__underline" />

              <form className="cp-form" onSubmit={handleSubmit} noValidate>

                {/* Row 1: Name + Email */}
                <div className="cp-form__row">
                  <div className={`cp-field ${focusedField === "name" ? "cp-field--focused" : ""} ${formData.name ? "cp-field--has-value" : ""}`}>
                    <span className="cp-field__icon"><UserIcon /></span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>
                  <div className={`cp-field ${focusedField === "email" ? "cp-field--focused" : ""} ${formData.email ? "cp-field--has-value" : ""}`}>
                    <span className="cp-field__icon"><MailIcon /></span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Phone */}
                <div className={`cp-field ${focusedField === "phone" ? "cp-field--focused" : ""} ${formData.phone ? "cp-field--has-value" : ""}`}>
                  <span className="cp-field__icon"><PhoneInputIcon /></span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Row 3: Message */}
                <div className={`cp-field cp-field--textarea ${focusedField === "message" ? "cp-field--focused" : ""} ${formData.message ? "cp-field--has-value" : ""}`}>
                  <span className="cp-field__icon cp-field__icon--top"><PenIcon /></span>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`cp-btn ${submitted ? "cp-btn--sent" : ""}`}
                >
                  {submitted
                    ? "Message Sent ✓"
                    : <><span>Send Message</span><SendIcon /></>
                  }
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
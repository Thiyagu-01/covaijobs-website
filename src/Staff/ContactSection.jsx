import React, { useState, useEffect } from 'react';
import { api } from '../api'; 
import './ContactForm.css';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (lastSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setLastSubmitted(null);
      }, 10 * 60 * 1000); // 10 mins
      return () => clearTimeout(timer);
    }
  }, [lastSubmitted]);

  const validate = () => {
    const newErrors = {};
    const { name, phone, email, subject, message } = formData;

    if (!name.trim()) newErrors.name = 'Name is required.';
    else if (!/^[a-zA-Z ]{3,}$/.test(name.trim())) newErrors.name = 'Name must be at least 3 letters.';

    if (!phone.trim()) newErrors.phone = 'Phone number is required.';
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Phone must be 10 digits.';

    if (!email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Email is not valid.';

    if (!subject.trim()) newErrors.subject = 'Subject is required.';
    else if (subject.trim().length < 4) newErrors.subject = 'Subject must be at least 4 characters.';

    if (!message.trim()) newErrors.message = 'Message is required.';
    else if (message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters.';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fix the errors in the form.', { theme: 'colored' });
      return;
    }

    setIsSubmitting(true);
    try {
      await api.post('/contact/send-email', formData); 
      toast.success('Message sent successfully!', { theme: 'colored' });
      setIsSubmitted(true);
      setLastSubmitted(Date.now());
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    } catch {
      toast.error('Failed to send message. Please try again.', { theme: 'colored' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container my-5 gap-5">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="row align-items-start staffs">

        {/* Left Section */}
        <motion.div className="col-md-6 mt-5 getin"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="highlight-title">Essential IT Staff Augmentation Services in Coimbatore</h2>
          <p className="desc">
            Staff augmentation helps organizations scale quickly by providing expert talent without long-term commitments.
            <button className="link-text"> Orca Infomatics </button>staff augmentation allows access to experienced professionals for peak demand.
          </p>
          <p className="desc">
            Gain specific skill sets tailored to your project timeline and goals to increase overall efficiency.
          </p>
          <button
            className="get-in-touch-btn"
            onClick={() => navigate('/contact')}
          >
            → Get In Touch
          </button>
        </motion.div>

        {/* Right Form */}
        <motion.div className="col-md-6 p-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <h5>We’d Love to Hear From You</h5>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'is-invalid' : ''}
            />
            {errors.name && <div className="error-msg">{errors.name}</div>}

            <input
              type="text"
              name="phone"
              placeholder="Phone No"
              value={formData.phone}
              onChange={handleChange}
              maxLength={10}
              className={errors.phone ? 'is-invalid' : ''}
            />
            {errors.phone && <div className="error-msg">{errors.phone}</div>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'is-invalid' : ''}
            />
            {errors.email && <div className="error-msg">{errors.email}</div>}

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? 'is-invalid' : ''}
            />
            {errors.subject && <div className="error-msg">{errors.subject}</div>}

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'is-invalid' : ''}
            />
            {errors.message && <div className="error-msg">{errors.message}</div>}

            <button
              type="submit"
              className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? 'Submitting...' : isSubmitted ? 'Submitted Successfully!' : 'Submit'}
            </button>

            {isSubmitted && (
              <p className="success-msg">
                ✅ You can submit again after 10 minutes.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;

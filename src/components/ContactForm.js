import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/ContactForm.module.css';
import emailjs from 'emailjs-com';
import Footer from './Footer';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  employees: '',
  industry: '',
  location: '',
  message: '',
};

function getActiveTab(location) {
  if (location.pathname === '/') {
    if (location.hash === '#testimonials') return 'testimonials';
    if (location.hash === '#faqs') return 'faqs';
    return 'home';
  }
  if (location.pathname === '/book-call') return 'contact';
  return '';
}

export default function ContactForm({ onClose }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = getActiveTab(location);

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = 'Required';
    if (!form.lastName.trim()) errs.lastName = 'Required';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Valid email required';
    if (!form.phone.trim() || form.phone.length < 8) errs.phone = 'Valid phone required';
    if (!form.company.trim()) errs.company = 'Required';
    if (!form.employees.trim() || isNaN(form.employees)) errs.employees = 'Required';
    if (!form.industry.trim()) errs.industry = 'Required';
    if (!form.location.trim()) errs.location = 'Required';
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = value => {
    setForm({ ...form, phone: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSubmitting(true);
    try {
      await emailjs.send(
        'service_9fl3k3h',
        'template_r9o3l6m',
        {
          message: `
New Contact Form Submission

+----------------------+----------------------+
| First Name           | ${form.firstName}    |
+----------------------+----------------------+
| Last Name            | ${form.lastName}     |
+----------------------+----------------------+
| Email                | ${form.email}        |
+----------------------+----------------------+
| Phone                | ${form.phone}        |
+----------------------+----------------------+
| Company              | ${form.company}      |
+----------------------+----------------------+
| Number of Employees  | ${form.employees}    |
+----------------------+----------------------+
| Industry             | ${form.industry}     |
+----------------------+----------------------+
| Location             | ${form.location}     |
+----------------------+----------------------+
| Message              | ${form.message}      |
+----------------------+----------------------+
`,
          to_email: 'engr.mubasharnazir@gmail.com',
        },
        'YqyF5KFi6-yKQp7Hn'
      );
      setSuccess(true);
      setForm(initialState);
    } catch (err) {
      setErrors({ submit: 'Failed to send. Please try again.' });
    }
    setSubmitting(false);
  };

  if (success) return <div className={styles.successMsg}>Thank you! We will contact you soon.</div>;

  return (
    <div className={styles.contactFormPageBg}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/assets/logo.png" alt="Sama Health Logo" className={styles.logoImg} />
        </div>
        <ul className={styles.navTabs}>
          <li><Link to="/" className={`${styles.tabLink} ${activeTab === 'home' ? styles.activeTab : ''}`}>Home</Link></li>
          <li><a href="/#testimonials" className={`${styles.tabLink} ${activeTab === 'testimonials' ? styles.activeTab : ''}`}>Testimonials</a></li>
          <li><a href="/#faqs" className={`${styles.tabLink} ${activeTab === 'faqs' ? styles.activeTab : ''}`}>FAQs</a></li>
        </ul>
      </nav>
      <div className={styles.formCard}>
        <h2 className={styles.formHeading}>Contact Us</h2>
        <div className={styles.formDescription}>
          We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.
        </div>
        <form className={styles.formNew} onSubmit={handleSubmit} autoComplete="off">
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="firstName">First Name *</label>
              <input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} autoComplete="given-name" />
              {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
            </div>
            <div className={styles.formField}>
              <label htmlFor="lastName">Last Name *</label>
              <input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} autoComplete="family-name" />
              {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="email">Email *</label>
              <input id="email" name="email" value={form.email} onChange={handleChange} autoComplete="email" />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>
            <div className={styles.formField}>
              <label htmlFor="phone">Phone *</label>
              <input id="phone" name="phone" value={form.phone} onChange={handleChange} autoComplete="tel" />
              {errors.phone && <span className={styles.error}>{errors.phone}</span>}
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="company">Company *</label>
              <input id="company" name="company" value={form.company} onChange={handleChange} />
              {errors.company && <span className={styles.error}>{errors.company}</span>}
            </div>
            <div className={styles.formField}>
              <label htmlFor="employees">Number of Employees *</label>
              <input id="employees" name="employees" value={form.employees} onChange={handleChange} />
              {errors.employees && <span className={styles.error}>{errors.employees}</span>}
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="industry">Industry *</label>
              <input id="industry" name="industry" value={form.industry} onChange={handleChange} />
              {errors.industry && <span className={styles.error}>{errors.industry}</span>}
            </div>
            <div className={styles.formField}>
              <label htmlFor="location">Location *</label>
              <input id="location" name="location" value={form.location} onChange={handleChange} />
              {errors.location && <span className={styles.error}>{errors.location}</span>}
            </div>
          </div>
          <div className={styles.formFieldFull}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Please enter your message/query here" />
          </div>
          {errors.submit && <span className={styles.error}>{errors.submit}</span>}
          <button type="submit" className={styles.submitBtnNew} disabled={submitting}>{submitting ? 'Sending...' : 'Contact Us'}</button>
          {onClose && <button type="button" className={styles.closeBtn} onClick={onClose}>Close</button>}
        </form>
      </div>
      <Footer />
    </div>
  );
} 
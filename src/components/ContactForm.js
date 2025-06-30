import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/ContactForm.module.css';
import emailjs from 'emailjs-com';
import Footer from './Footer';
import Sidebar from './Sidebar';
import stylesApp from "../styles/App.module.css";
import Notification from './Notification';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  countryCode: '+971',
  phone: '',
  company: '',
  employees: '',
  industry: '',
  location: '',
  message: '',
};

// Country code list (country name, code, flag)
const countryCodes = [
  { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'Pakistan', code: '+92', flag: '🇵🇰' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'Afghanistan', code: '+93', flag: '🇦🇫' },
  { name: 'Albania', code: '+355', flag: '🇦🇱' },
  { name: 'Algeria', code: '+213', flag: '🇩🇿' },
  { name: 'Andorra', code: '+376', flag: '🇦🇩' },
  { name: 'Angola', code: '+244', flag: '🇦🇴' },
  { name: 'Argentina', code: '+54', flag: '🇦🇷' },
  { name: 'Armenia', code: '+374', flag: '🇦🇲' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  { name: 'Austria', code: '+43', flag: '🇦🇹' },
  { name: 'Azerbaijan', code: '+994', flag: '🇦🇿' },
  { name: 'Bahrain', code: '+973', flag: '🇧🇭' },
  { name: 'Bangladesh', code: '+880', flag: '🇧🇩' },
  { name: 'Belarus', code: '+375', flag: '🇧🇾' },
  { name: 'Belgium', code: '+32', flag: '🇧🇪' },
  { name: 'Bhutan', code: '+975', flag: '🇧🇹' },
  { name: 'Brazil', code: '+55', flag: '🇧🇷' },
  { name: 'Bulgaria', code: '+359', flag: '🇧🇬' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'China', code: '+86', flag: '🇨🇳' },
  { name: 'Denmark', code: '+45', flag: '🇩🇰' },
  { name: 'Egypt', code: '+20', flag: '🇪🇬' },
  { name: 'Finland', code: '+358', flag: '🇫🇮' },
  { name: 'France', code: '+33', flag: '🇫🇷' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  { name: 'Greece', code: '+30', flag: '🇬🇷' },
  { name: 'Hong Kong', code: '+852', flag: '🇭🇰' },
  { name: 'Hungary', code: '+36', flag: '🇭🇺' },
  { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
  { name: 'Iran', code: '+98', flag: '🇮🇷' },
  { name: 'Iraq', code: '+964', flag: '🇮🇶' },
  { name: 'Ireland', code: '+353', flag: '🇮🇪' },
  { name: 'Israel', code: '+972', flag: '🇮🇱' },
  { name: 'Italy', code: '+39', flag: '🇮🇹' },
  { name: 'Japan', code: '+81', flag: '🇯🇵' },
  { name: 'Jordan', code: '+962', flag: '🇯🇴' },
  { name: 'Kazakhstan', code: '+7', flag: '🇰🇿' },
  { name: 'Kenya', code: '+254', flag: '🇰🇪' },
  { name: 'Kuwait', code: '+965', flag: '🇰🇼' },
  { name: 'Lebanon', code: '+961', flag: '🇱🇧' },
  { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
  { name: 'Maldives', code: '+960', flag: '🇲🇻' },
  { name: 'Morocco', code: '+212', flag: '🇲🇦' },
  { name: 'Nepal', code: '+977', flag: '🇳🇵' },
  { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
  { name: 'New Zealand', code: '+64', flag: '🇳🇿' },
  { name: 'Nigeria', code: '+234', flag: '🇳🇬' },
  { name: 'Norway', code: '+47', flag: '🇳🇴' },
  { name: 'Oman', code: '+968', flag: '🇴🇲' },
  { name: 'Philippines', code: '+63', flag: '🇵🇭' },
  { name: 'Philippines', code: '+63', flag: '🇵🇭' },
  { name: 'Poland', code: '+48', flag: '🇵🇱' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹' },
  { name: 'Qatar', code: '+974', flag: '🇶🇦' },
  { name: 'Romania', code: '+40', flag: '🇷🇴' },
  { name: 'Russia', code: '+7', flag: '🇷🇺' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'Singapore', code: '+65', flag: '🇸🇬' },
  { name: 'South Africa', code: '+27', flag: '🇿🇦' },
  { name: 'South Korea', code: '+82', flag: '🇰🇷' },
  { name: 'Spain', code: '+34', flag: '🇪🇸' },
  { name: 'Sri Lanka', code: '+94', flag: '🇱🇰' },
  { name: 'Sweden', code: '+46', flag: '🇸🇪' },
  { name: 'Switzerland', code: '+41', flag: '🇨🇭' },
  { name: 'Syria', code: '+963', flag: '🇸🇾' },
  { name: 'Thailand', code: '+66', flag: '🇹🇭' },
  { name: 'Turkey', code: '+90', flag: '🇹🇷' },
  { name: 'Ukraine', code: '+380', flag: '🇺🇦' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'Uzbekistan', code: '+998', flag: '🇺🇿' },
  { name: 'Vietnam', code: '+84', flag: '🇻🇳' },
  { name: 'Yemen', code: '+967', flag: '🇾🇪' },
  // ... (add more as needed)
];

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
  const [showNotification, setShowNotification] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = getActiveTab(location);
  const formRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

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
          message: `New Demo Request\n\n| Field     | Value                  |\n|-----------|------------------------|\n| Name      | ${form.firstName} ${form.lastName} |\n| Email     | ${form.email}          |\n| Phone     | ${form.countryCode} ${form.phone} |\n| Company   | ${form.company}        |\n| Employees | ${form.employees}      |\n| Industry  | ${form.industry}       |\n| Location  | ${form.location}       |\n| Message   | ${form.message}        |\n\nRegards,\nSama Health Website`,
          to_email: 'engr.mubasharnazir@gmail.com',
        },
        'YqyF5KFi6-yKQp7Hn'
      );
      setShowNotification(true);
      setForm(initialState);
    } catch (err) {
      setErrors({ submit: 'Failed to send. Please try again.' });
    }
    setSubmitting(false);
  };

  return (
    <div className={stylesApp.app}>
      {showNotification && (
        <Notification
          message="Thank you! We will contact you soon."
          onClose={() => setShowNotification(false)}
          duration={3000}
        />
      )}
      <nav className={stylesApp.navbar}>
        <div className={stylesApp.logo}>
          <img src="/assets/logo.png" alt="Sama Health Logo" className={stylesApp.logoImg} />
        </div>
        <ul className={stylesApp.navTabs}>
          <li>
            <Link
              to="/"
              className={`${stylesApp.tabLink} ${activeTab === 'home' ? stylesApp.activeTab : ''}`}
              onClick={e => {
                if (location.pathname === '/' && !location.hash) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              Home
            </Link>
          </li>
          <li><a href="/#testimonials" className={`${stylesApp.tabLink} ${activeTab === 'testimonials' ? stylesApp.activeTab : ''}`}>Testimonials</a></li>
          <li><a href="/#faqs" className={`${stylesApp.tabLink} ${activeTab === 'faqs' ? stylesApp.activeTab : ''}`}>FAQs</a></li>
        </ul>
        <button className={stylesApp.ctaBtn} onClick={() => navigate('/book-call')}>
          For Business
        </button>
        <button className={stylesApp.hamburger} onClick={() => setSidebarOpen(true)} aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </nav>
      <section className={styles.heroSectionContact}>
        <div className={styles.heroContentContact}>
          <div className={styles.heroLeftContact}>
            <h1 className={styles.heroHeadingContact}>Build a workplace where you can make a difference.</h1>
            <button
              className={styles.heroBtnContact}
              onClick={() => {
                if (formRef.current) {
                  formRef.current.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Request a demo
            </button>
          </div>
          <div className={styles.heroRightContact}>
            <img src="/assets/4921280 1.png" alt="Workplace Illustration" className={styles.heroImgContact} />
          </div>
        </div>
      </section>
      {/* Companies Section */}
      <section className={styles.companiesSection}>
        <h2 className={styles.companiesHeading}>Companies we have worked with</h2>
        <div className={styles.companiesLogosRow}>
          <img src="/assets/company1.svg" alt="Company 1" className={styles.companyLogo} />
          <img src="/assets/company2.svg" alt="Company 2" className={styles.companyLogo} />
          <img src="/assets/company3.svg" alt="Company 3" className={styles.companyLogo} />
          <img src="/assets/company4.svg" alt="Company 4" className={styles.companyLogo} />
        </div>
      </section>
      <div ref={formRef} className={styles.formCard}>
        <>
          <h2 className={styles.formHeading}>Request demo</h2>
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
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    className={styles.countryCodeSelect}
                    style={{ marginRight: '0.5rem', height: '2.5rem', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code + c.name} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    style={{ flex: 1 }}
                  />
                </div>
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
            <button type="submit" className={styles.submitBtnNew} disabled={submitting}>{submitting ? 'Sending...' : 'Submit'}</button>
            {onClose && <button type="button" className={styles.closeBtn} onClick={onClose}>Close</button>}
          </form>
        </>
      </div>
      <Footer />
    </div>
  );
} 
import React from "react";
import styles from "../styles/Footer.module.css";
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.colBrand}>
        <div className={styles.logo}>Sama Health</div>
        <div className={styles.tagline}>exceptional therapy for Indians worldwide</div>
      </div>
      <div className={styles.colLinks}>
        <div className={styles.linkGroup}>
          <Link to="/" className={styles.link}>Home</Link>
          <a href="#about" className={styles.link}>About</a>
          <a href="#testimonials" className={styles.link}>Testimonials</a>
        </div>
        <div className={styles.linkGroup}>
          <Link to="/privacy-policy" className={styles.link}>Privacy Policy</Link>
          <Link to="/terms-and-conditions" className={styles.link}>Terms & Conditions</Link>
        </div>
      </div>
      <div className={styles.colContact}>
        <div className={styles.email}>Email: <a href="mailto:info@samahealth.life">info@samahealth.life</a></div>
        <div className={styles.socials}>
          <a href="#" className={styles.social} aria-label="LinkedIn">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><rect width="22" height="22" rx="4" fill="#fff" fillOpacity="0.12"/><path d="M7.5 9.5v5M7.5 7.5v.01M11 14.5v-3a1.5 1.5 0 1 1 3 0v3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
        <Link to="/book-call" className={styles.ctaBtn}>Contact Us</Link>
      </div>
    </div>
    <div className={styles.divider} />
    <div className={styles.copyright}>
      © {new Date().getFullYear()} Somamind Private Limited. All Rights Reserved.
    </div>
  </footer>
);

export default Footer; 
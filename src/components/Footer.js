import React from "react";
import styles from "../styles/Footer.module.css";
import { Link } from 'react-router-dom';
import whiteLogo from '../assets/whitelogo.png';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.colBrand}>
        <div className={styles.logo}>
          <img src={whiteLogo} alt="Sama Health White Logo" className={styles.logoImg} />
          <div className={styles.tagline}>If you are experiencing an emergency, please dial 998 or go to your local hospital immediately.</div>
        </div>
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
        <div className={styles.email}> <a href="mailto:info@samahealth.life">info@samahealth.life</a></div>
        <div className={styles.socials}>
          <a href="https://www.facebook.com/samahealth.life?mibextid=LQQJ4d" className={styles.social} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="transparent"/>
              <path d="M21.333 16.001h-3.2v8h-3.2v-8h-2.133v-2.667h2.133v-1.6c0-2.133 1.067-3.2 3.2-3.2h2.133v2.667h-1.6c-.267 0-.533.267-.533.533v1.6h2.133l-.267 2.667z" fill="#fff"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/sama_health?igshid=YmMyMTA2M2Y%3D" className={styles.social} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="transparent"/>
              <rect x="8" y="8" width="16" height="16" rx="5" stroke="#fff" strokeWidth="2"/>
              <circle cx="16" cy="16" r="4.5" stroke="#fff" strokeWidth="2"/>
              <circle cx="21.5" cy="10.5" r="1.5" fill="#fff"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/sama-health-life/" className={styles.social} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="transparent"/>
              <path d="M12.667 13.333h2.133v1.067c.293-.48 1.04-1.2 2.267-1.2 2.013 0 2.4 1.32 2.4 3.04v4.093h-2.133v-3.627c0-.867-.16-1.493-1.067-1.493-.907 0-1.2.627-1.2 1.493v3.627h-2.133v-7zM10.667 10.667a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-1.067 2.667h2.133v7h-2.133v-7z" fill="#fff"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className={styles.divider} />
    <div className={styles.copyright}>
      © Copyright SamaHealth 2025. All rights reserved.
    </div>
  </footer>
);

export default Footer; 
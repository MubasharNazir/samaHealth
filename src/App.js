import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TherapistStats from "./components/TherapistStats";
import BestTherapists from "./components/BestTherapists";
import ConnectTherapist from "./components/ConnectTherapist";
import Testimonials from "./components/Testimonials";
import PricingFAQ from "./components/PricingFAQ";
import ContactForm from './components/ContactForm';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import styles from "./styles/App.module.css";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function getActiveTab(location) {
  if (location.pathname === '/') {
    if (location.hash === '#testimonials') return 'testimonials';
    if (location.hash === '#faqs') return 'faqs';
    return 'home';
  }
  if (location.pathname === '/book-call') return 'contact';
  return '';
}

function MainApp() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = getActiveTab(location);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Scroll to section on hash change
  useEffect(() => {
    if (location.hash === '#testimonials' || location.hash === '#faqs') {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    }
    // Scroll to top when navigating to home (no hash)
    if (location.pathname === '/' && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash, location.pathname]);

  return (
    <div className={styles.app}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/assets/logo.png" alt="Sama Health Logo" className={styles.logoImg} />
        </div>
        <ul className={styles.navTabs}>
          <li>
            <Link
              to="/"
              className={`${styles.tabLink} ${activeTab === 'home' ? styles.activeTab : ''}`}
              onClick={e => {
                // If already on home, just scroll to top
                if (location.pathname === '/' && !location.hash) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              Home
            </Link>
          </li>
          <li><a href="/#testimonials" className={`${styles.tabLink} ${activeTab === 'testimonials' ? styles.activeTab : ''}`}>Testimonials</a></li>
          <li><a href="/#faqs" className={`${styles.tabLink} ${activeTab === 'faqs' ? styles.activeTab : ''}`}>FAQs</a></li>
        </ul>
        <button className={styles.ctaBtn} onClick={() => navigate('/book-call')}>
          For Business
        </button>
        <button className={styles.hamburger} onClick={() => setSidebarOpen(true)} aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </nav>
      <Hero />
      <TherapistStats />
      <BestTherapists />
      <ConnectTherapist />
      <div style={{ background: '#fdf8ef', height: '6rem', width: '100%' }} />
      <Testimonials />
      <PricingFAQ />
      <Footer />
    </div>
  );
}

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/book-call" element={<ContactForm />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
  </Router>
);

export default App;

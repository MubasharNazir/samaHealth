// import React from "react";
// import styles from "../styles/Footer.module.css";
// import { Link } from 'react-router-dom';
// import whiteLogo from '../assets/whitelogo.png';

// const Footer = () => (
//   <footer className={styles.footer}>
//     <div className={styles.inner}>
//       <div className={styles.colBrand}>
//         <div className={styles.logo}>
//           <img src={whiteLogo} alt="Sama Health White Logo" className={styles.logoImg} />
//           <div className={styles.tagline}>If you are experiencing an emergency, please dial 998 or go to your local hospital immediately.</div>
//         </div>
//       </div>
//       <div className={styles.colLinks}>
//         <div className={styles.linkGroup}>
//           <Link to="/" className={styles.link}>Home</Link>
//           <a href="#about" className={styles.link}>About</a>
//           <a href="#testimonials" className={styles.link}>Testimonials</a>
//         </div>
//         <div className={styles.linkGroup}>
//           <Link to="/privacy-policy" className={styles.link}>Privacy Policy</Link>
//           <Link to="/terms-and-conditions" className={styles.link}>Terms & Conditions</Link>
//         </div>
//       </div>
//       <div className={styles.colContact}>
//         <div className={styles.email}> <a href="mailto:info@samahealth.life">info@samahealth.life</a></div>
//         <div className={styles.socials}>
//           <a href="https://www.facebook.com/samahealth.life?mibextid=LQQJ4d" className={styles.social} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
//             <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <rect width="32" height="32" rx="6" fill="transparent"/>
//               <path d="M21.333 16.001h-3.2v8h-3.2v-8h-2.133v-2.667h2.133v-1.6c0-2.133 1.067-3.2 3.2-3.2h2.133v2.667h-1.6c-.267 0-.533.267-.533.533v1.6h2.133l-.267 2.667z" fill="#fff"/>
//             </svg>
//           </a>
//           <a href="https://www.instagram.com/sama_health?igshid=YmMyMTA2M2Y%3D" className={styles.social} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
//             <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <rect width="32" height="32" rx="6" fill="transparent"/>
//               <path d="M22.5 10.5c.4 0 .7.1 1 .3.3.3.4.6.4 1v8.4c0 .4-.1.7-.4 1-.3.2-.6.3-1 .3h-8.9c-.4 0-.7-.1-1-.3-.3-.3-.4-.6-.4-1v-8.4c0-.4.1-.7.4-1 .3-.2.6-.3 1-.3h8.9zm0-1.5h-8.9c-.8 0-1.5.3-2 .8-.5.5-.8 1.2-.8 2v8.4c0 .8.3 1.5.8 2 .5.5 1.2.8 2 .8h8.9c.8 0 1.5-.3 2-.8.5-.5.8-1.2.8-2v-8.4c0-.8-.3-1.5-.8-2-.5-.5-1.2-.8-2-.8zm-4.5 2.7a3.3 3.3 0 1 1 0 6.6 3.3 3.3 0 0 1 0-6.6zm0 1.5a1.8 1.8 0 1 0 0 3.6zm4.7-.6a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0z" fill="#fff"/>
//             </svg>
//           </a>
//           <a href="https://www.linkedin.com/company/sama-health-life/" className={styles.social} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
//             <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <rect width="32" height="32" rx="6" fill="transparent"/>
//               <path d="M12.667 13.333h2.133v1.067c.293-.48 1.04-1.2 2.267-1.2 2.013 0 2.4 1.32 2.4 3.04v4.093h-2.133v-3.627c0-.867-.16-1.493-1.067-1.493-.907 0-1.2.627-1.2 1.493v3.627h-2.133v-7zM10.667 10.667a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-1.067 2.667h2.133v7h-2.133v-7z" fill="#fff"/>
//             </svg>
//           </a>
//         </div>
//       </div>
//     </div>
//     <div className={styles.divider} />
//     <div className={styles.copyright}>
//       © Copyright SamaHealth 2025. All rights reserved.
//     </div>
//   </footer>
// );

// export default Footer; 
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="colBrand">
          <div className="logo">
            <img src="/assets/whitelogo.png" alt="Sama Health White Logo" className="logoImg" />
            <div className="tagline">If you are experiencing an emergency, please dial 998 or go to your local hospital immediately.</div>
          </div>
        </div>
        <div className="colLinks">
          <div className="linkGroup">
            <a href="/" className="link">Home</a>
            <a href="#about" className="link">About</a>
            <a href="#testimonials" className="link">Testimonials</a>
          </div>
          <div className="linkGroup">
            <a href="/privacy-policy" className="link">Privacy Policy</a>
            <a href="/terms-and-conditions" className="link">Terms & Conditions</a>
          </div>
        </div>
        <div className="colContact">
          <div className="email">
            <a href="mailto:info@samahealth.life">info@samahealth.life</a>
          </div>
          <div className="socials">
            <a href="https://www.facebook.com/samahealth.life?mibextid=LQQJ4d" className="social" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="6" fill="transparent"/>
                <path d="M21.333 16.001h-3.2v8h-3.2v-8h-2.133v-2.667h2.133v-1.6c0-2.133 1.067-3.2 3.2-3.2h2.133v2.667h-1.6c-.267 0-.533.267-.533.533v1.6h2.133l-.267 2.667z" fill="#fff"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/sama_health?igshid=YmMyMTA2M2Y%3D" className="social" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="6" fill="transparent"/>
                <path d="M22.5 10.5c.4 0 .7.1 1 .3.3.3.4.6.4 1v8.4c0 .4-.1.7-.4 1-.3.2-.6.3-1 .3h-8.9c-.4 0-.7-.1-1-.3-.3-.3-.4-.6-.4-1v-8.4c0-.4.1-.7.4-1 .3-.2.6-.3 1-.3h8.9zm0-1.5h-8.9c-.8 0-1.5.3-2 .8-.5.5-.8 1.2-.8 2v8.4c0 .8.3 1.5.8 2 .5.5 1.2.8 2 .8h8.9c.8 0 1.5-.3 2-.8.5-.5.8-1.2.8-2v-8.4c0-.8-.3-1.5-.8-2-.5-.5-1.2-.8-2-.8zm-4.5 2.7a3.3 3.3 0 1 1 0 6.6 3.3 3.3 0 0 1 0-6.6zm0 1.5a1.8 1.8 0 1 0 0 3.6zm4.7-.6a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0z" fill="#fff"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/sama-health-life/" className="social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="6" fill="transparent"/>
                <path d="M12.667 13.333h2.133v1.067c.293-.48 1.04-1.2 2.267-1.2 2.013 0 2.4 1.32 2.4 3.04v4.093h-2.133v-3.627c0-.867-.16-1.493-1.067-1.493-.907 0-1.2.627-1.2 1.493v3.627h-2.133v-7zM10.667 10.667a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-1.067 2.667h2.133v7h-2.133v-7z" fill="#fff"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="divider" />
      <div className="copyright">
        © Copyright SamaHealth 2025. All rights reserved.
      </div>

      <style jsx>{`
        .footer {
          background: #111;
          color: #fff;
          padding: 4rem 2rem 2rem 2rem;
          font-size: 1.08rem;
          box-sizing: border-box;
        }

        .inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .colBrand {
          flex: 1 1 300px;
          min-width: 280px;
        }

        .logo {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
        }

        .logoImg {
          max-width: 160px;
          height: auto;
          display: block;
          margin-bottom: 1rem;
        }

        .tagline {
          font-size: 1.08rem;
          color: #ccc;
          line-height: 1.4;
        }

        .colLinks {
          display: flex;
          gap: 3rem;
          flex: 1 1 400px;
          min-width: 300px;
        }

        .linkGroup {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .link {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          opacity: 0.85;
          transition: color 0.18s, opacity 0.18s;
          line-height: 1.4;
        }

        .link:hover {
          color: #e6a481;
          opacity: 1;
        }

        .colContact {
          flex: 1 1 250px;
          min-width: 220px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .email {
          color: #fff;
          font-size: 1.05rem;
          opacity: 0.85;
        }

        .email a {
          color: #fff;
          text-decoration: none;
          transition: color 0.18s;
        }

        .email a:hover {
          color: #e6a481;
          text-decoration: underline;
        }

        .socials {
          display: flex;
          gap: 0.8rem;
          align-items: center;
        }

        .social {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #e6a481;
          border-radius: 6px;
          padding: 6px;
          transition: all 0.18s ease;
          background: transparent;
          color: #fff;
          min-width: 44px;
          min-height: 44px;
        }

        .social svg {
          display: block;
          width: 24px;
          height: 24px;
          fill: currentColor;
          color: #fff;
        }

        .social:hover {
          border-color: #fff;
          box-shadow: 0 4px 12px rgba(230, 164, 129, 0.3);
          transform: translateY(-2px);
        }

        .divider {
          border-top: 1px solid #333;
          margin: 3rem 0 1.5rem 0;
        }

        .copyright {
          text-align: center;
          color: #888;
          font-size: 0.95rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Tablet styles */
        @media (max-width: 1024px) {
          .footer {
            padding: 3rem 1.5rem 2rem 1.5rem;
          }
          
          .inner {
            gap: 2.5rem;
          }
          
          .colLinks {
            gap: 2rem;
          }
        }

        /* Mobile landscape and smaller tablets */
        @media (max-width: 768px) {
          .footer {
            padding: 2.5rem 1rem 1.5rem 1rem;
            font-size: 1rem;
          }
          
          .inner {
            flex-direction: column;
            gap: 2rem;
            align-items: stretch;
          }
          
          .colBrand,
          .colLinks,
          .colContact {
            min-width: unset;
            width: 100%;
          }
          
          .colLinks {
            order: 2;
            flex-direction: row;
            justify-content: space-between;
            gap: 2rem;
          }
          
          .colContact {
            order: 3;
            align-items: center;
            text-align: center;
            gap: 1rem;
          }
          
          .logoImg {
            max-width: 140px;
          }
          
          .divider {
            margin: 2rem 0 1rem 0;
          }
        }

        /* Mobile portrait */
        @media (max-width: 480px) {
          .footer {
            padding: 2rem 1rem 1rem 1rem;
            font-size: 0.95rem;
          }
          
          .inner {
            gap: 1.5rem;
          }
          
          .colLinks {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .linkGroup {
            gap: 0.6rem;
          }
          
          .logoImg {
            max-width: 120px;
          }
          
          .tagline {
            font-size: 1rem;
          }
          
          .socials {
            gap: 0.6rem;
            justify-content: center;
          }
          
          .social {
            min-width: 40px;
            min-height: 40px;
            padding: 4px;
          }
          
          .social svg {
            width: 20px;
            height: 20px;
          }
        }

        /* Extra small devices */
        @media (max-width: 360px) {
          .footer {
            padding: 1.5rem 0.5rem 1rem 0.5rem;
            font-size: 0.9rem;
          }
          
          .inner {
            gap: 1rem;
          }
          
          .logoImg {
            max-width: 100px;
          }
          
          .tagline {
            font-size: 0.9rem;
          }
          
          .email {
            font-size: 0.9rem;
          }
          
          .copyright {
            font-size: 0.85rem;
          }
          
          .colLinks {
            gap: 1rem;
          }
          
          .linkGroup {
            gap: 0.4rem;
          }
          
          .link {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
import React from "react";
import styles from "../styles/Hero.module.css";

const Hero = () => (
  <section className={styles.hero} id="hero">
    <div className={styles.heroInner}>
      <div className={styles.heroLeft}>
        {/* <div className={styles.heroDesc}>
          Join the South Asian mental health community in UAE
        </div> */}
        <h1>Life is hard sometimes. Insta-therapy can only help so much. Let's talk about it.</h1>
        <div className={styles.heroDescHighlight}>
          Access qualified therapists that you can deeply connect with. We offer a curated offering for the South Asian community.
        </div>
        <div className={styles.downloadSection}>
          <div className={styles.downloadHeading}>Start feeling better — download the app today.</div>
          <div className={styles.storeIcons}>
            <a href="https://apps.apple.com/ae/app/sama-health/id6447992708" target="_blank" rel="noopener noreferrer">
              <img src="/assets/apple.svg" alt="App Store" className={styles.storeBtnImg} />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.sama.health_life&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
              <img src="/assets/playstore.svg" alt="Google Play" className={styles.storeBtnImg} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.heroRightSingle}>
        <img src="/assets/hero.jpg" alt="Android App" className={styles.heroImgSingle} />
      </div>
    </div>
  </section>
);

export default Hero; 
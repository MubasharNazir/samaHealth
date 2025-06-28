import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../styles/ConnectTherapist.module.css";

const steps = [
  {
    title: "1. Match",
    desc: "A quick call to tell us about yourself so that we can find a personalised match."
  },
  {
    title: "2. Assess fit",
    desc: "A free 30 minute call with Sama Health's recommended therapist to assess if they are the right fit for you."
  },
  {
    title: "3. Start online therapy",
    desc: "Pick a session time that works for your schedule & get started with online therapy."
  }
];

const ConnectTherapist = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <h2 className={styles.heading}>Get connected to a therapist that "gets you"</h2>
        <div className={styles.stepsRow}>
          {steps.map((step, i) => (
            <div className={styles.step} key={i}>
              <div className={styles.stepTitle}>{step.title}</div>
              <div className={styles.stepDesc}>{step.desc}</div>
            </div>
          ))}
        </div>
        <button className={styles.ctaBtn} onClick={() => navigate('/book-call')}>Book a free call with Sama Health</button>
      </div>
    </section>
  );
};

export default ConnectTherapist; 
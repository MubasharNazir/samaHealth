import React from "react";
import styles from "../styles/TherapistStats.module.css";

const stats = [
  {
    value: "3+",
    label: "attempts to find the right fit."
  },
  {
    value: "6.3",
    label: "months on average to find a true match."
  },
  {
    value: "53%",
    label: "of people feel judged by their therapist."
  }
];

const TherapistStats = () => (
  <section className={styles.section}>
    <div className={styles.box}>
      <h2 className={styles.heading}>Finding a good therapist is really really hard in India</h2>
      <div className={styles.statsRow}>
        {stats.map((stat, i) => (
          <div className={styles.stat} key={i}>
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
            {i < stats.length - 1 && <div className={styles.divider} />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TherapistStats; 
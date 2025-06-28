import React from "react";
import styles from "../styles/BestTherapists.module.css";

const featureImages = [
  { avif: "/assets/first.avif", jpg: "/assets/first.jpg", alt: "Therapist 1" },
  { avif: "/assets/second.avif", jpg: "/assets/second.jpg", alt: "Therapist 2" },
  { avif: "/assets/third.avif", jpg: "/assets/third.jpg", alt: "Therapist 3" }
];

const features = [
  {
    imageFirst: true,
    title: "Get Your Mental Wellbeing Assessed.",
    text: [
      "Not sure if therapy is for you? Chat to our specialists who will be able to help you assess your mental wellbeing.",
      " The evaluation criteria will take psychological, biological, and social factors into account. Timely assessment of your mental health enables you to identify, respond, and manage the unique stressors that influence your everyday mental state and long-term mental wellbeing."
    ]
  },
  {
    imageFirst: false,
    title: "Private And Secure.",
    text: [
      "Private and Secure. Mental health continues to be a taboo subject among billions of people worldwide.",
      "While Sama Health cannot change the underlying social dynamics overnight, we can give you a secure, and private platform to seek expert help. With Sama Health, you get top-notch psychologist therapy right from the comforts of your home, 24x7. Mental well-being is a profoundly personal journey. Let's keep it that way."
    ]
  },
  {
    imageFirst: true,
    title: "They are experienced and skilled.",
    text: [
      "All therapists have 5+ years of experience and 200+ hours of training and clinical supervision."
    ]
  }
];

const BestTherapists = () => (
  <section className={styles.section}>
    <div className={styles.header}>
      <h2 className={styles.title}>We solve this by onboarding only the "best" therapists</h2>
      <p className={styles.subtitle}>
        At Sama Health, we onboard only the most qualified therapists through a rigorous vetting process, ensuring every therapist is experienced, empathetic, and skilled.
      </p>
    </div>
    <div className={styles.features}>
      {features.map((feature, i) => (
        <div className={styles.featureRow} key={i} style={i < features.length - 1 ? { marginBottom: '3.5rem' } : {}}>
          {feature.imageFirst && (
            <picture>
              <source srcSet={featureImages[i].avif} type="image/avif" />
              <img
                src={featureImages[i].jpg}
                alt={featureImages[i].alt}
                className={styles.featureImg}
              />
            </picture>
          )}
          <div className={styles.featureText}>
            <h3>{feature.title}</h3>
            {Array.isArray(feature.text)
              ? feature.text.map((p, idx) => <p key={idx}>{p}</p>)
              : <p>{feature.text}</p>}
          </div>
          {!feature.imageFirst && (
            <picture>
              <source srcSet={featureImages[i].avif} type="image/avif" />
              <img
                src={featureImages[i].jpg}
                alt={featureImages[i].alt}
                className={styles.featureImg}
              />
            </picture>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default BestTherapists; 
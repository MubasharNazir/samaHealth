import React from "react";
import styles from "../styles/Testimonials.module.css";

const testimonials = [
  {
    quote:
      "I have tried therapy in the past with many therapists, but Chaitali from Sama Health was the only one who helped me explore all aspects of my life, including my childhood. This has immensely helped me in connecting the dots. Every session feels like a treasure hunt because I discover something new about myself each time.",
    author: "- Male, early 30s, Bengaluru"
  },
  {
    quote:
      "My Sama Health therapist knows exactly what questions to ask, which helps me understand why I feel the way I do. For me, she's helped confront and work through decades of deep-seated fears and trauma – exactly what I was seeking in therapy.",
    author: "- Female, early 30s, London"
  },
  {
    quote:
      "As a working professional, I've found therapy with Sama Health to be incredibly valuable for exploring my inner feelings and achieving a better work-life balance. I get clarity of thought after discussing stuff with my therapist. It helps me bring out few things on the surface and understand the root cause of it.",
    author: "- Male, early 30s, Bengaluru"
  },
  {
    quote:
      "I am someone who finds it very hard to describe how I am feeling. I always thought therapy wont work for me because of this reason. My Sama Health therapist made me draw with my left hand, to help me connect with my emotions and express what I was feeling. Over time, I have been able to get in touch with my emotions, which has helped me keep my anxiety in check.",
    author: "- Female, late 20s, Mumbai"
  },
  {
    quote:
      "I had reached the point where stress was starting to impact every aspect of my life. After sessions with my therapist, I usually feel calm and relaxed. One unexpected yet incredible benefit has been her impact on my physical well-being. Sama Health therapy is helping me keep my shoulder pain in check.",
    author: "- Male, early 30s, Bengaluru"
  },
  {
    quote:
      "Sama Health's therapists are so empathetic and skilled. I feel heard and understood in every session. Therapy has become a safe space for me to grow and heal.",
    author: "- Female, late 20s, Delhi"
  }
];

const Testimonials = () => (
  <section className={styles.section} id="testimonials">
    <h2 className={styles.heading}>What clients say about Sama Health</h2>
    <div className={styles.grid}>
      {testimonials.map((t, i) => (
        <div className={styles.card} key={i}>
          <div className={styles.quote}>{t.quote}</div>
          <div className={styles.author}>{t.author}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials; 
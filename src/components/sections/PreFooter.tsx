"use client";

import styles from "./PreFooter.module.css";
import { ArrowRight } from "lucide-react";

export default function PreFooter() {
  const content = (
    <>
      <span className={styles.text}>READY TO</span>
      <span className={`${styles.text} ${styles.textOutline}`}>TAKE OFF?</span>
      <ArrowRight size={80} style={{ alignSelf: 'center', opacity: 0.5 }} />
    </>
  );

  return (
    <section className={styles.preFooter}>
      <div className={styles.subtitle}>Let's Talk</div>
      
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {/* Repeat multiple times for smooth infinite scroll */}
          <div style={{ display: 'flex', gap: '2rem' }}>{content}</div>
          <div style={{ display: 'flex', gap: '2rem' }}>{content}</div>
          <div style={{ display: 'flex', gap: '2rem' }}>{content}</div>
          <div style={{ display: 'flex', gap: '2rem' }}>{content}</div>
        </div>
      </div>
    </section>
  );
}

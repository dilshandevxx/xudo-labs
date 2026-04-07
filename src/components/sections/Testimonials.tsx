"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.header}>
        <h4 className={styles.subtitle}>Reviews</h4>
        <h2 className={styles.title}>What they think</h2>
      </div>

      <motion.div 
        className={styles.quoteContainer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.avatar}>
          <Image 
            src="/images/hero.png" 
            alt="John Doe" 
            fill 
            style={{ objectFit: 'cover' }}
          />
        </div>

        <h3 className={styles.quote}>
          "Your reputation is more important than your paycheck, and your integrity."
        </h3>

        <div className={styles.author}>
          <span className={styles.authorName}>John Doe</span>
          CEO of Company
        </div>

        <div className={styles.dots}>
          <div className={`${styles.dot} ${styles.dotActive}`} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
      </motion.div>
    </section>
  );
}

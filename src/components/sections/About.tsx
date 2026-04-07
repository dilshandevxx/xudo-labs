"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section className={styles.aboutSection} ref={containerRef}>
      <div className={styles.imageGrid}>
        <motion.div style={{ y: y1 }} className={styles.mainImage}>
          <Image 
            src="/images/hero.png" 
            alt="Workspace" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover', borderRadius: '4px' }}
          />
        </motion.div>
        <motion.div style={{ y: y2 }} className={styles.secondaryImage}>
          <Image 
            src="/images/about.png" 
            alt="Our Team" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover', borderRadius: '4px' }}
          />
        </motion.div>
      </div>

      <div className={styles.textContent}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className={styles.title}>
            WHO WE <span>ARE</span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className={styles.description}>
            We are a digital agency focused on building high-end web experiences. 
            We blend design and technology to create premium identities for brands who want to stand out.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

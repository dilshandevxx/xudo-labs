"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb, Rocket, ArrowRight } from "lucide-react";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>We build experience</h2>
        <a href="#" className={styles.link}>Know more —</a>
      </div>

      <div className={styles.content}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className={styles.cardIcon}>
              <Lightbulb size={32} />
            </div>
            <h3 className={styles.cardTitle}>Ideas</h3>
            <p className={styles.cardDesc}>
              We create beautiful stories that are meaningful to your audience, turning abstract concepts into engaging visual content.
            </p>
          </div>
          <a href="#" className={styles.cardLink}>
            Read More <ArrowRight size={14} />
          </a>
        </motion.div>

        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <div className={styles.cardIcon}>
              <Rocket size={32} />
            </div>
            <h3 className={styles.cardTitle}>Marketing</h3>
            <p className={styles.cardDesc}>
              Using data-driven strategies and bold creative direction, we skyrocket your brand visibility in a crowded digital space.
            </p>
          </div>
          <a href="#" className={styles.cardLink}>
            Read More <ArrowRight size={14} />
          </a>
        </motion.div>

        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image 
            src="/images/about.png" 
            alt="Experience" 
            fill 
            className={styles.image} 
          />
        </motion.div>
      </div>
    </section>
  );
}

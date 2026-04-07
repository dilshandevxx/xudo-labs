"use client";

import { motion } from "framer-motion";
import styles from "./ServicesHero.module.css";

export default function ServicesHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const } }
  };

  return (
    <section className={styles.heroSection}>
      <motion.div 
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.subtitle} variants={itemVariants}>
          What we do
        </motion.div>
        
        <motion.h1 className={styles.title} variants={itemVariants}>
          Architecting The Future
        </motion.h1>
        
        <motion.p className={styles.description} variants={itemVariants}>
          We deliver world-class digital experiences across the entire technology stack. 
          From visionary UI designs to scalable SaaS architectures, our expertise drives absolute performance.
        </motion.p>
      </motion.div>
    </section>
  );
}

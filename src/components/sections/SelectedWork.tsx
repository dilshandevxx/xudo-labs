"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./SelectedWork.module.css";

const PROJECTS = [
  { id: 1, title: "Secti Ante", category: "BRANDING", image: "/images/hero.png" },
  { id: 2, title: "Phase Blend", category: "PACKAGING", image: "/images/portfolio1.png" },
  { id: 3, title: "Precevel", category: "WEB DESIGN", image: "/images/about.png" },
  { id: 4, title: "Eu Fance", type: "APP DESIGN", image: "/images/hero.png", category: "UI/UX" },
  { id: 5, title: "Red Hemp", category: "E-COMMERCE", image: "/images/portfolio1.png" },
  { id: 6, title: "Malam", category: "ILLUSTRATION", image: "/images/about.png" },
];

export default function SelectedWork() {
  return (
    <section className={styles.workSection}>
      <div className={styles.header}>
        <h4 className={styles.subtitle}>Portfolio</h4>
        <h2 className={styles.title}>Selected Work</h2>
      </div>

      <div className={styles.grid}>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            className={styles.projectCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.image}
              />
            </div>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectName}>{project.title}</h3>
              <span className={styles.projectCategory}>{project.category}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

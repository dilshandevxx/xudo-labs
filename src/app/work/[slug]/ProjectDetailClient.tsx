"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import styles from "./page.module.css";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  // Simple fade entrance for the brutalist layout
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  } as const;

  return (
    <main className={styles.main}>
      
      {/* HEADER SECTION */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <motion.div {...fadeIn}>
            <span className={styles.category}>{project.category}</span>
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>{project.role}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Year</span>
                <span className={styles.metaValue}>{project.year}</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className={styles.headerRight}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {project.title}
          </motion.h1>
          <motion.p 
            className={styles.metaValue} 
            style={{ marginTop: '2rem', opacity: 0.4 }}
            {...fadeIn}
          >
            Project Archive // 0{project.id}
          </motion.p>
        </div>
      </header>

      {/* PROBLEM SECTION */}
      <section className={styles.section}>
        <div className={styles.sectionLeft}>
          <motion.span 
            className={styles.sectionLabel}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            01 — The Problem
          </motion.span>
        </div>
        <div className={styles.sectionRight}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Fragmented identity and market misalignment.
          </motion.h2>
          <motion.p 
            className={styles.sectionDescription}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {project.challenge}
          </motion.p>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className={styles.section}>
        <div className={styles.sectionLeft}>
          <motion.span 
            className={styles.sectionLabel}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            02 — The Solution
          </motion.span>
        </div>
        <div className={styles.sectionRight}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            A cohesive monolith for future scaling.
          </motion.h2>
          <motion.p 
            className={styles.sectionDescription}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {project.solution}
          </motion.p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.cta}>
        <motion.a 
          href={project.liveUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.visitLink}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          EXPERIENCE LIVE
          <span className={styles.visitSub}>Click to view project</span>
        </motion.a>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <Link href="/work" className={styles.backLink}>
          Back to Portfolio
        </Link>
      </footer>

    </main>
  );
}

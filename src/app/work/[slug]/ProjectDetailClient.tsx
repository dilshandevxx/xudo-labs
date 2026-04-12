"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { Project, PROJECTS } from "@/data/projects";
import styles from "./page.module.css";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Logic to find next project
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <main className={styles.main}>
      {/* Top Header Progress (Simulating Story Player) */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <motion.div className={styles.progressFill} style={{ scaleX }} />
        </div>
      </div>

      {/* Floating UI Navigation Shell */}
      <header className={styles.navCapsule}>
        <Link href="/" className={styles.navItem}>Home</Link>
        <span className={`${styles.navItem} ${styles.navItemActive}`}>Stories</span>
        <span className={styles.navItem}>Creators</span>
        <span className={styles.navItem}>Studio</span>
      </header>

      {/* Side Control Icons (Glass Circles) */}
      <Link href="/work" className={`${styles.iconBtn} ${styles.iconLeft}`} title="Back to Archive">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </Link>

      <div className={`${styles.iconBtn} ${styles.iconRight}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      </div>

      <div className={`${styles.iconBtn} ${styles.iconRight2}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
        </svg>
      </div>

      <article className={styles.article}>
        {/* HERO: Vertical Info in Glass Card */}
        <motion.div 
          className={styles.glassHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.category}>{project.category}</span>
          <h1 className={styles.title}>{project.title}</h1>
          
          <div className={styles.metaStack}>
            <div className={styles.metaItem}>{project.client}</div>
            <div className={styles.metaItem}>{project.role}</div>
            <div className={styles.metaItem}>{project.year}</div>
          </div>

          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitLive}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Page
          </motion.a>
        </motion.div>

        {/* NARRATIVE Sections in Separate Glass Cards */}
        <motion.div 
          className={styles.glassSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h3 className={styles.sectionTitle}>The Challenge</h3>
          <p className={styles.sectionText}>{project.challenge}</p>
        </motion.div>

        <motion.div 
          className={styles.glassSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3 className={styles.sectionTitle}>The Solution</h3>
          <p className={styles.sectionText}>{project.solution}</p>
        </motion.div>

        {/* FOOTER: 'Next Story' Card (Exact replication) */}
        <footer className={styles.footer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Link href={`/work/${nextProject.slug}`} className={styles.nextStoryCard}>
              <div className={styles.nextThumb}>
                <Image
                  src={nextProject.image}
                  alt={nextProject.title}
                  fill
                  className={styles.image}
                  sizes="70px"
                />
              </div>
              <div className={styles.nextInfo}>
                <span className={styles.nextLabel}>Next Story</span>
                <h4 className={styles.nextTitle}>{nextProject.title} — {nextProject.category}</h4>
              </div>
            </Link>
          </motion.div>

          <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link href="/work" className={styles.iconBtn} style={{ position: 'static' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: 'rotate(90deg)' }}>
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </Link>
            <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1rem', marginTop: '1rem', color: '#666' }}>Back Up</span>
          </div>
        </footer>

      </article>
    </main>
  );
}

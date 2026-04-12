"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, Project } from "@/data/projects";
import styles from "./page.module.css";

const ALL_CATEGORY = "ALL PROJECTS";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);

  // Extract unique categories from PROJECTS
  const categories = useMemo(() => {
    const cats = new Set(PROJECTS.map((p) => p.category));
    return [ALL_CATEGORY, ...Array.from(cats)].sort();
  }, []);

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === ALL_CATEGORY) {
      return PROJECTS;
    }
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className={styles.workPage}>
      <div className={styles.header}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          Selected Work
        </motion.h1>

        <motion.div 
          className={styles.filterNav}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div layout className={styles.listContainer}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: Project, index: number) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              key={project.id}
              className={styles.projectCard}
            >
              <Link href={`/work/${project.slug}`} className={styles.projectLink}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 90vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.projectInfo}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectCategory}>{project.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.emptyState}
          >
            No projects found for {activeCategory}.
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}

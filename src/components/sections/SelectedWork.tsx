"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./SelectedWork.module.css";
import { PROJECTS } from "@/data/projects";

export default function SelectedWork() {
  return (
    <section className={styles.workSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our Work</h2>
      </div>

      <div className={styles.grid}>
        {PROJECTS.map((project, index) => (
          <Link key={project.id} href={`/work/${project.slug}`} className={styles.projectLink}>
            <motion.div
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.viewBadge}>
                    View<br />Project
                  </div>
                  <h3 className={styles.projectName}>{project.title}</h3>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

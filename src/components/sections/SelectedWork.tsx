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
        <h4 className={styles.subtitle}>Portfolio</h4>
        <h2 className={styles.title}>Selected Work</h2>
      </div>

      <div className={styles.grid}>
        {PROJECTS.map((project, index) => (
          <Link key={project.id} href={`/work/${project.slug}`} className={styles.projectLink}>
            <motion.div
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
          </Link>
        ))}
      </div>
    </section>
  );
}

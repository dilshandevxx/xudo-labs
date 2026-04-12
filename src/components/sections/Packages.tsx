"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Packages.module.css";

const PACKAGES = [
  {
    id: "01",
    name: "Identity Systems",
    description: "Foundational brand architecture for high-stakes enterprise ventures.",
    features: ["Visual Identity", "Brand Strategy", "Typography Systems", "Logo Architecture"],
    price: "From $8k"
  },
  {
    id: "02",
    name: "Digital Core",
    description: "High-performance digital platforms engineered for future scale.",
    features: ["Next.js Platforms", "Interactive WebGL", "Headless CMS", "Technical SEO"],
    price: "From $15k"
  },
  {
    id: "03",
    name: "Intelligent Suite",
    description: "Custom AI systems and predictive interfaces for the next era of tech.",
    features: ["Custom LLM Training", "Predictive UX", "Algorithmic Design", "Real-time AI Nodes"],
    price: "From $25k"
  }
];

export default function Packages() {
  return (
    <section className={styles.packagesSection}>
      <div className={styles.header}>
        <motion.span 
          className={styles.label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Studio Offerings
        </motion.span>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Project Packages
        </motion.h2>
      </div>

      <div className={styles.grid}>
        {PACKAGES.map((pkg, index) => (
          <motion.div 
            key={pkg.id}
            className={styles.packageCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <span className={styles.packageNumber}>[ {pkg.id} ]</span>
            <h3 className={styles.packageName}>{pkg.name}</h3>
            <p className={styles.packageDescription}>{pkg.description}</p>
            
            <ul className={styles.featureList}>
              {pkg.features.map((feature, i) => (
                <li key={i} className={styles.featureItem}>{feature}</li>
              ))}
            </ul>

            <div className={styles.priceContainer}>
              <span className={styles.priceLabel}>Investment</span>
              <span className={styles.priceValue}>{pkg.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.viewAllContainer}>
        <Link href="/packages" className={styles.viewAllBtn}>
          View All Project Types — Explore Full Archive
        </Link>
      </div>
    </section>
  );
}

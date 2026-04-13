"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Packages.module.css";

const PACKAGES = [
  {
    id: "02",
    name: "Starter",
    description: "Smart single-page architectural engines with core performance optimization.",
    features: ["Custom Landing Page", "Domain Integration", "SEO & Analytics", "Responsive Grid"],
    price: "From $15k",
    isBestSeller: true
  },
  {
    id: "03",
    name: "Growth",
    description: "Multi-page digital ecosystems designed for market dominance and lead gen.",
    features: ["Multi-Page Site", "Advanced Local SEO", "Social Integration", "Content CMS"],
    price: "From $28k",
    isBestSeller: false
  },
  {
    id: "04",
    name: "Premium",
    description: "Business-grade infrastructure for high-stakes enterprise organizations.",
    features: ["Pro Multi-Page Site", "Business Email Setup", "Advanced SEO Suite", "SLA Support"],
    price: "From $45k",
    isBestSeller: false
  }
];

export default function Packages() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
  } as const;

  return (
    <section className={styles.packagesSection}>
      <div className={styles.header}>
        <motion.span 
          className={styles.label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          technical_offerings // 24
        </motion.span>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Production <br /> Tiers
        </motion.h2>
      </div>

      <div className={styles.grid}>
        {PACKAGES.map((pkg, index) => (
          <motion.div 
            key={pkg.id}
            className={styles.packageCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...fadeIn.transition, delay: index * 0.1 }}
            viewport={{ once: true }}
          >

            
            <header className={styles.cardHeader}>
              <h3 className={styles.packageName}>{pkg.name}</h3>
              <div className={styles.priceValue}>{pkg.price}</div>
            </header>

            <p className={styles.packageDescription}>{pkg.description}</p>
            
            <ul className={styles.featureList}>
              {pkg.features.map((feature, i) => (
                <li key={i} className={styles.featureItem}>
                  <span className={styles.checkIcon}>+</span>
                  {feature}
                </li>
              ))}
            </ul>

            <motion.a 
              href="mailto:hello@xudo.studio"
              className={styles.inquireBtn}
              whileHover={{ x: 5 }}
            >
              Initiate Project
            </motion.a>
          </motion.div>
        ))}
      </div>

      <div className={styles.viewAllContainer}>
        <Link href="/packages" className={styles.viewAllBtn}>
          <span>View Full Package List</span>
          <div className={styles.btnArrow}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
}

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
    price: "$15,000",
    priceNote: "Starting At",
    badge: null
  },
  {
    id: "03",
    name: "Growth",
    description: "Multi-page digital ecosystems designed for market dominance and lead gen.",
    features: ["Multi-Page Site", "Advanced Local SEO", "Social Integration", "Content CMS"],
    price: "$28,000",
    priceNote: "Starting At",
    badge: "MOST POPULAR"
  },
  {
    id: "04",
    name: "Premium",
    description: "Business-grade infrastructure for high-stakes enterprise organizations.",
    features: ["Pro Multi-Page Site", "Business Email Setup", "Advanced SEO Suite", "SLA Support"],
    price: "$45,000",
    priceNote: "Starting At",
    badge: null
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
        <motion.div 
          className={styles.label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          TECHNICAL_OFFERINGS // 24
        </motion.div>
        
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Production<br />Tiers
        </motion.h2>
      </div>

      <div className={styles.grid}>
        {PACKAGES.map((pkg, index) => {
           const isFeatured = !!pkg.badge;
           return (
             <motion.div 
                key={pkg.id}
                className={`${styles.packageCard} ${isFeatured ? styles.cardFeatured : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...fadeIn.transition, delay: index * 0.1 }}
                viewport={{ once: true }}
             >
                {/* Top Meta */}
                <div className={styles.cardMeta}>
                  <span className={styles.cardIndex}>{pkg.id}</span>
                  {isFeatured && <span className={styles.cardBadge}>{pkg.badge}</span>}
                </div>

                {/* Price Area */}
                <div className={styles.priceHero}>
                  <div className={styles.priceValue}>{pkg.price}</div>
                  <div className={styles.priceNote}>{pkg.priceNote}</div>
                </div>

                {/* Identity */}
                <div className={styles.cardIdentity}>
                  <h3 className={styles.cardTitle}>{pkg.name}</h3>
                  <p className={styles.cardDesc}>{pkg.description}</p>
                </div>

                {/* Features */}
                <ul className={styles.featureList}>
                  {pkg.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      <span className={styles.checkIcon}></span>
                      <span className={styles.featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className={styles.cardActions}>
                  <Link href="mailto:hello@xudo.studio" className={styles.inquireBtn}>
                    Initiate Project
                  </Link>
                </div>

             </motion.div>
           )
        })}
      </div>

      <div className={styles.viewAllContainer}>
        <Link href="/packages" className={styles.viewAllBtn}>
          View Full Package List
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

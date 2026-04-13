"use client";

import Link from "next/link";
import styles from "./Packages.module.css";

const PACKAGES = [
  {
    id: "02",
    name: "Starter",
    description: "Smart single-page architectural engines with core performance optimization.",
    features: ["Custom Landing Page", "Domain Integration", "SEO & Analytics", "Responsive Grid"],
    price: "$15,000",
  },
  {
    id: "03",
    name: "Growth",
    description: "Multi-page digital ecosystems designed for market dominance and lead gen.",
    features: ["Multi-Page Site", "Advanced Local SEO", "Social Integration", "Content CMS"],
    price: "$28,000",
  },
  {
    id: "04",
    name: "Premium",
    description: "Business-grade infrastructure for high-stakes enterprise organizations.",
    features: ["Pro Multi-Page Site", "Business Email Setup", "Advanced SEO Suite", "SLA Support"],
    price: "$45,000",
  }
];

export default function Packages() {
  return (
    <section className={styles.packagesSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Packages
        </h2>
      </div>

      <div className={styles.grid}>
        {PACKAGES.map((pkg) => (
          <div key={pkg.id} className={styles.packageCard}>
            
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{pkg.name}</h3>
              <div className={styles.priceValue}>{pkg.price}</div>
            </div>

            <p className={styles.cardDesc}>{pkg.description}</p>

            <ul className={styles.featureList}>
              {pkg.features.map((feature, i) => (
                <li key={i} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>

            <div className={styles.cardActions}>
              <Link href="mailto:hello@xudo.studio" className={styles.inquireBtn}>
                Inquire
              </Link>
            </div>

          </div>
        ))}
      </div>

      <div className={styles.viewAllContainer}>
        <Link href="/packages" className={styles.viewAllBtn}>
          View All Packages
        </Link>
      </div>
    </section>
  );
}

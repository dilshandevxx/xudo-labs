"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const DETAILED_OFFERINGS = [
  {
    id: "01",
    category: "Identity Systems",
    price: "From $12,000",
    description: "Engineering the visual foundation for enterprise stability and distinctiveness.",
    specs: [
      { module: "Visual Architecture", deliverable: "Logo system & marks" },
      { module: "Typographic DNA", deliverable: "Custom font mapping" },
      { module: "Strategic Narrative", deliverable: "Market positioning" },
      { module: "Brand Book", deliverable: "Technical guidelines" }
    ]
  },
  {
    id: "02",
    category: "Digital Core",
    price: "From $18,000",
    description: "High-performance digital platforms engineered with architectural precision.",
    specs: [
      { module: "High-End Website", deliverable: "Next.js 15+ engine" },
      { module: "Platform UX/UI", deliverable: "Full product design" },
      { module: "Headless CMS", deliverable: "Content architecture" },
      { module: "Motion Logic", deliverable: "Custom WebGL" }
    ]
  },
  {
    id: "03",
    category: "Intelligent Suite",
    price: "From $35,000",
    description: "Integrating next-generation intelligence into modern workflows.",
    specs: [
      { module: "Custom LLM Suite", deliverable: "Fine-tuned models" },
      { module: "Predictive UI", deliverable: "Adaptive interfaces" },
      { module: "AI Web Nodes", deliverable: "Generative components" },
      { module: "Data Strategy", deliverable: "Vector database" }
    ]
  }
] as const;

export default function PackagesClient() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  } as const;

  return (
    <main style={{ backgroundColor: '#000' }}>
      <Header />
      
      <div className={styles.container}>
        {/* CLEAN HEADER */}
        <header className={styles.header}>
          <motion.span 
            className={styles.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Digital Studio // Service Tiers
          </motion.span>
          <h1 className={styles.title}>
            Production <br /> Packages.
          </h1>
          <p className={styles.description}>
            Fixed-scope investment tiers for world-class branding, 
            high-performance engineering, and industrial-grade AI systems.
          </p>
        </header>

        {/* STRUCTURAL PRICING GRID */}
        <section className={styles.pricingGrid}>
          {DETAILED_OFFERINGS.map((cat, index) => (
            <motion.div 
              key={cat.id} 
              className={styles.card}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
            >
              <span className={styles.cardId}>ARCHIVE_{cat.id}</span>
              <h2 className={styles.cardTitle}>{cat.category}</h2>
              <div className={styles.price}>{cat.price}</div>
              <p className={styles.cardDesc}>{cat.description}</p>

              <div className={styles.specsList}>
                {cat.specs.map((spec, i) => (
                  <div key={i} className={styles.specItem}>
                    <span className={styles.specLabel}>{spec.module}</span>
                    <span className={styles.specValue}>{spec.deliverable}</span>
                  </div>
                ))}
              </div>

              <motion.a 
                href="mailto:hello@xudo.studio"
                className={styles.inquireBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Inquire Production
              </motion.a>
            </motion.div>
          ))}
        </section>

        {/* OUTRO CALL */}
        <section className={styles.outro}>
          <h2 className={styles.outroTitle}>Custom Architectures Required?</h2>
          <a href="mailto:hello@xudo.studio" className={styles.contactLink}>
            Let's Talk.
          </a>
          
          <Link href="/" className={styles.backHome}>
            Return to Studio Overview
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}

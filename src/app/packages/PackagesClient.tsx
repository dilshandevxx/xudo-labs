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
    description: "Engineering the visual foundation for enterprise stability and distinctiveness.",
    specs: [
      { module: "Visual Architecture", deliverable: "Logo system, primary & secondary marks", price: "$8k+" },
      { module: "Typographic DNA", deliverable: "Custom font selection and hierarchy mapping", price: "$3k+" },
      { module: "Strategic Narrative", deliverable: "Brand voice, tone, and market positioning", price: "$5k+" },
      { module: "Brand Book", deliverable: "v1.0 Internal technical guidelines", price: "$4k+" }
    ]
  },
  {
    id: "02",
    category: "Digital Core",
    description: "High-performance digital platforms engineered with architectural precision.",
    specs: [
      { module: "High-End Website", deliverable: "Custom Next.js 15+ marketing engine", price: "$12k+" },
      { module: "Platform UX/UI", deliverable: "End-to-end product design systems", price: "$20k+" },
      { module: "CMS & Workflow", deliverable: "Headless content architecture (Sanity/Strapi)", price: "$5k+" },
      { module: "Interactive motion", deliverable: "Custom WebGL & Framer Motion logic", price: "$10k+" }
    ]
  },
  {
    id: "03",
    category: "Intelligent Suite",
    description: "Integrating next-generation intelligence into modern workflows.",
    specs: [
      { module: "Custom LLM Suite", deliverable: "Fine-tuned models for proprietary brand data", price: "$35k+" },
      { module: "Predictive UI", deliverable: "Interfaces that learn and adapt to user intent", price: "$25k+" },
      { module: "AI Web Nodes", deliverable: "Live generative components and chat ecosystems", price: "$15k+" },
      { module: "Data Strategy", deliverable: "Security and vector database architecture", price: "$10k+" }
    ]
  }
];

export default function PackagesClient() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <main style={{ backgroundColor: '#000' }}>
      <Header />
      
      <div className={styles.container}>
        {/* KINETIC INTRO */}
        <section className={styles.intro}>
          <motion.span 
            className={styles.introLabel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Digital Studio Catalogue // v2.5
          </motion.span>
          <motion.h1 
            className={styles.introTitle}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Structuring <br /> The Future.
          </motion.h1>
        </section>

        {/* MODULAR CATEGORIES */}
        {DETAILED_OFFERINGS.map((cat, index) => (
          <section key={cat.id} className={styles.categorySection}>
            <div className={styles.catInfo}>
              <div className={styles.stickyHeader}>
                <span className={styles.catNumber}>ARCHIVE_{cat.id}</span>
                <h2 className={styles.catTitle}>{cat.category}</h2>
                <p className={styles.catDesc}>{cat.description}</p>
              </div>
            </div>

            <div className={styles.specsWrapper}>
              <div className={styles.specTable}>
                {cat.specs.map((spec, i) => (
                  <motion.div 
                    key={i} 
                    className={styles.specRow}
                    {...fadeIn}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className={styles.specModule}>{spec.module}</span>
                    <span className={styles.specDeliverable}>{spec.deliverable}</span>
                    <span className={styles.specPrice}>{spec.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* INQUIRY MONOLITH */}
        <section className={styles.monolith}>
          <motion.h2 
            className={styles.monolithTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Initiate <br /> Production.
          </motion.h2>
          <motion.a 
            href="mailto:hello@xudo.studio"
            className={styles.monolithBtn}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Book Architect Intro
          </motion.a>
          
          <Link href="/" className={styles.backHome}>
            Return to Studio Overview
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}

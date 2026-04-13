"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const DETAILED_OFFERINGS = [
  {
    id: "01",
    category: "Basic",
    price: "From $8,000",
    description: "Foundational digital presence for emerging brands and solo ventures.",
    specs: [
      { module: "Single Page", deliverable: "Structural landing page" },
      { module: "Subdomain", deliverable: "Free XUDE hosting sub" },
      { module: "Map Setup", deliverable: "Basic location integration" },
      { module: "Core SEO", deliverable: "Metadata & indexing v1.0" }
    ]
  },
  {
    id: "02",
    category: "Starter",
    price: "From $15,000",
    description: "Smart single-page architectural engines with core performance optimization.",
    specs: [
      { module: "Custom Landing", deliverable: "Awwwards-lvl typography" },
      { module: "Custom Domain", deliverable: "Identity integration" },
      { module: "Analytics", deliverable: "Full tracking events" },
      { module: "Mobile Optimize", deliverable: "Responsive grid sync" }
    ],
    isBestSeller: true
  },
  {
    id: "03",
    category: "Growth",
    price: "From $28,000",
    description: "Multi-page digital ecosystems designed for market dominance and lead gen.",
    specs: [
      { module: "Multi-Page", deliverable: "Core 5-page structure" },
      { module: "Local SEO", deliverable: "Map & listing dominance" },
      { module: "Social Sync", deliverable: "Facebook & WhatsApp logic" },
      { module: "CMS Hub", deliverable: "Technical content management" }
    ]
  },
  {
    id: "04",
    category: "Premium",
    price: "From $45,000",
    description: "Business-grade infrastructure for high-stakes enterprise organizations.",
    specs: [
      { module: "Pro Multi-Page", deliverable: "Scalably engineered site" },
      { module: "Business Email", deliverable: "Professional mail hosting" },
      { module: "Advanced SEO", deliverable: "Quarterly keyword audits" },
      { module: "Design System", deliverable: "Internal brand library" }
    ]
  },
  {
    id: "05",
    category: "Ultra",
    price: "From $75,000",
    description: "Dynamic web applications and full-scale technological ecosystems.",
    specs: [
      { module: "Web Platform", deliverable: "Custom SaaS / Web App" },
      { module: "Backups", deliverable: "Redundant cloud storage" },
      { module: "Ads Ecosystem", deliverable: "Full conversion setup" },
      { module: "24/7 Support", deliverable: "Architect hardware access" }
    ]
  }
] as const;

export default function PackagesClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh', position: 'relative' }}>
      <Header />
      
      <div className={styles.container}>
        <motion.header 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.label}>Technical Models // v4</span>
          <h1 className={styles.title}>
            The Production <br /> Catalog
          </h1>
          <p className={styles.description}>
            Explore our full suite of technical deployment models and digital engineering infrastructure designed for high-stakes brands.
          </p>
        </motion.header>

        <motion.section 
          className={styles.pricingGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {DETAILED_OFFERINGS.map((cat) => (
            <motion.div 
              key={cat.id} 
              className={styles.card}
              variants={itemVariants}
            >
              {cat.isBestSeller && <div className={styles.bestSellerTag}>Studio Standard</div>}
              
              <header className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>{cat.category}</h2>
                <div className={styles.price}>{cat.price}</div>
              </header>

              <p className={styles.cardDesc}>{cat.description}</p>

              <ul className={styles.featureList}>
                {cat.specs.map((spec, i) => (
                  <li key={i} className={styles.featureItem}>
                    <span className={styles.checkIcon}>+</span>
                    <div className={styles.specData}>
                      <span className={styles.specLabel}>{spec.module}</span>
                      <span className={styles.specValue}>{spec.deliverable}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <a 
                href="mailto:hello@xudo.studio"
                className={styles.inquireBtn}
              >
                Initiate Project
              </a>
            </motion.div>
          ))}
        </motion.section>

        <motion.div 
          className={styles.outro}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.outroTitle}>READY FOR <br /> DEPLOYMENT?</h2>
          <a href="mailto:hello@xudo.studio" className={styles.contactLink}>
            hello@xudo.studio
          </a>
          
          <Link href="/" className={styles.backHome}>
            Return to Studio Overview
          </Link>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}

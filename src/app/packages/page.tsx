"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const ALL_PACKAGES = [
  {
    category: "Branding & Identity",
    items: [
      { name: "Visual Identity", description: "Logo, Type, Color, Art Direction", price: "From $8k" },
      { name: "Brand Strategy", description: "Positioning, Messaging, Tone", price: "From $5k" },
      { name: "Guidelines", description: "Full digital brand book & specs", price: "From $3k" }
    ]
  },
  {
    category: "Web & Digital",
    items: [
      { name: "Marketing Site", description: "Bespoke Next.js marketing platform", price: "From $12k" },
      { name: "Saas Platform UI", description: "Full application dashboard systems", price: "From $20k" },
      { name: "Experimental Site", description: "WebGL & Motion-heavy experiences", price: "From $18k" }
    ]
  },
  {
    category: "AI Systems",
    items: [
      { name: "LLM Fine-Tuning", description: "Training models on brand data", price: "From $30k" },
      { name: "Predictive Analytics", description: "User behavior forecasting systems", price: "From $25k" },
      { name: "AI Web Integration", description: "Real-time AI nodes on your site", price: "From $15k" }
    ]
  }
];

export default function PackagesPage() {
  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      <Header />
      
      <div className={styles.container}>
        <header className={styles.header}>
          <motion.span className={styles.label}>Full Studio Archive</motion.span>
          <motion.h1 className={styles.title}>Project Packages</motion.h1>
          <p className={styles.subtitle}>Engineering the future through structured excellence.</p>
        </header>

        <div className={styles.categoriesGrid}>
          {ALL_PACKAGES.map((cat, i) => (
            <div key={i} className={styles.categoryBlock}>
              <h2 className={styles.catTitle}>{cat.category}</h2>
              <div className={styles.itemsList}>
                {cat.items.map((item, j) => (
                  <motion.div 
                    key={j} 
                    className={styles.item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: j * 0.1 }}
                  >
                    <div className={styles.itemMain}>
                      <h3 className={styles.itemName}>{item.name}</h3>
                      <p className={styles.itemDesc}>{item.description}</p>
                    </div>
                    <span className={styles.itemPrice}>{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.backHome}>
          <Link href="/" className={styles.backBtn}>Return Home</Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const CATEGORIES = [
  { id: "web", label: "Web Platforms" },
  { id: "ai", label: "Agentic AI" },
  { id: "design", label: "Strategic Design" },
  { id: "consulting", label: "Consultancy" }
] as const;

const PACKAGE_GROUPS = {
  web: [
    {
      id: "w1",
      name: "Starter Engine",
      price: "From $15,000",
      description: "High-performance single-page architectures for early stage ventures.",
      features: ["Custom Landing Engine", "Core Performance Sync", "SEO Infrastructure", "Domain Deployment"]
    },
    {
      id: "w2",
      name: "Growth Ecosystem",
      price: "From $32,000",
      description: "Scalable multi-page digital estates built for market dominance.",
      features: ["Multi-Page Architecture", "Advanced Local SEO", "CMS Integration", "Social Logic Sync"]
    },
    {
      id: "w3",
      name: "Enterprise Platform",
      price: "From $65,000",
      description: "Custom web applications and full-scale technological infrastructures.",
      features: ["Custom Web App / SaaS", "High-Load Optimization", "Advanced Security Suite", "Dedicated Support Layer"]
    },
    {
      id: "w4",
      name: "Corporate Portal",
      price: "From $48,000",
      description: "Robust internal architectures for high-end corporate communication.",
      features: ["Internal Data Hubs", "Employee Portal Logic", "SSO Integration", "Document Security Suite"]
    },
    {
      id: "w5",
      name: "DTC Commerce",
      price: "From $55,000",
      description: "Custom headless retail engines designed for high-conversion brands.",
      features: ["Headless Shopify Setup", "Custom Checkout Flow", "Inventory Sync API", "Performance retail Grid"]
    },
    {
      id: "w6",
      name: "Web3 Gateway",
      price: "From $72,000",
      description: "Blockchain-integrated digital experiences and dApp infrastructure.",
      features: ["Wallet Connect Integration", "Smart Contract UI", "On-Chain Data Sync", "Protocol Security Audit"]
    }
  ],
  ai: [
    {
      id: "ai1",
      name: "Agentic Integration",
      price: "From $25,000",
      description: "Deploy autonomous AI agents into your existing business workflows.",
      features: ["Custom Agent Logic", "API Integration Suite", "Contextual Memory", "Workflow Automation"]
    },
    {
      id: "ai2",
      name: "Intelligence Layer",
      price: "From $55,000",
      description: "Full-scale RAG systems and fine-tuned LLM architectures.",
      features: ["RAG Infrastructure", "LLM Fine-Tuning", "Vector Database Setup", "Scalable GPU Compute"]
    }
  ],
  design: [
    {
      id: "d1",
      name: "Visual Identity",
      price: "From $12,000",
      description: "Strategic branding and high-fidelity UI systems for elite brands.",
      features: ["Brand Identity V1", "Typography System", "Component Library", "Interactive Prototype"]
    },
    {
      id: "d2",
      name: "Design Operations",
      price: "From $28,000",
      description: "End-to-end design systems and continuous product design support.",
      features: ["Full Design System", "UX Research Audit", "Product Scaling Logic", "Multi-Platform Sync"]
    }
  ],
  consulting: [
    {
      id: "c1",
      name: "Fractional CTO",
      price: "Retainer Based",
      description: "Strategic technology leadership and architectural decision support.",
      features: ["Architecture Audits", "Stack Selection", "Team Scaling Support", "Security Compliance"]
    }
  ]
};

export default function PackagesClient() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof PACKAGE_GROUPS>("web");

  return (
    <main className={styles.mainWrapper}>
      <Header />
      
      <div className={styles.container}>
        <motion.header 
          className={styles.header}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className={styles.title}>TECHNICAL CATALOG</h1>
        </motion.header>

        {/* CATEGORY SWITCHER */}
        <nav className={styles.tabBar}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tabButton} ${activeCategory === cat.id ? styles.activeTab : ""}`}
              onClick={() => setActiveCategory(cat.id as keyof typeof PACKAGE_GROUPS)}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <motion.div 
                  layoutId="activeIndicator"
                  className={styles.activeIndicator}
                />
              )}
            </button>
          ))}
        </nav>

        <div className={styles.contentArea}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={styles.pricingGrid}
            >
              {PACKAGE_GROUPS[activeCategory].map((pkg) => (
                <div key={pkg.id} className={styles.card}>
                  <header className={styles.cardHeader}>
                    <h2 className={styles.cardTitle}>{pkg.name}</h2>
                    <div className={styles.price}>{pkg.price}</div>
                  </header>

                  <p className={styles.cardDesc}>{pkg.description}</p>

                  <ul className={styles.featureList}>
                    {pkg.features.map((feature, i) => (
                      <li key={i} className={styles.featureItem}>
                        <span className={styles.plusIcon}>+</span>
                        <span className={styles.featureText}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="mailto:hello@xudo.studio" className={styles.inquireBtn}>
                    Initiate Project
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div 
          className={styles.outro}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className={styles.statusBox}>
            <div className={styles.statusDot} />
            <span className={styles.statusText}>SYSTEM LIVE // DEPLOYMENT READY</span>
          </div>
          
          <h2 className={styles.outroTitle}>INITIATE YOUR ENGINE</h2>
          
          <div className={styles.contactWrapper}>
            <a href="mailto:hello@xudo.studio" className={styles.contactButton}>
              hello@xudo.studio
            </a>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}

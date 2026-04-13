"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import Link from "next/link";

const CATEGORIES = [
  { id: "web", label: "Web Platforms" },
  { id: "ai", label: "Agentic AI" },
  { id: "design", label: "Strategic Design" },
  { id: "consulting", label: "Consultancy" },
] as const;

const PACKAGE_GROUPS = {
  web: [
    {
      id: "w1",
      name: "Basic",
      price: "$599",
      description: "A clean, fast single-page site to get your business online instantly.",
      features: ["Basic Single Page", "Free Subdomain", "Map Setup"],
    },
    {
      id: "w2",
      name: "Starter",
      price: "$1,200",
      description: "A polished presence with your own domain, SEO foundations, and analytics built in.",
      features: ["Smart Single Page", "Custom Domain", "SEO & Analytics"],
    },
    {
      id: "w3",
      name: "Growth",
      price: "$2,500",
      description: "A full multi-page site built to capture local leads, rank on Google, and convert visitors.",
      features: ["Multi-Page Site", "Custom Domain", "Maps & Local SEO", "Facebook & WhatsApp"],
    },
    {
      id: "w4",
      name: "Premium",
      price: "$4,500",
      description: "A professional-grade site with business email, advanced SEO, and refined UX design.",
      features: ["Pro Multi-Page Site", "Business Email", "Advanced SEO"],
    },
    {
      id: "w5",
      name: "Ultra",
      price: "$8,000",
      description: "A fully custom dynamic web application with hosting, backups, and a complete ads setup.",
      features: ["Dynamic Web App", "Hosting & Backups", "Full Ads Setup"],
    },
    {
      id: "w6",
      name: "Elite",
      price: "Custom",
      description: "A bespoke, enterprise-grade digital system built end-to-end with white-glove support.",
      features: ["Custom Architecture", "Dedicated Support", "Advanced Integrations", "Priority Delivery"],
    },
  ],
  ai: [
    {
      id: "ai1",
      name: "Agentic Integration",
      price: "$25,000",
      description: "Deploy autonomous AI agents into your existing business workflows at scale.",
      features: ["Custom Agent Logic", "API Integration Suite", "Contextual Memory", "Workflow Automation"],
    },
    {
      id: "ai2",
      name: "Intelligence Layer",
      price: "$55,000",
      description: "Full-scale RAG systems and fine-tuned LLM architectures purpose-built for your data.",
      features: ["RAG Infrastructure", "LLM Fine-Tuning", "Vector Database Setup", "Scalable GPU Compute"],
    },
  ],
  design: [
    {
      id: "d1",
      name: "Visual Identity",
      price: "$12,000",
      description: "Strategic branding and high-fidelity UI systems for elite brands that demand excellence.",
      features: ["Brand Identity V1", "Typography System", "Component Library", "Interactive Prototype"],
    },
    {
      id: "d2",
      name: "Design Operations",
      price: "$28,000",
      description: "End-to-end design systems and continuous product design support across your entire stack.",
      features: ["Full Design System", "UX Research Audit", "Product Scaling Logic", "Multi-Platform Sync"],
    },
  ],
  consulting: [
    {
      id: "c1",
      name: "Fractional CTO",
      price: "Retainer",
      description: "Strategic technology leadership and architectural decision support for growth-stage companies.",
      features: ["Architecture Audits", "Stack Selection", "Team Scaling Support", "Security Compliance"],
    },
  ],
};

export default function PackagesClient() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof PACKAGE_GROUPS>("web");

  return (
    <main className={styles.mainWrapper}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Packages</h1>
      </section>

      {/* Tab Nav */}
      <div className={styles.tabWrap}>
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
                  layoutId="tab-indicator"
                  className={styles.activeIndicator}
                />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Grid */}
      <section className={styles.gridSection}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className={styles.pricingGrid}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {PACKAGE_GROUPS[activeCategory].map((pkg) => (
              <div key={pkg.id} className={styles.card}>

                <div className={styles.cardHeader}>
                  <h2 className={styles.cardTitle}>{pkg.name}</h2>
                  <div className={styles.priceValue}>{pkg.price}</div>
                </div>

                <p className={styles.cardDesc}>{pkg.description}</p>

                <ul className={styles.featureList}>
                  {pkg.features.map((f, i) => (
                    <li key={i} className={styles.featureItem}>
                      {f}
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
          </motion.div>
        </AnimatePresence>
      </section>

      {/* PreFooter matching global site standard */}
      <section className={styles.preFooter}>
        <h2 className={styles.mainHeading}>
          Ready to Start?
        </h2>
        <Link href="mailto:hello@xudo.studio" className={styles.talkButton}>
          Inquire
        </Link>
      </section>

      <Footer />
    </main>
  );
}

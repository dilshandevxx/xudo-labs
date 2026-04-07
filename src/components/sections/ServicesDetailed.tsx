"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import styles from "./ServicesDetailed.module.css";

const DETAILED_SERVICES = [
  {
    title: "AI & Machine Learning",
    description: "We deploy advanced machine learning models that help your business uncover deep insights from data. Our custom AI solutions run efficiently at scale, allowing for rapid automation and robust predictive analytics.",
    features: ["Predictive Analytics", "Deep Learning", "Process Automation", "Computer Vision"],
    image: "/images/hero.png"
  },
  {
    title: "Generative & Agentic AI",
    description: "From custom LLM integrations to autonomous agents, we push the boundaries of modern AI. Elevate your workflows with highly capable generative tools that act autonomously to solve complex tasks.",
    features: ["LLM Fine-Tuning", "Autonomous Agents", "RAG Systems", "Prompt Engineering"],
    image: "/images/about.png"
  },
  {
    title: "SaaS Development",
    description: "We build resilient, secure, and scalable Software-as-a-Service platforms. Our architecture focuses on high concurrency, multi-tenancy, and extremely fast onboarding flows to grow your MRR seamlessly.",
    features: ["Multi-tenant Architectures", "Stripe Integrations", "Real-time Databases", "Cloud Infrastructure"],
    image: "/images/portfolio1.png"
  },
  {
    title: "UI/UX Design",
    description: "Awwwards-level interface design that captivates and converts. We treat every pixel with utmost importance to create premium, fluid, and memorable digital experiences that align with your elite brand identity.",
    features: ["High-Fidelity Prototyping", "Interaction Design", "Design Systems", "Usability Testing"],
    image: "/images/hero.png"
  },
  {
    title: "Dev Tools & Full Stack",
    description: "We specialize in building robust tooling and full-stack ecosystems. By implementing strict CI/CD pipelines, modern frameworks, and robust APIs, we ensure your code ships fast and doesn't break.",
    features: ["Next.js & React", "Node.js ecosystems", "CI/CD Deployment", "API Architecture"],
    image: "/images/about.png"
  },
  {
    title: "Tech Consulting & Strategy",
    description: "We serve as fractional CTOs and strategic partners to help you navigate pivotal technology decisions. We audit your existing stack, design transformation roadmaps, and ensure alignment with business goals.",
    features: ["Architecture Audits", "CTO Advisory", "Scaling Strategies", "Security Compliance"],
    image: "/images/portfolio1.png"
  }
];

export default function ServicesDetailed() {
  return (
    <section className={styles.detailedSection}>
      {DETAILED_SERVICES.map((service, index) => (
        <div key={index} className={styles.serviceBlock}>
          
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.indexContainer}>
              0{index + 1}
            </div>
            <h2 className={styles.title}>{service.title}</h2>
            <p className={styles.description}>{service.description}</p>
            
            <div className={styles.features}>
              {service.features.map((feature, fIndex) => (
                <div key={fIndex} className={styles.featureItem}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image 
              src={service.image} 
              alt={service.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={styles.image}
            />
          </motion.div>

        </div>
      ))}
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import styles from "./Experience.module.css";

const SERVICES_DATA = [
  {
    category: "AI & ENGINEERING",
    description: "Leverage state-of-the-art machine learning models and generative AI to build intelligent, future-proof systems.",
    items: [
      "Machine Learning Models",
      "Deep Learning Solutions",
      "Generative AI & LLMs",
      "Computer Vision Systems",
      "Natural Language Processing (NLP)",
      "AI Chatbots & Assistants",
      "Recommendation Systems",
      "AI Model Deployment & Optimization"
    ]
  },
  {
    category: "AGENTIC & AUTOMATION SYSTEMS",
    description: "Automate complex workflows and boost operational efficiency with autonomous agents and robust orchestrations.",
    items: [
      "Agentic Workflows (AutoGPT-style)",
      "Multi-Agent Architectures",
      "Business Process Automation",
      "Workflow Orchestration",
      "Robotic Process Automation (RPA)",
      "AI-Powered Decision Systems"
    ]
  },
  {
    category: "SOFTWARE DEVELOPMENT",
    description: "Architect and develop bespoke web properties, enterprise solutions, and custom SaaS platforms built for scale.",
    items: [
      "Custom Web Applications",
      "SaaS Product Development",
      "Enterprise Software Solutions",
      "Backend Systems",
      "Frontend Development",
      "Full-Stack Development",
      "API Development & Integration"
    ]
  },
  {
    category: "UI/UX DESIGN",
    description: "Design intuitive and aesthetically brilliant digital experiences crafted to captivate audiences and increase conversions.",
    items: [
      "User Interface (UI) Design",
      "User Experience (UX) Design",
      "Interaction Design",
      "Design Systems",
      "Wireframing & Prototyping",
      "High-Fidelity Prototypes",
      "Awwwards-Level Web Design"
    ]
  },
  {
    category: "CLOUD & DEVOPS",
    description: "Build incredibly resilient and fast cloud architectures tailored for modern, high-traffic applications.",
    items: [
      "Cloud Infrastructure",
      "CI/CD Pipeline Setup",
      "Docker & Kubernetes",
      "Serverless Architecture",
      "DevOps Automation",
      "Performance Optimization",
      "Monitoring & Logging Systems"
    ]
  },
  {
    category: "AUTOMATION & SCALING",
    description: "Scale your systems seamlessly and process millions of events with optimized, asynchronous backend infrastructures.",
    items: [
      "Process Automation",
      "AI Workflow Automation",
      "System Scaling Architecture",
      "Microservices Architecture",
      "Event-Driven Systems",
      "Queue Systems"
    ]
  },
  {
    category: "MOBILE & CROSS-PLATFORM",
    description: "Deliver powerful applications consistently across every device with leading cross-platform development frameworks.",
    items: [
      "Mobile App Development",
      "Progressive Web Apps (PWA)",
      "Cross-Platform Solutions"
    ]
  }
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.experienceSection} id="services">
      <div className={styles.header}>
        <div className={styles.subtitleWrapper}>
          <span className={styles.dot} /> 
          <span className={styles.subtitle}>What we do</span>
        </div>
        <h2 className={styles.globalTitle}>
          Services. <sup className={styles.count}>({String(SERVICES_DATA.length).padStart(2, '0')})</sup>
        </h2>
      </div>

      <div className={styles.accordionContainer}>
        {SERVICES_DATA.map((service, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`${styles.accordionItem} ${isOpen ? styles.open : ""}`}
            >
              <div 
                className={styles.itemHeader}
                onClick={() => toggleAccordion(index)}
              >
                <div className={styles.indexNumber}>({String(index + 1).padStart(3, '0')})</div>
                <h3 className={styles.categoryTitle}>{service.category}</h3>
                <button className={styles.toggleBtn}>
                  {isOpen ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
                </button>
              </div>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    className={styles.expandedContent}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className={styles.expandedInner}>
                      <div className={styles.expandedText}>
                        <p className={styles.description}>{service.description}</p>
                      </div>
                      
                      <div className={styles.tagsContainer}>
                        <div className={styles.tagsLabel}>Categories</div>
                        <div className={styles.tagsList}>
                          {service.items.map((item, i) => (
                            <span key={i} className={styles.tag}>{item}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

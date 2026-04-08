"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import styles from "./Experience.module.css";

const SERVICES_DATA = [
  {
    category: "AI & ENGINEERING",
    description: "Leverage state-of-the-art machine learning models and generative AI to build intelligent, future-proof systems.",
    image: "/images/box_parachute.png",
    items: [
      "Machine Learning Models",
      "Deep Learning Solutions",
      "Generative AI & LLMs",
      "Computer Vision Systems",
      "Natural Language Processing"
    ]
  },
  {
    category: "AGENTIC & AUTOMATION SYSTEMS",
    description: "Automate complex workflows and boost operational efficiency with autonomous agents and robust orchestrations.",
    image: "/images/phone_interaction.png",
    items: [
      "Agentic Workflows",
      "Multi-Agent Architectures",
      "Business Process Automation",
      "Workflow Orchestration",
      "Robotic Process Automation"
    ]
  },
  {
    category: "SOFTWARE DEVELOPMENT",
    description: "Architect and develop bespoke web properties, enterprise solutions, and custom SaaS platforms built for scale.",
    image: "/images/science_tech.png",
    items: [
      "Custom Web Applications",
      "SaaS Product Development",
      "Enterprise Software Solutions",
      "Backend Systems",
      "Frontend Development",
      "API Development"
    ]
  },
  {
    category: "UI/UX DESIGN",
    description: "Design intuitive and aesthetically brilliant digital experiences crafted to captivate audiences and increase conversions.",
    image: "/images/biometric_scan.png",
    items: [
      "User Interface Design",
      "User Experience Design",
      "Interaction Design",
      "Design Systems",
      "Wireframing & Prototyping",
      "Awwwards-Level Design"
    ]
  },
  {
    category: "CLOUD & DEVOPS",
    description: "Build incredibly resilient and fast cloud architectures tailored for modern, high-traffic applications.",
    image: "/images/ecommerce_card.png",
    items: [
      "Cloud Infrastructure",
      "CI/CD Pipeline Setup",
      "Docker & Kubernetes",
      "Serverless Architecture",
      "DevOps Automation",
      "Performance Optimization"
    ]
  },
  {
    category: "AUTOMATION & SCALING",
    description: "Scale your systems seamlessly and process millions of events with optimized, asynchronous backend infrastructures.",
    image: "/images/music_festival.png",
    items: [
      "Process Automation",
      "AI Workflow Automation",
      "System Scaling",
      "Microservices",
      "Event-Driven Systems",
      "Queue Systems"
    ]
  },
  {
    category: "MOBILE & CROSS-PLATFORM",
    description: "Deliver powerful applications consistently across every device with leading cross-platform development frameworks.",
    image: "/images/box_parachute.png",
    items: [
      "Mobile App Development",
      "Progressive Web Apps",
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
      
      {/* DESKTOP VIEW */}
      <div className={styles.desktopLayout}>
        <div className={styles.header}>
          <div className={styles.subtitleWrapper}>
            <span className={styles.dot} />
            <span className={styles.subtitle}>What we do</span>
          </div>
          <h2 className={styles.globalTitle}>
            Services. <sup className={styles.count}>({SERVICES_DATA.length})</sup>
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

                  <div className={styles.thumbnailSpacer}>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          className={styles.thumbnailWrapper}
                          initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                          exit={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <Image
                            src={service.image}
                            alt={service.category}
                            fill
                            className={styles.thumbnail}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

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

        <div className={styles.footerAction}>
          <div className={styles.footerActionSpacer}></div>
          <Link href="#contact" className={styles.getStartedBtn}>
            Get started
          </Link>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className={styles.mobileLayout}>
        <div className={styles.mobileHeaderBlock}>
          <h2 className={styles.mobileMainHeading}>
            Services that go above and beyond, locally and creatively.
          </h2>
          <p className={styles.mobileDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <button className={styles.mobileScheduleBtn}>
            Schedule a call
          </button>
        </div>
        
        <div className={styles.mobileListView}>
          {SERVICES_DATA.map((service, index) => (
            <div key={index} className={styles.mobileListItem}>
              <h3 className={styles.mobileListTitle}>{service.category}</h3>
              <div className={styles.mobileListRight}>
                <span className={styles.mobileListIndex}>(0.0.{index + 1})</span>
                <span className={styles.mobileListArrow}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

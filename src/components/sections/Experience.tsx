"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";

const SERVICES = [
  "AI & Machine Learning",
  "Generative & Agentic AI",
  "SaaS Development",
  "UI/UX Design",
  "Dev Tools & Full Stack",
  "Tech Consulting & Strategy"
];

export default function Experience() {
  return (
    <section className={styles.experienceSection} id="services">
      <div className={styles.header}>
        <h2 className={styles.title}>We build experience</h2>
        <Link href="/services" className={styles.link}>Know more —</Link>
      </div>

      <div className={styles.content}>
        
        {/* Left Column: Sticky Image & Info */}
        <div className={styles.leftColumn}>
          <div className={styles.stickyWrapper}>
            <motion.div 
              className={styles.imageWrapper}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src="/images/about.png" 
                alt="Our Services" 
                fill 
                sizes="(max-width: 1024px) 100vw, 33vw"
                className={styles.image} 
              />
            </motion.div>
            <p className={styles.info}>
              We provide cutting-edge digital solutions tailored to the modern tech landscape. 
              From deep learning architectures to robust SaaS platforms, we architect your future.
            </p>
          </div>
        </div>

        {/* Right Column: List of Services */}
        <div className={styles.servicesList}>
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index}
              className={styles.serviceItem}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.serviceName}>{service}</div>
              <div className={styles.serviceNum}>
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

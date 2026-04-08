"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sun } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const titleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const, staggerChildren: 0.1 }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const } }
  };

  return (
    <section className={styles.hero} ref={containerRef}>
      
      {/* DESKTOP LAYOUT */}
      <div className={styles.desktopHero}>
        <motion.div 
          className={styles.titleContainer}
          style={{ y, opacity }}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={styles.title} variants={wordVariants}>
            XŪDŪ
          </motion.h1>
          <motion.h2 className={styles.subtitle} variants={wordVariants}>
            DIGITAL
          </motion.h2>
          <motion.h1 className={styles.title} variants={wordVariants}>
            STUDIO
          </motion.h1>
        </motion.div>

        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span>Scroll</span>
          <motion.div 
            className={styles.scrollLine}
            animate={{ height: ["0px", "60px"], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* MOBILE LAYOUT */}
      <div className={styles.mobileHero}>
        <motion.div 
          className={styles.mobileTopText}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          A branding agency<br />
          in London<br />
          and Los Angeles,<br />
          liberating ideas<br />
          the world deserves
        </motion.div>
        
        <div className={styles.mobileCenterMedia}>
          <motion.div 
            className={styles.mobileMainImg}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <Image src="/images/science_tech.png" fill alt="Hero illustration" className={styles.mobileImg} />
            <div className={styles.imageTags}>
                <span className={styles.tag}>Jupi</span>
                <span className={styles.tag}>SAAS</span>
            </div>
            <h2 className={styles.imageOverlayText}>JUPI</h2>
          </motion.div>
        </div>

        <motion.p 
          className={styles.mobileBottomDesc}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          Branding, design and digital systems that turn businesses into brands. Brands which enrich lives, nature and founders.
        </motion.p>
        
        <motion.button 
          className={styles.mobileButton}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        >
          WHY US?
        </motion.button>
      </div>

    </section>
  );
}

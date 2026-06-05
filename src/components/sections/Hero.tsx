"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import styles from "./Hero.module.css";

const CAROUSEL_DATA = [
  { src: "/images/hero.png", title: "XŪDŪ", tags: ["Design", "Digital"] },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % CAROUSEL_DATA.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const titleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], staggerChildren: 0.1 }
    }
  } as const;

  const wordVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }
  } as const;

  const currentSlide = CAROUSEL_DATA[currentImgIndex];

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
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentImgIndex}
              className={styles.mobileMainImg}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image src={currentSlide.src} fill priority alt="Hero illustration" className={styles.mobileImg} />
              <div className={styles.imageTags}>
                  {currentSlide.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
              </div>
              <h2 className={styles.imageOverlayText}>{currentSlide.title}</h2>
            </motion.div>
          </AnimatePresence>
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

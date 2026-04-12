"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import styles from "./NavigationMenu.module.css";

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { href: "/", label: "Home", image: "/images/hero.png" },
  { href: "/services", label: "About", image: "/images/about.png" },
  { href: "/#services", label: "Work", image: "/images/portfolio1.png" },
  { href: "#", label: "Contact", image: "/images/science_tech.png" },
];

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const overlayVariants = {
    closed: { y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const } },
    open: { y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const } }
  };

  const linkContainerVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.4 }
    }
  };

  const linkItemVariants = {
    closed: { y: 150, opacity: 0 },
    open: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const } }
  };

  const imageVariants = {
    initial: { scale: 1.1, opacity: 0 },
    active: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const } },
    exit: { scale: 1.1, opacity: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          variants={overlayVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <div className={styles.contentContainer}>
            <motion.nav 
              className={styles.navLinksContainer}
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {NAV_LINKS.map((link, index) => (
                <div 
                  key={index} 
                  className={styles.navItemWrapper}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div variants={linkItemVariants}>
                    <Link 
                      href={link.href} 
                      className={styles.navLink} 
                      onClick={onClose}
                      data-text={link.label}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.nav>

            <div className={styles.imagePreviewContainer}>
              <AnimatePresence mode="wait">
                {hoveredIndex !== null ? (
                  <motion.div
                    key={hoveredIndex}
                    variants={imageVariants}
                    initial="initial"
                    animate="active"
                    exit="exit"
                    className={styles.previewImageWrapper}
                  >
                    <Image
                      src={NAV_LINKS[hoveredIndex].image}
                      alt={NAV_LINKS[hoveredIndex].label}
                      fill
                      className={styles.previewImage}
                      priority
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    variants={imageVariants}
                    initial="initial"
                    animate="active"
                    exit="exit"
                    className={styles.previewImageWrapper}
                  >
                    <Image
                      src={NAV_LINKS[0].image}
                      alt="Default Preview"
                      fill
                      className={styles.previewImage}
                      priority
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

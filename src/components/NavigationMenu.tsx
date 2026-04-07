"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./NavigationMenu.module.css";

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "About" },
  { href: "/#services", label: "Work" },
  { href: "#", label: "Contact" },
];

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  const overlayVariants = {
    closed: { x: "100%", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const } },
    open: { x: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const } }
  };

  const linkContainerVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const linkItemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const } }
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
          <motion.nav 
            className={styles.navLinks}
            variants={linkContainerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {NAV_LINKS.map((link, index) => (
              <motion.div key={index} variants={linkItemVariants}>
                <Link href={link.href} className={styles.navLink} onClick={onClose}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div 
            className={styles.menuFooter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <span className={styles.contactLabel}>Get in touch</span>
            <a href="mailto:hello@xudo.studio" className={styles.contactLink}>
              hello@xudo.studio
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

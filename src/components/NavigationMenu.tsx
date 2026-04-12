"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import styles from "./NavigationMenu.module.css";

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { href: "/", label: "Home", num: "01" },
  { href: "/services", label: "Services", num: "02" },
  { href: "/#work", label: "Work", num: "03" },
  { href: "/blog", label: "Insights", num: "04" },
];

const SOCIAL_LINKS = [
  { href: "#", label: "Twitter" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Dribbble" },
];

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {

  const overlayVariants = {
    closed: { y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    open: { y: "0%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
  };

  const containerVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    closed: { y: 50, opacity: 0 },
    open: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
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
          <div className={styles.container}>
            <motion.div 
               className={styles.linksContainer}
               variants={containerVariants}
               initial="closed"
               animate="open"
               exit="closed"
            >
              {NAV_LINKS.map((link, index) => (
                <motion.div key={index} variants={itemVariants} className={styles.linkItem}>
                  <Link href={link.href} className={styles.navLink} onClick={onClose}>
                    <span className={styles.linkNum}>{link.num}</span>
                    <span className={styles.linkLabel}>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
               className={styles.metaContainer}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.8 } }}
            >
               <div className={styles.metaColumn}>
                 <span className={styles.metaTitle}>Socials</span>
                 <ul className={styles.metaList}>
                   {SOCIAL_LINKS.map((social, i) => (
                     <li key={i}>
                       <a href={social.href} className={styles.metaLink}>
                         {social.label} <ArrowUpRight size={14} />
                       </a>
                     </li>
                   ))}
                 </ul>
               </div>

               <div className={styles.metaColumn}>
                 <span className={styles.metaTitle}>Get in touch</span>
                 <a href="mailto:hello@xudo.studio" className={styles.contactEmail}>hello@xudo.studio</a>
                 <div className={styles.location}>Based in London, UK</div>
               </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

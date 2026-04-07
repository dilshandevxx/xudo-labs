"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        
        {/* Navigation Column */}
        <div className={styles.column}>
          <div className={styles.colTitle}>Navigation</div>
          <div className={styles.links}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/services" className={styles.link}>About</Link>
            <Link href="/#services" className={styles.link}>Work</Link>
            <Link href="#" className={styles.link}>Contact</Link>
          </div>
        </div>

        {/* Social Column */}
        <div className={styles.column}>
          <div className={styles.colTitle}>Socials</div>
          <div className={styles.links}>
            <a href="#" className={styles.link}>Instagram</a>
            <a href="#" className={styles.link}>Twitter</a>
            <a href="#" className={styles.link}>LinkedIn</a>
            <a href="#" className={styles.link}>Dribbble</a>
          </div>
        </div>

        {/* Metadata Column */}
        <div className={styles.metaColumn}>
          <div className={styles.desc}>
            An award-winning digital studio focused on web experiences and branding. 
            <br /><br />
            Brooklyn, New York.
          </div>
          <button onClick={scrollToTop} className={styles.backToTopBtn}>
            Scroll Top <ArrowUp size={16} />
          </button>
        </div>

      </div>

      <div className={styles.bottom}>
        <h1 className={styles.monolithText}>STUDIO</h1>
        <div className={styles.copyrightLayer}>
          <div className={styles.copy}>
            © {new Date().getFullYear()} Xūdū Digital. All rights reserved.
          </div>
          <div className={styles.copy}>
            Designed with absolute precision.
          </div>
        </div>
      </div>
    </footer>
  );
}

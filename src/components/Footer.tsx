"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { ArrowUp } from "lucide-react";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>xūdū</div>
          <div className={styles.desc}>
            An award-winning digital studio focused on web experiences and branding. 
            Brooklyn, New York.
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.colTitle}>Navigation</div>
          <div className={styles.links}>
            <Link href="#" className={styles.link}>Home</Link>
            <Link href="#" className={styles.link}>About</Link>
            <Link href="#" className={styles.link}>Work</Link>
            <Link href="#" className={styles.link}>Contact</Link>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.colTitle}>Info</div>
          <div className={styles.links}>
            <Link href="#" className={styles.link}>FAQ</Link>
            <Link href="#" className={styles.link}>Careers</Link>
            <Link href="#" className={styles.link}>Terms</Link>
            <Link href="#" className={styles.link}>Privacy</Link>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.colTitle}>Follow Us</div>
          <div className={styles.socials}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <FaFacebook size={18} />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">
              <FaTwitter size={18} />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copy}>
          © 2026 Xūdū Digital Studio. All rights reserved.
        </div>
        <button onClick={scrollToTop} className={styles.link} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>
          Back to Top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}

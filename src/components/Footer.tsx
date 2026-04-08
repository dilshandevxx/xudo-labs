"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { FaInstagram, FaTwitter, FaLinkedin, FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>EVET</div>
      
      <div className={styles.navLinks}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
        <Link href="/style-guide" className={styles.link}>Style Guide</Link>
        <Link href="/licensing" className={styles.link}>Licensing</Link>
      </div>

      <div className={styles.socialIcons}>
        <a href="#" aria-label="LinkedIn" className={styles.socialIcon}><FaLinkedin size={20} /></a>
        <a href="#" aria-label="Instagram" className={styles.socialIcon}><FaInstagram size={20} /></a>
        <a href="#" aria-label="Twitter" className={styles.socialIcon}><FaTwitter size={20} /></a>
        <a href="#" aria-label="Dribbble" className={styles.socialIcon}><FaDribbble size={20} /></a>
      </div>

      <div className={styles.copyright}>
        © This is a <span className={styles.highlight}>Deni Bozo</span> template powered by <span className={styles.highlight}>Webflow.</span>
      </div>
    </footer>
  );
}

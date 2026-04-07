"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { FaInstagram, FaTwitter, FaLinkedin, FaDribbble } from "react-icons/fa";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        xūdū
      </Link>
      
      <div className={styles.socials}>
        <a href="#" className={styles.socialIcon} aria-label="Dribbble">
          <FaDribbble size={20} />
        </a>
        <a href="#" className={styles.socialIcon} aria-label="Twitter">
          <FaTwitter size={20} />
        </a>
        <a href="#" className={styles.socialIcon} aria-label="Instagram">
          <FaInstagram size={20} />
        </a>
        <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
          <FaLinkedin size={20} />
        </a>
      </div>
    </header>
  );
}

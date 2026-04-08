"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Blog.module.css";

const POSTS = [
  {
    id: 1,
    title: "Curating a workplace that inspires all of us",
    category: "MARKETING",
    date: "February 3, 2021",
    image: "/images/hero.png" // Placeholder image
  },
  {
    id: 2,
    title: "Designers who changed the web with Webflow",
    category: "DESIGN",
    date: "February 25, 2021",
    image: "/images/about.png" // Placeholder image
  }
];

export default function Blog() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Latest News</h2>
        <a href="#" className={styles.linkButton}>ALL POST</a>
      </div>

      <div className={styles.grid}>
        {POSTS.map((post, index) => (
          <motion.article 
            key={post.id}
            className={styles.blogCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
            
            <div className={styles.contentWrapper}>
              <span className={styles.category}>{post.category}</span>
              <h3 className={styles.blogTitle}>{post.title}</h3>
              <span className={styles.date}>{post.date}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

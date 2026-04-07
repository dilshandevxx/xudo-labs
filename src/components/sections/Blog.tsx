"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Blog.module.css";

const POSTS = [
  {
    id: 1,
    title: "Creating a workspace that inspires all of us",
    category: "Design",
    date: "Aug 12, 2023",
    image: "/images/hero.png"
  },
  {
    id: 2,
    title: "Designers who changed the web with workflow",
    category: "Agency",
    date: "Sep 05, 2023",
    image: "/images/about.png"
  },
  {
    id: 3,
    title: "Common clash between studio departments",
    category: "Culture",
    date: "Oct 22, 2023",
    image: "/images/hero.png"
  }
];

export default function Blog() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>From Blog</h2>
        <a href="#" className={styles.link}>See All —</a>
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
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.image}
              />
            </div>
            
            <div className={styles.meta}>
              <span className={styles.category}>{post.category}</span>
              <span>{post.date}</span>
            </div>
            
            <h3 className={styles.blogTitle}>{post.title}</h3>
            
            <div className={styles.readMore}>Read More</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

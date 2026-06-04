"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Blog.module.css";
import { BLOG_POSTS } from "@/data/blog";

export default function Blog() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 2) % BLOG_POSTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  let recentPosts = BLOG_POSTS.slice(startIndex, startIndex + 2);
  if (recentPosts.length < 2) {
    recentPosts = [...recentPosts, ...BLOG_POSTS.slice(0, 2 - recentPosts.length)];
  }

  return (
    <section className={styles.blogSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Latest News</h2>
        <Link href="/blog" className={styles.linkButton}>
          ALL POST
        </Link>
      </div>

      <div className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.blogCardWrapper}
            >
              <Link href={`/blog/${post.slug}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <article className={styles.blogCard}>
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
                </article>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

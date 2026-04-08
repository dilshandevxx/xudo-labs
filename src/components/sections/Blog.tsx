"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Blog.module.css";
import { BLOG_POSTS } from "@/data/blog";

export default function Blog() {
  // Only show first 2 posts in the Latest News section on homepage
  const recentPosts = BLOG_POSTS.slice(0, 2);

  return (
    <section className={styles.blogSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Latest News</h2>
        <Link href="/blog" className={styles.linkButton}>
          ALL POST
        </Link>
      </div>

      <div className={styles.grid}>
        {recentPosts.map((post, index) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className={styles.blogCardWrapper}>
            <motion.article 
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
          </Link>
        ))}
      </div>
    </section>
  );
}

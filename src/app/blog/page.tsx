import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreFooter from "@/components/sections/PreFooter";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";

export const metadata = {
  title: "The Journal | XŪDŪ",
  description: "Insights, thoughts, and technical deep-dives from the XŪDŪ engineering and design team.",
};

export default function BlogPage() {
  return (
    <main className={styles.blogPage}>
      <Header />
      
      <section className={styles.hero}>
        <h1 className={styles.title}>The Journal.</h1>
        <p className={styles.subtitle}>
          Thoughts, insights, and technical deep-dives from our engineering and design team.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.grid}>
          {BLOG_POSTS.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className={styles.blogCardWrapper}>
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
          ))}
        </div>
      </section>

      <PreFooter />
      <Footer />
    </main>
  );
}

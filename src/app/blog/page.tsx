import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreFooter from "@/components/sections/PreFooter";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { getLatestArticles } from "@/lib/api";

export const metadata = {
  title: "The Journal | XŪDŪ",
  description: "Insights, thoughts, and technical deep-dives from the XŪDŪ engineering and design team.",
};

export default async function BlogPage() {
  const posts = await getLatestArticles(12);

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
          {posts.map((post) => {
            const fallbackImage = "/images/science_tech.png";
            const imageUrl = post.cover_image || fallbackImage;
            const category = post.tag_list && post.tag_list.length > 0 ? post.tag_list[0].toUpperCase() : "TECH";
            
            return (
              <Link key={post.id} href={`/blog/${post.id}`} className={styles.blogCardWrapper}>
                <article className={styles.blogCard}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={imageUrl} 
                      alt={post.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles.image}
                    />
                  </div>
                  
                  <div className={styles.contentWrapper}>
                    <span className={styles.category}>{category}</span>
                    <h3 className={styles.blogTitle}>{post.title}</h3>
                    <span className={styles.date}>{new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>

      <PreFooter />
      <Footer />
    </main>
  );
}

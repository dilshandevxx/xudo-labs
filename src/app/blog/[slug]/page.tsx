import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreFooter from "@/components/sections/PreFooter";
import { BLOG_POSTS } from "@/data/blog";
import styles from "./page.module.css";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} | XŪDŪ Journal`,
    description: `Read ${post.title} on the XŪDŪ engineering and design journal.`,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main style={{ backgroundColor: "#000" }}>
      <Header />
      
      <article className={styles.article}>
        <header className={styles.header}>
          <span className={styles.category}>{post.category}</span>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <span>Published on {post.date}</span>
            <span>By XŪDŪ Engineering</span>
          </div>
        </header>

        <div className={styles.contentBody}>
          <p className={styles.paragraph}>
            In the modern digital landscape, the intersection of architectural precision and interactive agility 
            defines the next generation of web experiences. At XŪDŪ, we believe that clarity is not just a visual choice, 
            but a technical requirement for systems that intend to scale beyond current horizons.
          </p>
          
          <div className={styles.largeText}>
            "Structure is the language of clarity. Without it, innovation becomes noise."
          </div>

          <p className={styles.paragraph}>
            As we continue to push the boundaries of what is possible with Next.js 15, React, and custom AI integrations, 
            our focus remains on the structural integrity of every component we build. This entry explores the 
            methodological shifts we've observed in the industry throughout 2026.
          </p>
          
          <p className={styles.paragraph}>
            From the resurgence of brutalist typography to the integration of predictive UI nodes, the tools 
            at our disposal have evolved. However, the core principle of value-driven engineering remains static.
          </p>
        </div>

        <footer className={styles.footer}>
          <a href="/blog" className={styles.backBtn}>← Back to Journal</a>
          <span style={{ color: '#222', fontSize: '0.6rem' }}>X-LOG v.1.0</span>
        </footer>
      </article>

      <PreFooter />
      <Footer />
    </main>
  );
}

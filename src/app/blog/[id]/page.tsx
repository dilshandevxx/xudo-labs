import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreFooter from "@/components/sections/PreFooter";
import { getArticleById } from "@/lib/api";
import styles from "./page.module.css";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = await getArticleById(id);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} | XŪDŪ Journal`,
    description: post.description || `Read ${post.title} on the XŪDŪ engineering and design journal.`,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getArticleById(id);

  if (!post) {
    notFound();
  }

  const fallbackImage = "/images/science_tech.png";
  const imageUrl = post.cover_image || fallbackImage;
  const category = post.tag_list && post.tag_list.length > 0 ? post.tag_list[0].toUpperCase() : "TECH";
  const date = new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <main style={{ backgroundColor: "#000" }}>
      <Header />
      
      <article className={styles.article}>
        <header className={styles.header}>
          <span className={styles.category}>{category}</span>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <span>Published on {date}</span>
            <span>By {post.user.name}</span>
          </div>
          <div style={{ position: "relative", width: "100%", height: "40vh", marginTop: "2rem", borderRadius: "10px", overflow: "hidden" }}>
             <Image src={imageUrl} alt={post.title} fill style={{ objectFit: "cover" }} />
          </div>
        </header>

        <div className={styles.contentBody} dangerouslySetInnerHTML={{ __html: post.body_html || "" }} />

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

import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreFooter from "@/components/sections/PreFooter";
import { PROJECTS } from "@/data/projects";
import styles from "./page.module.css";

// Generate static params so these pages are built at build time
export function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | XŪDŪ Digital Studio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Header />
      
      {/* Project Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.category}>{project.category}</div>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Client</span>
              <span className={styles.metaValue}>{project.client}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>{project.role}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Year</span>
              <span className={styles.metaValue}>{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className={styles.contentSection}>
        <div className={styles.fullBleedImage}>
          <Image
            src={project.image}
            alt={`${project.title} Hero Image`}
            fill
            sizes="100vw"
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.textGrid}>
          <h3 className={styles.textLabel}>The Challenge</h3>
          <p className={styles.textContent}>{project.challenge}</p>
        </div>

        <div className={styles.textGrid} style={{ marginTop: '4rem' }}>
          <h3 className={styles.textLabel}>The Solution</h3>
          <p className={styles.textContent}>{project.solution}</p>
        </div>

        <div className={styles.galleryGrid}>
          {project.gallery.map((img, idx) => (
            <div key={idx} className={styles.galleryImage}>
              <Image
                src={img}
                alt={`${project.title} Detail ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </section>

      <PreFooter />
      <Footer />
    </main>
  );
}

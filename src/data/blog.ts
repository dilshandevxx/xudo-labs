export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Curating a workplace that inspires all of us",
    category: "MARKETING",
    date: "February 3, 2021",
    image: "/images/blog_arch.png",
    slug: "curating-a-workplace"
  },
  {
    id: 2,
    title: "Designers who changed the web with Webflow",
    category: "DESIGN",
    date: "February 25, 2021",
    image: "/images/blog_office.png",
    slug: "designers-who-changed-the-web"
  },
  {
    id: 3,
    title: "Why brutalism is making a huge comeback",
    category: "CULTURE",
    date: "March 12, 2021",
    image: "/images/music_festival.png",
    slug: "why-brutalism-comeback"
  },
  {
    id: 4,
    title: "Optimizing e-commerce layouts for 2026",
    category: "UX STRATEGY",
    date: "April 05, 2021",
    image: "/images/ecommerce_card.png",
    slug: "optimizing-ecommerce-layouts"
  },
  {
    id: 5,
    title: "The psychology behind micro-interactions",
    category: "DESIGN",
    date: "May 18, 2021",
    image: "/images/phone_interaction.png",
    slug: "psychology-micro-interactions"
  },
  {
    id: 6,
    title: "Serverless architectures for modern SaaS",
    category: "ENGINEERING",
    date: "June 22, 2021",
    image: "/images/science_tech.png",
    slug: "serverless-architectures"
  }
];

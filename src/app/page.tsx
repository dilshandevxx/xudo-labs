import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import BrandMarquee from "@/components/sections/BrandMarquee";
import About from "@/components/sections/About";
import SelectedWork from "@/components/sections/SelectedWork";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import Packages from "@/components/sections/Packages";
import CTA from "@/components/sections/CTA";
import Blog from "@/components/sections/Blog";
import PreFooter from "@/components/sections/PreFooter";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XŪDŪ | High-End Digital Production Studio",
  description: "XŪDŪ is an award-winning digital production studio specializing in high-performance platforms, brand identity systems, and intelligent AI solutions.",
  openGraph: {
    title: "XŪDŪ Digital Studio",
    description: "Structuring the future through architectural digital experiences.",
    type: "website",
  }
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <BrandMarquee />
      <About />
      <SelectedWork />
      <Experience />
      <Testimonials />
      <Packages />
      <CTA />
      <Blog />
      <PreFooter />
      <Footer />
    </main>
  );
}

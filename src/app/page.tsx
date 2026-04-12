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

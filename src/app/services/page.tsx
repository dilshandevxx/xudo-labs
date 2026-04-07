import Header from "@/components/Header";
import ServicesHero from "@/components/sections/ServicesHero";
import ServicesDetailed from "@/components/sections/ServicesDetailed";
import CTA from "@/components/sections/CTA";
import PreFooter from "@/components/sections/PreFooter";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services | XŪDŪ Digital Studio",
  description: "Explore our premium services including AI development, SaaS Architecture, and UI/UX Design.",
};

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <ServicesHero />
      <ServicesDetailed />
      <CTA />
      <PreFooter />
      <Footer />
    </main>
  );
}

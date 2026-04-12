import { Metadata } from "next";
import PackagesClient from "./PackagesClient";

export const metadata: Metadata = {
  title: "Project Packages | XŪDŪ Archive",
  description: "Explore our technical project bundles across Identity Systems, Digital Platforms, and Intelligent AI Suites. Modular pricing for high-end production.",
  openGraph: {
    title: "XŪDŪ | Project Packages",
    description: "Architectural project bundles for branding, web, and AI systems.",
  }
};

export default function PackagesPage() {
  return <PackagesClient />;
}

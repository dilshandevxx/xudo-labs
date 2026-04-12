import type { Metadata } from "next";
import { Syne, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "XŪDŪ | High-End Digital Production Studio",
    template: "%s | XŪDŪ"
  },
  description: "A collective of engineers and designers structuring the future through architectural digital experiences, brand identity systems, and intelligent AI suites.",
  keywords: ["Digital Studio", "Web Production", "AI Systems", "Next.js", "Awwwards", "Luxury Branding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} ${playfair.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

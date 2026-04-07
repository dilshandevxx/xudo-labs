"use client";

import styles from "./BrandMarquee.module.css";
import { FaFigma, FaGitlab, FaSlack, FaStripe } from "react-icons/fa";

const BRANDS = [
  { name: "Stripe", icon: StripeIcon },
  { name: "Airbnb", icon: AirbnbIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "Slack", icon: SlackIcon },
  { name: "GitLab", icon: GitlabIcon },
];

function StripeIcon() {
  return <FaStripe size={40} />;
}

function AirbnbIcon() {
  return <span style={{ fontWeight: 900 }}>bnb</span>;
}

function FigmaIcon() {
  return <FaFigma size={24} />;
}

function SlackIcon() {
  return <FaSlack size={24} />;
}

function GitlabIcon() {
  return <FaGitlab size={24} />;
}

export default function BrandMarquee() {
  // Double the array to allow for smooth infinite scrolling
  const duplicatedBrands = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className={styles.marqueeSection}>
      <h3 className={styles.title}>Join 7,000+ brands who loved us</h3>
      
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {duplicatedBrands.map((Brand, idx) => (
            <div key={idx} className={styles.brand}>
              <Brand.icon />
              {Brand.name !== "Stripe" && Brand.name !== "Airbnb" && <span>{Brand.name}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

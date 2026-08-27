import type { Metadata } from "next";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyYorra from "@/components/WhyYorra";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Yorra Tech | Build. Grow. Automate.",
  description:
    "Yorra Tech helps businesses build high-performance websites, grow their digital presence, and automate business operations with modern digital solutions.",
  alternates: {
    canonical: "https://yorra.in/",
  },
  openGraph: {
    title: "Yorra Tech | Build. Grow. Automate.",
    description:
      "Yorra Tech helps businesses build high-performance websites, grow their digital presence, and automate business operations with modern digital solutions.",
    url: "https://yorra.in/",
    siteName: "Yorra Tech",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="bg-[#05070b]">
      <Hero />
      <Services />
      <WhyYorra />
      <Process />
      <Portfolio />
      <CTA />
    </main>
  );
}
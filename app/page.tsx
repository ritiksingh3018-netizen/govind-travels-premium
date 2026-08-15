import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyYorra from "@/components/WhyYorra";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#05070b]">
      <Hero />
      <Services />
      <WhyYorra />
      <Process />
      <Portfolio />
      <CTA />
    </main>
  );
}
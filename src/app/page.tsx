import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Agents from "@/components/sections/Agents";
import Pricing from "@/components/sections/Pricing";
import Philosophy from "@/components/sections/Philosophy";
import HowItWorks from "@/components/sections/HowItWorks";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Agents />
      <Pricing />
      <Philosophy />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
}

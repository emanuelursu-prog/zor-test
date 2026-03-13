import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Benefits from "@/components/benefits/Benefits";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
}

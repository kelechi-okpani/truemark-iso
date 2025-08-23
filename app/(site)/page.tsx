import { Metadata } from "next";
import HeroSlider from "@/components/Website/Home/Hero/HeroSlider";
import Hero from "@/components/Website/Home";
import Brands from "@/components/Website/Home/Brands";
import Feature from "@/components/Website/Home/Features";
import FeaturesTab from "@/components/Website/Home/FeaturesTab";
import CTA from "@/components/Website/Home/CTA";
import FAQ from "@/components/Website/Home/FAQ";
import Contact from "@/components/Website/Home/Contact";


export const metadata: Metadata = {
  title: "True-Mark Global Standards & Solutions Limited",
  description: "Explore True-Mark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Hero />
      <Brands />
      <Feature />
      <FeaturesTab />
      <CTA />
      <FAQ />
      <Contact />


      {/*<About />*/}
      {/*<FunFact />*/}
      {/*<Integration />*/}
      {/*<Testimonial />*/}
      {/*<Pricing />*/}
      {/*<Certifications />*/}
    </main>
  );
}

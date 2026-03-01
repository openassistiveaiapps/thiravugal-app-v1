import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AIQuotes from "@/components/AIQuotes";
import BeyondCoding from "@/components/BeyondCoding";
import Programs from "@/components/Programs";
import Audience from "@/components/Audience";
import Mentors from "@/components/Mentors";
import WhyThiravugal from "@/components/WhyThiravugal";
import Testimonials from "@/components/Testimonials";
import Placements from "@/components/Placements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <AIQuotes />
      <BeyondCoding />
      <Programs />
      <Audience />
      <Mentors />
      <WhyThiravugal />
      <Testimonials />
      <Placements />
      <Contact />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AIQuotes from "@/components/AIQuotes";
import AITraining from "@/components/AITraining";
import BeyondCoding from "@/components/BeyondCoding";
import RealWorldSystems from "@/components/RealWorldSystems";
import Programs from "@/components/Programs";
import Audience from "@/components/Audience";
import Mentors from "@/components/Mentors";
import WhyThiravugal from "@/components/WhyThiravugal";
import TeachingApproach from "@/components/TeachingApproach";
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
      <AITraining />
      <BeyondCoding />
      <RealWorldSystems />
      <Programs />
      <Audience />
      <Mentors />
      <WhyThiravugal />
      <TeachingApproach />
      <Placements />
      <Contact />
      <Footer />
    </main>
  );
}

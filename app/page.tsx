import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AIQuotes from "@/components/AIQuotes";
import AITraining from "@/components/AITraining";
import BeyondCoding from "@/components/BeyondCoding";
import RealWorldSystems from "@/components/RealWorldSystems";
import Programs from "@/components/Programs";
import Audience from "@/components/Audience";
import Mentors from "@/components/Mentors";
import WhyThiravugal from "@/components/WhyThiravugal";
import TeachingApproach from "@/components/TeachingApproach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Thiravugal",
  url: "https://www.thiravugal.in",
  logo: "https://www.thiravugal.in/logo.jpeg",
  description:
    "Thiravugal is an IT training platform in Chennai teaching AI/ML, DSA & System Design, Full Stack, and Cloud — by industry SMEs.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-99418-74780",
    contactType: "admissions",
    email: "hello@thiravugal.com",
    areaServed: "IN",
    availableLanguage: ["English", "Tamil"],
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Training Programs",
    itemListElement: [
      {
        "@type": "Course",
        name: "AI & Machine Learning",
        description:
          "Go from fundamentals to deploying production LLMs and Generative AI apps — RAG, AI Agents, MCP, LangChain, CrewAI, Vector DBs.",
        provider: { "@type": "Organization", name: "Thiravugal" },
        timeRequired: "PT5M",
      },
      {
        "@type": "Course",
        name: "DSA & System Design",
        description:
          "Master data structures, algorithms, HLD/LLD, and system architecture to crack FAANG and top product company interviews.",
        provider: { "@type": "Organization", name: "Thiravugal" },
        timeRequired: "PT4M",
      },
      {
        "@type": "Course",
        name: "Full Stack + AI Integration",
        description:
          "Build modern full-stack applications powered by AI APIs. React, Node.js, OpenAI, Claude API, RAG.",
        provider: { "@type": "Organization", name: "Thiravugal" },
        timeRequired: "PT6M",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Navbar />
        <Hero />
        <AIQuotes />
        <AITraining />
        <BeyondCoding />
        <RealWorldSystems />
        <Programs />
        <Audience />
        <Mentors />
        <WhyThiravugal />
        <TeachingApproach />
        <Contact />
        <Footer />
        <Chatbot />
      </main>
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FestivalBanner from "@/components/FestivalBanner";
import Footer from "@/components/Footer";
import {
  Brain,
  MessageSquare,
  Mic,
  Zap,
  Building2,
  Users,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Globe,
  FileText,
  BarChart3,
  Shield,
  Heart,
  GraduationCap,
  Code2,
  Mail,
  TrendingUp,
  Scale,
  ListTodo,
  Phone,
  Star,
  Database,
  Calendar,
  Target,
  Bot,
} from "lucide-react";

// ─── Scroll animation hook ────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories = [
  {
    icon: Brain,
    color: "#29abe2",
    gradient: "linear-gradient(135deg, #071a3e 0%, #0d3060 100%)",
    title: "Generative AI & LLM-Based Products",
    desc: "Generative AI allows businesses to automate content creation, decision support, and knowledge retrieval at scale.",
    products: [
      { name: "AI Knowledge Assistants", examples: ["HR policy assistant", "IT helpdesk AI", "Internal documentation assistant"] },
      { name: "AI Research Assistants", examples: ["Legal research assistant", "Financial report summarizer", "Academic paper analyzer"] },
      { name: "Content Generation Platforms", examples: ["Marketing content generator", "Product description generator", "Blog & social media assistant"] },
      { name: "AI Document Intelligence", examples: ["Invoice processing", "Contract analysis", "Resume screening systems"] },
    ],
  },
  {
    icon: MessageSquare,
    color: "#f5a623",
    gradient: "linear-gradient(135deg, #1a1200 0%, #3d2b00 100%)",
    title: "AI Chatbot Solutions",
    desc: "Smart conversational chatbots for websites, mobile apps, and internal systems that handle queries 24/7.",
    products: [
      { name: "Customer Support Chatbots", examples: ["Order tracking bot", "Technical support assistant", "FAQ chatbot for websites"] },
      { name: "Sales & Lead Generation Bots", examples: ["Real estate inquiry chatbot", "SaaS demo booking assistant", "Insurance recommendation bot"] },
      { name: "Internal Company Chatbots", examples: ["HR assistant chatbot", "IT ticketing chatbot", "Knowledge base search bot"] },
    ],
  },
  {
    icon: Mic,
    color: "#a855f7",
    gradient: "linear-gradient(135deg, #160520 0%, #2d0a5a 100%)",
    title: "Voice AI & Conversational Assistants",
    desc: "Voice assistants that enable hands-free interaction, intelligent phone automation, and real-time analytics.",
    products: [
      { name: "Customer Voice Assistants", examples: ["Restaurant reservation voice bot", "Customer support phone automation", "Appointment scheduling assistant"] },
      { name: "Smart Device Voice Control", examples: ["Smart home assistant", "IoT device voice control", "Industrial equipment voice interface"] },
      { name: "Voice Analytics", examples: ["Call center conversation analysis", "Customer sentiment detection", "AI call quality monitoring"] },
    ],
  },
  {
    icon: Zap,
    color: "#22c55e",
    gradient: "linear-gradient(135deg, #021a06 0%, #053818 100%)",
    title: "AI Automation & Workflow Systems",
    desc: "AI that automates repetitive business processes and powers intelligent decision-making across industries.",
    products: [
      { name: "Business Process Automation", examples: ["Automated email responses", "AI-based ticket routing", "Intelligent workflow automation"] },
      { name: "AI Decision Systems", examples: ["Fraud detection systems", "Loan eligibility scoring", "Predictive maintenance for machines"] },
    ],
  },
];

const top20 = [
  { icon: MessageSquare, color: "#29abe2", title: "AI Customer Support Chatbot", desc: "Automate customer queries and support around the clock." },
  { icon: Brain, color: "#a855f7", title: "AI Knowledge Assistant", desc: "Instant answers trained on your company documents." },
  { icon: Target, color: "#f5a623", title: "AI Sales Lead Qualification Bot", desc: "Qualify and route high-quality leads automatically." },
  { icon: Phone, color: "#22c55e", title: "AI Voice Customer Service Agent", desc: "Handle phone calls and requests via intelligent voice AI." },
  { icon: FileText, color: "#29abe2", title: "AI Content Generation Platform", desc: "Generate blogs, captions, and marketing content at scale." },
  { icon: Users, color: "#f5a623", title: "AI Resume Screening System", desc: "Parse, match, and rank candidates automatically." },
  { icon: Database, color: "#a855f7", title: "AI Document Processing Platform", desc: "Extract and process information from any document type." },
  { icon: Calendar, color: "#22c55e", title: "AI Meeting Assistant", desc: "Transcribe, summarize, and extract action items from meetings." },
  { icon: Star, color: "#29abe2", title: "AI Recommendation Engine", desc: "Personalize products, content, and campaigns per user." },
  { icon: Mail, color: "#f5a623", title: "AI Email Assistant", desc: "Automate writing, categorization, and smart responses." },
  { icon: Globe, color: "#a855f7", title: "AI Social Media Manager", desc: "Generate posts, schedule content, and analyze engagement." },
  { icon: BarChart3, color: "#22c55e", title: "AI Customer Feedback Analyzer", desc: "Detect sentiment and unlock insights from reviews." },
  { icon: Shield, color: "#ef4444", title: "AI Fraud Detection System", desc: "Identify suspicious activities in real time with ML." },
  { icon: Heart, color: "#29abe2", title: "AI Healthcare Virtual Assistant", desc: "Assist patients with symptoms, appointments, and reminders." },
  { icon: GraduationCap, color: "#f5a623", title: "AI Education Tutor", desc: "Personalized, adaptive learning experiences powered by AI." },
  { icon: Code2, color: "#a855f7", title: "AI Coding Assistant", desc: "Code completion, review, and bug detection at scale." },
  { icon: TrendingUp, color: "#22c55e", title: "AI Data Insights Platform", desc: "Analyze datasets and generate actionable business insights." },
  { icon: Zap, color: "#29abe2", title: "AI Marketing Automation Platform", desc: "Automate campaigns, ad targeting, and customer engagement." },
  { icon: Scale, color: "#f5a623", title: "AI Legal Document Assistant", desc: "Summarize contracts and support legal research workflows." },
  { icon: ListTodo, color: "#a855f7", title: "AI Personal Productivity Assistant", desc: "Smart task managers, schedulers, and personal copilots." },
];

const industries = [
  {
    tier: "Small Businesses",
    icon: Briefcase,
    color: "#22c55e",
    gradient: "linear-gradient(135deg, #021a06 0%, #053818 100%)",
    tagline: "Affordable AI to automate everyday operations",
    examples: ["Website chatbot for customer queries", "AI appointment booking assistant", "AI social media content generator", "AI email response assistant"],
  },
  {
    tier: "Mid-Sized Companies",
    icon: Building2,
    color: "#29abe2",
    gradient: "linear-gradient(135deg, #071a3e 0%, #0d3060 100%)",
    tagline: "Improve operational efficiency and customer engagement",
    examples: ["Customer service chatbots", "AI document processing", "Voice customer support systems", "AI sales lead qualification tools"],
  },
  {
    tier: "Enterprise & Large Scale",
    icon: Globe,
    color: "#a855f7",
    gradient: "linear-gradient(135deg, #160520 0%, #2d0a5a 100%)",
    tagline: "Enterprise-grade AI built for scalability and integration",
    examples: ["Enterprise knowledge assistants", "AI-powered analytics platforms", "LLM-based document intelligence", "Multi-language global customer support AI", "AI copilots for employees"],
  },
];

const techStack = [
  "Large Language Models (LLMs)",
  "Generative AI Platforms",
  "Conversational AI Frameworks",
  "Speech Recognition & Voice AI",
  "Vector Databases & Knowledge Retrieval",
  "Cloud AI Infrastructure",
  "AI Agents & Autonomous Systems",
  "RAG (Retrieval-Augmented Generation)",
  "LangChain & CrewAI",
  "OpenAI / Claude / Gemini APIs",
  "Pinecone / Weaviate / Qdrant",
  "AWS / GCP AI Services",
];

const approach = [
  { step: "01", color: "#29abe2", title: "Understand Business Challenges", desc: "Deep-dive into your workflows, goals, and pain points to define the right AI solution for your context." },
  { step: "02", color: "#a855f7", title: "Design Scalable AI Architecture", desc: "Architect a robust, production-ready AI system tailored to your team size, data, and business scale." },
  { step: "03", color: "#f5a623", title: "Build Intelligent AI Products", desc: "Develop and integrate AI agents, chatbots, or automation systems with precision and clean engineering." },
  { step: "04", color: "#22c55e", title: "Deploy Secure & Reliable Systems", desc: "Launch with confidence — security, uptime, and compliance are baked in from day one." },
  { step: "05", color: "#29abe2", title: "Continuously Improve with Real Data", desc: "Monitor, retrain, and evolve your AI system based on real-world usage and business feedback." },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({ badge, badgeColor, title, subtitle }: {
  badge: string; badgeColor: string; title: React.ReactNode; subtitle?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className="text-center mb-16 transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)" }}
    >
      <div
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
        style={{ background: `${badgeColor}12`, border: `1px solid ${badgeColor}28`, color: badgeColor }}
      >
        {badge}
      </div>
      <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">{title}</h2>
      {subtitle && <p className="max-w-2xl mx-auto text-base" style={{ color: "rgba(255,255,255,0.5)" }}>{subtitle}</p>}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  const heroRef = useInView(0.05);
  const categoriesRef = useInView(0.05);
  const top20Ref = useInView(0.05);
  const industriesRef = useInView(0.05);
  const techRef = useInView(0.05);
  const approachRef = useInView(0.05);

  return (
    <div className="min-h-screen" style={{ background: "#050d1f", color: "white" }}>
      {/* Keyframe styles */}
      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes pulse-ring { 0% { transform: scale(1); opacity: 0.4; } 100% { transform: scale(1.6); opacity: 0; } }
        @keyframes typing { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        .float-1 { animation: float 4s ease-in-out infinite; }
        .float-2 { animation: float 5.5s ease-in-out 1s infinite; }
        .float-3 { animation: float 4.8s ease-in-out 0.5s infinite; }
        .pulse-ring { animation: pulse-ring 2s ease-out infinite; }
        .typing-dot { animation: typing 1.2s ease-in-out infinite; }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        .stagger-1 { transition-delay: 0ms; }
        .stagger-2 { transition-delay: 80ms; }
        .stagger-3 { transition-delay: 160ms; }
        .stagger-4 { transition-delay: 240ms; }
      `}</style>

      {/* Fixed header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <FestivalBanner />
        <Navbar />
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-40 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #050d1f 0%, #0d1b4b 55%, #050d1f 100%)" }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "radial-gradient(circle, #29abe2 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(41,171,226,0.07), transparent 65%)" }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.07), transparent 65%)" }} />

        <div
          ref={heroRef.ref}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000"
          style={{ opacity: heroRef.inView ? 1 : 0, transform: heroRef.inView ? "translateY(0)" : "translateY(30px)" }}
        >
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ background: "rgba(41,171,226,0.1)", border: "1px solid rgba(41,171,226,0.25)", color: "#29abe2" }}>
              <Sparkles className="w-3.5 h-3.5" />
              AI-First Product Studio
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              AI Products &{" "}
              <span style={{ background: "linear-gradient(90deg, #29abe2, #a855f7, #f5a623)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Intelligent
              </span>
              <br />Solutions We Build
            </h1>
            <p className="text-lg max-w-xl mb-3 leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
              We design and build next-generation AI products powered by Generative AI, LLMs, Chatbots,
              and Voice Assistants — for startups, growing companies, and large enterprises.
            </p>
            <p className="text-base font-semibold mb-10" style={{ color: "#f5a623" }}>
              We make your business simple using AI-based solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#categories" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white"
                style={{ background: "linear-gradient(90deg, #29abe2, #1a78a8)" }}>
                Explore Solutions <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm"
                style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.85)" }}>
                Let's Build Together
              </Link>
            </div>
          </div>

          {/* Right — AI Chat Mockup */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Main card */}
              <div className="float-1 rounded-2xl p-5 relative z-10"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}>
                {/* Window chrome */}
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  <span className="ml-2 text-xs font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>Thiravugal AI Agent</span>
                </div>
                {/* Chat bubbles */}
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="px-3.5 py-2 rounded-2xl rounded-tr-sm text-xs max-w-[78%] leading-relaxed"
                      style={{ background: "#29abe2", color: "white" }}>
                      Analyse this sales report and highlight key insights
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #a855f7, #29abe2)" }}>
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="px-3.5 py-2 rounded-2xl rounded-tl-sm text-xs max-w-[78%] leading-relaxed"
                      style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.82)" }}>
                      📈 Revenue up <span style={{ color: "#22c55e" }}>+23%</span> vs last quarter. Top region: Chennai. Product A leads with 42% share.
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="px-3.5 py-2 rounded-2xl rounded-tr-sm text-xs max-w-[78%] leading-relaxed"
                      style={{ background: "#29abe2", color: "white" }}>
                      Which product needs attention?
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #a855f7, #29abe2)" }}>
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="px-3.5 py-2 rounded-2xl rounded-tl-sm text-xs leading-relaxed"
                      style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.82)" }}>
                      ⚠️ Product C dropped <span style={{ color: "#ef4444" }}>-18%</span>. Recommend pricing review and targeted campaign.
                    </div>
                  </div>
                  {/* Typing indicator */}
                  <div className="flex gap-2.5 items-center">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #a855f7, #29abe2)" }}>
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="flex items-center gap-1 px-3.5 py-2.5 rounded-2xl"
                      style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div className="w-1.5 h-1.5 rounded-full typing-dot" style={{ background: "rgba(255,255,255,0.5)" }} />
                      <div className="w-1.5 h-1.5 rounded-full typing-dot" style={{ background: "rgba(255,255,255,0.5)" }} />
                      <div className="w-1.5 h-1.5 rounded-full typing-dot" style={{ background: "rgba(255,255,255,0.5)" }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="float-2 absolute -top-5 -right-6 px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 z-20"
                style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)", boxShadow: "0 8px 24px rgba(34,197,94,0.35)" }}>
                <CheckCircle className="w-3.5 h-3.5" /> AI-Powered
              </div>
              <div className="float-3 absolute -bottom-5 -left-6 px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 z-20"
                style={{ background: "linear-gradient(135deg, #f5a623, #d97706)", boxShadow: "0 8px 24px rgba(245,166,35,0.35)" }}>
                <Zap className="w-3.5 h-3.5" /> 24/7 Active
              </div>

              {/* Stat pill floating top-left */}
              <div className="float-2 absolute -top-3 -left-8 px-3 py-2 rounded-xl text-xs font-semibold z-20"
                style={{ background: "linear-gradient(135deg, #a855f7, #7c3aed)", boxShadow: "0 8px 24px rgba(168,85,247,0.35)" }}>
                🤖 LLM Powered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div style={{ background: "rgba(255,255,255,0.025)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { num: "4", label: "Core AI Domains" },
            { num: "20+", label: "AI Product Types" },
            { num: "3", label: "Business Tiers" },
            { num: "12+", label: "Technologies" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-display font-bold mb-1" style={{ color: "#29abe2" }}>{s.num}</div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Categories ── */}
      <section id="categories" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Core Capabilities" badgeColor="#29abe2" title="What We Build" />
          <div
            ref={categoriesRef.ref}
            className="grid lg:grid-cols-2 gap-6"
          >
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              const delay = i * 100;
              return (
                <div
                  key={cat.title}
                  className="rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.015]"
                  style={{
                    background: cat.gradient,
                    border: "1px solid rgba(255,255,255,0.08)",
                    opacity: categoriesRef.inView ? 1 : 0,
                    transform: categoriesRef.inView ? "translateY(0)" : "translateY(30px)",
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  <div className="p-7 sm:p-8">
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${cat.color}18` }}>
                        <Icon className="w-6 h-6" style={{ color: cat.color }} />
                      </div>
                      {/* Mini stat badge */}
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: `${cat.color}15`, color: cat.color, border: `1px solid ${cat.color}25` }}>
                        {cat.products.length} product types
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">{cat.title}</h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.52)" }}>{cat.desc}</p>
                    <div className="space-y-5">
                      {cat.products.map((product) => (
                        <div key={product.name}>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: cat.color }} />
                            <span className="text-white font-semibold text-sm">{product.name}</span>
                          </div>
                          <div className="ml-3.5 flex flex-wrap gap-2">
                            {product.examples.map((ex) => (
                              <span key={ex} className="text-xs px-3 py-1 rounded-full"
                                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)", color: "rgba(255,255,255,0.58)" }}>
                                {ex}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Top 20 ── */}
      <section className="py-24" style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Ready to Launch"
            badgeColor="#f5a623"
            title="Top 20 AI Products You Can Launch Today"
            subtitle="Proven AI solutions that deliver real business value across every industry in 2026."
          />
          <div ref={top20Ref.ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {top20.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl p-5 group transition-all duration-700 hover:scale-[1.03] hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    opacity: top20Ref.inView ? 1 : 0,
                    transform: top20Ref.inView ? "translateY(0)" : "translateY(24px)",
                    transitionDelay: `${(i % 4) * 70}ms`,
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}15` }}>
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <span className="text-3xl font-display font-bold leading-none opacity-[0.08] group-hover:opacity-[0.18] transition-opacity"
                      style={{ color: item.color }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1.5 leading-snug">{item.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="By Business Size" badgeColor="#a855f7" title="AI Solutions for Every Scale" />
          <div ref={industriesRef.ref} className="grid lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.tier}
                  className="rounded-2xl transition-all duration-700 hover:scale-[1.015]"
                  style={{
                    background: ind.gradient,
                    border: "1px solid rgba(255,255,255,0.08)",
                    opacity: industriesRef.inView ? 1 : 0,
                    transform: industriesRef.inView ? "translateY(0)" : "translateY(30px)",
                    transitionDelay: `${i * 120}ms`,
                  }}
                >
                  <div className="p-7 sm:p-8">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${ind.color}18` }}>
                      <Icon className="w-6 h-6" style={{ color: ind.color }} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-1">{ind.tier}</h3>
                    <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.42)" }}>{ind.tagline}</p>
                    <ul className="space-y-3">
                      {ind.examples.map((ex) => (
                        <li key={ex} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: ind.color }} />
                          <span className="text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-24" style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader badge="Our Stack" badgeColor="#29abe2" title="Technologies We Work With" />
          <div ref={techRef.ref} className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech, i) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.75)",
                  opacity: techRef.inView ? 1 : 0,
                  transform: techRef.inView ? "scale(1)" : "scale(0.9)",
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="How We Work" badgeColor="#22c55e" title="Our Approach" />
          <div ref={approachRef.ref} className="space-y-4">
            {approach.map((a, i) => (
              <div
                key={a.step}
                className="flex gap-5 items-start p-6 rounded-2xl transition-all duration-700 hover:scale-[1.01]"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  opacity: approachRef.inView ? 1 : 0,
                  transform: approachRef.inView ? "translateX(0)" : "translateX(-20px)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center font-display font-bold text-lg"
                  style={{ background: `${a.color}12`, border: `1px solid ${a.color}25`, color: a.color }}
                >
                  {a.step}
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{a.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0d1b4b, #1a237e, #0a2a4a)" }}
          >
            {/* Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(41,171,226,0.15), transparent 65%)", filter: "blur(40px)" }} />
            <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(168,85,247,0.12), transparent 65%)", filter: "blur(40px)" }} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ background: "rgba(41,171,226,0.12)", border: "1px solid rgba(41,171,226,0.28)", color: "#29abe2" }}>
                <Sparkles className="w-3.5 h-3.5" />
                Start Building Today
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                Build Your AI Product With Us
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                Whether you're a startup exploring AI, a company automating operations, or an enterprise
                building intelligent platforms — we turn ideas into powerful AI products that deliver real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-white hover:opacity-90 transition-all"
                  style={{ background: "linear-gradient(90deg, #29abe2, #1a78a8)" }}>
                  Submit an Enquiry <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:border-white/30"
                  style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.8)" }}>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

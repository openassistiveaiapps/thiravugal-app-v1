"use client";

import { ArrowRight, Layers, CheckCircle2 } from "lucide-react";

const systems = [
  {
    emoji: "🏢",
    title: "CRM System",
    subtitle: "Customer Relationship Management",
    description:
      "Build a full CRM from scratch — lead pipelines, contact management, deal tracking, email integration, and real-time dashboards. The backbone of every sales team.",
    highlights: [
      "Lead & deal pipeline with Kanban board",
      "Contact & account management",
      "Activity timelines & follow-up reminders",
      "Role-based access control",
      "Analytics & conversion reports",
      "Email & WhatsApp integration layer",
    ],
    color: "#29abe2",
    bg: "bg-blue-50",
    border: "border-blue-100",
    tag: "Business Core",
  },
  {
    emoji: "🏭",
    title: "ERP Platform",
    subtitle: "Enterprise Resource Planning",
    description:
      "Design the architecture of an ERP that connects HR, Inventory, Finance, and Operations — the kind of system that runs real businesses worth millions.",
    highlights: [
      "Multi-module: HR, Finance, Inventory",
      "Employee onboarding & payroll flows",
      "Purchase orders & vendor management",
      "Stock & warehouse management",
      "Financial ledger & reporting",
      "Multi-branch & multi-currency support",
    ],
    color: "#1a237e",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    tag: "Enterprise Scale",
  },
  {
    emoji: "📸",
    title: "Instagram / Social Platform",
    subtitle: "Social Media at Scale",
    description:
      "Architect a photo & video social app — news feed algorithms, story system, follow graphs, notifications, and a CDN-backed media pipeline that scales to millions.",
    highlights: [
      "News feed ranking & algorithm design",
      "Story & reel upload pipeline with CDN",
      "Social graph (followers / following)",
      "Real-time push notifications",
      "Likes, comments & threaded replies",
      "Content moderation architecture",
    ],
    color: "#a855f7",
    bg: "bg-purple-50",
    border: "border-purple-100",
    tag: "Massive Scale",
  },
  {
    emoji: "🐦",
    title: "Twitter / Feed Platform",
    subtitle: "Real-Time Microblogging",
    description:
      "Design a tweet-like system with global fan-out, trending topics, hashtag indexing, and a search engine — learn how to handle millions of writes per second.",
    highlights: [
      "Tweet creation & fan-out-on-write vs read",
      "Trending hashtags & topic indexing",
      "Full-text search with Elasticsearch",
      "Retweet, quote & thread systems",
      "Rate limiting & spam detection",
      "Timeline caching with Redis",
    ],
    color: "#22c55e",
    bg: "bg-green-50",
    border: "border-green-100",
    tag: "High Throughput",
  },
  {
    emoji: "🛒",
    title: "E-Commerce Platform",
    subtitle: "End-to-End Online Store",
    description:
      "Build a production-grade e-commerce system with product catalog, cart, checkout, payment gateway integration, inventory sync, and order lifecycle management.",
    highlights: [
      "Product catalog with variant & pricing",
      "Cart, wishlist & checkout flow",
      "Payment gateway (Razorpay / Stripe)",
      "Order management & tracking",
      "Seller dashboard & inventory sync",
      "Review, rating & recommendation engine",
    ],
    color: "#f5a623",
    bg: "bg-amber-50",
    border: "border-amber-100",
    tag: "Revenue Critical",
  },
  {
    emoji: "📊",
    title: "Business Intelligence Dashboard",
    subtitle: "Data-Driven Decision Making",
    description:
      "Create an analytics platform that ingests raw business data, runs aggregations, and surfaces insights — charts, KPIs, drill-downs, and AI-powered forecasting.",
    highlights: [
      "Data ingestion & ETL pipeline design",
      "Real-time KPI dashboards",
      "Drill-down charts & cohort analysis",
      "Scheduled reports & PDF export",
      "AI-powered trend forecasting",
      "Multi-tenant, white-label ready",
    ],
    color: "#f97316",
    bg: "bg-orange-50",
    border: "border-orange-100",
    tag: "AI Integrated",
  },
];

export default function RealWorldSystems() {
  return (
    <section className="py-20 sm:py-24 bg-gray-950 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pattern-overlay opacity-40" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#29abe2]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1a237e]/10 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-[#29abe2] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            <Layers className="w-3.5 h-3.5" />
            What You&apos;ll Actually Build
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
            Train on{" "}
            <span className="gradient-text">World-Class Systems</span>
            <br className="hidden sm:block" />
            — Not Toy Projects
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            At Thiravugal, you don&apos;t build another to-do app. You architect the
            same category of systems that power{" "}
            <span className="text-white font-semibold">real businesses</span> —
            from startups to Fortune 500 enterprises.
          </p>
        </div>

        {/* Systems grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {systems.map((sys) => (
            <div
              key={sys.title}
              className={`${sys.bg} border ${sys.border} rounded-2xl sm:rounded-3xl p-5 sm:p-6 card-hover group relative overflow-hidden`}
            >
              {/* Tag */}
              <div
                className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ background: `${sys.color}18`, color: sys.color }}
              >
                {sys.tag}
              </div>

              {/* Icon + title */}
              <div className="text-3xl sm:text-4xl mb-3">{sys.emoji}</div>
              <h3 className="font-display font-bold text-gray-900 text-lg sm:text-xl mb-0.5">
                {sys.title}
              </h3>
              <p
                className="text-xs font-bold uppercase tracking-wider mb-3"
                style={{ color: sys.color }}
              >
                {sys.subtitle}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {sys.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                {sys.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: sys.color }}
                    />
                    <span className="text-gray-700 text-xs sm:text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
          <p className="text-white/60 text-sm uppercase tracking-widest font-semibold mb-3">
            And much more across all programs
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
            {[
              "URL Shortener",
              "Ride-Sharing Backend",
              "Video Streaming Platform",
              "Food Delivery System",
              "Chat Application",
              "Payment Wallet",
              "Job Board Platform",
              "Hotel Booking Engine",
            ].map((item) => (
              <span
                key={item}
                className="bg-white/8 border border-white/10 text-white/70 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
          <a href="#programs" className="btn-gold inline-flex">
            Explore Our Programs
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

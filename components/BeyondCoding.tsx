"use client";

import { useState } from "react";
import {
  Users,
  Lightbulb,
  Network,
  Target,
  MessageSquare,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const pillars = [
  {
    id: "system-design",
    icon: Network,
    title: "Systems Thinking & Design",
    tagline: "Architect before you code",
    description:
      "We teach you to step back and see the big picture — how components interact, scale, and fail. You'll learn High-Level & Low-Level Design, trade-off analysis, and how to build systems that last.",
    skills: [
      "High-Level Design (HLD)",
      "Low-Level Design (LLD)",
      "Scalability & Load Balancing",
      "Database Design & Sharding",
      "API Design Principles",
      "Trade-off Analysis",
    ],
    color: "#29abe2",
    bg: "from-[#1a237e]/10 to-[#29abe2]/5",
    border: "border-[#29abe2]/20",
    emoji: "🏗️",
  },
  {
    id: "user-needs",
    icon: Users,
    title: "Understanding User Needs",
    tagline: "Build what people actually want",
    description:
      "Great engineers don't just execute tickets — they understand why something is being built. We teach user empathy, requirements gathering, and how to translate business problems into technical solutions.",
    skills: [
      "User Story Mapping",
      "Requirements Engineering",
      "Product Thinking for Engineers",
      "User Journey Analysis",
      "Translating Business to Tech",
      "Feedback Loop Design",
    ],
    color: "#f5a623",
    bg: "from-amber-500/10 to-amber-500/5",
    border: "border-amber-500/20",
    emoji: "🧭",
  },
  {
    id: "ai-solutions",
    icon: Lightbulb,
    title: "AI-Centric Solution Design",
    tagline: "Think AI-first, not AI-afterthought",
    description:
      "Learn to identify where AI adds real value — and where it doesn't. Design AI-native applications, choose the right models, and integrate LLMs, RAG, and Agents into production workflows.",
    skills: [
      "AI Problem Framing",
      "LLM Integration Patterns",
      "RAG & Vector Databases",
      "AI Agent Architecture",
      "Model Selection & Evaluation",
      "Responsible AI Design",
    ],
    color: "#a855f7",
    bg: "from-purple-600/10 to-purple-600/5",
    border: "border-purple-500/20",
    emoji: "🤖",
  },
  {
    id: "communication",
    icon: MessageSquare,
    title: "Engineering Communication",
    tagline: "Articulate, document, and lead",
    description:
      "The ability to explain complex ideas clearly is a superpower. We train you to write technical docs, present architecture decisions, conduct code reviews, and collaborate across teams.",
    skills: [
      "Technical Documentation",
      "Architecture Decision Records",
      "Code Review Best Practices",
      "Stakeholder Communication",
      "Tech Presentation Skills",
      "Cross-team Collaboration",
    ],
    color: "#22c55e",
    bg: "from-green-500/10 to-green-500/5",
    border: "border-green-500/20",
    emoji: "💬",
  },
];

const comparison = [
  { traditional: "Write code given a spec", thiravugal: "Define the spec from user needs" },
  { traditional: "Fix bugs after deployment", thiravugal: "Design to prevent failures upfront" },
  { traditional: "Learn framework syntax", thiravugal: "Learn when & why to use a framework" },
  { traditional: "Use AI as a tool", thiravugal: "Architect AI-native solutions" },
  { traditional: "Follow instructions", thiravugal: "Question, challenge, and improve" },
  { traditional: "Work in silos", thiravugal: "Collaborate and communicate across teams" },
];

export default function BeyondCoding() {
  const [active, setActive] = useState("system-design");
  const activePillar = pillars.find(p => p.id === active)!;
  const Icon = activePillar.icon;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mb-4">
            <Layers className="w-3.5 h-3.5" />
            Beyond Coding
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-5">
            We Teach You to{" "}
            <span className="gradient-text">Think Like an Engineer,</span>
            <br />
            Not Just Code Like One
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Syntax is the easy part. The hard part — and the valuable part — is
            knowing <strong className="text-[#1a237e]">what to build</strong>,{" "}
            <strong className="text-[#29abe2]">why it matters to users</strong>, and{" "}
            <strong className="text-[#a855f7]">how AI fits in</strong>.
            That&apos;s what Thiravugal trains you for.
          </p>
        </div>

        {/* Interactive pillars */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {/* Pillar nav */}
          <div className="space-y-3">
            {pillars.map(p => {
              const PIcon = p.icon;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    active === p.id
                      ? `bg-gradient-to-r ${p.bg} ${p.border} shadow-sm`
                      : "border-gray-100 hover:border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: active === p.id ? `${p.color}20` : "#f3f4f6" }}
                    >
                      <PIcon className="w-5 h-5" style={{ color: active === p.id ? p.color : "#6b7280" }} />
                    </div>
                    <div>
                      <div className={`font-display font-bold text-sm ${active === p.id ? "text-gray-900" : "text-gray-600"}`}>
                        {p.title}
                      </div>
                      <div className={`text-xs mt-0.5 ${active === p.id ? "text-gray-500" : "text-gray-400"}`}>
                        {p.tagline}
                      </div>
                    </div>
                    {active === p.id && (
                      <ArrowRight className="w-4 h-4 ml-auto shrink-0" style={{ color: activePillar.color }} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Pillar detail */}
          <div className="lg:col-span-2">
            <div className={`h-full bg-gradient-to-br ${activePillar.bg} border ${activePillar.border} rounded-3xl p-8`}>
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                  style={{ background: `${activePillar.color}15` }}
                >
                  {activePillar.emoji}
                </div>
                <div>
                  <h3 className="font-display font-bold text-gray-900 text-2xl leading-tight">
                    {activePillar.title}
                  </h3>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: activePillar.color }}>
                    {activePillar.tagline}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-base">
                {activePillar.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-2.5">
                {activePillar.skills.map(skill => (
                  <div key={skill} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: activePillar.color }} />
                    <span className="text-gray-700 text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-2">
            <div className="bg-gray-200/60 px-6 py-4 flex items-center gap-2">
              <span className="text-2xl">😐</span>
              <span className="font-display font-bold text-gray-600">Traditional Training</span>
            </div>
            <div className="bg-gradient-to-r from-[#1a237e] to-[#29abe2] px-6 py-4 flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="font-display font-bold text-white">Thiravugal Approach</span>
            </div>
          </div>
          {comparison.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 divide-x divide-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
            >
              <div className="px-6 py-4 flex items-center gap-3 text-gray-500 text-sm">
                <span className="text-gray-400 text-base">✗</span>
                {row.traditional}
              </div>
              <div className="px-6 py-4 flex items-center gap-3 text-gray-800 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" />
                {row.thiravugal}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-3 mb-6">
            {[
              { icon: Target, label: "Problem-First Thinking" },
              { icon: Users, label: "Human-Centered Design" },
              { icon: Lightbulb, label: "AI-Native Solutions" },
              { icon: Network, label: "Systems Architecture" },
            ].map(t => {
              const TIcon = t.icon;
              return (
                <div key={t.label} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                  <TIcon className="w-4 h-4 text-[#29abe2]" />
                  <span className="text-gray-700 font-semibold text-sm">{t.label}</span>
                </div>
              );
            })}
          </div>
          <a href="#contact" className="btn-primary inline-flex">
            Learn the Thiravugal Way
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

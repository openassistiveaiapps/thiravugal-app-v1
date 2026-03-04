"use client";

import { ArrowRight, CheckCircle2, BookOpen } from "lucide-react";

/* ─── Inline SVG illustrations ─── */

function ArchitectureSVG() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" aria-hidden="true">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#29abe2" />
        </marker>
        <marker id="ahg" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#22c55e" />
        </marker>
      </defs>

      {/* Client layer */}
      <rect x="120" y="10" width="80" height="32" rx="8" fill="#1a237e15" stroke="#1a237e" strokeWidth="1.5" />
      <text x="160" y="30" textAnchor="middle" fontSize="10" fill="#1a237e" fontWeight="700">Client / UI</text>

      {/* Arrow down */}
      <line x1="160" y1="42" x2="160" y2="60" stroke="#29abe2" strokeWidth="1.5" markerEnd="url(#ah)" />

      {/* API Gateway */}
      <rect x="100" y="62" width="120" height="32" rx="8" fill="#29abe215" stroke="#29abe2" strokeWidth="1.5" />
      <text x="160" y="82" textAnchor="middle" fontSize="10" fill="#29abe2" fontWeight="700">API Gateway</text>

      {/* Three arrows to services */}
      <line x1="125" y1="94" x2="55" y2="114" stroke="#29abe2" strokeWidth="1.2" markerEnd="url(#ah)" />
      <line x1="160" y1="94" x2="160" y2="114" stroke="#29abe2" strokeWidth="1.2" markerEnd="url(#ah)" />
      <line x1="195" y1="94" x2="265" y2="114" stroke="#29abe2" strokeWidth="1.2" markerEnd="url(#ah)" />

      {/* Service boxes */}
      <rect x="12" y="116" width="86" height="30" rx="7" fill="#a855f715" stroke="#a855f7" strokeWidth="1.2" />
      <text x="55" y="135" textAnchor="middle" fontSize="9" fill="#a855f7" fontWeight="600">Auth Service</text>

      <rect x="117" y="116" width="86" height="30" rx="7" fill="#f5a62315" stroke="#f5a623" strokeWidth="1.2" />
      <text x="160" y="135" textAnchor="middle" fontSize="9" fill="#f5a623" fontWeight="600">Order Service</text>

      <rect x="222" y="116" width="86" height="30" rx="7" fill="#22c55e15" stroke="#22c55e" strokeWidth="1.2" />
      <text x="265" y="135" textAnchor="middle" fontSize="9" fill="#22c55e" fontWeight="600">AI Service</text>

      {/* Arrows to DB */}
      <line x1="55" y1="146" x2="130" y2="162" stroke="#22c55e" strokeWidth="1.1" markerEnd="url(#ahg)" />
      <line x1="160" y1="146" x2="160" y2="162" stroke="#22c55e" strokeWidth="1.1" markerEnd="url(#ahg)" />
      <line x1="265" y1="146" x2="190" y2="162" stroke="#22c55e" strokeWidth="1.1" markerEnd="url(#ahg)" />

      {/* Database */}
      <rect x="105" y="163" width="110" height="14" rx="7" fill="#1a237e" opacity="0.12" />
      <ellipse cx="160" cy="163" rx="55" ry="7" fill="#1a237e20" stroke="#1a237e" strokeWidth="1.2" />
      <text x="160" y="167" textAnchor="middle" fontSize="8" fill="#1a237e" fontWeight="600">Database Layer</text>
    </svg>
  );
}

function AIEcosystemSVG() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" aria-hidden="true">
      <defs>
        <marker id="ai-arr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#a855f7" />
        </marker>
      </defs>

      {/* Center LLM circle */}
      <circle cx="160" cy="90" r="38" fill="#a855f715" stroke="#a855f7" strokeWidth="2" />
      <text x="160" y="87" textAnchor="middle" fontSize="11" fill="#a855f7" fontWeight="800">LLM</text>
      <text x="160" y="101" textAnchor="middle" fontSize="8" fill="#a855f7" opacity="0.8">GPT · Claude · Gemini</text>

      {/* Satellite nodes */}
      {/* RAG - top left */}
      <circle cx="55" cy="38" r="24" fill="#29abe215" stroke="#29abe2" strokeWidth="1.5" />
      <text x="55" y="35" textAnchor="middle" fontSize="9" fill="#29abe2" fontWeight="700">RAG</text>
      <text x="55" y="47" textAnchor="middle" fontSize="7" fill="#29abe2" opacity="0.8">Vector DB</text>
      <line x1="77" y1="52" x2="127" y2="70" stroke="#a855f7" strokeWidth="1.3" markerEnd="url(#ai-arr)" strokeDasharray="4 2" />

      {/* MCP - top right */}
      <circle cx="265" cy="38" r="24" fill="#f5a62315" stroke="#f5a623" strokeWidth="1.5" />
      <text x="265" y="35" textAnchor="middle" fontSize="9" fill="#f5a623" fontWeight="700">MCP</text>
      <text x="265" y="47" textAnchor="middle" fontSize="7" fill="#f5a623" opacity="0.8">Protocol</text>
      <line x1="243" y1="52" x2="193" y2="70" stroke="#a855f7" strokeWidth="1.3" markerEnd="url(#ai-arr)" strokeDasharray="4 2" />

      {/* Agents - left */}
      <circle cx="40" cy="110" r="24" fill="#22c55e15" stroke="#22c55e" strokeWidth="1.5" />
      <text x="40" y="107" textAnchor="middle" fontSize="9" fill="#22c55e" fontWeight="700">Agents</text>
      <text x="40" y="119" textAnchor="middle" fontSize="7" fill="#22c55e" opacity="0.8">Autonomous</text>
      <line x1="64" y1="100" x2="122" y2="93" stroke="#a855f7" strokeWidth="1.3" markerEnd="url(#ai-arr)" strokeDasharray="4 2" />

      {/* Tools - right */}
      <circle cx="280" cy="110" r="24" fill="#f9731615" stroke="#f97316" strokeWidth="1.5" />
      <text x="280" y="107" textAnchor="middle" fontSize="9" fill="#f97316" fontWeight="700">Tools</text>
      <text x="280" y="119" textAnchor="middle" fontSize="7" fill="#f97316" opacity="0.8">Function Call</text>
      <line x1="256" y1="100" x2="198" y2="93" stroke="#a855f7" strokeWidth="1.3" markerEnd="url(#ai-arr)" strokeDasharray="4 2" />

      {/* Fine-tune - bottom */}
      <circle cx="160" cy="162" r="18" fill="#1a237e15" stroke="#1a237e" strokeWidth="1.5" />
      <text x="160" y="159" textAnchor="middle" fontSize="8" fill="#1a237e" fontWeight="700">Fine-tune</text>
      <text x="160" y="170" textAnchor="middle" fontSize="7" fill="#1a237e" opacity="0.8">RLHF</text>
      <line x1="160" y1="144" x2="160" y2="128" stroke="#a855f7" strokeWidth="1.3" markerEnd="url(#ai-arr)" strokeDasharray="4 2" />
    </svg>
  );
}

function UserFlowSVG() {
  return (
    <svg viewBox="0 0 320 140" className="w-full h-full" aria-hidden="true">
      <defs>
        <marker id="uf-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#f5a623" />
        </marker>
      </defs>

      {/* Steps */}
      {[
        { x: 18, label: "User", sub: "Need", color: "#1a237e", icon: "👤" },
        { x: 88, label: "Research", sub: "Empathy", color: "#29abe2", icon: "🔍" },
        { x: 158, label: "Architect", sub: "Design", color: "#a855f7", icon: "🏗️" },
        { x: 228, label: "Build", sub: "Code", color: "#22c55e", icon: "⚙️" },
        { x: 298, label: "Ship", sub: "Deploy", color: "#f5a623", icon: "🚀" },
      ].map((step, i) => (
        <g key={step.label}>
          <circle cx={step.x} cy="60" r="28" fill={`${step.color}15`} stroke={step.color} strokeWidth="1.5" />
          <text x={step.x} y="55" textAnchor="middle" fontSize="16">{step.icon}</text>
          <text x={step.x} y="72" textAnchor="middle" fontSize="8.5" fill={step.color} fontWeight="700">{step.label}</text>
          <text x={step.x} y="83" textAnchor="middle" fontSize="7" fill={step.color} opacity="0.7">{step.sub}</text>
          {i < 4 && (
            <line x1={step.x + 29} y1="60" x2={step.x + 59} y2="60" stroke="#f5a623" strokeWidth="1.5" markerEnd="url(#uf-arr)" />
          )}
        </g>
      ))}

      {/* Label below */}
      <text x="160" y="115" textAnchor="middle" fontSize="9" fill="#6b7280" fontWeight="500">
        The full engineering lifecycle — not just the code step
      </text>
    </svg>
  );
}

function CleanCodeSVG() {
  return (
    <svg viewBox="0 0 320 140" className="w-full h-full" aria-hidden="true">
      {/* Code editor frame */}
      <rect x="20" y="10" width="280" height="120" rx="10" fill="#0f172a" />
      <rect x="20" y="10" width="280" height="22" rx="10" fill="#1e293b" />
      <circle cx="38" cy="21" r="4" fill="#ef4444" />
      <circle cx="52" cy="21" r="4" fill="#f5a623" />
      <circle cx="66" cy="21" r="4" fill="#22c55e" />
      {/* Code lines */}
      <text x="30" y="52" fontSize="9" fontFamily="monospace" fill="#64748b">// Thiravugal teaches you to write THIS:</text>
      <text x="30" y="67" fontSize="9" fontFamily="monospace" fill="#a855f7">class </text>
      <text x="60" y="67" fontSize="9" fontFamily="monospace" fill="#29abe2">OrderService </text>
      <text x="122" y="67" fontSize="9" fontFamily="monospace" fill="#e2e8f0">{"{"}</text>
      <text x="40" y="81" fontSize="9" fontFamily="monospace" fill="#22c55e">  async </text>
      <text x="80" y="81" fontSize="9" fontFamily="monospace" fill="#f5a623">placeOrder</text>
      <text x="138" y="81" fontSize="9" fontFamily="monospace" fill="#e2e8f0">(userId, items) {"{"}</text>
      <text x="50" y="95" fontSize="9" fontFamily="monospace" fill="#64748b">    // validate → reserve → charge → notify</text>
      <text x="40" y="109" fontSize="9" fontFamily="monospace" fill="#e2e8f0">  {"}"}</text>
      <text x="30" y="123" fontSize="9" fontFamily="monospace" fill="#e2e8f0">{"}"}</text>
    </svg>
  );
}

/* ─── Main component ─── */

const cards = [
  {
    title: "Architect Solutions, Not Just Code",
    desc: "Every problem starts with a whiteboard, not a keyboard. You'll learn to break down complex systems into services, define data flows, think about scale — before writing a single line.",
    illustration: <ArchitectureSVG />,
    color: "#1a237e",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    points: [
      "High-Level & Low-Level Design (HLD / LLD)",
      "Trade-off analysis: SQL vs NoSQL, REST vs gRPC",
      "Scalability, caching, load balancing strategies",
      "Microservices vs monolith — when and why",
    ],
  },
  {
    title: "Build AI-Native Systems",
    desc: "AI isn't a feature you bolt on at the end. We train you to design applications where AI is at the core — from choosing the right model to orchestrating agents and RAG pipelines.",
    illustration: <AIEcosystemSVG />,
    color: "#a855f7",
    bg: "bg-purple-50",
    border: "border-purple-100",
    points: [
      "Design AI-first application architectures",
      "Orchestrate LLMs, RAG, Agents & MCP",
      "Evaluate, fine-tune, and deploy models",
      "Build responsible, production-grade AI",
    ],
  },
];

const approach = [
  {
    emoji: "🧭",
    title: "Start with User Needs",
    desc: "Before designing anything, understand who uses it, what they struggle with, and what outcome they actually need. Engineering begins with empathy.",
    illustration: <UserFlowSVG />,
    color: "#f5a623",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    emoji: "⚙️",
    title: "Write Code that Lasts",
    desc: "Clean architecture, SOLID principles, design patterns, and code reviews — you'll write code the way senior engineers at top companies expect to see it.",
    illustration: <CleanCodeSVG />,
    color: "#22c55e",
    bg: "bg-green-50",
    border: "border-green-100",
  },
];

export default function TeachingApproach() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="section-tag mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            How We Teach
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Engineering is More Than{" "}
            <span className="gradient-text">Writing Code</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We train you to think like a Staff Engineer — someone who{" "}
            <strong className="text-[#1a237e]">designs systems</strong>,{" "}
            <strong className="text-[#a855f7]">engineers AI solutions</strong>, and{" "}
            <strong className="text-[#22c55e]">ships production software</strong>{" "}
            that real users depend on.
          </p>
        </div>

        {/* Two large illustrated cards */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-5 sm:gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`${card.bg} border ${card.border} rounded-2xl sm:rounded-3xl overflow-hidden`}
            >
              {/* Illustration panel */}
              <div className="px-6 pt-6 pb-2 h-44 sm:h-52">
                {card.illustration}
              </div>

              {/* Content */}
              <div className="px-5 sm:px-7 pb-6 sm:pb-8">
                <h3
                  className="font-display font-bold text-xl sm:text-2xl mb-2"
                  style={{ color: card.color }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  {card.desc}
                </p>
                <div className="space-y-2">
                  {card.points.map((p) => (
                    <div key={p} className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: card.color }}
                      />
                      <span className="text-gray-700 text-sm">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Two lower illustrated cards */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-14">
          {approach.map((item) => (
            <div
              key={item.title}
              className={`${item.bg} border ${item.border} rounded-2xl sm:rounded-3xl overflow-hidden`}
            >
              {/* Illustration */}
              <div className="px-6 pt-5 pb-1 h-36 sm:h-44">
                {item.illustration}
              </div>

              {/* Content */}
              <div className="px-5 sm:px-7 pb-6 sm:pb-8">
                <h3
                  className="font-display font-bold text-lg sm:text-xl mb-2"
                  style={{ color: item.color }}
                >
                  {item.emoji} {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom principle strip */}
        <div className="bg-gradient-to-r from-[#1a237e] to-[#29abe2] rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center">
          <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-3">
            Our Core Teaching Principles
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-5">
            {[
              "Architecture Before Code",
              "User Needs First",
              "AI-Native Thinking",
              "Systems Over Features",
              "Production Mindset",
              "Build to Scale",
              "Engineer Communication",
              "Responsible AI Design",
            ].map((p) => (
              <span
                key={p}
                className="bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full"
              >
                {p}
              </span>
            ))}
          </div>
          <a href="#contact" className="btn-gold inline-flex">
            Start Learning the Right Way
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

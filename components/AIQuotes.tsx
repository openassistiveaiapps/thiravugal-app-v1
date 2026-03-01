"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  {
    text: "AI is probably the most important thing humanity has ever worked on. I think of it as something more profound than electricity or fire.",
    author: "Sundar Pichai",
    role: "CEO, Google & Alphabet",
    initials: "SP",
    color: "#4285F4",
    category: "AI Vision",
  },
  {
    text: "AI is the new electricity. Just as 100 years ago electricity transformed industry after industry, AI will now do the same.",
    author: "Andrew Ng",
    role: "Co-Founder, Coursera & Google Brain",
    initials: "AN",
    color: "#f5a623",
    category: "AI Future",
  },
  {
    text: "The companies that don't embrace AI will be left behind. Every developer needs to understand how to work with and build on top of AI.",
    author: "Satya Nadella",
    role: "CEO, Microsoft",
    initials: "SN",
    color: "#00a4ef",
    category: "Industry Impact",
  },
  {
    text: "In the age of AI, the most important skills are not just coding — they are problem formulation, systems thinking, and knowing what to build.",
    author: "Jensen Huang",
    role: "CEO, NVIDIA",
    initials: "JH",
    color: "#76b900",
    category: "Skills of Tomorrow",
  },
  {
    text: "The future belongs to those who learn, unlearn, and relearn. AI is not a threat to jobs — a lack of AI skills is.",
    author: "Alvin Toffler",
    role: "Futurist & Author",
    initials: "AT",
    color: "#a855f7",
    category: "Learning Mindset",
  },
  {
    text: "We are at the beginning of a technological revolution. AI will be as transformative as the internet — and engineers who understand it will lead the world.",
    author: "Sam Altman",
    role: "CEO, OpenAI",
    initials: "SA",
    color: "#10b981",
    category: "AI Revolution",
  },
];

// AI visual SVG illustrations
const AIIllustration = ({ type }: { type: number }) => {
  if (type === 0) return (
    // Neural network nodes
    <svg viewBox="0 0 200 160" className="w-full h-full opacity-90" fill="none">
      {/* Connections */}
      {[[40,40,100,40],[40,80,100,40],[40,80,100,80],[40,120,100,80],[40,120,100,120],
        [100,40,160,60],[100,80,160,60],[100,80,160,100],[100,120,160,100]].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(41,171,226,0.3)" strokeWidth="1.5" />
      ))}
      {/* Input layer */}
      {[40,80,120].map((y,i) => (
        <circle key={i} cx="40" cy={y} r="10" fill="rgba(26,35,126,0.8)" stroke="#29abe2" strokeWidth="1.5"/>
      ))}
      {/* Hidden layer */}
      {[40,80,120].map((y,i) => (
        <circle key={i} cx="100" cy={y} r="12" fill="rgba(41,171,226,0.7)" stroke="white" strokeWidth="1.5"/>
      ))}
      {/* Output layer */}
      {[60,100].map((y,i) => (
        <circle key={i} cx="160" cy={y} r="14" fill="rgba(168,85,247,0.8)" stroke="white" strokeWidth="2"/>
      ))}
      <text x="100" y="148" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">Neural Network</text>
    </svg>
  );

  if (type === 1) return (
    // Brain circuit
    <svg viewBox="0 0 200 160" className="w-full h-full opacity-90" fill="none">
      <ellipse cx="90" cy="75" rx="55" ry="45" stroke="#29abe2" strokeWidth="1.5" fill="rgba(26,35,126,0.2)"/>
      <ellipse cx="130" cy="80" rx="35" ry="40" stroke="#a855f7" strokeWidth="1.5" fill="rgba(168,85,247,0.1)"/>
      {/* Circuit lines */}
      {[[40,60,160,60],[40,80,160,80],[40,100,160,100]].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(245,166,35,0.3)" strokeWidth="1" strokeDasharray="4,4"/>
      ))}
      {[60,90,120,150].map((x,i) => (
        <circle key={i} cx={x} cy={60+(i%3)*20} r="4" fill="#f5a623" opacity="0.8"/>
      ))}
      <text x="100" y="148" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">AI Brain</text>
    </svg>
  );

  // Data flow
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full opacity-90" fill="none">
      {[0,1,2,3].map(i => (
        <rect key={i} x={20+i*42} y="55" width="30" height="50" rx="6"
          fill={`rgba(${i===0?'26,35,126':i===1?'41,171,226':i===2?'168,85,247':'34,197,94'},0.7)`}
          stroke="white" strokeWidth="1" strokeOpacity="0.3"/>
      ))}
      {[0,1,2].map(i => (
        <path key={i} d={`M${50+i*42},80 L${62+i*42},80`} stroke="white" strokeWidth="1.5"
          strokeOpacity="0.5" markerEnd="url(#arr)"/>
      ))}
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="white" opacity="0.5"/>
        </marker>
      </defs>
      <text x="100" y="125" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">Data Pipeline</text>
    </svg>
  );
};

export default function AIQuotes() {
  const [active, setActive] = useState(0);
  const prev = () => setActive(c => (c - 1 + quotes.length) % quotes.length);
  const next = () => setActive(c => (c + 1) % quotes.length);

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#29abe2]/8 rounded-full blur-3xl" />
      <div className="absolute inset-0 pattern-overlay" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <span>🌐</span> World Leaders on AI
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            The AI Era Is{" "}
            <span className="bg-gradient-to-r from-purple-400 to-[#29abe2] bg-clip-text text-transparent">
              Already Here
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-xl max-w-2xl mx-auto">
            The world&apos;s top technology leaders agree — AI literacy is the most
            critical skill of this generation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-10 sm:mb-16">
          {/* AI Illustration panel — hidden on mobile */}
          <div className="hidden md:block relative">
            <div className="bg-gray-900 border border-white/10 rounded-3xl p-6 sm:p-8 aspect-square flex flex-col items-center justify-center relative overflow-hidden">
              {/* Rotating ring */}
              <div className="absolute inset-6 rounded-full border border-[#29abe2]/20 animate-spin"
                style={{ animationDuration: "20s" }} />
              <div className="absolute inset-12 rounded-full border border-purple-500/15 animate-spin"
                style={{ animationDuration: "15s", animationDirection: "reverse" }} />

              {/* Central glow */}
              <div className="relative z-10 w-40 h-40 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/40 to-[#29abe2]/40 blur-xl" />
                <div className="relative w-full h-full">
                  <AIIllustration type={active % 3} />
                </div>
              </div>

              {/* Category chip */}
              <div className="z-10 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-white/70 text-sm font-semibold">
                {quotes[active].category}
              </div>

              {/* Floating metric chips */}
              {[
                { label: "Generative AI", val: "🚀", pos: "top-6 left-6" },
                { label: "LLMs", val: "🧠", pos: "top-6 right-6" },
                { label: "Neural Nets", val: "⚡", pos: "bottom-6 left-6" },
                { label: "ML Ops", val: "⚙️", pos: "bottom-6 right-6" },
              ].map(c => (
                <div key={c.label}
                  className={`absolute ${c.pos} bg-gray-800/80 border border-white/10 rounded-xl px-3 py-2 text-xs text-white/80 font-semibold flex items-center gap-1.5`}>
                  <span>{c.val}</span>{c.label}
                </div>
              ))}
            </div>
          </div>

          {/* Quote panel */}
          <div>
            <div className="bg-gray-900 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />

              {/* Author avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white shrink-0"
                  style={{ background: `linear-gradient(135deg, ${quotes[active].color}, ${quotes[active].color}88)` }}
                >
                  {quotes[active].initials}
                </div>
                <div>
                  <div className="text-white font-display font-bold text-lg leading-tight">
                    {quotes[active].author}
                  </div>
                  <div className="text-gray-400 text-sm mt-0.5">{quotes[active].role}</div>
                  <div
                    className="inline-block text-xs font-bold px-2 py-0.5 rounded-full mt-1"
                    style={{ background: `${quotes[active].color}22`, color: quotes[active].color }}
                  >
                    {quotes[active].category}
                  </div>
                </div>
              </div>

              <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed italic mb-6 sm:mb-8">
                &ldquo;{quotes[active].text}&rdquo;
              </p>

              {/* Nav */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  {quotes.map((_, i) => (
                    <button key={i} onClick={() => setActive(i)}
                      className={`h-1.5 rounded-full transition-all ${i === active ? "w-6" : "w-1.5 bg-white/20"}`}
                      style={i === active ? { background: quotes[active].color } : {}} />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={prev}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-white/30 hover:text-white transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={next}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-white/30 hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick author pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {quotes.map((q, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                    i === active
                      ? "text-white border-transparent"
                      : "text-gray-500 border-white/10 hover:text-gray-300"
                  }`}
                  style={i === active ? { background: q.color, borderColor: q.color } : {}}
                >
                  {q.author.split(" ")[0]} {q.author.split(" ").slice(-1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom stat bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {[
            { icon: "🌍", stat: "85M+", label: "New AI jobs by 2025", color: "#29abe2" },
            { icon: "📈", stat: "40%", label: "Higher salaries for AI skills", color: "#f5a623" },
            { icon: "🏢", stat: "97%", label: "Companies investing in AI", color: "#a855f7" },
            { icon: "⚡", stat: "3x", label: "Faster growth with AI skills", color: "#22c55e" },
          ].map(s => (
            <div key={s.label} className="bg-gray-900 border border-white/10 rounded-2xl p-5 text-center">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="font-display font-bold text-2xl text-white mb-1">{s.stat}</div>
              <div className="text-gray-500 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, ArrowRight, Zap, Star, Clock, Users } from "lucide-react";

export default function WorkshopModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const dismiss = () => setVisible(false);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && dismiss()}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-h-[92dvh] flex flex-col"
        style={{
          background: "linear-gradient(160deg, #0a0a1a 0%, #0f0c2e 35%, #0d2346 70%, #0a1a0a 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* animated rainbow top bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 workshop-shimmer" />

        {/* glow orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #29abe2, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f5a623, transparent 70%)", transform: "translate(-30%, 30%)" }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #e91e8c, transparent 70%)", transform: "translate(-50%, -50%)" }} />

        {/* close */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative p-5 sm:p-7 overflow-y-auto flex-1">

          {/* live badge */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
              style={{ background: "rgba(233,30,140,.2)", color: "#f472b6", border: "1px solid rgba(233,30,140,.4)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 workshop-blink" />
              REGISTRATIONS OPEN
            </span>
            <span
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold"
              style={{ background: "rgba(245,166,35,.15)", color: "#f5a623", border: "1px solid rgba(245,166,35,.35)" }}
            >
              🔥 Early Bird
            </span>
          </div>

          {/* headline */}
          <div className="mb-1">
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "#29abe2" }}
            >
              Thiravugal Presents
            </span>
          </div>
          <h2 className="font-display font-extrabold leading-tight mb-2" style={{ fontSize: "clamp(20px, 5vw, 28px)" }}>
            <span style={{
              background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 40%, #29abe2 80%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              AI &amp; ML Workshop
            </span>
            <br />
            <span style={{
              background: "linear-gradient(135deg, #f5a623 0%, #e91e8c 60%, #a78bfa 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              &amp; Bootcamp
            </span>
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Master the full AI stack in 2 intensive days — LLMs, RAG, AI Agents, and{" "}
            <strong className="text-white/90">ship your own AI product before you leave.</strong>
          </p>

          {/* stats */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { icon: Clock,  value: "16", label: "Hours", color: "#29abe2" },
              { icon: Star,   value: "2",  label: "Days",  color: "#a78bfa" },
              { icon: Users,  value: "25", label: "Seats", color: "#f5a623" },
            ].map(({ icon: Icon, value, label, color }) => (
              <div
                key={label}
                className="flex flex-col items-center py-3 rounded-xl"
                style={{ background: `${color}12`, border: `1px solid ${color}35` }}
              >
                <Icon className="w-4 h-4 mb-1" style={{ color }} />
                <span className="text-white font-bold text-xl leading-none">{value}</span>
                <span className="text-white/50 text-xs mt-0.5">{label}</span>
              </div>
            ))}
          </div>

          {/* day pills */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="rounded-xl p-3" style={{ background: "rgba(26,35,126,.5)", border: "1px solid rgba(167,139,250,.25)" }}>
              <div className="flex items-center gap-1.5 mb-2">
                <Zap className="w-3.5 h-3.5" style={{ color: "#a78bfa" }} />
                <span className="text-xs font-bold" style={{ color: "#a78bfa" }}>Day 1 · Foundations</span>
              </div>
              {["ML Fundamentals", "LLMs & Prompting", "Prompt Eng Lab", "RAG Pipeline Lab"].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-white/65 text-xs py-0.5">
                  <span className="w-1 h-1 rounded-full bg-purple-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
            <div className="rounded-xl p-3" style={{ background: "rgba(41,171,226,.12)", border: "1px solid rgba(41,171,226,.3)" }}>
              <div className="flex items-center gap-1.5 mb-2">
                <Zap className="w-3.5 h-3.5" style={{ color: "#29abe2" }} />
                <span className="text-xs font-bold" style={{ color: "#29abe2" }}>Day 2 · Build</span>
              </div>
              {["Agentic AI", "Agent Lab", "Capstone Sprint", "Demo Day + Q&A"].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-white/65 text-xs py-0.5">
                  <span className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* perks strip */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {["🎓 Certificate", "📦 Lab Code", "🤝 Mentor Support", "💻 Max 25 seats"].map((p) => (
              <span
                key={p}
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{ background: "rgba(255,255,255,.06)", color: "rgba(255,255,255,.65)", border: "1px solid rgba(255,255,255,.1)" }}
              >
                {p}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <a
              href="/#contact"
              onClick={dismiss}
              className="flex-1 flex items-center justify-center gap-2 py-3 sm:py-3.5 px-5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #f5a623 0%, #e91e8c 50%, #a78bfa 100%)",
                boxShadow: "0 6px 24px rgba(233,30,140,.4)",
              }}
            >
              Register Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/workshop"
              onClick={dismiss}
              className="flex-1 flex items-center justify-center gap-2 py-3 sm:py-3.5 px-5 rounded-xl font-semibold text-sm text-white/75 hover:text-white transition border border-white/15 hover:border-white/30"
            >
              View Full Agenda
            </Link>
          </div>

          <button
            onClick={dismiss}
            className="w-full mt-3 text-xs text-white/25 hover:text-white/45 transition"
          >
            Maybe later
          </button>
        </div>

      </div>
    </div>
  );
}

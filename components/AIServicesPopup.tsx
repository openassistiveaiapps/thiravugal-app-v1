"use client";

import { useEffect, useState } from "react";
import { X, Bot, MessageSquare, Globe, ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    desc: "Autonomous agents that reason, plan, and execute complex tasks end-to-end.",
    color: "#29abe2",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    desc: "Intelligent assistants trained on your business data — always on, always helpful.",
    color: "#f5a623",
  },
  {
    icon: Globe,
    title: "Websites & Apps",
    desc: "Modern, fast, AI-integrated web products built for real-world impact.",
    color: "#22c55e",
  },
];

export default function AIServicesPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("ai_popup_dismissed")) return;
    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("ai_popup_dismissed", "1");
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
      onClick={(e) => e.target === e.currentTarget && dismiss()}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
        style={{ background: "linear-gradient(135deg, #0d1b4b 0%, #1a237e 60%, #0d2f4f 100%)" }}
      >
        {/* Glow accent top */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(90deg, #29abe2, #f5a623, #22c55e)" }}
        />

        {/* Sparkle bg decoration */}
        <div className="absolute top-6 right-8 opacity-10">
          <Sparkles className="w-24 h-24 text-white" />
        </div>

        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-7 sm:p-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-5"
            style={{ background: "rgba(41,171,226,0.15)", color: "#29abe2", border: "1px solid rgba(41,171,226,0.3)" }}>
            <Sparkles className="w-3 h-3" />
            AI-First Approach
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 leading-tight">
            We Build{" "}
            <span style={{ background: "linear-gradient(90deg, #29abe2, #f5a623)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              AI-Powered
            </span>{" "}
            Products
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-2">
            Beyond training, Thiravugal designs and builds intelligent software —
            from autonomous AI Agents to smart Chatbots and full-featured Websites.
          </p>
          <p className="text-white/90 text-sm sm:text-base font-medium leading-relaxed mb-6"
            style={{ color: "#f5a623" }}>
            We make your business simple using AI-based solutions.
          </p>

          {/* Service cards */}
          <div className="space-y-3 mb-7">
            {services.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-xl p-3"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}20` }}>
                  <Icon className="w-4.5 h-4.5" style={{ color }} />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{title}</div>
                  <div className="text-white/55 text-xs leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              onClick={dismiss}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm text-white transition-all"
              style={{ background: "linear-gradient(90deg, #29abe2, #1a78a8)" }}
            >
              Submit an Enquiry
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={dismiss}
              className="flex-1 py-3 px-5 rounded-xl font-semibold text-sm text-white/60 hover:text-white/90 transition border border-white/10 hover:border-white/20"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

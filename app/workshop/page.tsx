"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FestivalBanner from "@/components/FestivalBanner";
import Footer from "@/components/Footer";

// ─── Data ─────────────────────────────────────────────────────────────────────

const days = [
  {
    label: "Day 1",
    theme: "Foundations",
    color: "#1a237e",
    sessions: [
      { time: "9:00 – 10:30", title: "ML Fundamentals", desc: "How models learn, supervised vs unsupervised, evaluation metrics, the AI landscape today" },
      { time: "10:45 – 12:30", title: "LLMs In Depth", desc: "Transformers, tokenisation, context windows, temperature, system prompts, model selection" },
      { time: "1:30 – 3:00",  title: "Prompt Engineering Lab", desc: "Zero-shot, few-shot, chain-of-thought, structured output, prompt patterns that work" },
      { time: "3:15 – 5:00",  title: "RAG Pipeline Lab", desc: "Embeddings, vector search, retrieval strategies, grounding LLM responses with your data" },
    ],
  },
  {
    label: "Day 2",
    theme: "Build",
    color: "#29abe2",
    sessions: [
      { time: "9:00 – 10:30", title: "Agentic AI", desc: "Tool use, function calling, memory, planning loops, and multi-agent orchestration" },
      { time: "10:45 – 12:30", title: "Agent Lab", desc: "Build a working agent with real tools — web search, code execution, and external API calls" },
      { time: "1:30 – 3:30",  title: "Capstone Build Sprint", desc: "Design and build your own AI product or agent end to end with guided support" },
      { time: "3:45 – 5:00",  title: "Demo Day + Q&A", desc: "Present your project, receive peer and instructor feedback, discuss deployment paths" },
    ],
  },
];

const tools = [
  { name: "Python",           cat: "lang"  },
  { name: "OpenAI API",       cat: "llm"   },
  { name: "Anthropic Claude", cat: "llm"   },
  { name: "LangChain",        cat: "llm"   },
  { name: "Hugging Face",     cat: "llm"   },
  { name: "ChromaDB",         cat: "data"  },
  { name: "FAISS",            cat: "data"  },
  { name: "FastAPI",          cat: "infra" },
  { name: "Streamlit",        cat: "infra" },
  { name: "Docker Basics",    cat: "infra" },
  { name: "Jupyter",          cat: "infra" },
];

const catStyle: Record<string, { bg: string; text: string; dot: string }> = {
  lang:  { bg: "#e8eaf6", text: "#1a237e", dot: "#1a237e" },
  llm:   { bg: "#e3f4fd", text: "#0d6fa3", dot: "#29abe2" },
  data:  { bg: "#e8f9f0", text: "#166534", dot: "#22c55e" },
  infra: { bg: "#fef9ec", text: "#92400e", dot: "#f5a623" },
};

const outcomes = [
  "A working AI product or agent you built yourself — ready to demo or deploy",
  "Hands-on experience with LLMs, RAG pipelines, vector databases, and tool use",
  "The ability to design, prompt-engineer, and evaluate AI systems end to end",
  "A personal framework for taking any idea from concept to AI-powered prototype",
];

const audience = [
  { icon: "💻", label: "Software Engineers", sub: "adding AI to their stack" },
  { icon: "🚀", label: "Builders & Founders", sub: "launching AI-first products" },
  { icon: "📊", label: "Data Analysts", sub: "moving into ML engineering" },
  { icon: "🏗️", label: "Tech Leads", sub: "evaluating AI adoption" },
];

const perks = [
  { icon: "👥", text: "Max 25 participants" },
  { icon: "💻", text: "Bring your laptop" },
  { icon: "🎓", text: "Certificate of completion" },
  { icon: "📦", text: "All lab code included" },
  { icon: "🤝", text: "Post-workshop support" },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function WorkshopPage() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <FestivalBanner />
        <Navbar />
      </div>

      <main className="pt-16">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section
          style={{
            background: "linear-gradient(135deg, #0d1554 0%, #1a237e 50%, #0d3060 100%)",
            padding: "80px 24px 72px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* dot mesh */}
          <div
            style={{
              position: "absolute", inset: 0, opacity: 0.08,
              backgroundImage: "radial-gradient(circle, #29abe2 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
            {/* badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(41,171,226,.2)", border: "1px solid rgba(41,171,226,.4)",
              borderRadius: 20, padding: "6px 16px", marginBottom: 28,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#29abe2", display: "inline-block" }} />
              <span style={{ color: "#29abe2", fontSize: 12, fontWeight: 600, letterSpacing: ".1em" }}>
                2 DAYS · 16 HOURS · 100% HANDS-ON
              </span>
            </div>

            <h1 style={{
              fontSize: "clamp(34px, 6vw, 58px)", fontWeight: 800, color: "#ffffff",
              lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-.02em",
              fontFamily: "var(--font-poppins), sans-serif",
            }}>
              Build AI Products &<br />
              <span style={{
                background: "linear-gradient(135deg, #29abe2 0%, #f5a623 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Agents From Scratch
              </span>
            </h1>

            <p style={{ fontSize: 18, color: "#b3d9f0", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 }}>
              A focused two-day workshop where you master the full AI stack — and ship a working product before you leave.
            </p>

            {/* stat chips */}
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 44 }}>
              {[["16", "hours of training"], ["2", "full days"], ["25", "max seats"]].map(([num, lbl]) => (
                <div key={lbl} style={{
                  background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.14)",
                  borderRadius: 12, padding: "18px 28px", minWidth: 110,
                }}>
                  <div style={{ fontSize: 36, fontWeight: 800, color: "#ffffff", lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: 12, color: "#7ab8d8", marginTop: 4 }}>{lbl}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#register" style={{
                background: "linear-gradient(135deg, #29abe2, #1a237e)",
                color: "#fff", padding: "14px 32px", borderRadius: 10,
                fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block",
              }}>
                Reserve Your Seat →
              </a>
              <a href="#agenda" style={{
                background: "transparent", color: "#b3d9f0", padding: "14px 32px",
                borderRadius: 10, fontWeight: 500, fontSize: 15, textDecoration: "none",
                border: "1px solid rgba(179,217,240,.3)", display: "inline-block",
              }}>
                View Agenda
              </a>
            </div>
          </div>
        </section>

        {/* ── OUTCOMES ──────────────────────────────────────────────────────── */}
        <section style={{
          background: "#f0fdf4", padding: "60px 24px",
          borderTop: "1px solid #bbf7d0", borderBottom: "1px solid #bbf7d0",
        }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#22c55e", letterSpacing: ".1em", marginBottom: 10 }}>
              WHAT YOU WALK AWAY WITH
            </p>
            <h2 style={{
              fontSize: 26, fontWeight: 700, color: "#064e3b", marginBottom: 28, lineHeight: 1.3,
              fontFamily: "var(--font-poppins), sans-serif",
            }}>
              Leave with a product, not just a certificate
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
              {outcomes.map((o, i) => (
                <div key={i} style={{
                  display: "flex", gap: 12, alignItems: "flex-start",
                  background: "#fff", border: "1px solid #d1fae5", borderRadius: 10, padding: "14px 16px",
                }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: "50%", background: "#22c55e",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1,
                  }}>
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                      <path d="M1 4.5L4 7.5L10 1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, color: "#065f46", lineHeight: 1.55 }}>{o}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AGENDA ────────────────────────────────────────────────────────── */}
        <section id="agenda" style={{ padding: "72px 24px", maxWidth: 820, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#29abe2", letterSpacing: ".1em", marginBottom: 10 }}>
            FULL AGENDA
          </p>
          <h2 style={{
            fontSize: 26, fontWeight: 700, marginBottom: 8, color: "#111827",
            fontFamily: "var(--font-poppins), sans-serif",
          }}>
            Two days, fully packed
          </h2>
          <p style={{ fontSize: 15, color: "#6b7280", marginBottom: 32 }}>
            Each session alternates between concept and code — no passive slides.
          </p>

          {/* Day tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
            {days.map((d, i) => (
              <button
                key={i}
                onClick={() => setActiveDay(i)}
                style={{
                  padding: "10px 24px", borderRadius: 8, fontWeight: 600, fontSize: 14,
                  cursor: "pointer", border: "none", transition: "all .15s",
                  background: activeDay === i ? days[i].color : "#f3f4f6",
                  color: activeDay === i ? "#fff" : "#6b7280",
                }}
              >
                {d.label} · {d.theme}
              </button>
            ))}
          </div>

          {/* Sessions */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {days[activeDay].sessions.map((s, i) => (
              <div key={i} style={{
                display: "flex", gap: 18, background: "#fff",
                border: "1px solid #e5e7eb", borderRadius: 12, padding: "18px 22px", alignItems: "flex-start",
              }}>
                <div style={{ minWidth: 100 }}>
                  <span style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500, whiteSpace: "nowrap" }}>{s.time}</span>
                </div>
                <div style={{ borderLeft: `3px solid ${days[activeDay].color}`, paddingLeft: 16 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#111827", marginBottom: 4 }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.55 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TOOLS & TECH ──────────────────────────────────────────────────── */}
        <section style={{
          background: "#f9fafb", borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb", padding: "60px 24px",
        }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#29abe2", letterSpacing: ".1em", marginBottom: 10 }}>
              TOOLS & TECH
            </p>
            <h2 style={{
              fontSize: 22, fontWeight: 700, marginBottom: 6, color: "#111827",
              fontFamily: "var(--font-poppins), sans-serif",
            }}>
              Everything you&apos;ll use in the labs
            </h2>
            <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 28 }}>
              Industry-standard stack — the same tools used in production AI teams.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {tools.map((t) => {
                const c = catStyle[t.cat];
                return (
                  <span key={t.name} style={{
                    background: c.bg, color: c.text, border: `1px solid ${c.dot}40`,
                    borderRadius: 20, padding: "6px 14px", fontSize: 13, fontWeight: 500,
                    display: "inline-flex", alignItems: "center", gap: 6,
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: c.dot, display: "inline-block" }} />
                    {t.name}
                  </span>
                );
              })}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
              {([
                ["lang",  "Language"],
                ["llm",   "LLM / Agents"],
                ["data",  "Data / Vector"],
                ["infra", "Infra / UI"],
              ] as [string, string][]).map(([cat, label]) => (
                <span key={cat} style={{
                  background: catStyle[cat].bg, color: catStyle[cat].text,
                  padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 500,
                }}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO IS THIS FOR ───────────────────────────────────────────────── */}
        <section style={{ padding: "72px 24px", maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#29abe2", letterSpacing: ".1em", marginBottom: 10 }}>
            WHO SHOULD ATTEND
          </p>
          <h2 style={{
            fontSize: 22, fontWeight: 700, marginBottom: 28, color: "#111827",
            fontFamily: "var(--font-poppins), sans-serif",
          }}>
            Built for people who build things
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 14 }}>
            {audience.map((a) => (
              <div key={a.label} style={{
                background: "#fff", border: "1px solid #e5e7eb",
                borderRadius: 12, padding: "22px 16px", textAlign: "center",
                boxShadow: "0 2px 8px rgba(26,35,126,.05)",
              }}>
                <div style={{ fontSize: 30, marginBottom: 12 }}>{a.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1a237e", marginBottom: 4 }}>{a.label}</div>
                <div style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.4 }}>{a.sub}</div>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 20, background: "#e3f4fd", borderRadius: 10,
            padding: "14px 18px", display: "flex", gap: 10, alignItems: "center",
            border: "1px solid #b3d9f0",
          }}>
            <span style={{ fontSize: 16 }}>📋</span>
            <span style={{ fontSize: 13, color: "#0d3060" }}>
              <strong>Prerequisites:</strong> Basic Python familiarity · No prior ML or AI experience needed
            </span>
          </div>
        </section>

        {/* ── PERKS ─────────────────────────────────────────────────────────── */}
        <section style={{
          background: "linear-gradient(135deg, #0d1554 0%, #1a237e 100%)",
          padding: "60px 24px",
        }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{
              fontSize: 22, fontWeight: 700, color: "#e8eaf6", marginBottom: 8,
              fontFamily: "var(--font-poppins), sans-serif",
            }}>
              Everything included
            </h2>
            <p style={{ fontSize: 14, color: "#7ab8d8", marginBottom: 36 }}>Small cohort, full support, zero fluff</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
              {perks.map((p) => (
                <div key={p.text} style={{
                  background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.14)",
                  borderRadius: 10, padding: "14px 20px", display: "flex", alignItems: "center", gap: 10,
                }}>
                  <span style={{ fontSize: 20 }}>{p.icon}</span>
                  <span style={{ fontSize: 13, color: "#b3d9f0", fontWeight: 500 }}>{p.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA / REGISTER ────────────────────────────────────────────────── */}
        <section id="register" style={{ padding: "80px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 540, margin: "0 auto" }}>
            <div style={{
              display: "inline-block", background: "#fef9ec", border: "1px solid #fde68a",
              borderRadius: 20, padding: "5px 16px", marginBottom: 22,
            }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#92400e" }}>🔥 Early bird pricing — limited seats</span>
            </div>
            <h2 style={{
              fontSize: 32, fontWeight: 800, color: "#111827", lineHeight: 1.2, marginBottom: 14,
              fontFamily: "var(--font-poppins), sans-serif",
            }}>
              Ready to build your first<br />AI product?
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", marginBottom: 36, lineHeight: 1.6 }}>
              Seats fill up fast. Register now to secure your spot in the next cohort.
            </p>
            <a
              href="/#contact"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #f5a623 0%, #fbbf24 100%)",
                color: "#fff", padding: "16px 44px", borderRadius: 12,
                fontWeight: 700, fontSize: 16, textDecoration: "none", marginBottom: 18,
                boxShadow: "0 4px 24px rgba(245,166,35,.35)",
              }}
            >
              Register Now →
            </a>
            <p style={{ fontSize: 13, color: "#9ca3af" }}>
              Questions?{" "}
              <Link href="/#contact" style={{ color: "#29abe2", textDecoration: "none", fontWeight: 500 }}>
                Contact us
              </Link>{" "}
              or DM on LinkedIn
            </p>
          </div>
        </section>

      </main>

      <Footer hideCta />
    </>
  );
}

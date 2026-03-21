"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────────
   useInView – fires once when element enters viewport
───────────────────────────────────────────── */
function useInView(threshold = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─────────────────────────────────────────────
   ANIMATION COMPONENTS
───────────────────────────────────────────── */

function AnimLLM({ active }: { active: boolean }) {
  return (
    <div className="aic-anim-box">
      {/* nodes */}
      {[0,1,2,3,4,5].map(i => (
        <div key={i} className="aic-node" style={{
          left: `${[15,15,50,50,82,82][i]}%`,
          top:  `${[25,65,15,75,25,65][i]}%`,
          animationDelay: `${i*0.18}s`,
          opacity: active ? 1 : 0,
          transform: active ? "scale(1)" : "scale(0)",
          transition: `opacity 0.4s ${i*0.1}s, transform 0.4s ${i*0.1}s`,
        }} />
      ))}
      {/* edges */}
      <svg className="aic-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[[0,2],[1,3],[0,3],[1,2],[2,4],[3,5],[2,5],[3,4]].map(([a,b],i) => {
          const xs=[15,15,50,50,82,82], ys=[25,65,15,75,25,65];
          return <line key={i} x1={xs[a]} y1={ys[a]} x2={xs[b]} y2={ys[b]}
            stroke="#29abe2" strokeWidth="0.8" strokeOpacity={active?0.35:0}
            style={{transition:`stroke-opacity 0.6s ${i*0.08}s`}} />;
        })}
      </svg>
      {/* travelling token */}
      {active && (
        <div className="aic-token" style={{animationPlayState: active ? "running" : "paused"}} />
      )}
      <span className="aic-label">Token prediction</span>
    </div>
  );
}

function AnimGenAI({ active }: { active: boolean }) {
  return (
    <div className="aic-anim-box" style={{overflow:"hidden"}}>
      <div className="aic-genai-center" style={{
        opacity: active?1:0, transform: active?"scale(1)":"scale(0.5)",
        transition:"opacity 0.5s, transform 0.5s"
      }}>
        <span style={{fontSize:28}}>✨</span>
      </div>
      {active && [0,1,2,3,4,5,6,7].map(i => (
        <div key={i} className="aic-spark" style={{
          "--angle": `${i*45}deg`,
          animationDelay: `${i*0.12}s`
        } as React.CSSProperties} />
      ))}
      <span className="aic-label">Generating content</span>
    </div>
  );
}

function AnimNLP({ active }: { active: boolean }) {
  const words = ["Customer","loved","the","new","product","design"];
  const colors = ["#6ee7b7","#6ee7b7","#94a3b8","#fbbf24","#34d399","#6ee7b7"];
  return (
    <div className="aic-anim-box" style={{flexDirection:"column", gap:6}}>
      <div style={{display:"flex", gap:5, flexWrap:"wrap", justifyContent:"center"}}>
        {words.map((w,i) => (
          <span key={w} className="aic-word" style={{
            background: active ? colors[i]+"22" : "transparent",
            color: active ? colors[i] : "#94a3b8",
            border: `1px solid ${active ? colors[i]+"66" : "#ffffff11"}`,
            animationDelay: `${i*0.15}s`,
            opacity: active ? 1 : 0.3,
            transition: `all 0.35s ${i*0.12}s`,
          }}>{w}</span>
        ))}
      </div>
      <div style={{display:"flex", gap:8, marginTop:4, opacity: active?1:0, transition:"opacity 0.5s 0.8s"}}>
        <span className="aic-tag" style={{background:"#34d39922"}}>😊 Positive</span>
        <span className="aic-tag" style={{background:"#fbbf2422"}}>Product</span>
      </div>
      <span className="aic-label">Sentiment + Entity</span>
    </div>
  );
}

function AnimRAG({ active }: { active: boolean }) {
  const steps = ["Query","Retrieve","Augment","Generate"];
  const icons = ["🔍","📚","🔗","✍️"];
  return (
    <div className="aic-anim-box" style={{flexDirection:"column", gap:4, width:"100%", padding:"0 8px"}}>
      {steps.map((s,i) => (
        <div key={s} className="aic-pipeline-step" style={{
          opacity: active ? 1 : 0,
          transform: active ? "translateX(0)" : "translateX(-20px)",
          transition: `all 0.35s ${i*0.18}s`,
        }}>
          <span style={{fontSize:14}}>{icons[i]}</span>
          <div className="aic-pipeline-bar" style={{
            width: active ? `${[60,90,75,85][i]}%` : "0%",
            transition: `width 0.5s ${0.2+i*0.18}s`,
            background: `hsl(${200+i*30}, 80%, 55%)`,
          }} />
          <span style={{fontSize:11, color:"#94a3b8", whiteSpace:"nowrap"}}>{s}</span>
        </div>
      ))}
    </div>
  );
}

function AnimPrompt({ active }: { active: boolean }) {
  return (
    <div className="aic-anim-box" style={{flexDirection:"column", gap:8}}>
      <div style={{display:"flex", alignItems:"center", gap:8, opacity: active?1:0, transition:"opacity 0.4s"}}>
        <div className="aic-prompt-box" style={{borderColor:"#fbbf24aa"}}>
          <span style={{fontSize:9, color:"#94a3b8"}}>Raw prompt</span>
          <span style={{fontSize:10, color:"#fbbf24"}}>Summarise this</span>
        </div>
        <div className={`aic-arrow ${active?"aic-arrow-active":""}`}>→</div>
        <div className="aic-prompt-box" style={{borderColor:"#34d39988", opacity: active?1:0, transition:"opacity 0.4s 0.5s"}}>
          <span style={{fontSize:9, color:"#94a3b8"}}>Optimised</span>
          <span style={{fontSize:10, color:"#34d399"}}>Summarise in 3 bullets</span>
        </div>
      </div>
      <span className="aic-label" style={{opacity: active?1:0, transition:"opacity 0.4s 0.7s"}}>Chain-of-thought</span>
    </div>
  );
}

function AnimAgents({ active }: { active: boolean }) {
  const steps = ["Observe","Think","Plan","Act"];
  return (
    <div className="aic-anim-box" style={{position:"relative"}}>
      <svg viewBox="0 0 100 100" style={{width:100, height:100}}>
        <circle cx="50" cy="50" r="34" fill="none" stroke="#29abe244" strokeWidth="1"
          strokeDasharray={active?"213":"0"} style={{transition:"stroke-dasharray 1s"}} />
        {steps.map((s,i) => {
          const angle = (i/4)*Math.PI*2 - Math.PI/2;
          const x = 50 + 34*Math.cos(angle);
          const y = 50 + 34*Math.sin(angle);
          return (
            <g key={s} style={{opacity: active?1:0, transition:`opacity 0.3s ${i*0.2}s`}}>
              <circle cx={x} cy={y} r="9" fill="#1a237e" stroke="#29abe2" strokeWidth="0.8" />
              <text x={x} y={y+1} textAnchor="middle" dominantBaseline="middle"
                fontSize="4" fill="#e2e8f0">{s}</text>
            </g>
          );
        })}
        <text x="50" y="50" textAnchor="middle" dominantBaseline="middle"
          fontSize="5" fill="#29abe2" opacity={active?1:0}
          style={{transition:"opacity 0.5s 0.8s"}}>AI</text>
        {active && (
          <circle r="3" fill="#f5a623">
            <animateMotion dur="3s" repeatCount="indefinite"
              path="M50,16 A34,34 0 1,1 49.9,16" />
          </circle>
        )}
      </svg>
    </div>
  );
}

function AnimCodingAgents({ active }: { active: boolean }) {
  const lines = ["$ analysing repo...", "> found 3 bugs", "fixing auth.ts:42", "✓ tests passing", "PR created ✓"];
  return (
    <div className="aic-anim-box" style={{alignItems:"flex-start", padding:"8px 12px"}}>
      <div className="aic-terminal">
        {lines.map((l,i) => (
          <div key={i} className="aic-code-line" style={{
            opacity: active ? 1 : 0,
            transition: `opacity 0.3s ${i*0.35}s`,
            color: i===4 ? "#34d399" : i===1 ? "#f87171" : "#e2e8f0",
          }}>{l}</div>
        ))}
      </div>
    </div>
  );
}

function AnimMultiModal({ active }: { active: boolean }) {
  const inputs = [
    { icon:"🖼️", label:"Image", color:"#818cf8" },
    { icon:"📝", label:"Text",  color:"#34d399" },
    { icon:"🎙️", label:"Audio", color:"#fbbf24" },
  ];
  return (
    <div className="aic-anim-box" style={{gap:6}}>
      <div style={{display:"flex", flexDirection:"column", gap:6}}>
        {inputs.map((inp,i) => (
          <div key={inp.label} className="aic-modal-input" style={{
            borderColor: inp.color+"66",
            opacity: active?1:0,
            transform: active?"translateX(0)":"translateX(-20px)",
            transition: `all 0.35s ${i*0.15}s`,
          }}>
            <span>{inp.icon}</span>
            <span style={{fontSize:10, color: inp.color}}>{inp.label}</span>
          </div>
        ))}
      </div>
      <div className="aic-arrow" style={{opacity: active?1:0, transition:"opacity 0.4s 0.5s", fontSize:20}}>→</div>
      <div className="aic-brain" style={{
        opacity: active?1:0, transform: active?"scale(1)":"scale(0.5)",
        transition:"all 0.5s 0.6s"
      }}>🧠</div>
    </div>
  );
}

function AnimMCP({ active }: { active: boolean }) {
  const tools = ["📅 Calendar","📧 Email","📊 CRM","🌐 Search"];
  return (
    <div className="aic-anim-box" style={{position:"relative", width:130, height:110}}>
      <div className="aic-hub" style={{
        opacity: active?1:0, transform: active?"scale(1)":"scale(0.5)",
        transition:"all 0.4s"
      }}>MCP</div>
      {tools.map((t,i) => {
        const angles = [-60,-20,20,60];
        const rad = (angles[i])*Math.PI/180;
        const x = 65+50*Math.sin(rad), y = 55-40*Math.cos(rad);
        return (
          <div key={t} className="aic-tool-pill" style={{
            left:x, top:y,
            opacity: active?1:0,
            transform: active?"scale(1)":"scale(0)",
            transition: `all 0.3s ${0.1+i*0.12}s`,
          }}>{t}</div>
        );
      })}
    </div>
  );
}

function AnimSkills({ active }: { active: boolean }) {
  const skills = ["Web Search","Code Runner","SQL Query","File Read","API Call","Calculator"];
  return (
    <div className="aic-anim-box" style={{flexWrap:"wrap", gap:5, justifyContent:"center", padding:"0 6px"}}>
      {skills.map((s,i) => (
        <div key={s} className="aic-skill-pill" style={{
          opacity: active?1:0,
          transform: active?"translateY(0)":"translateY(10px)",
          transition: `all 0.3s ${i*0.1}s`,
        }}>{s}</div>
      ))}
    </div>
  );
}

function AnimConversational({ active }: { active: boolean }) {
  const msgs = [
    { text:"I need to reschedule my demo", side:"right" },
    { text:"Sure! What date works?", side:"left" },
    { text:"Friday at 3pm", side:"right" },
    { text:"Done! Calendar updated ✓", side:"left" },
  ];
  return (
    <div className="aic-anim-box" style={{flexDirection:"column", gap:5, padding:"0 8px", width:"100%"}}>
      {msgs.map((m,i) => (
        <div key={i} className={`aic-bubble aic-bubble-${m.side}`} style={{
          opacity: active?1:0,
          transform: active?"translateY(0)":"translateY(8px)",
          transition: `all 0.3s ${i*0.3}s`,
        }}>{m.text}</div>
      ))}
    </div>
  );
}

function AnimIntent({ active }: { active: boolean }) {
  const intents = [
    { label:"Book appointment", pct:92, color:"#34d399" },
    { label:"Product enquiry",  pct:61, color:"#fbbf24" },
    { label:"Cancel order",     pct:23, color:"#f87171" },
  ];
  return (
    <div className="aic-anim-box" style={{flexDirection:"column", gap:6, width:"100%", padding:"0 12px"}}>
      {intents.map((it,i) => (
        <div key={it.label} style={{width:"100%", opacity: active?1:0, transition:`opacity 0.3s ${i*0.2}s`}}>
          <div style={{display:"flex", justifyContent:"space-between", marginBottom:2}}>
            <span style={{fontSize:9, color:"#94a3b8"}}>{it.label}</span>
            <span style={{fontSize:9, color: it.color}}>{active?it.pct:0}%</span>
          </div>
          <div style={{height:6, background:"#ffffff11", borderRadius:3}}>
            <div style={{
              height:"100%", background: it.color, borderRadius:3,
              width: active ? `${it.pct}%` : "0%",
              transition: `width 0.6s ${0.2+i*0.2}s`,
            }} />
          </div>
        </div>
      ))}
      <span className="aic-label" style={{opacity:active?1:0, transition:"opacity 0.4s 0.8s"}}>Top intent: Book appointment</span>
    </div>
  );
}

function AnimSpeech({ active }: { active: boolean }) {
  const bars = [3,5,8,12,9,14,10,7,13,8,5,11,9,6,4];
  return (
    <div className="aic-anim-box" style={{flexDirection:"column", gap:8}}>
      <div style={{display:"flex", alignItems:"center", gap:3, height:40}}>
        {bars.map((h,i) => (
          <div key={i} className="aic-wave-bar" style={{
            height: active ? h*2.5 : 3,
            animationDelay: `${i*0.07}s`,
            animationPlayState: active ? "running" : "paused",
            transition: `height 0.3s ${i*0.04}s`,
          }} />
        ))}
      </div>
      <div style={{
        display:"flex", gap:5, opacity: active?1:0,
        transition:"opacity 0.4s 0.6s",
        justifyContent:"center",
      }}>
        {"speech  →  text".split("").map((c,i) => (
          <span key={i} style={{
            fontSize:10, color: c==="→"?"#29abe2":"#e2e8f0",
            fontFamily:"monospace",
          }}>{c}</span>
        ))}
      </div>
    </div>
  );
}

function AnimRecommendation({ active }: { active: boolean }) {
  const items = [
    { label:"Advanced React Course", score:98, icon:"⭐" },
    { label:"System Design Bootcamp", score:94, icon:"🎯" },
    { label:"DSA Masterclass",        score:87, icon:"📚" },
  ];
  return (
    <div className="aic-anim-box" style={{flexDirection:"column", gap:5, width:"100%", padding:"0 8px"}}>
      {items.map((it,i) => (
        <div key={it.label} className="aic-rec-item" style={{
          opacity: active?1:0,
          transform: active?"translateX(0)":"translateX(20px)",
          transition: `all 0.35s ${i*0.2}s`,
        }}>
          <span>{it.icon}</span>
          <span style={{flex:1, fontSize:9, color:"#e2e8f0"}}>{it.label}</span>
          <span className="aic-score" style={{color: i===0?"#34d399":i===1?"#fbbf24":"#94a3b8"}}>
            {active ? it.score : 0}%
          </span>
        </div>
      ))}
    </div>
  );
}

function AnimVoiceAI({ active }: { active: boolean }) {
  return (
    <div className="aic-anim-box" style={{gap:10}}>
      <div className="aic-mic" style={{
        boxShadow: active ? "0 0 0 8px #29abe222, 0 0 0 16px #29abe211" : "none",
        opacity: active?1:0.4,
        transition:"all 0.5s",
      }}>🎙️</div>
      <div style={{display:"flex", flexDirection:"column", gap:3, opacity: active?1:0, transition:"opacity 0.4s 0.4s"}}>
        {[0.7,1,0.6,0.9,0.5].map((h,i) => (
          <div key={i} className="aic-voice-bar" style={{
            height: active ? `${h*28}px` : "3px",
            animationDelay: `${i*0.1}s`,
            animationPlayState: active ? "running" : "paused",
            transition: `height 0.3s ${i*0.08}s`,
          }} />
        ))}
      </div>
      <div style={{fontSize:18, opacity: active?1:0, transition:"opacity 0.4s 0.7s"}}>🔊</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CONCEPT DATA
───────────────────────────────────────────── */
const concepts = [
  {
    id:"llm", category:"Foundation",
    title:"Large Language Model (LLM)",
    tagline:"The brain behind modern AI",
    useCase:"A retail bank uses an LLM to auto-draft personalised loan rejection letters — cutting document time from 30 min to 30 seconds.",
    Anim: AnimLLM,
  },
  {
    id:"genai", category:"Foundation",
    title:"Generative AI",
    tagline:"Create content, code & media at scale",
    useCase:"An e-commerce platform auto-generates 500 SEO-ready product descriptions overnight — no copywriter needed.",
    Anim: AnimGenAI,
  },
  {
    id:"nlp", category:"Foundation",
    title:"Natural Language Processing",
    tagline:"Machines that understand human language",
    useCase:"A logistics company analyses 10,000 customer emails daily to automatically tag complaints, urgency level, and order IDs.",
    Anim: AnimNLP,
  },
  {
    id:"prompt", category:"Foundation",
    title:"Prompt Engineering",
    tagline:"Craft inputs that unlock AI's full potential",
    useCase:"A legal firm uses prompt templates to extract contract clauses with 95% accuracy — replacing 4 hours of paralegal work per contract.",
    Anim: AnimPrompt,
  },
  {
    id:"rag", category:"Enhancement",
    title:"Retrieval-Augmented Generation (RAG)",
    tagline:"Ground AI answers in your own data",
    useCase:"A hospital builds a policy chatbot that answers HR queries by retrieving from 800-page HR manuals — zero hallucinations.",
    Anim: AnimRAG,
  },
  {
    id:"recsys", category:"Enhancement",
    title:"Recommendation System",
    tagline:"Personalise every user interaction",
    useCase:"An EdTech platform shows each learner the next best course based on their skills, goals, and peer patterns — 3× more course completions.",
    Anim: AnimRecommendation,
  },
  {
    id:"agents", category:"Agents",
    title:"AI Agents",
    tagline:"Autonomous systems that plan & act",
    useCase:"A property firm deploys an AI agent that qualifies leads, schedules site visits, and sends follow-up emails — 24/7, no human needed.",
    Anim: AnimAgents,
  },
  {
    id:"coding", category:"Agents",
    title:"Coding Agents",
    tagline:"AI that writes, reviews & fixes code",
    useCase:"A SaaS startup uses a coding agent to auto-fix failing tests on every pull request — reducing QA review cycles by 60%.",
    Anim: AnimCodingAgents,
  },
  {
    id:"multimodal", category:"Agents",
    title:"Multi-modal Agents",
    tagline:"See, hear, and read — all at once",
    useCase:"An insurance company's AI agent reads claim forms, inspects damage photos, and transcribes voice notes to auto-settle 70% of minor claims.",
    Anim: AnimMultiModal,
  },
  {
    id:"mcp", category:"Agents",
    title:"Model Context Protocol (MCP)",
    tagline:"Give AI access to any tool or data source",
    useCase:"A CRM platform connects its AI assistant to calendar, email, and database via MCP — the assistant reschedules, emails, and updates records in one step.",
    Anim: AnimMCP,
  },
  {
    id:"skills", category:"Agents",
    title:"Skills (Tool Use)",
    tagline:"Plug-in superpowers for your AI",
    useCase:"A financial AI agent uses skills to run live stock queries, calculate portfolio risk, and draft investor reports — all in a single conversation.",
    Anim: AnimSkills,
  },
  {
    id:"conv", category:"Interaction",
    title:"Conversational AI",
    tagline:"Human-like dialogue at any scale",
    useCase:"A telecom operator handles 80% of billing enquiries and plan changes through a conversational AI — saving ₹40L/year in call centre costs.",
    Anim: AnimConversational,
  },
  {
    id:"intent", category:"Interaction",
    title:"Intent Recognition",
    tagline:"Understand what users really mean",
    useCase:"A food delivery app accurately routes support chats to the right flow (refund / reorder / complaint) based on detected intent — CSAT up 28%.",
    Anim: AnimIntent,
  },
  {
    id:"speech", category:"Voice & Speech",
    title:"Speech Recognition",
    tagline:"Convert spoken words to actionable text",
    useCase:"A hospital uses real-time speech-to-text to transcribe doctor consultations directly into EMR records — saving 45 minutes per doctor per day.",
    Anim: AnimSpeech,
  },
  {
    id:"voiceai", category:"Voice & Speech",
    title:"Voice AI",
    tagline:"Full end-to-end voice conversations",
    useCase:"A bank's Voice AI handles inbound calls, authenticates customers by voice, and resolves balance enquiries — zero hold time, 24/7.",
    Anim: AnimVoiceAI,
  },
];

const categories = ["All", ...Array.from(new Set(concepts.map(c => c.category)))];

/* ─────────────────────────────────────────────
   CONCEPT CARD
───────────────────────────────────────────── */
function ConceptCard({ concept }: { concept: typeof concepts[0] }) {
  const { ref, visible } = useInView(0.15);
  const { Anim } = concept;
  return (
    <div ref={ref} className={`aic-card ${visible ? "aic-card-in" : ""}`}>
      <div className="aic-anim-wrapper">
        <Anim active={visible} />
      </div>
      <div className="aic-card-body">
        <span className="aic-category-tag">{concept.category}</span>
        <h3 className="aic-card-title">{concept.title}</h3>
        <p className="aic-card-tagline">{concept.tagline}</p>
        <div className="aic-usecase">
          <span className="aic-usecase-label">Business use case</span>
          <p className="aic-usecase-text">{concept.useCase}</p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function AiConceptsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All"
    ? concepts
    : concepts.filter(c => c.category === activeCategory);

  return (
    <>
      <style>{`
        /* ── Layout ── */
        .aic-card {
          background: linear-gradient(135deg, #0d1b4b 0%, #111827 100%);
          border: 1px solid #ffffff0f;
          border-radius: 16px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s, transform 0.5s, border-color 0.3s, box-shadow 0.3s;
        }
        .aic-card-in {
          opacity: 1;
          transform: translateY(0);
        }
        .aic-card:hover {
          border-color: #29abe244;
          box-shadow: 0 8px 32px #29abe211;
        }
        .aic-anim-wrapper {
          height: 130px;
          background: #060f2e;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #ffffff08;
          position: relative;
          overflow: hidden;
        }
        .aic-card-body {
          padding: 16px;
        }
        .aic-category-tag {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: #29abe2;
          display: block;
          margin-bottom: 6px;
        }
        .aic-card-title {
          font-size: 15px;
          font-weight: 700;
          color: #f1f5f9;
          margin: 0 0 4px;
          line-height: 1.3;
        }
        .aic-card-tagline {
          font-size: 12px;
          color: #94a3b8;
          margin: 0 0 10px;
        }
        .aic-usecase {
          background: #ffffff06;
          border: 1px solid #ffffff0a;
          border-radius: 8px;
          padding: 8px 10px;
        }
        .aic-usecase-label {
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: .1em;
          color: #f5a623;
          font-weight: 600;
          display: block;
          margin-bottom: 4px;
        }
        .aic-usecase-text {
          font-size: 11px;
          color: #cbd5e1;
          line-height: 1.5;
          margin: 0;
        }

        /* ── Shared animation helpers ── */
        .aic-anim-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          position: relative;
        }
        .aic-label {
          position: absolute;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 9px;
          color: #64748b;
          white-space: nowrap;
          letter-spacing:.05em;
        }
        .aic-svg {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
        }

        /* ── LLM ── */
        .aic-node {
          position: absolute;
          width: 12px; height: 12px;
          border-radius: 50%;
          background: radial-gradient(circle, #29abe2, #1a237e);
          animation: aicPulse 1.8s infinite;
        }
        @keyframes aicPulse {
          0%,100% { box-shadow: 0 0 0 0 #29abe244; }
          50%      { box-shadow: 0 0 0 5px #29abe200; }
        }
        .aic-token {
          position: absolute;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #f5a623;
          box-shadow: 0 0 8px #f5a623;
          animation: aicTokenMove 2.5s linear infinite;
        }
        @keyframes aicTokenMove {
          0%   { left:15%; top:25%; }
          25%  { left:50%; top:15%; }
          50%  { left:82%; top:25%; }
          75%  { left:50%; top:75%; }
          100% { left:15%; top:25%; }
        }

        /* ── GenAI ── */
        .aic-genai-center {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: radial-gradient(circle, #29abe244, #1a237e88);
          display: flex; align-items: center; justify-content: center;
          z-index: 2;
        }
        .aic-spark {
          position: absolute;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #f5a623;
          animation: aicSparkOut 1.2s ease-out infinite;
          transform-origin: center;
        }
        @keyframes aicSparkOut {
          0%   { transform: rotate(var(--angle)) translateX(10px) scale(1); opacity:1; }
          100% { transform: rotate(var(--angle)) translateX(55px) scale(0); opacity:0; }
        }

        /* ── NLP ── */
        .aic-word {
          display: inline-block;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 500;
        }
        .aic-tag {
          font-size: 9px;
          padding: 2px 7px;
          border-radius: 10px;
          color: #e2e8f0;
        }

        /* ── RAG ── */
        .aic-pipeline-step {
          display: flex;
          align-items: center;
          gap: 6px;
          width: 100%;
        }
        .aic-pipeline-bar {
          height: 6px;
          border-radius: 3px;
          min-width: 0;
        }

        /* ── Prompt ── */
        .aic-prompt-box {
          display: flex; flex-direction: column;
          gap: 2px;
          border: 1px solid;
          border-radius: 6px;
          padding: 5px 7px;
          min-width: 70px;
          background: #060f2e;
        }
        .aic-arrow {
          color: #29abe2;
          font-size: 16px;
          font-weight: bold;
          transition: transform 0.3s;
        }
        .aic-arrow-active { animation: aicArrowPulse 0.8s ease-in-out infinite alternate; }
        @keyframes aicArrowPulse {
          from { transform: translateX(-3px); }
          to   { transform: translateX(3px); }
        }

        /* ── Coding agents ── */
        .aic-terminal {
          background: #000;
          border: 1px solid #ffffff11;
          border-radius: 6px;
          padding: 8px 10px;
          width: 100%;
          font-family: monospace;
        }
        .aic-code-line {
          font-size: 10px;
          line-height: 1.7;
        }

        /* ── Multi-modal ── */
        .aic-modal-input {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 4px 8px;
          border: 1px solid;
          border-radius: 8px;
          background: #060f2e;
        }
        .aic-brain {
          font-size: 30px;
        }

        /* ── MCP ── */
        .aic-hub {
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%,-50%);
          width: 36px; height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg,#1a237e,#0d2f4f);
          border: 1.5px solid #29abe2;
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 700; color: #29abe2;
          z-index: 2;
        }
        .aic-tool-pill {
          position: absolute;
          transform: translate(-50%,-50%);
          background: #060f2e;
          border: 1px solid #29abe244;
          border-radius: 8px;
          padding: 2px 6px;
          font-size: 9px;
          color: #94a3b8;
          white-space: nowrap;
        }

        /* ── Skills ── */
        .aic-skill-pill {
          background: #1a237e44;
          border: 1px solid #29abe244;
          border-radius: 20px;
          padding: 3px 9px;
          font-size: 9px;
          color: #93c5fd;
        }

        /* ── Conversational ── */
        .aic-bubble {
          max-width: 80%;
          padding: 5px 9px;
          border-radius: 10px;
          font-size: 10px;
          line-height: 1.4;
        }
        .aic-bubble-right {
          align-self: flex-end;
          background: #1a237e;
          color: #e2e8f0;
          margin-left: auto;
        }
        .aic-bubble-left {
          align-self: flex-start;
          background: #164e63;
          color: #e2e8f0;
        }

        /* ── Recommendation ── */
        .aic-rec-item {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #060f2e;
          border: 1px solid #ffffff0a;
          border-radius: 6px;
          padding: 5px 8px;
          width: 100%;
        }
        .aic-score {
          font-size: 10px;
          font-weight: 600;
          white-space: nowrap;
        }

        /* ── Speech ── */
        .aic-wave-bar {
          width: 4px;
          background: #29abe2;
          border-radius: 2px;
          animation: aicWave 0.8s ease-in-out infinite alternate;
        }
        @keyframes aicWave {
          from { transform: scaleY(0.4); opacity:0.5; }
          to   { transform: scaleY(1);   opacity:1;   }
        }

        /* ── Voice AI ── */
        .aic-mic {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg,#1a237e,#0d2f4f);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
          transition: box-shadow 0.5s;
        }
        .aic-voice-bar {
          width: 5px;
          background: linear-gradient(180deg, #29abe2, #1a237e);
          border-radius: 3px;
          animation: aicVoice 0.6s ease-in-out infinite alternate;
        }
        @keyframes aicVoice {
          from { transform: scaleY(0.3); }
          to   { transform: scaleY(1); }
        }

        /* ── Filter tabs ── */
        .aic-tab {
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          border: 1px solid #ffffff15;
          background: transparent;
          color: #94a3b8;
          transition: all 0.2s;
        }
        .aic-tab:hover { color: #e2e8f0; border-color: #29abe255; }
        .aic-tab-active {
          background: #29abe2;
          border-color: #29abe2;
          color: #fff;
        }
      `}</style>

      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <main style={{ background: "linear-gradient(180deg, #060f2e 0%, #0d1b4b 40%, #0a0a0a 100%)", minHeight: "100vh", paddingTop: 80 }}>
        {/* Hero */}
        <div style={{ padding: "60px 16px 40px", textAlign: "center" }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "#29abe2", marginBottom: 12 }}>
            AI Knowledge Hub
          </p>
          <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 800, color: "#f1f5f9", margin: "0 auto 16px", lineHeight: 1.2, maxWidth: 680 }}>
            15 AI Concepts That Are{" "}
            <span style={{ background: "linear-gradient(90deg,#29abe2,#f5a623)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Reshaping Business
            </span>
          </h1>
          <p style={{ fontSize: 16, color: "#94a3b8", maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.6 }}>
            From LLMs to Voice AI — understand each technology and see exactly how forward-thinking companies are using it today.
          </p>

          {/* Category filter */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`aic-tab ${activeCategory === cat ? "aic-tab-active" : ""}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 16px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 20,
        }}>
          {filtered.map(concept => (
            <ConceptCard key={concept.id} concept={concept} />
          ))}
        </div>

        {/* CTA */}
        <div style={{
          textAlign: "center",
          padding: "60px 16px",
          borderTop: "1px solid #ffffff0a",
          background: "linear-gradient(180deg,transparent,#060f2e)",
        }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: "#f1f5f9", marginBottom: 12 }}>
            Ready to build AI into your business?
          </h2>
          <p style={{ color: "#94a3b8", marginBottom: 24, fontSize: 14 }}>
            Thiravugal builds custom AI solutions — chatbots, agents, voice AI, automation — tailored to your workflows.
          </p>
          <a href="/#contact" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "linear-gradient(135deg,#f5a623,#e0921a)",
            color: "#fff", fontWeight: 700, fontSize: 14,
            padding: "12px 28px", borderRadius: 30,
            textDecoration: "none",
            boxShadow: "0 4px 20px #f5a62344",
          }}>
            Talk to Us →
          </a>
        </div>
      </main>

      <Footer hideCta />
    </>
  );
}

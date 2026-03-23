"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────── */
function useInView(threshold = 0.2) {
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

function useCounter(target: number, active: boolean, duration = 1400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

/* ─────────────────────────────────────────────
   CONCEPT ANIMATION COMPONENTS
───────────────────────────────────────────── */
function AnimLLM({ active }: { active: boolean }) {
  return (
    <div className="aic-anim-box">
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
      <svg className="aic-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[[0,2],[1,3],[0,3],[1,2],[2,4],[3,5],[2,5],[3,4]].map(([a,b],i) => {
          const xs=[15,15,50,50,82,82], ys=[25,65,15,75,25,65];
          return <line key={i} x1={xs[a]} y1={ys[a]} x2={xs[b]} y2={ys[b]}
            stroke="#29abe2" strokeWidth="0.8" strokeOpacity={active?0.35:0}
            style={{transition:`stroke-opacity 0.6s ${i*0.08}s`}} />;
        })}
      </svg>
      {active && <div className="aic-token" />}
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
      }}><span style={{fontSize:28}}>✨</span></div>
      {active && [0,1,2,3,4,5,6,7].map(i => (
        <div key={i} className="aic-spark" style={{"--angle":`${i*45}deg`,animationDelay:`${i*0.12}s`} as React.CSSProperties} />
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
            opacity: active ? 1 : 0.3,
            transition: `all 0.35s ${i*0.12}s`,
          }}>{w}</span>
        ))}
      </div>
      <div style={{display:"flex", gap:8, marginTop:4, opacity:active?1:0, transition:"opacity 0.5s 0.8s"}}>
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
          opacity: active?1:0, transform: active?"translateX(0)":"translateX(-20px)",
          transition: `all 0.35s ${i*0.18}s`,
        }}>
          <span style={{fontSize:14}}>{icons[i]}</span>
          <div className="aic-pipeline-bar" style={{
            width: active?`${[60,90,75,85][i]}%`:"0%",
            transition: `width 0.5s ${0.2+i*0.18}s`,
            background: `hsl(${200+i*30},80%,55%)`,
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
      <div style={{display:"flex", alignItems:"center", gap:8, opacity:active?1:0, transition:"opacity 0.4s"}}>
        <div className="aic-prompt-box" style={{borderColor:"#fbbf24aa"}}>
          <span style={{fontSize:9, color:"#94a3b8"}}>Raw prompt</span>
          <span style={{fontSize:10, color:"#fbbf24"}}>Summarise this</span>
        </div>
        <div className={`aic-arrow ${active?"aic-arrow-active":""}`}>→</div>
        <div className="aic-prompt-box" style={{borderColor:"#34d39988", opacity:active?1:0, transition:"opacity 0.4s 0.5s"}}>
          <span style={{fontSize:9, color:"#94a3b8"}}>Optimised</span>
          <span style={{fontSize:10, color:"#34d399"}}>Summarise in 3 bullets</span>
        </div>
      </div>
      <span className="aic-label" style={{opacity:active?1:0, transition:"opacity 0.4s 0.7s"}}>Chain-of-thought</span>
    </div>
  );
}

function AnimAgents({ active }: { active: boolean }) {
  const steps = ["Observe","Think","Plan","Act"];
  return (
    <div className="aic-anim-box">
      <svg viewBox="0 0 100 100" style={{width:100, height:100}}>
        <circle cx="50" cy="50" r="34" fill="none" stroke="#29abe244" strokeWidth="1"
          strokeDasharray={active?"213":"0"} style={{transition:"stroke-dasharray 1s"}} />
        {steps.map((s,i) => {
          const angle = (i/4)*Math.PI*2 - Math.PI/2;
          const x = 50 + 34*Math.cos(angle), y = 50 + 34*Math.sin(angle);
          return (
            <g key={s} style={{opacity:active?1:0, transition:`opacity 0.3s ${i*0.2}s`}}>
              <circle cx={x} cy={y} r="9" fill="#1a237e" stroke="#29abe2" strokeWidth="0.8" />
              <text x={x} y={y+1} textAnchor="middle" dominantBaseline="middle" fontSize="4" fill="#e2e8f0">{s}</text>
            </g>
          );
        })}
        <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="5" fill="#29abe2"
          opacity={active?1:0} style={{transition:"opacity 0.5s 0.8s"}}>AI</text>
        {active && (
          <circle r="3" fill="#f5a623">
            <animateMotion dur="3s" repeatCount="indefinite" path="M50,16 A34,34 0 1,1 49.9,16" />
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
            opacity: active?1:0, transition:`opacity 0.3s ${i*0.35}s`,
            color: i===4?"#34d399":i===1?"#f87171":"#e2e8f0",
          }}>{l}</div>
        ))}
      </div>
    </div>
  );
}

function AnimMultiModal({ active }: { active: boolean }) {
  const inputs = [{icon:"🖼️",label:"Image",color:"#818cf8"},{icon:"📝",label:"Text",color:"#34d399"},{icon:"🎙️",label:"Audio",color:"#fbbf24"}];
  return (
    <div className="aic-anim-box" style={{gap:6}}>
      <div style={{display:"flex", flexDirection:"column", gap:6}}>
        {inputs.map((inp,i) => (
          <div key={inp.label} className="aic-modal-input" style={{
            borderColor:inp.color+"66", opacity:active?1:0,
            transform:active?"translateX(0)":"translateX(-20px)",
            transition:`all 0.35s ${i*0.15}s`,
          }}>
            <span>{inp.icon}</span>
            <span style={{fontSize:10, color:inp.color}}>{inp.label}</span>
          </div>
        ))}
      </div>
      <div className="aic-arrow" style={{opacity:active?1:0, transition:"opacity 0.4s 0.5s", fontSize:20}}>→</div>
      <div style={{opacity:active?1:0, transform:active?"scale(1)":"scale(0.5)", transition:"all 0.5s 0.6s", fontSize:30}}>🧠</div>
    </div>
  );
}

function AnimMCP({ active }: { active: boolean }) {
  const tools = ["📅 Calendar","📧 Email","📊 CRM","🌐 Search"];
  return (
    <div className="aic-anim-box" style={{position:"relative", width:130, height:110}}>
      <div className="aic-hub" style={{opacity:active?1:0, transform:active?"scale(1)":"scale(0.5)", transition:"all 0.4s"}}>MCP</div>
      {tools.map((t,i) => {
        const angles = [-60,-20,20,60];
        const rad = angles[i]*Math.PI/180;
        const x = 65+50*Math.sin(rad), y = 55-40*Math.cos(rad);
        return (
          <div key={t} className="aic-tool-pill" style={{
            left:x, top:y, opacity:active?1:0,
            transform:active?"scale(1)":"scale(0)",
            transition:`all 0.3s ${0.1+i*0.12}s`,
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
          opacity:active?1:0, transform:active?"translateY(0)":"translateY(10px)",
          transition:`all 0.3s ${i*0.1}s`,
        }}>{s}</div>
      ))}
    </div>
  );
}

function AnimConversational({ active }: { active: boolean }) {
  const msgs = [
    {text:"I need to reschedule my demo",side:"right"},
    {text:"Sure! What date works?",side:"left"},
    {text:"Friday at 3pm",side:"right"},
    {text:"Done! Calendar updated ✓",side:"left"},
  ];
  return (
    <div className="aic-anim-box" style={{flexDirection:"column", gap:5, padding:"0 8px", width:"100%"}}>
      {msgs.map((m,i) => (
        <div key={i} className={`aic-bubble aic-bubble-${m.side}`} style={{
          opacity:active?1:0, transform:active?"translateY(0)":"translateY(8px)",
          transition:`all 0.3s ${i*0.3}s`,
        }}>{m.text}</div>
      ))}
    </div>
  );
}

function AnimIntent({ active }: { active: boolean }) {
  const intents = [
    {label:"Book appointment",pct:92,color:"#34d399"},
    {label:"Product enquiry",pct:61,color:"#fbbf24"},
    {label:"Cancel order",pct:23,color:"#f87171"},
  ];
  return (
    <div className="aic-anim-box" style={{flexDirection:"column", gap:6, width:"100%", padding:"0 12px"}}>
      {intents.map((it,i) => (
        <div key={it.label} style={{width:"100%", opacity:active?1:0, transition:`opacity 0.3s ${i*0.2}s`}}>
          <div style={{display:"flex", justifyContent:"space-between", marginBottom:2}}>
            <span style={{fontSize:9, color:"#94a3b8"}}>{it.label}</span>
            <span style={{fontSize:9, color:it.color}}>{active?it.pct:0}%</span>
          </div>
          <div style={{height:6, background:"#ffffff11", borderRadius:3}}>
            <div style={{height:"100%", background:it.color, borderRadius:3, width:active?`${it.pct}%`:"0%", transition:`width 0.6s ${0.2+i*0.2}s`}} />
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
            height:active?h*2.5:3, animationDelay:`${i*0.07}s`,
            animationPlayState:active?"running":"paused", transition:`height 0.3s ${i*0.04}s`,
          }} />
        ))}
      </div>
      <div style={{display:"flex", gap:5, opacity:active?1:0, transition:"opacity 0.4s 0.6s", justifyContent:"center"}}>
        {"speech  →  text".split("").map((c,i) => (
          <span key={i} style={{fontSize:10, color:c==="→"?"#29abe2":"#e2e8f0", fontFamily:"monospace"}}>{c}</span>
        ))}
      </div>
    </div>
  );
}

function AnimRecommendation({ active }: { active: boolean }) {
  const items = [
    {label:"Advanced React Course",score:98,icon:"⭐"},
    {label:"System Design Bootcamp",score:94,icon:"🎯"},
    {label:"DSA Masterclass",score:87,icon:"📚"},
  ];
  return (
    <div className="aic-anim-box" style={{flexDirection:"column", gap:5, width:"100%", padding:"0 8px"}}>
      {items.map((it,i) => (
        <div key={it.label} className="aic-rec-item" style={{
          opacity:active?1:0, transform:active?"translateX(0)":"translateX(20px)",
          transition:`all 0.35s ${i*0.2}s`,
        }}>
          <span>{it.icon}</span>
          <span style={{flex:1, fontSize:9, color:"#e2e8f0"}}>{it.label}</span>
          <span className="aic-score" style={{color:i===0?"#34d399":i===1?"#fbbf24":"#94a3b8"}}>{active?it.score:0}%</span>
        </div>
      ))}
    </div>
  );
}

function AnimVoiceAI({ active }: { active: boolean }) {
  return (
    <div className="aic-anim-box" style={{gap:10}}>
      <div className="aic-mic" style={{
        boxShadow:active?"0 0 0 8px #29abe222, 0 0 0 16px #29abe211":"none",
        opacity:active?1:0.4, transition:"all 0.5s",
      }}>🎙️</div>
      <div style={{display:"flex", flexDirection:"column", gap:3, opacity:active?1:0, transition:"opacity 0.4s 0.4s"}}>
        {[0.7,1,0.6,0.9,0.5].map((h,i) => (
          <div key={i} className="aic-voice-bar" style={{
            height:active?`${h*28}px`:"3px", animationDelay:`${i*0.1}s`,
            animationPlayState:active?"running":"paused", transition:`height 0.3s ${i*0.08}s`,
          }} />
        ))}
      </div>
      <div style={{fontSize:18, opacity:active?1:0, transition:"opacity 0.4s 0.7s"}}>🔊</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const concepts = [
  { id:"llm",         category:"Foundation",    title:"Large Language Model (LLM)",           tagline:"The brain behind modern AI",                    useCase:"A retail bank uses an LLM to auto-draft personalised loan rejection letters — cutting document time from 30 min to 30 seconds.",                              Anim: AnimLLM },
  { id:"genai",       category:"Foundation",    title:"Generative AI",                        tagline:"Create content, code & media at scale",         useCase:"An e-commerce platform auto-generates 500 SEO-ready product descriptions overnight — no copywriter needed.",                                            Anim: AnimGenAI },
  { id:"nlp",         category:"Foundation",    title:"Natural Language Processing",          tagline:"Machines that understand human language",       useCase:"A logistics company analyses 10,000 customer emails daily to automatically tag complaints, urgency level, and order IDs.",                             Anim: AnimNLP },
  { id:"prompt",      category:"Foundation",    title:"Prompt Engineering",                   tagline:"Craft inputs that unlock AI's full potential",  useCase:"A legal firm uses prompt templates to extract contract clauses with 95% accuracy — replacing 4 hours of paralegal work per contract.",              Anim: AnimPrompt },
  { id:"rag",         category:"Enhancement",   title:"Retrieval-Augmented Generation (RAG)", tagline:"Ground AI answers in your own data",            useCase:"A hospital builds a policy chatbot that answers HR queries by retrieving from 800-page HR manuals — zero hallucinations.",                           Anim: AnimRAG },
  { id:"recsys",      category:"Enhancement",   title:"Recommendation System",                tagline:"Personalise every user interaction",            useCase:"An EdTech platform shows each learner the next best course based on their skills, goals, and peer patterns — 3× more course completions.",          Anim: AnimRecommendation },
  { id:"agents",      category:"Agents",        title:"AI Agents",                            tagline:"Autonomous systems that plan & act",            useCase:"A property firm deploys an AI agent that qualifies leads, schedules site visits, and sends follow-up emails — 24/7, no human needed.",             Anim: AnimAgents },
  { id:"coding",      category:"Agents",        title:"Coding Agents",                        tagline:"AI that writes, reviews & fixes code",          useCase:"A SaaS startup uses a coding agent to auto-fix failing tests on every pull request — reducing QA review cycles by 60%.",                          Anim: AnimCodingAgents },
  { id:"multimodal",  category:"Agents",        title:"Multi-modal Agents",                   tagline:"See, hear, and read — all at once",             useCase:"An insurance company's AI agent reads claim forms, inspects damage photos, and transcribes voice notes to auto-settle 70% of minor claims.",       Anim: AnimMultiModal },
  { id:"mcp",         category:"Agents",        title:"Model Context Protocol (MCP)",         tagline:"Give AI access to any tool or data source",    useCase:"A CRM platform connects its AI assistant to calendar, email, and database via MCP — the assistant reschedules, emails, and updates records in one step.", Anim: AnimMCP },
  { id:"skills",      category:"Agents",        title:"Skills (Tool Use)",                    tagline:"Plug-in superpowers for your AI",               useCase:"A financial AI agent uses skills to run live stock queries, calculate portfolio risk, and draft investor reports — all in a single conversation.", Anim: AnimSkills },
  { id:"conv",        category:"Interaction",   title:"Conversational AI",                    tagline:"Human-like dialogue at any scale",              useCase:"A telecom operator handles 80% of billing enquiries and plan changes through a conversational AI — saving ₹40L/year in call centre costs.",       Anim: AnimConversational },
  { id:"intent",      category:"Interaction",   title:"Intent Recognition",                   tagline:"Understand what users really mean",             useCase:"A food delivery app accurately routes support chats to the right flow (refund / reorder / complaint) based on detected intent — CSAT up 28%.",   Anim: AnimIntent },
  { id:"speech",      category:"Voice & Speech",title:"Speech Recognition",                   tagline:"Convert spoken words to actionable text",       useCase:"A hospital uses real-time speech-to-text to transcribe doctor consultations directly into EMR records — saving 45 minutes per doctor per day.",   Anim: AnimSpeech },
  { id:"voiceai",     category:"Voice & Speech",title:"Voice AI",                             tagline:"Full end-to-end voice conversations",           useCase:"A bank's Voice AI handles inbound calls, authenticates customers by voice, and resolves balance enquiries — zero hold time, 24/7.",               Anim: AnimVoiceAI },
];

const conceptCategories = ["All", ...Array.from(new Set(concepts.map(c => c.category)))];

const productCategories = [
  {
    id: "customer", label: "Customer-Facing", icon: "👥", color: "#29abe2",
    description: "AI that engages, converts, and retains your customers around the clock",
    products: [
      { icon: "🎧", title: "AI Support Agent",       desc: "Resolves tier-1 tickets automatically. Escalates complex ones with full context.", metric: "80% tickets automated" },
      { icon: "🎯", title: "AI Sales Assistant",     desc: "Qualifies leads, books demos 24/7 — without a sales rep on call.",                  metric: "3× more qualified leads" },
      { icon: "🚀", title: "AI Onboarding Bot",      desc: "Guides new users through product setup via chat, reducing early drop-off.",         metric: "40% less support load" },
      { icon: "⭐", title: "AI Review Analyser",     desc: "Reads feedback, detects sentiment, clusters themes, surfaces insights weekly.",     metric: "10,000 reviews in 60s" },
    ],
  },
  {
    id: "internal", label: "Internal Operations", icon: "⚙️", color: "#f5a623",
    description: "Eliminate the manual work that drains your team every week",
    products: [
      { icon: "📝", title: "AI Meeting Summariser",      desc: "Transcribes calls, extracts action items, updates CRM/Jira automatically.",       metric: "2 hrs/day saved per person" },
      { icon: "📋", title: "AI Requirement Extractor",   desc: "Converts client emails and docs into BRDs, user stories, and Jira tickets.",       metric: "90% faster scoping" },
      { icon: "🔍", title: "AI Code Reviewer",           desc: "Reviews PRs for bugs, security issues, and code quality — like a senior dev.",    metric: "60% faster PR cycles" },
      { icon: "📄", title: "AI Proposal Generator",      desc: "Takes a project brief → drafts a scoped proposal + cost estimate in 2 minutes.",  metric: "10× faster proposals" },
    ],
  },
  {
    id: "data", label: "Data & Intelligence", icon: "📊", color: "#34d399",
    description: "Turn your raw data into automated decisions and plain-English insights",
    products: [
      { icon: "📈", title: "AI Dashboard Narrator",  desc: "Writes plain-English weekly summaries from your analytics dashboards.",           metric: "Zero data literacy needed" },
      { icon: "📜", title: "AI Contract Analyser",   desc: "Flags risky clauses and extracts key dates from vendor/client contracts.",        metric: "4 hrs → 4 mins per contract" },
      { icon: "🔮", title: "AI Churn Predictor",     desc: "Identifies at-risk customers from usage patterns and triggers retention flows.",  metric: "35% churn reduction" },
      { icon: "🧠", title: "AI Knowledge Base",      desc: "Ingests Notion/Confluence/docs → staff get cited answers instantly (RAG).",      metric: "Answers from 1000s of docs" },
    ],
  },
  {
    id: "industry", label: "Industry-Specific", icon: "🏭", color: "#818cf8",
    description: "Vertical-specific AI tailored to your workflows and compliance requirements",
    products: [
      { icon: "🧾", title: "AI Invoice Processor",   desc: "Extracts line items, validates against POs, flags discrepancies, routes for approval.", metric: "95% accuracy, zero manual entry" },
      { icon: "👤", title: "AI Hiring Screener",     desc: "Screens resumes, ranks candidates, sends assessments, schedules interviews.",           metric: "5× faster hiring pipeline" },
      { icon: "📊", title: "AI Project Reporter",    desc: "Pulls from Jira/GitHub, writes client-ready status updates every Friday.",             metric: "Zero manual reporting" },
    ],
  },
];

const journeyPhases = [
  { icon: "🔎", title: "Discover",  desc: "Map your costliest, most repetitive workflows",              color: "#29abe2", step: "01" },
  { icon: "🎨", title: "Design",    desc: "Choose the right AI — chatbot, agent, RAG, or voice",        color: "#f5a623", step: "02" },
  { icon: "⚙️", title: "Build",     desc: "Thiravugal engineers your solution in 2–6 weeks",            color: "#34d399", step: "03" },
  { icon: "🚀", title: "Deploy",    desc: "Go live, measure impact, and improve continuously",          color: "#818cf8", step: "04" },
];

// ── Replace with your YouTube video ID to activate the embed ──
const YOUTUBE_VIDEO_ID = "";

/* ─────────────────────────────────────────────
   PRODUCT CARD
───────────────────────────────────────────── */
function ProductCard({ product, color, index }: {
  product: { icon: string; title: string; desc: string; metric: string };
  color: string;
  index: number;
}) {
  const { ref, visible } = useInView(0.1);
  return (
    <div ref={ref} className="aip-card" style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: `all 0.4s ${index * 0.08}s`,
      borderLeft: `3px solid ${color}`,
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <div style={{ fontSize: 24, lineHeight: 1, marginTop: 2 }}>{product.icon}</div>
        <div style={{ flex: 1 }}>
          <h4 className="aip-title">{product.title}</h4>
          <p className="aip-desc">{product.desc}</p>
          <span className="aip-metric" style={{ color, borderColor: color + "44", background: color + "11" }}>
            ✓ {product.metric}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PRODUCTS SECTION
───────────────────────────────────────────── */
function ProductsSection() {
  const [activeCat, setActiveCat] = useState("customer");
  const category = productCategories.find(c => c.id === activeCat) || productCategories[0];
  return (
    <section style={{ padding: "80px 16px", borderTop: "1px solid #ffffff08" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="aip-section-eyebrow">What We Build</p>
          <h2 className="aip-section-title">
            AI Products for{" "}
            <span style={{ background: "linear-gradient(90deg,#f5a623,#29abe2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Software Companies
            </span>
          </h2>
          <p style={{ fontSize: 15, color: "#94a3b8", maxWidth: 560, margin: "0 auto" }}>
            Ready-to-deploy AI solutions built for small-to-medium software businesses.
            We consult, build, and hand over — end to end.
          </p>
        </div>

        {/* Category tabs */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginBottom: 12 }}>
          {productCategories.map(cat => (
            <button key={cat.id} onClick={() => setActiveCat(cat.id)} className="aip-tab" style={{
              borderColor: activeCat === cat.id ? cat.color : "#ffffff18",
              background: activeCat === cat.id ? cat.color + "22" : "transparent",
              color: activeCat === cat.id ? cat.color : "#94a3b8",
            }}>
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: 13, color: "#4b5563", marginBottom: 32 }}>{category.description}</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {category.products.map((p, i) => (
            <ProductCard key={p.title} product={p} color={category.color} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   JOURNEY SECTION
───────────────────────────────────────────── */
function JourneySection() {
  const { ref, visible } = useInView(0.08);
  const c80 = useCounter(80, visible);
  const c3  = useCounter(3,  visible);
  const c6  = useCounter(6,  visible);

  const beforeItems = ["Manual ticket handling", "Hours of data entry", "Missed leads after hours", "Slow, inconsistent proposals", "Human errors at scale"];
  const afterItems  = ["Auto-resolved support 24/7", "Zero-touch data processing", "AI qualifies leads instantly", "2-minute proposal drafts", "Consistent, auditable accuracy"];

  return (
    <section ref={ref} style={{ padding: "80px 16px", background: "#060f2e", borderTop: "1px solid #ffffff08", borderBottom: "1px solid #ffffff08" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="aip-section-eyebrow" style={{ color: "#29abe2" }}>The Transformation</p>
          <h2 className="aip-section-title">How AI Shifts a Software Business</h2>
          <p style={{ fontSize: 15, color: "#94a3b8", maxWidth: 500, margin: "0 auto" }}>
            From slow, manual processes to intelligent, automated workflows — in 4 structured phases.
          </p>
        </div>

        {/* Before → After comparison */}
        <div style={{ display: "flex", gap: 16, marginBottom: 60, alignItems: "stretch", flexWrap: "wrap", justifyContent: "center" }}>
          <div className="aij-state" style={{
            opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-24px)", transition: "all 0.5s 0.1s"
          }}>
            <div className="aij-state-label" style={{ color: "#f87171" }}>⚠ Before AI</div>
            {beforeItems.map((t, i) => (
              <div key={t} className="aij-state-item" style={{ opacity: visible ? 1 : 0, transition: `opacity 0.3s ${0.2 + i * 0.1}s` }}>
                <span style={{ color: "#f87171", flexShrink: 0 }}>✕</span> {t}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, opacity: visible ? 1 : 0, transition: "opacity 0.5s 0.5s" }}>
            <div className="aij-transform-arrow">→</div>
            <span style={{ fontSize: 11, color: "#4b5563", letterSpacing: ".05em" }}>AI transforms</span>
          </div>

          <div className="aij-state" style={{
            opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(24px)", transition: "all 0.5s 0.3s",
            borderColor: "#34d39922",
          }}>
            <div className="aij-state-label" style={{ color: "#34d399" }}>✓ After AI</div>
            {afterItems.map((t, i) => (
              <div key={t} className="aij-state-item" style={{ opacity: visible ? 1 : 0, transition: `opacity 0.3s ${0.5 + i * 0.1}s` }}>
                <span style={{ color: "#34d399", flexShrink: 0 }}>✓</span> {t}
              </div>
            ))}
          </div>
        </div>

        {/* 4-phase timeline */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", borderTop: "1px solid #ffffff08" }}>
          {journeyPhases.map((phase, i) => (
            <div key={phase.title} className="aij-phase" style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `all 0.4s ${0.8 + i * 0.15}s`,
              borderLeft: i > 0 ? "1px solid #ffffff08" : "none",
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", color: phase.color + "88", marginBottom: 12 }}>{phase.step}</div>
              <div className="aij-phase-icon" style={{ background: phase.color + "15", border: `1px solid ${phase.color}44` }}>{phase.icon}</div>
              <h4 className="aij-phase-title" style={{ color: phase.color }}>{phase.title}</h4>
              <p className="aij-phase-desc">{phase.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", borderTop: "1px solid #ffffff08", marginTop: 0, flexWrap: "wrap" }}>
          {[
            { num: `${c80}%`,    label: "Repetitive tasks automated", color: "#29abe2" },
            { num: `${c3}×`,     label: "Team output increase",       color: "#f5a623" },
            { num: `${c6} wks`,  label: "Average delivery time",      color: "#34d399" },
          ].map((stat, i) => (
            <div key={stat.label} className="aij-stat" style={{ borderLeft: i > 0 ? "1px solid #ffffff08" : "none" }}>
              <div className="aij-stat-num" style={{ color: stat.color }}>{stat.num}</div>
              <div className="aij-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   VIDEO SECTION
───────────────────────────────────────────── */
function VideoSection() {
  const { ref, visible } = useInView(0.1);
  const [playing, setPlaying] = useState(false);

  return (
    <section ref={ref} style={{ padding: "80px 16px", background: "linear-gradient(180deg,#08112a,#060f2e)" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p className="aip-section-eyebrow" style={{ color: "#29abe2" }}>Watch</p>
          <h2 style={{ fontSize: "clamp(22px,3.5vw,36px)", fontWeight: 800, color: "#f1f5f9", margin: "0 0 10px" }}>
            The AI Product Journey
          </h2>
          <p style={{ fontSize: 14, color: "#94a3b8" }}>
            See how a software business transforms — from idea to impact
          </p>
        </div>

        <div className="aij-video-outer" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s 0.1s",
        }}>
          {playing && YOUTUBE_VIDEO_ID ? (
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
              title="AI Product Journey"
              allow="autoplay; fullscreen"
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          ) : (
            <div className="aij-video-placeholder" onClick={() => YOUTUBE_VIDEO_ID && setPlaying(true)}
              style={{ cursor: YOUTUBE_VIDEO_ID ? "pointer" : "default" }}>
              <div className="aij-video-bg" />

              {/* Floating journey mini-animation */}
              <div className="aij-video-flow" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s 0.4s" }}>
                {journeyPhases.map((p, i) => (
                  <div key={p.title} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div className="aij-flow-step" style={{
                      background: p.color + "22", border: `1px solid ${p.color}55`,
                      animationDelay: `${i * 0.4}s`,
                    }}>
                      <span>{p.icon}</span>
                      <span style={{ fontSize: 10, color: p.color, fontWeight: 600 }}>{p.title}</span>
                    </div>
                    {i < 3 && <span style={{ color: "#4b5563", fontSize: 14 }}>→</span>}
                  </div>
                ))}
              </div>

              {/* Play button overlay */}
              <div style={{ position: "relative", zIndex: 3, textAlign: "center", marginTop: 32 }}>
                <div className={`aij-play-btn ${!YOUTUBE_VIDEO_ID ? "aij-play-disabled" : ""}`}>
                  <span style={{ fontSize: 22, marginLeft: 4 }}>▶</span>
                </div>
                <p style={{ color: "#94a3b8", fontSize: 13, marginTop: 14 }}>
                  {YOUTUBE_VIDEO_ID ? "Click to play the 90-second demo" : "Video demo coming soon"}
                </p>
                {!YOUTUBE_VIDEO_ID && (
                  <div style={{ marginTop: 10, display: "inline-flex", gap: 6, alignItems: "center", background: "#f5a62318", border: "1px solid #f5a62340", borderRadius: 8, padding: "5px 12px" }}>
                    <span style={{ fontSize: 11, color: "#f5a623" }}>Set YOUTUBE_VIDEO_ID in page.tsx to activate</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CONCEPT CARD
───────────────────────────────────────────── */
function ConceptCard({ concept }: { concept: typeof concepts[0] }) {
  const { ref, visible } = useInView(0.15);
  const { Anim } = concept;
  return (
    <div ref={ref} className={`aic-card ${visible ? "aic-card-in" : ""}`}>
      <div className="aic-anim-wrapper"><Anim active={visible} /></div>
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
  const filtered = activeCategory === "All" ? concepts : concepts.filter(c => c.category === activeCategory);

  return (
    <>
      <style>{`
        /* ── Concept cards ── */
        .aic-card {
          background: linear-gradient(135deg,#0d1b4b 0%,#111827 100%);
          border: 1px solid #ffffff0f;
          border-radius: 16px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s, transform 0.5s, border-color 0.3s, box-shadow 0.3s;
        }
        .aic-card-in { opacity:1; transform:translateY(0); }
        .aic-card:hover { border-color:#29abe244; box-shadow:0 8px 32px #29abe211; }
        .aic-anim-wrapper {
          height:130px; background:#060f2e;
          display:flex; align-items:center; justify-content:center;
          border-bottom:1px solid #ffffff08; position:relative; overflow:hidden;
        }
        .aic-card-body { padding:16px; }
        .aic-category-tag { font-size:10px; font-weight:600; letter-spacing:.08em; text-transform:uppercase; color:#29abe2; display:block; margin-bottom:6px; }
        .aic-card-title { font-size:15px; font-weight:700; color:#f1f5f9; margin:0 0 4px; line-height:1.3; }
        .aic-card-tagline { font-size:12px; color:#94a3b8; margin:0 0 10px; }
        .aic-usecase { background:#ffffff06; border:1px solid #ffffff0a; border-radius:8px; padding:8px 10px; }
        .aic-usecase-label { font-size:9px; text-transform:uppercase; letter-spacing:.1em; color:#f5a623; font-weight:600; display:block; margin-bottom:4px; }
        .aic-usecase-text { font-size:11px; color:#cbd5e1; line-height:1.5; margin:0; }

        /* ── Shared animation helpers ── */
        .aic-anim-box { display:flex; align-items:center; justify-content:center; width:100%; height:100%; position:relative; }
        .aic-label { position:absolute; bottom:6px; left:50%; transform:translateX(-50%); font-size:9px; color:#64748b; white-space:nowrap; letter-spacing:.05em; }
        .aic-svg { position:absolute; top:0; left:0; width:100%; height:100%; }

        /* ── LLM ── */
        .aic-node { position:absolute; width:12px; height:12px; border-radius:50%; background:radial-gradient(circle,#29abe2,#1a237e); animation:aicPulse 1.8s infinite; }
        @keyframes aicPulse { 0%,100%{box-shadow:0 0 0 0 #29abe244;} 50%{box-shadow:0 0 0 5px #29abe200;} }
        .aic-token { position:absolute; width:8px; height:8px; border-radius:50%; background:#f5a623; box-shadow:0 0 8px #f5a623; animation:aicTokenMove 2.5s linear infinite; }
        @keyframes aicTokenMove { 0%{left:15%;top:25%;} 25%{left:50%;top:15%;} 50%{left:82%;top:25%;} 75%{left:50%;top:75%;} 100%{left:15%;top:25%;} }

        /* ── GenAI ── */
        .aic-genai-center { width:44px;height:44px;border-radius:50%;background:radial-gradient(circle,#29abe244,#1a237e88);display:flex;align-items:center;justify-content:center;z-index:2; }
        .aic-spark { position:absolute;width:6px;height:6px;border-radius:50%;background:#f5a623;animation:aicSparkOut 1.2s ease-out infinite;transform-origin:center; }
        @keyframes aicSparkOut { 0%{transform:rotate(var(--angle)) translateX(10px) scale(1);opacity:1;} 100%{transform:rotate(var(--angle)) translateX(55px) scale(0);opacity:0;} }

        /* ── NLP ── */
        .aic-word { display:inline-block;padding:2px 6px;border-radius:4px;font-size:11px;font-weight:500; }
        .aic-tag { font-size:9px;padding:2px 7px;border-radius:10px;color:#e2e8f0; }

        /* ── RAG ── */
        .aic-pipeline-step { display:flex;align-items:center;gap:6px;width:100%; }
        .aic-pipeline-bar { height:6px;border-radius:3px;min-width:0; }

        /* ── Prompt ── */
        .aic-prompt-box { display:flex;flex-direction:column;gap:2px;border:1px solid;border-radius:6px;padding:5px 7px;min-width:70px;background:#060f2e; }
        .aic-arrow { color:#29abe2;font-size:16px;font-weight:bold;transition:transform 0.3s; }
        .aic-arrow-active { animation:aicArrowPulse 0.8s ease-in-out infinite alternate; }
        @keyframes aicArrowPulse { from{transform:translateX(-3px);} to{transform:translateX(3px);} }

        /* ── Coding agents ── */
        .aic-terminal { background:#000;border:1px solid #ffffff11;border-radius:6px;padding:8px 10px;width:100%;font-family:monospace; }
        .aic-code-line { font-size:10px;line-height:1.7; }

        /* ── Multi-modal ── */
        .aic-modal-input { display:flex;align-items:center;gap:5px;padding:4px 8px;border:1px solid;border-radius:8px;background:#060f2e; }

        /* ── MCP ── */
        .aic-hub { position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#1a237e,#0d2f4f);border:1.5px solid #29abe2;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#29abe2;z-index:2; }
        .aic-tool-pill { position:absolute;transform:translate(-50%,-50%);background:#060f2e;border:1px solid #29abe244;border-radius:8px;padding:2px 6px;font-size:9px;color:#94a3b8;white-space:nowrap; }

        /* ── Skills ── */
        .aic-skill-pill { background:#1a237e44;border:1px solid #29abe244;border-radius:20px;padding:3px 9px;font-size:9px;color:#93c5fd; }

        /* ── Conversational ── */
        .aic-bubble { max-width:80%;padding:5px 9px;border-radius:10px;font-size:10px;line-height:1.4; }
        .aic-bubble-right { align-self:flex-end;background:#1a237e;color:#e2e8f0;margin-left:auto; }
        .aic-bubble-left { align-self:flex-start;background:#164e63;color:#e2e8f0; }

        /* ── Recommendation ── */
        .aic-rec-item { display:flex;align-items:center;gap:6px;background:#060f2e;border:1px solid #ffffff0a;border-radius:6px;padding:5px 8px;width:100%; }
        .aic-score { font-size:10px;font-weight:600;white-space:nowrap; }

        /* ── Speech ── */
        .aic-wave-bar { width:4px;background:#29abe2;border-radius:2px;animation:aicWave 0.8s ease-in-out infinite alternate; }
        @keyframes aicWave { from{transform:scaleY(0.4);opacity:0.5;} to{transform:scaleY(1);opacity:1;} }

        /* ── Voice AI ── */
        .aic-mic { width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#1a237e,#0d2f4f);display:flex;align-items:center;justify-content:center;font-size:22px;transition:box-shadow 0.5s; }
        .aic-voice-bar { width:5px;background:linear-gradient(180deg,#29abe2,#1a237e);border-radius:3px;animation:aicVoice 0.6s ease-in-out infinite alternate; }
        @keyframes aicVoice { from{transform:scaleY(0.3);} to{transform:scaleY(1);} }

        /* ── Concept filter tabs ── */
        .aic-tab { padding:6px 16px;border-radius:20px;font-size:13px;font-weight:500;cursor:pointer;border:1px solid #ffffff15;background:transparent;color:#94a3b8;transition:all 0.2s; }
        .aic-tab:hover { color:#e2e8f0;border-color:#29abe255; }
        .aic-tab-active { background:#29abe2;border-color:#29abe2;color:#fff; }

        /* ── Product cards ── */
        .aip-card { background:linear-gradient(135deg,#0d1b4b,#111827);border:1px solid #ffffff0a;border-radius:12px;padding:16px;transition:all 0.3s; }
        .aip-card:hover { background:linear-gradient(135deg,#0f1f54,#161f33);box-shadow:0 4px 24px #00000040; }
        .aip-title { font-size:14px;font-weight:700;color:#f1f5f9;margin:0 0 4px; }
        .aip-desc { font-size:12px;color:#94a3b8;margin:0 0 8px;line-height:1.5; }
        .aip-metric { display:inline-block;font-size:10px;font-weight:600;padding:3px 8px;border-radius:6px;border:1px solid; }
        .aip-tab { padding:8px 18px;border-radius:20px;font-size:13px;font-weight:500;cursor:pointer;border:1px solid;transition:all 0.2s; }
        .aip-section-eyebrow { font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#f5a623;margin-bottom:12px; }
        .aip-section-title { font-size:clamp(24px,4vw,40px);font-weight:800;color:#f1f5f9;margin:0 0 16px;line-height:1.2; }

        /* ── Journey section ── */
        .aij-state { background:#060f2e;border:1px solid #ffffff0d;border-radius:16px;padding:20px 24px;min-width:220px;flex:1;max-width:320px; }
        .aij-state-label { font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:12px; }
        .aij-state-item { font-size:12px;color:#94a3b8;padding:6px 0;display:flex;gap:8px;align-items:center;border-bottom:1px solid #ffffff06; }
        .aij-state-item:last-child { border-bottom:none; }
        .aij-transform-arrow { font-size:28px;color:#29abe2;animation:aijArrow 1s ease-in-out infinite alternate; }
        @keyframes aijArrow { from{transform:translateX(-4px);opacity:0.6;} to{transform:translateX(4px);opacity:1;} }
        .aij-phase { padding:28px 24px;text-align:center;position:relative; }
        .aij-phase-icon { width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;margin:0 auto 12px; }
        .aij-phase-title { font-size:16px;font-weight:700;margin:0 0 6px; }
        .aij-phase-desc { font-size:12px;color:#94a3b8;margin:0;line-height:1.5; }
        .aij-stat { flex:1;padding:24px 32px;text-align:center;min-width:160px; }
        .aij-stat-num { font-size:38px;font-weight:800;line-height:1;margin-bottom:6px; }
        .aij-stat-label { font-size:12px;color:#94a3b8; }

        /* ── Video section ── */
        .aij-video-outer { border-radius:16px;overflow:hidden;border:1px solid #29abe244;aspect-ratio:16/9;box-shadow:0 0 60px #29abe218;position:relative; }
        .aij-video-placeholder { width:100%;height:100%;background:linear-gradient(135deg,#060f2e,#0d1b4b);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden;padding:24px; }
        .aij-video-bg { position:absolute;inset:0;background:radial-gradient(ellipse at 30% 50%,#29abe218 0%,transparent 60%),radial-gradient(ellipse at 70% 50%,#1a237e22 0%,transparent 60%);animation:aijVideoBg 4s ease-in-out infinite alternate; }
        @keyframes aijVideoBg { from{opacity:0.5;transform:scale(1);} to{opacity:1;transform:scale(1.05);} }
        .aij-video-flow { display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:center;position:relative;z-index:2; }
        .aij-flow-step { display:flex;align-items:center;gap:6px;padding:8px 14px;border-radius:10px;animation:aijFlowPulse 2s ease-in-out infinite alternate; }
        @keyframes aijFlowPulse { from{opacity:0.7;transform:translateY(0);} to{opacity:1;transform:translateY(-3px);} }
        .aij-play-btn { width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#29abe2,#1a237e);display:flex;align-items:center;justify-content:center;margin:0 auto;box-shadow:0 0 0 8px #29abe222,0 0 0 16px #29abe211;animation:aijPlayPulse 2s ease-in-out infinite;cursor:pointer; }
        .aij-play-disabled { background:linear-gradient(135deg,#334155,#1e293b);cursor:default;box-shadow:0 0 0 8px #33415520,0 0 0 16px #33415510;animation:none; }
        @keyframes aijPlayPulse { 0%,100%{box-shadow:0 0 0 8px #29abe222,0 0 0 16px #29abe211;} 50%{box-shadow:0 0 0 14px #29abe214,0 0 0 28px #29abe208;} }
      `}</style>

      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <main style={{ background: "linear-gradient(180deg,#060f2e 0%,#0d1b4b 30%,#0a0a0a 100%)", minHeight: "100vh", paddingTop: 80 }}>

        {/* ── Hero ── */}
        <div style={{ padding: "60px 16px 48px", textAlign: "center" }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "#29abe2", marginBottom: 12 }}>
            AI Knowledge Hub
          </p>
          <h1 style={{ fontSize: "clamp(28px,5vw,50px)", fontWeight: 800, color: "#f1f5f9", margin: "0 auto 16px", lineHeight: 1.2, maxWidth: 720 }}>
            AI Concepts, Products &{" "}
            <span style={{ background: "linear-gradient(90deg,#29abe2,#f5a623)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Business Impact
            </span>
          </h1>
          <p style={{ fontSize: 16, color: "#94a3b8", maxWidth: 580, margin: "0 auto 12px", lineHeight: 1.6 }}>
            Understand the AI technologies reshaping software businesses — and see the real products Thiravugal builds using them.
          </p>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginTop: 24 }}>
            <a href="#journey" style={{ padding: "10px 24px", borderRadius: 24, background: "linear-gradient(135deg,#29abe2,#1a237e)", color: "#fff", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
              See the Journey ↓
            </a>
            <a href="#products" style={{ padding: "10px 24px", borderRadius: 24, border: "1px solid #ffffff22", color: "#e2e8f0", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
              View AI Products ↓
            </a>
          </div>
        </div>

        {/* ── Journey Section ── */}
        <div id="journey"><JourneySection /></div>

        {/* ── Video Section ── */}
        <VideoSection />

        {/* ── Products Section ── */}
        <div id="products"><ProductsSection /></div>

        {/* ── AI Concepts Header ── */}
        <div id="concepts" style={{ textAlign: "center", padding: "72px 16px 32px", borderTop: "1px solid #ffffff08" }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "#29abe2", marginBottom: 12 }}>
            Technology Deep-Dive
          </p>
          <h2 style={{ fontSize: "clamp(22px,4vw,38px)", fontWeight: 800, color: "#f1f5f9", margin: "0 auto 14px", lineHeight: 1.2, maxWidth: 640 }}>
            15 AI Concepts — Animated
          </h2>
          <p style={{ fontSize: 15, color: "#94a3b8", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Each concept explained visually with a real-world business use case.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {conceptCategories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`aic-tab ${activeCategory === cat ? "aic-tab-active" : ""}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Concept Cards Grid ── */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px 80px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {filtered.map(concept => <ConceptCard key={concept.id} concept={concept} />)}
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign: "center", padding: "64px 16px 80px", borderTop: "1px solid #ffffff0a", background: "linear-gradient(180deg,transparent,#060f2e)" }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#f1f5f9", marginBottom: 12 }}>
            Ready to build AI into your business?
          </h2>
          <p style={{ color: "#94a3b8", marginBottom: 28, fontSize: 14 }}>
            Thiravugal consults, builds, and deploys custom AI — chatbots, agents, voice AI, automation — tailored to your workflows.
          </p>
          <a href="/#contact" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "linear-gradient(135deg,#f5a623,#e0921a)",
            color: "#fff", fontWeight: 700, fontSize: 14,
            padding: "13px 30px", borderRadius: 30, textDecoration: "none",
            boxShadow: "0 4px 20px #f5a62344",
          }}>
            Talk to Us — It&apos;s Free →
          </a>
        </div>
      </main>

      <Footer hideCta />
    </>
  );
}

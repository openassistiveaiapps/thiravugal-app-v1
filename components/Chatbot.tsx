"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, ArrowRight } from "lucide-react";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
  link?: { label: string; href: string };
};

const SENSITIVE_RESPONSE =
  "That's a great question! For accurate details on this, our counsellors would love to help you personally — it only takes 2 minutes.";

const QA: { keywords: string[]; text: string; link?: { label: string; href: string } }[] = [
  {
    keywords: ["hi", "hello", "hey", "helo", "hai", "start", "help"],
    text: "Hi there! 👋 I'm Thiravugal's assistant. I can help you with:\n\n📚 IT Training Programs (AI/ML, DSA, Full Stack, Cloud)\n🤖 AI Solutions we build for businesses\n\nWhat would you like to know?",
  },
  {
    keywords: ["what is thiravugal", "about thiravugal", "about you", "who are you", "tell me about"],
    text: "Thiravugal is an AI-first tech company with two arms:\n\n📚 IT Training — We upskill engineers in AI/ML, DSA, Full Stack, and Cloud with industry SME mentors.\n\n🏗️ AI Products — We design and build AI-powered software for businesses — chatbots, agents, automation, and full web products.\n\nOne mission: making businesses and careers smarter with AI.",
  },
  {
    keywords: ["courses", "programs", "offer", "what do you teach", "what you teach", "training"],
    text: "We offer 6 programs:\n\n🤖 AI & Machine Learning\n🧩 DSA & System Design\n💻 Full Stack + AI Integration\n⚙️ Backend & System Design\n☁️ Cloud & DevOps\n🚀 IT Foundations Bootcamp\n\nAll programs are taught by industry SMEs with hands-on, project-based learning.",
  },
  {
    keywords: ["ai", "machine learning", "ml", "llm", "agents", "rag", "mcp", "generative", "gpt", "langchain"],
    text: "Our AI & ML program is our flagship! You'll learn:\n\n• LLMs (GPT-4, Claude, Gemini, Llama)\n• RAG — Retrieval Augmented Generation\n• AI Agents using LangChain & CrewAI\n• MCP (Model Context Protocol)\n• Vector Databases (Pinecone, ChromaDB)\n• Fine-tuning & Prompt Engineering\n\nYou'll build and ship real AI agents — not toy demos.",
  },
  {
    keywords: ["dsa", "data structure", "algorithm", "problem solving", "leetcode", "interview", "faang"],
    text: "Our DSA & System Design program is our most enrolled course! It covers:\n\n• Arrays, Linked Lists, Trees, Graphs\n• Dynamic Programming\n• High-Level & Low-Level Design (HLD/LLD)\n• System architecture & trade-off analysis\n\nDesigned to help you crack FAANG and top product company interviews.",
  },
  {
    keywords: ["full stack", "react", "node", "web development", "frontend", "backend"],
    text: "Our Full Stack + AI Integration course teaches React, Node.js, databases, and how to integrate AI APIs (OpenAI, Claude) into production web apps. You'll build AI-powered full-stack applications from scratch.",
  },
  {
    keywords: ["devops", "cloud", "aws", "docker", "kubernetes", "k8s"],
    text: "Our Cloud & DevOps program covers AWS, Docker, Kubernetes, Terraform, and CI/CD pipelines. You'll learn to deploy AI models and full-stack apps with industry-standard practices.",
  },
  {
    keywords: ["beyond coding", "system design", "human centered", "user need", "communication", "soft skill"],
    text: "Beyond Coding is our unique philosophy — we teach 4 pillars that go beyond syntax:\n\n🏗️ Systems Thinking & Design\n🧭 Understanding User Needs\n🤖 AI-Centric Solution Design\n💬 Engineering Communication\n\nThis is what separates a good coder from a great engineer.",
  },
  {
    keywords: ["real world", "project", "build", "crm", "erp", "instagram", "twitter", "ecommerce"],
    text: "You'll build real-world systems like:\n\n🏢 CRM — Lead pipelines, deal tracking\n🏭 ERP — HR, Finance, Inventory modules\n📸 Social Platform (Instagram-like)\n🐦 Twitter-like feed system\n🛒 E-Commerce platform\n📊 BI Dashboard with AI forecasting\n\nNo toy projects. Only production-grade systems.",
  },
  {
    keywords: ["duration", "how long", "months", "weeks", "time"],
    text: "Program durations vary:\n\n🤖 AI & ML — 5 months\n🧩 DSA & System Design — 4 months\n💻 Full Stack + AI — 6 months\n⚙️ Backend — 4 months\n☁️ Cloud & DevOps — 3 months\n🚀 IT Foundations — 2 months\n\nAll include live + recorded sessions so you can learn at your pace.",
  },
  {
    keywords: ["online", "offline", "mode", "live", "recorded", "class", "schedule"],
    text: "We offer both live classes and recorded sessions. You can attend live or watch recordings anytime — so you never miss a class regardless of your schedule.",
  },
  {
    keywords: ["certificate", "certification", "credential"],
    text: "Yes! You'll earn industry-recognized certifications on course completion. These certifications are designed to boost your LinkedIn profile and are valued by top tech recruiters.",
  },
  {
    keywords: ["placement", "job", "hire", "career", "referral"],
    text: "We provide 100% placement assistance — resume reviews, mock interviews, and direct referrals to our hiring partners. We stand behind our training with a placement guarantee.",
  },
  {
    keywords: ["enroll", "join", "admission", "sign up", "register", "start"],
    text: "Getting started is easy! Fill out our contact form and our counsellors will reach out within 2 hours to guide you to the right program.",
    link: { label: "Fill Contact Form →", href: "#contact" },
  },
  {
    keywords: ["fee", "fees", "cost", "price", "pricing", "how much", "payment", "emi", "installment", "rupee", "money"],
    text: SENSITIVE_RESPONSE,
    link: { label: "Talk to a Counsellor →", href: "#contact" },
  },
  {
    keywords: ["trainer", "mentor", "instructor", "teacher", "who teaches", "faculty"],
    text: SENSITIVE_RESPONSE,
    link: { label: "Ask Our Team →", href: "#contact" },
  },
  {
    keywords: ["contact", "reach", "call", "whatsapp", "email", "talk", "speak"],
    text: "You can reach us at:\n📞 +91 99418 74780\n📧 support@thiravugal.in\n📍 Chennai, Tamil Nadu\n\nOr fill out our contact form — for training enquiries or business projects!",
    link: { label: "Open Contact Form →", href: "#contact" },
  },

  // ── AI Solutions / Products ──────────────────────────────────────────────
  {
    keywords: ["ai solution", "ai product", "products", "build for", "build ai", "you build", "services", "what do you build", "software", "develop"],
    text: "Beyond training, Thiravugal builds AI-powered software for businesses:\n\n🤖 AI Agents — autonomous agents that reason & execute tasks\n💬 AI Chatbots — trained on your business data\n🎙️ Voice AI — voice bots for calls & support\n⚙️ AI Automation — workflows that run themselves\n🌐 Websites & Web Apps — modern, AI-integrated products\n\nWe make your business simple using AI.",
    link: { label: "View Our Products →", href: "/products" },
  },
  {
    keywords: ["chatbot", "chat bot", "customer support bot", "support bot", "whatsapp bot", "business chatbot"],
    text: "We build intelligent AI Chatbots trained on your business data:\n\n✅ Available 24/7 — never miss a customer query\n✅ Trained on your docs, FAQs, and product info\n✅ Supports WhatsApp, website, and mobile\n✅ Reduces support cost by up to 60%\n\nFrom lead capture bots to full customer service agents — we handle it end to end.",
    link: { label: "Enquire About Chatbots →", href: "/#contact" },
  },
  {
    keywords: ["ai agent", "autonomous agent", "agentic", "agent", "automate task", "task automation"],
    text: "Our AI Agents go beyond chatbots — they think, plan, and act:\n\n🧠 Reason through complex multi-step tasks\n🔗 Integrate with your CRM, email, calendar, and APIs\n📋 Execute workflows autonomously (no human in the loop)\n📊 Generate reports, analyse data, take actions\n\nBuilt using LangChain, CrewAI, and custom agent frameworks.",
    link: { label: "Discuss Your Use Case →", href: "/#contact" },
  },
  {
    keywords: ["voice ai", "voice bot", "voice agent", "ivr", "call bot", "phone bot", "speech"],
    text: "Our Voice AI solutions handle real phone calls and conversations:\n\n📞 AI-powered inbound & outbound call agents\n🗣️ Natural language understanding in English & Tamil\n🏥 Used in healthcare, retail, and customer support\n⚡ Responds instantly — no hold time\n\nGreat for appointment booking, order status, and support calls.",
    link: { label: "Talk to Us →", href: "/#contact" },
  },
  {
    keywords: ["automation", "workflow", "automate", "rpa", "process", "document", "data extraction"],
    text: "We build AI Automation that eliminates manual, repetitive work:\n\n📄 Document processing & data extraction (invoices, forms)\n📧 Automated email/report generation\n🔄 Multi-system workflow integration\n📊 AI-powered dashboards & forecasting\n\nWe analyse your business processes and design automation that saves real hours.",
    link: { label: "Get Automation Consultation →", href: "/#contact" },
  },
  {
    keywords: ["website", "web app", "web application", "landing page", "webapp", "app development", "mobile app"],
    text: "We build modern, fast, AI-integrated web products:\n\n⚡ High-performance websites (like this one!)\n🛒 E-commerce & SaaS platforms\n📊 Business dashboards with AI insights\n🤖 AI-powered features embedded in your product\n\nBuilt with Next.js, React, and cloud-native architecture.",
    link: { label: "Start Your Project →", href: "/#contact" },
  },
  {
    keywords: ["industry", "who is it for", "business", "startup", "enterprise", "small business", "client"],
    text: "We build AI solutions for businesses of all sizes:\n\n🏪 Small Businesses — chatbots, booking bots, websites\n🏢 Mid-sized Companies — automation, AI agents, dashboards\n🏭 Enterprises — custom AI systems, integrations, LLM solutions\n\nIndustries: Healthcare, Retail, Finance, Education, Logistics, and more.",
    link: { label: "Talk to Our Team →", href: "/#contact" },
  },
  {
    keywords: ["how long to build", "timeline", "delivery", "how much time", "project time"],
    text: "Project timelines depend on scope:\n\n⚡ Simple chatbot or landing page — 1–2 weeks\n🤖 AI Agent or automation — 3–6 weeks\n🌐 Full web application — 6–12 weeks\n\nWe follow an agile process with regular demos so you see progress throughout.",
    link: { label: "Get a Timeline Estimate →", href: "/#contact" },
  },
  {
    keywords: ["cost", "price", "pricing", "how much does it cost", "budget", "quote", "estimate", "business enquiry"],
    text: "Pricing depends on the scope and complexity of your project. We offer flexible models — fixed price, milestone-based, or retainer.\n\nDrop us a message and we'll share a custom estimate within 24 hours!",
    link: { label: "Request a Quote →", href: "/#contact" },
  },
  {
    keywords: ["technology", "tech stack", "built with", "which technology", "stack", "framework"],
    text: "We use modern, production-grade technology:\n\n🧠 AI/LLM — OpenAI, Claude, Gemini, Llama\n🔗 Agents — LangChain, CrewAI, MCP\n🗄️ Vector DBs — Pinecone, ChromaDB, pgvector\n⚛️ Frontend — React, Next.js, Tailwind\n🖥️ Backend — Node.js, FastAPI, PostgreSQL\n☁️ Cloud — AWS, GCP, Vercel, Docker",
  },
  {
    keywords: ["why thiravugal", "why choose", "why you", "what makes you different", "unique", "different"],
    text: "What makes Thiravugal different:\n\n🧠 AI-First — We don't bolt on AI. We build around it.\n👨‍💻 Built by Engineers — Our team ships real production systems.\n🤝 End-to-End — From idea to deployment, we own it.\n🔁 Training + Build — We train your team AND build the product.\n📍 Chennai-based — Local team, global standards.",
    link: { label: "See Our Work →", href: "/products" },
  },
];

const QUICK_REPLIES = [
  "What AI products do you build?",
  "Tell me about AI Chatbots",
  "What courses do you offer?",
  "How do I enroll?",
];

function getResponse(input: string): { text: string; link?: { label: string; href: string } } {
  const lower = input.toLowerCase();
  for (const qa of QA) {
    if (qa.keywords.some((k) => lower.includes(k))) {
      return { text: qa.text, link: qa.link };
    }
  }
  return {
    text: "I'm not sure about that yet! Our counsellors can answer anything you need — reach out via the contact form and we'll get back to you within 2 hours.",
    link: { label: "Contact Us →", href: "#contact" },
  };
}

let idCounter = 1;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: idCounter++,
      role: "bot",
      text: "Hi! 👋 I'm the Thiravugal assistant. Ask me about our AI solutions for businesses, IT training programs, or anything else. How can I help?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setShowQuickReplies(false);

    const userMsg: Message = { id: idCounter++, role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const { text: botText, link } = getResponse(text);
      setMessages((prev) => [
        ...prev,
        { id: idCounter++, role: "bot", text: botText, link },
      ]);
      setTyping(false);
    }, 800);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        style={{ background: "linear-gradient(135deg, #1a237e, #29abe2)" }}
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat popup */}
      {open && (
        <div
          className="fixed bottom-24 right-4 sm:right-5 z-50 w-[calc(100vw-2rem)] sm:w-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{ maxHeight: "75vh", background: "#fff", border: "1px solid #e5e7eb" }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center gap-3 shrink-0"
            style={{ background: "linear-gradient(135deg, #1a237e, #29abe2)" }}
          >
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-display font-bold text-white text-sm">Thiravugal Assistant</div>
              <div className="text-white/70 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Online · Replies instantly
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-[#1a237e]/10 flex items-center justify-center shrink-0 mr-2 mt-0.5">
                    <Bot className="w-4 h-4 text-[#1a237e]" />
                  </div>
                )}
                <div className="max-w-[80%]">
                  <div
                    className={`px-3 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-[#1a237e] text-white rounded-br-sm"
                        : "bg-white text-gray-800 border border-gray-100 rounded-bl-sm shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.link && (
                    <a
                      href={msg.link.href}
                      onClick={() => setOpen(false)}
                      className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-[#29abe2] hover:text-[#1a237e] transition-colors"
                    >
                      {msg.link.label}
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#1a237e]/10 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-[#1a237e]" />
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-3 py-2.5 shadow-sm flex gap-1 items-center">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quick replies */}
            {showQuickReplies && !typing && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[#29abe2]/40 text-[#1a237e] bg-white hover:bg-blue-50 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="px-3 py-2.5 bg-white border-t border-gray-100 flex gap-2 shrink-0"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 text-sm px-3 py-2 rounded-xl border border-gray-200 focus:border-[#29abe2] focus:ring-2 focus:ring-[#29abe2]/20 outline-none text-gray-800"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all disabled:opacity-40"
              style={{ background: "linear-gradient(135deg, #1a237e, #29abe2)" }}
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

"use client";

import { Bot, Brain, Database, Zap, ArrowRight, CheckCircle2, Cpu } from "lucide-react";

const aiConcepts = [
  {
    icon: Brain,
    title: "Large Language Models (LLMs)",
    desc: "Understand how GPT-4, Claude, Gemini & Llama work under the hood — not just as APIs, but as architectures you can deploy, fine-tune, and evaluate.",
    topics: ["Transformer Architecture", "Tokenization & Embeddings", "Context Windows", "Temperature & Sampling", "Model Evaluation Metrics", "OpenAI / Anthropic / Gemini APIs"],
    color: "#a855f7",
    bg: "from-purple-900/50 to-purple-800/20",
    border: "border-purple-500/20",
  },
  {
    icon: Database,
    title: "RAG — Retrieval Augmented Generation",
    desc: "Ground LLMs in your own data. Build RAG pipelines that retrieve the right context at query time, eliminating hallucinations and enabling domain-specific AI.",
    topics: ["Vector Embeddings & Similarity Search", "Pinecone / Weaviate / ChromaDB", "Chunking Strategies", "Hybrid Search (BM25 + Vector)", "Re-ranking & Contextual Retrieval", "Multi-modal RAG (text + images)"],
    color: "#29abe2",
    bg: "from-blue-900/50 to-blue-800/20",
    border: "border-blue-500/20",
  },
  {
    icon: Bot,
    title: "AI Agents & Agentic Workflows",
    desc: "Build autonomous agents that plan, reason, use tools, and complete multi-step tasks — from simple chatbots to complex multi-agent pipelines that run unsupervised.",
    topics: ["ReAct & Chain-of-Thought Agents", "Tool Use & Function Calling", "LangChain & LangGraph", "CrewAI & AutoGen", "Memory Systems (short-term & long-term)", "Agent Evaluation & Guardrails"],
    color: "#22c55e",
    bg: "from-green-900/50 to-green-800/20",
    border: "border-green-500/20",
  },
  {
    icon: Zap,
    title: "MCP — Model Context Protocol",
    desc: "Master Anthropic's open standard for connecting LLMs to external tools and data sources. Build MCP servers that give AI models secure, structured access to your systems.",
    topics: ["MCP Server Architecture", "Tool & Resource Definitions", "Prompt Templates via MCP", "Connecting Databases & APIs", "Building Custom MCP Servers", "Claude Desktop & IDE Integration"],
    color: "#f5a623",
    bg: "from-amber-900/50 to-amber-800/20",
    border: "border-amber-500/20",
  },
];

const agentProjects = [
  {
    emoji: "🔍",
    title: "Research Agent",
    desc: "Autonomously searches the web, synthesizes findings, and produces structured reports — no human in the loop.",
  },
  {
    emoji: "💻",
    title: "Code Review Agent",
    desc: "Analyzes pull requests, flags bugs, enforces style, and suggests improvements like a senior engineer.",
  },
  {
    emoji: "🎧",
    title: "Customer Support Agent",
    desc: "Multi-turn dialogue agent with RAG over your product docs, escalation logic, and CRM integration.",
  },
  {
    emoji: "📄",
    title: "Document Intelligence Agent",
    desc: "Extracts, summarizes, and answers questions over large document sets (contracts, invoices, PDFs).",
  },
  {
    emoji: "📊",
    title: "Data Analysis Agent",
    desc: "Writes and executes Python code in a sandbox to analyse CSVs, generate charts, and answer questions.",
  },
  {
    emoji: "🤝",
    title: "Multi-Agent Workflow",
    desc: "Orchestrate planner → researcher → writer → critic agents using LangGraph or CrewAI to complete complex tasks end-to-end.",
  },
];

const techBadges = [
  // LLM
  { label: "OpenAI GPT-4o", cat: "LLM" },
  { label: "Claude 3.5 / 4", cat: "LLM" },
  { label: "Gemini 1.5 Pro", cat: "LLM" },
  { label: "Llama 3.1 / 3.3", cat: "LLM" },
  { label: "Mistral", cat: "LLM" },
  // RAG & Vector
  { label: "LangChain", cat: "Frameworks" },
  { label: "LangGraph", cat: "Frameworks" },
  { label: "LlamaIndex", cat: "Frameworks" },
  { label: "CrewAI", cat: "Frameworks" },
  { label: "AutoGen", cat: "Frameworks" },
  { label: "Semantic Kernel", cat: "Frameworks" },
  // Vector DBs
  { label: "Pinecone", cat: "Vector DB" },
  { label: "Weaviate", cat: "Vector DB" },
  { label: "ChromaDB", cat: "Vector DB" },
  { label: "pgvector", cat: "Vector DB" },
  // AI Concepts
  { label: "RAG", cat: "Technique" },
  { label: "MCP", cat: "Protocol" },
  { label: "Function Calling", cat: "Technique" },
  { label: "Fine-tuning", cat: "Technique" },
  { label: "RLHF", cat: "Technique" },
  { label: "Prompt Engineering", cat: "Technique" },
  { label: "Embeddings", cat: "Technique" },
  { label: "Tool Use", cat: "Technique" },
  { label: "Structured Outputs", cat: "Technique" },
  // Infra
  { label: "Hugging Face", cat: "Infra" },
  { label: "Ollama", cat: "Infra" },
  { label: "vLLM", cat: "Infra" },
  { label: "Modal", cat: "Infra" },
];

const catColors: Record<string, string> = {
  LLM: "#a855f7",
  Frameworks: "#29abe2",
  "Vector DB": "#22c55e",
  Technique: "#f5a623",
  Protocol: "#f97316",
  Infra: "#14b8a6",
};

export default function AITraining() {
  return (
    <section className="py-20 sm:py-24 bg-gray-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-700/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#29abe2]/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute inset-0 pattern-overlay opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-[#a855f7] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            <Cpu className="w-3.5 h-3.5" />
            AI Training Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
            We Train You to Build{" "}
            <span className="gradient-text">Real AI Systems</span>
            <br className="hidden sm:block" />
            — Agents, RAG, MCP & Beyond
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Not prompt hacks or wrapper apps. You&apos;ll architect, build, and ship
            production AI — autonomous agents, retrieval pipelines, and protocol-level
            integrations that companies are hiring for right now.
          </p>
        </div>

        {/* 4 core concept cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {aiConcepts.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className={`bg-gradient-to-br ${c.bg} border ${c.border} rounded-2xl sm:rounded-3xl p-5 sm:p-7`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${c.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: c.color }} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base sm:text-lg leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-1">
                  {c.topics.map((t) => (
                    <div key={t} className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-3.5 h-3.5 shrink-0 mt-0.5"
                        style={{ color: c.color }}
                      />
                      <span className="text-white/75 text-xs sm:text-sm">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Agents you'll build */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              AI Agents You&apos;ll Build & Ship
            </h3>
            <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
              Every concept is backed by a real project. You graduate with a portfolio of
              production-grade AI agents — not toy demos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {agentProjects.map((proj) => (
              <div
                key={proj.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 hover:bg-white/8 hover:border-white/20 transition-all"
              >
                <div className="text-2xl sm:text-3xl mb-3">{proj.emoji}</div>
                <h4 className="font-display font-bold text-white text-sm sm:text-base mb-1">
                  {proj.title}
                </h4>
                <p className="text-white/55 text-xs sm:text-sm leading-relaxed">
                  {proj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Full tech stack badges */}
        <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 mb-8">
          <p className="text-white/50 text-xs uppercase tracking-widest font-semibold text-center mb-5">
            Full AI Tech Stack You&apos;ll Master
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
            {techBadges.map((badge) => (
              <span
                key={badge.label}
                className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                style={{
                  background: `${catColors[badge.cat]}12`,
                  borderColor: `${catColors[badge.cat]}30`,
                  color: catColors[badge.cat],
                }}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#programs" className="btn-gold inline-flex">
            <Bot className="w-5 h-5" />
            Explore AI Programs
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

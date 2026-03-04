"use client";

import { useState } from "react";
import {
  Code2,
  Brain,
  Database,
  Cloud,
  GitBranch,
  Layers,
  ArrowRight,
  Clock,
  Users,
  Flame,
} from "lucide-react";

const categories = ["All", "AI-Powered", "DSA & Interviews", "Intermediate", "Beginner"];

const programs = [
  {
    id: 1,
    icon: Brain,
    title: "AI & Machine Learning",
    subtitle: "Python, TensorFlow, LLMs & Generative AI",
    description:
      "Our flagship program. Go from fundamentals to deploying production LLMs and Generative AI apps — with human-centered design thinking woven throughout.",
    duration: "5 months",
    students: "2,100+",
    rating: 4.9,
    badge: "⭐ Flagship",
    badgeColor: "bg-purple-600",
    category: "AI-Powered",
    tags: ["Python", "PyTorch", "LLMs", "LangChain"],
    color: "#a855f7",
    gradient: "from-purple-700 to-[#29abe2]",
    price: "₹29,999",
    originalPrice: "₹59,999",
  },
  {
    id: 2,
    icon: GitBranch,
    title: "DSA & System Design",
    subtitle: "Master algorithms, problem-solving & architecture",
    description:
      "Crack FAANG interviews with deep DSA mastery — plus system design thinking to architect scalable, real-world solutions that solve real user problems.",
    duration: "4 months",
    students: "4,800+",
    rating: 4.9,
    badge: "🔥 Most Enrolled",
    badgeColor: "bg-[#f5a623]",
    category: "DSA & Interviews",
    tags: ["Arrays", "DP", "Graphs", "HLD/LLD"],
    color: "#f5a623",
    gradient: "from-amber-500 to-[#f97316]",
    price: "₹19,999",
    originalPrice: "₹39,999",
  },
  {
    id: 3,
    icon: Code2,
    title: "Full Stack + AI Integration",
    subtitle: "React, Node.js & AI-powered applications",
    description:
      "Build modern full-stack applications powered by AI APIs. Learn to integrate LLMs, vector databases, and AI features into production web apps.",
    duration: "6 months",
    students: "3,200+",
    rating: 4.8,
    badge: "AI-Powered",
    badgeColor: "bg-[#29abe2]",
    category: "AI-Powered",
    tags: ["React", "Node.js", "OpenAI API", "RAG"],
    color: "#29abe2",
    gradient: "from-[#1a237e] to-[#29abe2]",
    price: "₹24,999",
    originalPrice: "₹49,999",
  },
  {
    id: 4,
    icon: Database,
    title: "Backend & System Design",
    subtitle: "Scalable architecture, databases & microservices",
    description:
      "Deep dive into backend engineering with real-world system design. Learn to build for scale with microservices, caching, and distributed systems.",
    duration: "4 months",
    students: "1,500+",
    rating: 4.7,
    badge: "New Batch",
    badgeColor: "bg-[#22c55e]",
    category: "Intermediate",
    tags: ["Node.js", "PostgreSQL", "Redis", "System Design"],
    color: "#22c55e",
    gradient: "from-[#22c55e] to-[#16a34a]",
    price: "₹22,999",
    originalPrice: "₹44,999",
  },
  {
    id: 5,
    icon: Cloud,
    title: "Cloud & DevOps",
    subtitle: "AWS, Docker, Kubernetes & CI/CD",
    description:
      "Master cloud infrastructure and DevOps pipelines. Deploy AI models and full-stack apps with confidence using industry-standard tools.",
    duration: "3 months",
    students: "980+",
    rating: 4.8,
    badge: "Industry Hot",
    badgeColor: "bg-orange-500",
    category: "Intermediate",
    tags: ["AWS", "Docker", "K8s", "Terraform"],
    color: "#f97316",
    gradient: "from-orange-500 to-[#f5a623]",
    price: "₹18,999",
    originalPrice: "₹37,999",
  },
  {
    id: 6,
    icon: Layers,
    title: "IT Foundations Bootcamp",
    subtitle: "Zero to job-ready — Python, Web & Linux",
    description:
      "The perfect launchpad for freshers. Build your programming foundation, understand how the internet works, and get career-ready fast.",
    duration: "2 months",
    students: "5,600+",
    rating: 4.6,
    badge: "Beginner Friendly",
    badgeColor: "bg-teal-500",
    category: "Beginner",
    tags: ["Python", "HTML/CSS", "Git", "Linux"],
    color: "#14b8a6",
    gradient: "from-teal-500 to-[#29abe2]",
    price: "₹12,999",
    originalPrice: "₹24,999",
  },
];

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mb-4">
            <Flame className="w-3.5 h-3.5" />
            Our Programs
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
            AI & DSA First.{" "}
            <span className="gradient-text">Everything Else Next.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our core focus is AI/ML and DSA. We teach you to think, design, and
            build — not just write code. DevOps, Cloud & Full Stack are part of
            a complete engineer&apos;s toolkit.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                activeCategory === cat
                  ? "bg-[#1a237e] text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-[#1a237e] border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 card-hover group"
              >
                {/* Card header */}
                <div
                  className={`bg-gradient-to-br ${program.gradient} p-6 relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span
                      className={`${program.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}
                    >
                      {program.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-1">
                    {program.title}
                  </h3>
                  <p className="text-white/80 text-sm">{program.subtitle}</p>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {program.students}
                    </span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-display font-bold text-[#1a237e]">
                        {program.price}
                      </span>
                      <span className="ml-2 text-sm text-gray-400 line-through">
                        {program.originalPrice}
                      </span>
                    </div>
                    <a
                      href="#contact"
                      className="flex items-center gap-1.5 bg-[#1a237e] hover:bg-[#29abe2] text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all group-hover:shadow-md"
                    >
                      Enroll
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Not sure which program is right for you?
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex"
          >
            Get Free Career Counselling
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

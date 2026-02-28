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
  Star,
  Flame,
} from "lucide-react";

const categories = ["All", "Beginner", "Intermediate", "Advanced", "AI-Powered"];

const programs = [
  {
    id: 1,
    icon: Code2,
    title: "Full Stack Development",
    subtitle: "React, Node.js, Next.js & more",
    description:
      "Build production-grade web apps from scratch. Master React, Node.js, databases, APIs, and deployment on cloud platforms.",
    duration: "6 months",
    students: "3,200+",
    rating: 4.9,
    badge: "Most Popular",
    badgeColor: "bg-[#29abe2]",
    category: "Intermediate",
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    color: "#29abe2",
    gradient: "from-[#1a237e] to-[#29abe2]",
    price: "₹24,999",
    originalPrice: "₹49,999",
  },
  {
    id: 2,
    icon: GitBranch,
    title: "DSA & Competitive Programming",
    subtitle: "Master problem solving for top tech companies",
    description:
      "Crack FAANG interviews with deep mastery of data structures, algorithms, and competitive coding from scratch to advanced.",
    duration: "4 months",
    students: "4,800+",
    rating: 4.8,
    badge: "Interview Ready",
    badgeColor: "bg-[#f5a623]",
    category: "Advanced",
    tags: ["Arrays", "Trees", "DP", "Graphs"],
    color: "#f5a623",
    gradient: "from-[#f5a623] to-[#fbbf24]",
    price: "₹19,999",
    originalPrice: "₹39,999",
  },
  {
    id: 3,
    icon: Brain,
    title: "AI & Machine Learning",
    subtitle: "Python, TensorFlow, LLMs & Generative AI",
    description:
      "From ML fundamentals to deploying LLMs and building Generative AI apps. Learn with real industry projects.",
    duration: "5 months",
    students: "2,100+",
    rating: 4.9,
    badge: "🔥 Trending",
    badgeColor: "bg-purple-500",
    category: "AI-Powered",
    tags: ["Python", "PyTorch", "LLMs", "LangChain"],
    color: "#a855f7",
    gradient: "from-purple-600 to-[#29abe2]",
    price: "₹29,999",
    originalPrice: "₹59,999",
  },
  {
    id: 4,
    icon: Database,
    title: "Backend Engineering",
    subtitle: "System design, databases & microservices",
    description:
      "Deep dive into backend development with scalable architecture, microservices, caching, messaging queues, and system design.",
    duration: "4 months",
    students: "1,500+",
    rating: 4.7,
    badge: "New Batch",
    badgeColor: "bg-[#22c55e]",
    category: "Advanced",
    tags: ["Node.js", "PostgreSQL", "Redis", "Docker"],
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
      "Master cloud infrastructure, containerization, orchestration, and automated deployments for modern software delivery.",
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
    title: "IT Fundamentals Bootcamp",
    subtitle: "Zero to job-ready in 2 months",
    description:
      "Perfect for freshers. Programming basics, web fundamentals, Git, Linux, and career readiness — get your first IT job faster.",
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
            Learn What the{" "}
            <span className="gradient-text">Industry Demands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hands-on, project-based programs designed by industry experts to make
            you job-ready from day one.
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
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#f5a623] fill-[#f5a623]" />
                      {program.rating}
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

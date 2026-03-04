"use client";

import { Award, Briefcase, Code2, Star } from "lucide-react";

const mentors = [
  {
    initials: "RK",
    name: "Rajesh Kumar",
    title: "Senior Software Architect",
    company: "Ex-Google | 12 yrs exp",
    expertise: ["System Design", "Full Stack", "DSA"],
    color: "#29abe2",
    focus: "Teaches architecture-first thinking",
  },
  {
    initials: "SM",
    name: "Sowmya Murugan",
    title: "AI/ML Engineer",
    company: "Ex-Microsoft | 9 yrs exp",
    expertise: ["AI/ML", "Deep Learning", "LLMs"],
    color: "#a855f7",
    focus: "Teaches production AI systems",
  },
  {
    initials: "AP",
    name: "Arjun Prasad",
    title: "DevOps Lead",
    company: "Ex-Amazon | 10 yrs exp",
    expertise: ["Cloud", "DevOps", "Kubernetes"],
    color: "#f5a623",
    focus: "Teaches cloud-native design",
  },
  {
    initials: "DV",
    name: "Divya Venkat",
    title: "Backend Engineer",
    company: "Ex-Zoho | 8 yrs exp",
    expertise: ["Node.js", "Microservices", "DB Design"],
    color: "#22c55e",
    focus: "Teaches scalable backend systems",
  },
];

const smeStats = [
  { icon: Briefcase, value: "50+", label: "Industry SME Mentors", color: "#29abe2" },
  { icon: Award, value: "8+ yrs", label: "Avg. Industry Experience", color: "#f5a623" },
  { icon: Code2, value: "15+", label: "Real-World Projects Taught", color: "#22c55e" },
  { icon: Star, value: "4.9/5", label: "Mentor Rating", color: "#a855f7" },
];

export default function Mentors() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="section-tag mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Learn from the Best
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Trained by{" "}
            <span className="gradient-text">Industry SMEs</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Every course at Thiravugal is crafted and delivered by{" "}
            <strong className="text-[#1a237e]">Subject Matter Experts</strong> actively
            working in top software companies. Get industry-standard, hands-on training
            that mirrors real-world engineering environments.
          </p>
        </div>

        {/* Key differentiator banner */}
        <div className="bg-gradient-to-r from-[#1a237e] to-[#29abe2] rounded-2xl p-4 sm:p-6 flex flex-wrap items-center gap-4 sm:gap-6 justify-between mb-10 sm:mb-14 mt-8 sm:mt-10">
          <div className="text-white">
            <p className="font-display font-bold text-base sm:text-xl mb-1">
              🎯 Our Curriculum Promise
            </p>
            <p className="text-white/80 text-sm max-w-xl">
              Every module is designed by software engineers with real industry experience,
              ensuring our training is 100% aligned with what companies actually use and expect —
              not just theory, but battle-tested, industry-standard practices.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Hands-on Projects", "Industry Standards", "SME Designed", "AI Integrated"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-white/15 border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full"
                >
                  ✓ {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* SME Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14">
          {smeStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-4 sm:p-6 text-center border border-gray-100 card-hover"
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: `${stat.color}18` }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div
                  className="text-xl sm:text-2xl font-display font-bold mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Mentor cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="bg-white rounded-3xl p-6 border border-gray-100 card-hover group text-center"
            >
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 group-hover:scale-110 transition-transform"
                style={{ background: `linear-gradient(135deg, ${mentor.color}, ${mentor.color}99)` }}
              >
                {mentor.initials}
              </div>

              <h3 className="font-display font-bold text-gray-900 text-lg mb-0.5">
                {mentor.name}
              </h3>
              <p className="text-gray-600 text-sm mb-1">{mentor.title}</p>
              <p
                className="text-xs font-semibold mb-4"
                style={{ color: mentor.color }}
              >
                {mentor.company}
              </p>

              {/* Expertise tags */}
              <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                {mentor.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: `${mentor.color}15`,
                      color: mentor.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="text-xs font-medium italic px-3 py-1.5 rounded-lg"
                style={{ background: `${mentor.color}10`, color: mentor.color }}
              >
                {mentor.focus}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-6 text-sm">
          + 46 more industry experts across all domains
        </p>
      </div>
    </section>
  );
}

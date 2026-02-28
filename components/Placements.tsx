"use client";

import { TrendingUp, MapPin, Building2, Trophy } from "lucide-react";

const companies = [
  "TCS", "Infosys", "Wipro", "Cognizant", "HCL", "Zoho",
  "Freshworks", "Hexaware", "Capgemini", "Accenture",
  "Mphasis", "LTIMindtree", "KPIT", "Persistent", "L&T Tech",
];

const placements = [
  {
    initials: "SK",
    name: "Santhosh Kumar",
    role: "Software Engineer",
    company: "TCS",
    package: "₹7 LPA",
    location: "Chennai",
    color: "#29abe2",
    program: "Full Stack",
  },
  {
    initials: "NL",
    name: "Nithya Lakshmi",
    role: "Data Engineer",
    company: "Infosys",
    package: "₹8.5 LPA",
    location: "Bangalore",
    color: "#1a237e",
    program: "AI/ML",
  },
  {
    initials: "MR",
    name: "Muthu Raj",
    role: "Backend Developer",
    company: "Zoho",
    package: "₹10 LPA",
    location: "Chennai",
    color: "#f5a623",
    program: "Backend",
  },
  {
    initials: "PV",
    name: "Pavithra V",
    role: "Cloud Engineer",
    company: "Wipro",
    package: "₹9 LPA",
    location: "Hyderabad",
    color: "#22c55e",
    program: "DevOps",
  },
  {
    initials: "AK",
    name: "Arun Kumar",
    role: "Frontend Engineer",
    company: "Freshworks",
    package: "₹11 LPA",
    location: "Chennai",
    color: "#a855f7",
    program: "Full Stack",
  },
  {
    initials: "RS",
    name: "Revathi S",
    role: "ML Engineer",
    company: "HCL",
    package: "₹9.5 LPA",
    location: "Pune",
    color: "#f97316",
    program: "AI/ML",
  },
];

export default function Placements() {
  return (
    <section id="placements" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mb-4">
            <Trophy className="w-3.5 h-3.5" />
            Placement Record
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
            Our Students Get{" "}
            <span className="gradient-text">Hired Everywhere</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From startups to MNCs — Thiravugal graduates are making their mark
            across the tech industry.
          </p>
        </div>

        {/* Stats banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {[
            { label: "Placement Rate", value: "92%", icon: "🎯", color: "#29abe2" },
            { label: "Highest Package", value: "₹24 LPA", icon: "🚀", color: "#f5a623" },
            { label: "Avg Package", value: "₹8.5 LPA", icon: "📈", color: "#22c55e" },
            { label: "Hiring Partners", value: "250+", icon: "🏢", color: "#1a237e" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <div
                className="text-2xl font-display font-bold mb-1"
                style={{ color: s.color }}
              >
                {s.value}
              </div>
              <div className="text-gray-600 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Hiring companies marquee */}
        <div className="mb-14">
          <p className="text-center text-gray-500 text-sm font-semibold tracking-wider uppercase mb-6">
            Our Hiring Partners
          </p>
          <div className="overflow-hidden relative">
            <div className="flex gap-6 animate-none">
              <div className="flex gap-6 shrink-0">
                {companies.map((company) => (
                  <div
                    key={company}
                    className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-3 font-display font-bold text-gray-600 whitespace-nowrap hover:border-[#29abe2] hover:text-[#1a237e] transition-colors"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Placement cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placements.map((p) => (
            <div
              key={p.name}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 card-hover group"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold text-white shrink-0"
                  style={{ background: p.color }}
                >
                  {p.initials}
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-gray-900">{p.name}</h4>
                  <p className="text-gray-600 text-sm">{p.role}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Building2 className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-sm font-semibold text-[#1a237e]">
                      {p.company}
                    </span>
                  </div>
                </div>
                <div
                  className="text-sm font-bold px-3 py-1.5 rounded-xl"
                  style={{ background: `${p.color}15`, color: p.color }}
                >
                  {p.package}
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                <span className="flex items-center gap-1.5 text-sm text-gray-500">
                  <MapPin className="w-3.5 h-3.5" />
                  {p.location}
                </span>
                <span className="flex items-center gap-1.5 text-sm">
                  <TrendingUp className="w-3.5 h-3.5 text-[#22c55e]" />
                  <span className="text-gray-600">{p.program}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

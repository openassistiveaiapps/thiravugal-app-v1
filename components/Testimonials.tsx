"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Krishnamurthy",
    role: "Software Engineer",
    company: "Zoho Corporation",
    package: "₹8.5 LPA",
    image: "PK",
    color: "#29abe2",
    review:
      "Thiravugal's DSA program was a game-changer for me. I went from knowing basic programming to cracking multiple FAANG-level interviews. The mentors are incredibly patient and the curriculum is exactly what top companies test.",
    stars: 5,
    batch: "DSA Batch 2024",
  },
  {
    name: "Karthik Subramanian",
    role: "Full Stack Developer",
    company: "Freshworks",
    package: "₹12 LPA",
    image: "KS",
    color: "#1a237e",
    review:
      "I switched from a non-IT background to becoming a Full Stack Developer in 6 months. The project-based approach gave me real confidence in interviews. Thiravugal's placement team got me 4 interview calls in my first week!",
    stars: 5,
    batch: "Full Stack Batch 2024",
  },
  {
    name: "Ananya Ramesh",
    role: "ML Engineer",
    company: "TCS iON AI Division",
    package: "₹10 LPA",
    image: "AR",
    color: "#a855f7",
    review:
      "The AI & ML course at Thiravugal is unmatched. I built 6 production-grade ML projects during the course. The LLM module was cutting-edge and helped me understand GenAI better than any book could. Highly recommend!",
    stars: 5,
    batch: "AI/ML Batch 2024",
  },
  {
    name: "Venkatesh Pandi",
    role: "DevOps Engineer",
    company: "HCL Technologies",
    package: "₹9 LPA",
    image: "VP",
    color: "#22c55e",
    review:
      "As a working professional, I was skeptical about finding time to learn. Thiravugal's flexible schedule and recorded classes made it possible. Within 3 months I got certified in AWS and landed a DevOps role with 40% salary hike.",
    stars: 5,
    batch: "Cloud & DevOps Batch 2023",
  },
  {
    name: "Deepika Mohan",
    role: "Backend Engineer",
    company: "Cognizant",
    package: "₹7.5 LPA",
    image: "DM",
    color: "#f5a623",
    review:
      "The placement support at Thiravugal is phenomenal. Resume reviews, mock interviews, and direct referrals — they leave no stone unturned. I got placed in just 3 weeks after completing my course. Best investment of my life!",
    stars: 5,
    batch: "Backend Batch 2024",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="section-tag mb-4">
            <Quote className="w-3.5 h-3.5" />
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Real People,{" "}
            <span className="gradient-text">Real Transformations</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Thousands of students have unlocked their potential with Thiravugal.
            Here are some of their stories.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-[#1a237e]/5 to-[#29abe2]/5 rounded-3xl p-5 sm:p-8 lg:p-10 border border-[#29abe2]/20 relative overflow-hidden">
            <Quote className="absolute top-6 right-8 w-20 h-20 text-[#29abe2]/10" />

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="shrink-0">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold text-white"
                  style={{ background: testimonials[current].color }}
                >
                  {testimonials[current].image}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#f5a623] fill-[#f5a623]" />
                  ))}
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 italic">
                  &ldquo;{testimonials[current].review}&rdquo;
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <div className="font-display font-bold text-gray-900 text-lg">
                      {testimonials[current].name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonials[current].role} @{" "}
                      <span className="text-[#1a237e] font-semibold">
                        {testimonials[current].company}
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-xl px-4 py-2">
                    <div className="text-[#22c55e] font-bold text-lg">
                      {testimonials[current].package}
                    </div>
                    <div className="text-gray-500 text-xs">Annual Package</div>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2">
                    <div className="text-[#1a237e] font-semibold text-sm">
                      {testimonials[current].batch}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#1a237e] hover:text-[#1a237e] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all ${
                    i === current ? "w-8 bg-[#1a237e]" : "w-2 bg-gray-300"
                  } h-2`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#1a237e] hover:text-[#1a237e] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mini testimonials grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setCurrent(i)}
              className={`text-left p-4 rounded-2xl border transition-all ${
                i === current
                  ? "border-[#29abe2] bg-blue-50 shadow-md"
                  : "border-gray-100 bg-gray-50 hover:border-gray-200"
              }`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white mb-3"
                style={{ background: t.color }}
              >
                {t.image}
              </div>
              <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
              <div className="text-gray-500 text-xs">{t.company}</div>
              <div
                className="text-sm font-bold mt-1"
                style={{ color: t.color }}
              >
                {t.package}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

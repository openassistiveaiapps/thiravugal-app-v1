"use client";

import {
  Cpu,
  BookOpen,
  Users2,
  Rocket,
  Award,
  HeartHandshake,
  Shield,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Learning",
    description:
      "Personalized learning paths powered by AI, adapting to your pace, strengths, and career goals.",
    color: "#29abe2",
    bg: "bg-blue-50",
  },
  {
    icon: BookOpen,
    title: "Project-Based Curriculum",
    description:
      "Build 10+ real-world projects that showcase your skills to employers and prove your expertise.",
    color: "#1a237e",
    bg: "bg-indigo-50",
  },
  {
    icon: Users2,
    title: "Expert Mentorship",
    description:
      "1-on-1 sessions with engineers from Google, Amazon, Microsoft and top Indian tech companies.",
    color: "#f5a623",
    bg: "bg-amber-50",
  },
  {
    icon: Rocket,
    title: "Fast-Track to Jobs",
    description:
      "Direct referrals to 250+ hiring partners. Resume shortlisting within 30 days of course completion.",
    color: "#22c55e",
    bg: "bg-green-50",
  },
  {
    icon: Award,
    title: "Industry Certifications",
    description:
      "Earn certifications recognized by top tech companies. Boost your profile on LinkedIn and beyond.",
    color: "#a855f7",
    bg: "bg-purple-50",
  },
  {
    icon: HeartHandshake,
    title: "Lifetime Community",
    description:
      "Join a growing alumni network. Access our Discord, mentorship, and job referrals forever.",
    color: "#f97316",
    bg: "bg-orange-50",
  },
  {
    icon: Shield,
    title: "Placement Guarantee",
    description:
      "We stand behind our training. 100% placement assistance or money back — that's our promise.",
    color: "#14b8a6",
    bg: "bg-teal-50",
  },
  {
    icon: Zap,
    title: "Live + Recorded Classes",
    description:
      "Attend live sessions or watch recordings on demand. Never miss a class, learn at your schedule.",
    color: "#ec4899",
    bg: "bg-pink-50",
  },
];

export default function WhyThiravugal() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mb-4">
            <Shield className="w-3.5 h-3.5" />
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Thiravugal is not just a training platform — it&apos;s a complete career
            transformation ecosystem built around hands-on, industry-standard learning.
          </p>
          {/* SME Badge strip */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "🎯 Hands-On Training",
              "🏭 Industry-Standard Curriculum",
              "👨‍💼 Taught by Software Industry SMEs",
              "⚙️ Real-World Projects",
              "🤖 AI-Ready Skills",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white border border-[#29abe2]/30 text-[#1a237e] text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 card-hover border border-gray-100 group"
              >
                <div
                  className={`${feature.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight banner */}
        <div className="mt-10 sm:mt-16 animated-gradient rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-overlay" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Ready to Unlock Your Potential?
            </h3>
            <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">
              Join students and professionals who are transforming their
              careers with Thiravugal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-gold">
                Book Free Counselling Session
              </a>
              <a href="#programs" className="btn-outline">
                Explore All Programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

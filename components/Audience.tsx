"use client";

import {
  GraduationCap,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Target,
  TrendingUp,
} from "lucide-react";

const studentFeatures = [
  "Structured learning path from fundamentals to advanced",
  "Interview preparation for top tech companies",
  "Resume building & LinkedIn profile optimization",
  "Mock interviews with senior engineers",
  "Internship & full-time placement support",
  "Industry-recognized certification",
];

const professionalFeatures = [
  "Upskill in AI, Cloud & modern technologies",
  "Weekend & evening batches for working hours",
  "Hands-on projects with real industry use-cases",
  "1-on-1 mentorship from domain experts",
  "Salary negotiation & career transition guidance",
  "Access to exclusive job portal & referrals",
];

export default function Audience() {
  return (
    <section id="students" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mb-4">
            <Target className="w-3.5 h-3.5" />
            Who We Serve
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
            Built for <span className="gradient-text">Every Stage</span> of Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you&apos;re starting your career or leveling up as a professional,
            we have a path crafted for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Engineering Students Card */}
          <div
            id="students"
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a237e] to-[#29abe2] p-8 lg:p-10 card-hover"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-10 -translate-x-10" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Engineering Students
                  </h3>
                  <p className="text-white/70">Fresh graduates & final year students</p>
                </div>
              </div>

              <p className="text-white/85 mb-8 leading-relaxed">
                Bridge the gap between college curriculum and industry expectations.
                Get the skills, projects, and placement support to land your dream IT job.
              </p>

              <div className="space-y-3 mb-8">
                {studentFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 bg-white/10 rounded-2xl p-4">
                {[
                  { value: "92%", label: "Placement Rate" },
                  { value: "₹6L+", label: "Avg Package" },
                  { value: "90 days", label: "To Job Ready" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-xl font-display font-bold text-white">
                      {s.value}
                    </div>
                    <div className="text-white/60 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="#programs"
                className="btn-gold inline-flex"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Working Professionals Card */}
          <div
            id="professionals"
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-8 lg:p-10 card-hover"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#f5a623]/5 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#29abe2]/5 rounded-full translate-y-10 -translate-x-10" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#f5a623]/20 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-[#f5a623]" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Working Professionals
                  </h3>
                  <p className="text-white/60">Upskill & switch to high-paying roles</p>
                </div>
              </div>

              <p className="text-white/80 mb-8 leading-relaxed">
                Stay ahead in the rapidly evolving tech landscape. Master AI, Cloud,
                and modern dev practices without quitting your job — learn at your pace.
              </p>

              <div className="space-y-3 mb-8">
                {professionalFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#f5a623] shrink-0 mt-0.5" />
                    <span className="text-white/85 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 bg-white/5 rounded-2xl p-4">
                {[
                  { value: "3x", label: "Salary Growth" },
                  { value: "50+", label: "Expert Mentors" },
                  { value: "Flex", label: "Schedule" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-xl font-display font-bold text-[#f5a623]">
                      {s.value}
                    </div>
                    <div className="text-white/50 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="#programs"
                className="inline-flex items-center gap-2 bg-[#f5a623] hover:bg-[#e09620] text-white px-6 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <TrendingUp className="w-5 h-5" />
                Upskill Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

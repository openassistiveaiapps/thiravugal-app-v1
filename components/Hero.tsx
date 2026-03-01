"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Play, CheckCircle, Sparkles, Zap } from "lucide-react";

const highlights = [
  "AI & ML — core focus",
  "DSA for top tech interviews",
  "Human-centered system design",
];

const floatingBadges = [
  { label: "AI & GenAI", icon: "🤖", color: "bg-purple-500", delay: "0s" },
  { label: "DSA Mastery", icon: "⚡", color: "bg-amber-500", delay: "1.5s" },
  { label: "System Design", icon: "🏗️", color: "bg-cyan-500", delay: "3s" },
  { label: "Cloud & DevOps", icon: "☁️", color: "bg-green-500", delay: "0.8s" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255,255,255,${0.08 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden animated-gradient">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-overlay" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#29abe2]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-[#f5a623]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 text-white text-sm font-semibold backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#f5a623]" />
              India&apos;s Premier AI, ML & DSA Training Platform
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Master{" "}
              <span className="gradient-text-gold">AI, ML</span>
              <br />
              & DSA — Beyond
              <br />
              Just Coding
            </h1>

            <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
              We go beyond syntax. Learn to think like an engineer — master AI,
              DSA, system design, and human-centered problem solving with
              mentorship from active software industry experts.
            </p>

            {/* Highlights */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-white/90 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#programs" className="btn-gold">
                Explore Programs
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#demo" className="btn-outline">
                <Play className="w-5 h-5 fill-current" />
                Watch Demo
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {["A", "B", "C", "D"].map((l, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: `hsl(${i * 60 + 200}, 70%, 50%)`,
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-white font-bold">10,000+ Students</div>
                <div className="text-white/60 text-sm">already enrolled</div>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-[#f5a623] text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <div className="text-white/60 text-sm">4.9/5 rating</div>
              </div>
            </div>
          </div>

          {/* Right – Visual */}
          <div className="hidden lg:block relative">
            {/* Main card */}
            <div className="relative mx-auto max-w-md">
              <div className="glass rounded-3xl p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1a237e] to-[#29abe2] flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      AI Learning Dashboard
                    </div>
                    <div className="text-white/60 text-sm">
                      Personalized roadmap
                    </div>
                  </div>
                </div>

                {/* Progress bars */}
                {[
                  { skill: "AI & Machine Learning", pct: 88, color: "#a855f7" },
                  { skill: "DSA & Algorithms", pct: 82, color: "#f5a623" },
                  { skill: "System Design", pct: 74, color: "#29abe2" },
                  { skill: "Cloud & DevOps", pct: 58, color: "#22c55e" },
                ].map((item) => (
                  <div key={item.skill} className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/90 font-medium">
                        {item.skill}
                      </span>
                      <span className="text-white/60">{item.pct}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${item.pct}%`,
                          background: item.color,
                        }}
                      />
                    </div>
                  </div>
                ))}

                {/* Achievement */}
                <div className="mt-4 p-3 bg-white/10 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#a855f7] flex items-center justify-center text-xl">
                    🤖
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">
                      AI Project Deployed!
                    </div>
                    <div className="text-white/60 text-xs">
                      LLM-powered app — live in production
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              {floatingBadges.map((badge, i) => (
                <div
                  key={badge.label}
                  className="absolute glass rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-lg"
                  style={{
                    top: i === 0 ? "-16px" : i === 1 ? "20%" : i === 2 ? "70%" : "auto",
                    bottom: i === 3 ? "-16px" : "auto",
                    left: i === 1 ? "-60px" : i === 3 ? "20px" : "auto",
                    right: i === 0 ? "20px" : i === 2 ? "-40px" : "auto",
                    animation: `float 6s ease-in-out infinite`,
                    animationDelay: badge.delay,
                  }}
                >
                  <span className="text-lg">{badge.icon}</span>
                  <span className="text-white text-sm font-semibold whitespace-nowrap">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 37.3C840 43 960 53 1080 56C1200 59 1320 53 1380 50L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Building2, Trophy, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Students Trained",
    color: "#29abe2",
    bg: "bg-blue-50",
  },
  {
    icon: Building2,
    value: 250,
    suffix: "+",
    label: "Hiring Partners",
    color: "#1a237e",
    bg: "bg-indigo-50",
  },
  {
    icon: Trophy,
    value: 92,
    suffix: "%",
    label: "Placement Rate",
    color: "#f5a623",
    bg: "bg-amber-50",
  },
  {
    icon: Clock,
    value: 5,
    suffix: "+ yrs",
    label: "Industry Experience",
    color: "#22c55e",
    bg: "bg-green-50",
  },
];

function CountUp({
  target,
  suffix,
  color,
}: {
  target: number;
  suffix: string;
  color: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-display font-bold" style={{ color }}>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted by banner */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-gray-500 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 sm:mb-6">
            Trusted by students from top colleges &amp; companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 opacity-50">
            {["TCS", "Infosys", "Wipro", "Cognizant", "HCL", "Zoho", "Freshworks", "Hexaware"].map(
              (company) => (
                <div key={company} className="text-sm sm:text-base md:text-lg font-bold text-gray-600 font-display">
                  {company}
                </div>
              )
            )}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`${stat.bg} rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-center card-hover border border-transparent hover:border-gray-100`}
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4"
                  style={{ background: `${stat.color}20` }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" style={{ color: stat.color }} />
                </div>
                <CountUp target={stat.value} suffix={stat.suffix} color={stat.color} />
                <p className="text-gray-600 font-medium mt-1 sm:mt-2 text-xs sm:text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

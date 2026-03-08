"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function WomensDayBanner() {
  const [visible, setVisible] = useState(true);

  // Only show on March 8th (month is 0-indexed: 2 = March)
  const today = new Date();
  const isWomensDay = today.getMonth() === 2 && today.getDate() === 8;

  if (!visible || !isWomensDay) return null;

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #9c27b0 0%, #e91e8c 40%, #f5a623 100%)",
      }}
      className="relative z-50 py-2.5 px-4 text-center text-white text-sm font-medium"
    >
      <span className="inline-flex items-center gap-2 flex-wrap justify-center">
        <span className="text-base">💜</span>
        <span>
          <strong>Happy International Women&apos;s Day!</strong> — Empowering women in tech through quality education.
          <span className="hidden sm:inline"> Break barriers. Build the future. </span>
        </span>
        <span className="text-base">🌸</span>
      </span>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

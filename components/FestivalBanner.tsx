"use client";

import { useState } from "react";
import { X } from "lucide-react";

const festivals = [
  {
    month: 0, day: 1,
    title: "Happy New Year!",
    message: "Wishing you a year full of growth, learning, and success.",
    emoji1: "🎆", emoji2: "🎉",
    gradient: "linear-gradient(90deg, #1a237e 0%, #1565c0 50%, #f5a623 100%)",
  },
  {
    month: 0, day: 14,
    title: "Happy Pongal!",
    message: "May this harvest festival bring joy and prosperity to you and your family.",
    emoji1: "🌾", emoji2: "🪔",
    gradient: "linear-gradient(90deg, #e65100 0%, #f57f17 50%, #2e7d32 100%)",
  },
  {
    month: 0, day: 26,
    title: "Happy Republic Day!",
    message: "Proud to be Indian. Jai Hind!",
    emoji1: "🇮🇳", emoji2: "🕊️",
    gradient: "linear-gradient(90deg, #e65100 0%, #bf360c 45%, #1b5e20 100%)",
  },
  {
    month: 2, day: 8,
    title: "Happy International Women's Day!",
    message: "Empowering women in tech through quality education. Break barriers. Build the future.",
    emoji1: "💜", emoji2: "🌸",
    gradient: "linear-gradient(90deg, #9c27b0 0%, #e91e8c 40%, #f5a623 100%)",
  },
  {
    month: 3, day: 14,
    title: "Happy Tamil New Year!",
    message: "புத்தாண்டு வாழ்த்துக்கள்! Wishing you a prosperous new year.",
    emoji1: "🌺", emoji2: "✨",
    gradient: "linear-gradient(90deg, #880e4f 0%, #c62828 50%, #e65100 100%)",
  },
  {
    month: 7, day: 15,
    title: "Happy Independence Day!",
    message: "Celebrating 78 years of freedom. Jai Hind!",
    emoji1: "🇮🇳", emoji2: "🕊️",
    gradient: "linear-gradient(90deg, #e65100 0%, #bf360c 45%, #1b5e20 100%)",
  },
  {
    month: 8, day: 5,
    title: "Happy Teachers' Day!",
    message: "Grateful to every mentor who shapes the future. Teaching is the greatest profession.",
    emoji1: "📚", emoji2: "🎓",
    gradient: "linear-gradient(90deg, #1a237e 0%, #283593 50%, #29abe2 100%)",
  },
  {
    month: 9, day: 2,
    title: "Gandhi Jayanti",
    message: "\"Be the change you wish to see in the world.\" — Mahatma Gandhi",
    emoji1: "🕊️", emoji2: "🌿",
    gradient: "linear-gradient(90deg, #e65100 0%, #4e342e 50%, #2e7d32 100%)",
  },
  {
    month: 10, day: 14,
    title: "Happy Children's Day!",
    message: "Nurturing tomorrow's innovators and leaders today.",
    emoji1: "🎉", emoji2: "🌈",
    gradient: "linear-gradient(90deg, #6a1b9a 0%, #1565c0 50%, #00838f 100%)",
  },
  {
    month: 11, day: 25,
    title: "Merry Christmas!",
    message: "Wishing you joy, warmth, and wonderful new beginnings.",
    emoji1: "🎄", emoji2: "⭐",
    gradient: "linear-gradient(90deg, #b71c1c 0%, #c62828 50%, #1b5e20 100%)",
  },
];

export default function FestivalBanner() {
  const [visible, setVisible] = useState(true);

  const today = new Date();
  const festival = festivals.find(
    (f) => f.month === today.getMonth() && f.day === today.getDate()
  );

  if (!visible || !festival) return null;

  return (
    <div
      style={{ background: festival.gradient }}
      className="relative z-50 py-2.5 px-4 text-center text-white text-sm font-medium"
    >
      <span className="inline-flex items-center gap-2 flex-wrap justify-center">
        <span className="text-base">{festival.emoji1}</span>
        <span>
          <strong>{festival.title}</strong>
          {" — "}
          <span className="hidden sm:inline">{festival.message}</span>
        </span>
        <span className="text-base">{festival.emoji2}</span>
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

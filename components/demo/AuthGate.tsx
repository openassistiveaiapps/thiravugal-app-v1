"use client";

import { useState } from "react";
import Image from "next/image";
import { Lock, Mail, Eye, EyeOff, Sparkles } from "lucide-react";

// Hardcoded demo credentials — change these as needed
const CREDENTIALS = [
  { email: "demo@thiravugal.in", pin: "0609" },
  { email: "admin@thiravugal.in", pin: "1609" },
];

export default function AuthGate({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      const valid = CREDENTIALS.some(
        (c) => c.email.toLowerCase() === email.toLowerCase().trim() && c.pin === pin.trim()
      );
      if (valid) {
        onSuccess();
      } else {
        setError("Invalid email or PIN. Please try again.");
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1a237e]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#29abe2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-sm">
        <div className="bg-gray-900/80 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3 ring-2 ring-[#29abe2]/30">
              <Image src="/logo.jpeg" alt="Thiravugal" fill className="object-cover" />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="font-display font-bold text-white text-xl">AI Demo Lab</h1>
              <Sparkles className="w-4 h-4 text-[#29abe2]" />
            </div>
            <p className="text-gray-400 text-sm text-center">Enter your credentials to access the demos</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#29abe2] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1.5">PIN</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type={showPin ? "text" : "password"}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="••••"
                  required
                  maxLength={8}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-10 py-3 text-sm text-white placeholder-gray-500 focus:border-[#29abe2] focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPin((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-400 text-sm text-center">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Access Demo Lab"}
            </button>
          </form>

          <p className="text-center text-xs text-gray-600 mt-6">
            Powered by AI · Thiravugal Internal Demo
          </p>
        </div>
      </div>
    </div>
  );
}

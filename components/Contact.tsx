"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY!;
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    background: "",
    program: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Counselling Request — ${form.program || "General"} | Thiravugal`,
          from_name: "Thiravugal Website",
          "cf-turnstile-response": turnstileToken,
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or WhatsApp us directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left info */}
          <div>
            <div className="section-tag mb-4">
              <Mail className="w-3.5 h-3.5" />
              Get in Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              Book Your{" "}
              <span className="gradient-text">Free Counselling</span> Session
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Not sure where to start? Our career counsellors will guide you to
              the right program based on your background, goals, and timeline —
              completely free.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Phone,
                  label: "Call / WhatsApp",
                  value: "+91 99418 74780",
                  color: "#22c55e",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "support@thiravugal.in",
                  color: "#29abe2",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Chennai, Tamil Nadu",
                  color: "#f5a623",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${item.color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">{item.label}</div>
                      <div className="font-semibold text-gray-900">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Promise cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "⚡", title: "Quick Response", desc: "Within 2 hours" },
                { emoji: "🆓", title: "100% Free", desc: "No hidden charges" },
                { emoji: "🎯", title: "Personalized", desc: "Tailored guidance" },
                { emoji: "🔒", title: "No Spam", desc: "Privacy guaranteed" },
              ].map((p) => (
                <div
                  key={p.title}
                  className="bg-white rounded-xl p-4 border border-gray-100"
                >
                  <div className="text-2xl mb-1">{p.emoji}</div>
                  <div className="font-semibold text-gray-900 text-sm">{p.title}</div>
                  <div className="text-gray-500 text-xs">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-lg border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-[#22c55e]" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  You&apos;re All Set! 🎉
                </h3>
                <p className="text-gray-600">
                  We&apos;ll reach out within 2 hours to schedule your free counselling
                  session. Check your WhatsApp/email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot — bots fill this, humans don't */}
                <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Start Your Journey Today
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#29abe2] focus:ring-2 focus:ring-[#29abe2]/20 outline-none transition text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#29abe2] focus:ring-2 focus:ring-[#29abe2]/20 outline-none transition text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#29abe2] focus:ring-2 focus:ring-[#29abe2]/20 outline-none transition text-gray-900"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      I am a...
                    </label>
                    <select
                      name="background"
                      value={form.background}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#29abe2] focus:ring-2 focus:ring-[#29abe2]/20 outline-none transition text-gray-900"
                    >
                      <option value="">Select...</option>
                      <option>Engineering Student</option>
                      <option>Fresh Graduate</option>
                      <option>Working Professional</option>
                      <option>Career Switcher</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Interested Program
                    </label>
                    <select
                      name="program"
                      value={form.program}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#29abe2] focus:ring-2 focus:ring-[#29abe2]/20 outline-none transition text-gray-900"
                    >
                      <option value="">Select...</option>
                      <option>Full Stack Development</option>
                      <option>DSA & Problem Solving</option>
                      <option>AI & Machine Learning</option>
                      <option>Cloud & DevOps</option>
                      <option>Backend Engineering</option>
                      <option>Not Sure (Need Guidance)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Anything specific you&apos;d like to discuss?
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us your goals, current background, or any questions..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#29abe2] focus:ring-2 focus:ring-[#29abe2]/20 outline-none transition text-gray-900 resize-none"
                  />
                </div>

                <Turnstile
                  siteKey={TURNSTILE_SITE_KEY}
                  onSuccess={setTurnstileToken}
                  onError={() => setError("Bot check failed. Please refresh and try again.")}
                  options={{ theme: "light", size: "flexible" }}
                />

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading || !turnstileToken}
                  className="w-full btn-primary justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {loading ? "Sending..." : "Book My Free Session"}
                </button>

                <p className="text-center text-gray-400 text-xs">
                  By submitting, you agree to our privacy policy. We&apos;ll never spam you.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

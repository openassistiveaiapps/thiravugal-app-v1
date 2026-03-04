import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  ArrowRight,
} from "lucide-react";

const programs = [
  "Full Stack Development",
  "DSA & Algorithms",
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Backend Engineering",
  "IT Fundamentals",
];

const company = [
  { label: "About Us", href: "#about" },
  { label: "Our Mentors", href: "#mentors" },
  { label: "Placement Stories", href: "#placements" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Linkedin, href: "#", color: "#0077B5" },
  { icon: Youtube, href: "#", color: "#FF0000" },
  { icon: Instagram, href: "#", color: "#E1306C" },
  { icon: Twitter, href: "#", color: "#1DA1F2" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Top CTA strip */}
      <div className="animated-gradient py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">
              Ready to Unlock Your Potential?
            </h3>
            <p className="text-white/70">
              Start your journey with a free counselling session.
            </p>
          </div>
          <a href="#contact" className="btn-gold shrink-0">
            Book Free Session
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/logo.jpeg"
                  alt="Thiravugal Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white tracking-wide">
                  THIRAVUGAL
                </div>
                <div className="text-[#29abe2] text-xs tracking-widest font-medium">
                  UNLOCK YOUR POTENTIAL
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              India&apos;s premier IT training & placement platform — empowering
              engineering students and professionals with industry-standard,
              hands-on training by software industry SMEs.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4 text-gray-400 hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Programs</h4>
            <ul className="space-y-2.5">
              {programs.map((p) => (
                <li key={p}>
                  <a
                    href="#programs"
                    className="text-gray-400 text-sm hover:text-[#29abe2] transition-colors"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="text-gray-400 text-sm hover:text-[#29abe2] transition-colors"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-4">
              {[
                { icon: Phone, text: "+91 99622 50888", sub: "WhatsApp & Call" },
                { icon: Mail, text: "hello@thiravugal.com", sub: "Support email" },
                { icon: MapPin, text: "Chennai, Tamil Nadu", sub: "Head Office" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex gap-3">
                    <Icon className="w-4 h-4 text-[#29abe2] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white text-sm">{item.text}</div>
                      <div className="text-gray-500 text-xs">{item.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Get career tips & updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-[#29abe2] outline-none"
                />
                <button className="bg-[#29abe2] hover:bg-[#1a237e] px-3 py-2 rounded-lg transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © 2025 Thiravugal. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[#29abe2] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#29abe2] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#29abe2] transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Programs",
    href: "#programs",
    children: [
      { label: "Full Stack Development", href: "#programs" },
      { label: "Data Structures & Algorithms", href: "#programs" },
      { label: "AI & Machine Learning", href: "#programs" },
      { label: "Cloud & DevOps", href: "#programs" },
    ],
  },
  { label: "For Students", href: "#students" },
  { label: "For Professionals", href: "#professionals" },
  { label: "AI Solutions", href: "/products" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
              <Image
                src="/logo.jpeg"
                alt="Thiravugal Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span
                className={`font-display font-bold text-xl tracking-wide transition-colors ${
                  scrolled ? "text-[#1a237e]" : "text-white"
                }`}
              >
                THIRAVUGAL
              </span>
              <p
                className={`text-xs font-medium tracking-widest transition-colors ${
                  scrolled ? "text-[#29abe2]" : "text-[#29abe2]"
                }`}
              >
                UNLOCK YOUR POTENTIAL
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.children ? (
                  <button
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      scrolled
                        ? "text-gray-700 hover:text-[#1a237e] hover:bg-blue-50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors block ${
                      scrolled
                        ? "text-gray-700 hover:text-[#1a237e] hover:bg-blue-50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </a>
                )}

                {/* Dropdown */}
                {link.children && openDropdown === link.label && (
                  <div
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a237e] transition-colors font-medium"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                scrolled
                  ? "text-[#1a237e] border-2 border-[#1a237e] hover:bg-[#1a237e] hover:text-white"
                  : "text-white border-2 border-white/70 hover:border-white hover:bg-white/10"
              }`}
            >
              Free Counselling
            </a>
            <a
              href="#programs"
              className="px-5 py-2.5 rounded-full font-semibold text-sm text-white btn-gold"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#1a237e]" : "text-white"
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-blue-50 hover:text-[#1a237e] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#contact"
                className="btn-primary justify-center text-center"
              >
                Free Counselling
              </a>
              <a href="#programs" className="btn-gold justify-center text-center">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

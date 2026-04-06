"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FileText, Receipt, UserCheck, LogOut, Sparkles } from "lucide-react";
import AuthGate from "@/components/demo/AuthGate";
import DocumentChat from "@/components/demo/DocumentChat";
import ReceiptAnalyzer from "@/components/demo/ReceiptAnalyzer";
import ResumeAnalyzer from "@/components/demo/ResumeAnalyzer";

const TABS = [
  { id: "doc", label: "Document Chat", icon: FileText, desc: "Ask questions about any document" },
  { id: "receipt", label: "Receipt Analyzer", icon: Receipt, desc: "Extract GST & TDS from receipts" },
  { id: "resume", label: "Resume Analyzer", icon: UserCheck, desc: "Match resume to job descriptions" },
] as const;

type TabId = (typeof TABS)[number]["id"];
const SESSION_KEY = "thiravugal_demo_auth";

export default function DemoPage() {
  const [authed, setAuthed] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("doc");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "true") setAuthed(true);
    setReady(true);
  }, []);

  const handleAuth = () => {
    sessionStorage.setItem(SESSION_KEY, "true");
    setAuthed(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthed(false);
  };

  if (!ready) return <div className="min-h-screen bg-gray-950" />;
  if (!authed) return <AuthGate onSuccess={handleAuth} />;

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 bg-gray-950/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
              <Image src="/logo.jpeg" alt="Thiravugal" fill className="object-cover" />
            </div>
            <div>
              <div className="font-display font-bold text-white text-sm tracking-wide leading-tight">THIRAVUGAL</div>
              <div className="text-xs text-[#29abe2] tracking-wide leading-tight">AI Demo Lab</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      {/* Mobile tab bar */}
      <div className="md:hidden flex border-b border-white/10 bg-gray-900/60">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 text-xs transition-colors ${
                tab.id === activeTab
                  ? "text-[#29abe2] border-b-2 border-[#29abe2]"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label.split(" ")[0]}
            </button>
          );
        })}
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar — desktop */}
        <aside className="hidden md:flex flex-col w-64 border-r border-white/10 bg-gray-900/50 p-4 shrink-0">
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-3 px-2">Demo Products</p>
          <nav className="space-y-1 flex-1">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const active = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-start gap-3 px-3 py-3 rounded-xl text-left transition-all ${
                    active
                      ? "bg-[#1a237e] border border-[#29abe2]/30 text-white"
                      : "hover:bg-white/5 text-gray-400 hover:text-white"
                  }`}
                >
                  <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${active ? "text-[#29abe2]" : ""}`} />
                  <div>
                    <div className="text-sm font-medium">{tab.label}</div>
                    <div className={`text-xs mt-0.5 ${active ? "text-gray-300" : "text-gray-500"}`}>{tab.desc}</div>
                  </div>
                </button>
              );
            })}
          </nav>

          <div className="mt-6 p-3 rounded-xl bg-gradient-to-br from-[#1a237e]/40 to-[#29abe2]/10 border border-[#29abe2]/20">
            <Sparkles className="w-5 h-5 text-[#29abe2] mb-2" />
            <p className="text-xs text-gray-300 leading-relaxed">Powered by AI — Using most capable model</p>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
            {activeTab === "doc" && <DocumentChat />}
            {activeTab === "receipt" && <ReceiptAnalyzer />}
            {activeTab === "resume" && <ResumeAnalyzer />}
          </div>
        </main>
      </div>
    </div>
  );
}

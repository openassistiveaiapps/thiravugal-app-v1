"use client";

import { useState, useRef } from "react";
import { Upload, UserCheck, Loader2, X, FileText } from "lucide-react";
import { compressImage } from "@/lib/compressImage";

export default function ResumeAnalyzer() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileBase64, setFileBase64] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (f: File) => {
    setResult("");
    if (f.type.startsWith("image/")) {
      const { base64, mimeType } = await compressImage(f);
      setFileBase64(base64);
      setResumeFile(new File([f], f.name, { type: mimeType }));
    } else {
      // PDF or text — send raw, server extracts text
      setResumeFile(f);
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        setFileBase64(dataUrl.split(",")[1]);
      };
      reader.readAsDataURL(f);
    }
  };

  const analyze = async () => {
    if (!resumeFile || !fileBase64 || !jobDesc.trim()) return;
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "resume",
          fileBase64,
          mimeType: resumeFile.type,
          jobDescription: jobDesc,
        }),
      });
      const data = await res.json();
      setResult(data.text || data.error);
    } catch {
      setResult("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-display font-bold text-white mb-1">Resume Analyzer</h2>
        <p className="text-gray-400 text-sm">Upload a resume and paste a job description — get a match score, skill gaps, and actionable feedback.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Resume upload */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">Resume (PDF or Image)</label>
          {!resumeFile ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              onDrop={(e) => { e.preventDefault(); e.dataTransfer.files[0] && handleFile(e.dataTransfer.files[0]); }}
              onDragOver={(e) => e.preventDefault()}
              className="border-2 border-dashed border-white/20 hover:border-[#22c55e]/50 rounded-xl p-8 text-center cursor-pointer transition-colors group"
            >
              <Upload className="w-6 h-6 text-[#22c55e] mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-gray-400">Click or drag resume here</p>
              <p className="text-xs text-gray-600 mt-1">PDF or image</p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,image/*"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              />
            </div>
          ) : (
            <div className="flex items-center gap-3 p-3 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-xl">
              <FileText className="w-5 h-5 text-[#22c55e] shrink-0" />
              <span className="text-sm text-white flex-1 truncate">{resumeFile.name}</span>
              <button
                onClick={() => { setResumeFile(null); setFileBase64(""); setResult(""); }}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Job description */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">Job Description</label>
          <textarea
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            placeholder="Paste the full job description here — role, requirements, responsibilities..."
            rows={6}
            className="w-full bg-gray-800/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#22c55e] focus:outline-none transition-colors resize-none"
          />
        </div>
      </div>

      <button
        onClick={analyze}
        disabled={loading || !resumeFile || !jobDesc.trim()}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white font-semibold disabled:opacity-40 hover:opacity-90 transition-opacity mb-6"
      >
        {loading ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Analyzing Match...</>
        ) : (
          <><UserCheck className="w-4 h-4" /> Analyze Resume</>
        )}
      </button>

      {loading && (
        <div className="text-center py-10">
          <Loader2 className="w-10 h-10 text-[#22c55e] animate-spin mx-auto mb-3" />
          <p className="text-gray-400 text-sm">Analyzing resume against job requirements...</p>
        </div>
      )}

      {result && !loading && (
        <div className="bg-gray-800/60 border border-white/10 rounded-xl p-5">
          <div className="text-sm text-gray-200 whitespace-pre-wrap leading-relaxed">{result}</div>
        </div>
      )}
    </div>
  );
}

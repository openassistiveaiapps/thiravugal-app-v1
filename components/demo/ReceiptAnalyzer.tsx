"use client";

import { useState, useRef } from "react";
import { Upload, Receipt, Loader2, X, RefreshCw } from "lucide-react";
import { compressImage } from "@/lib/compressImage";

const TAX_TAGS = ["CGST / SGST split", "IGST", "TDS deduction", "HSN/SAC codes", "Invoice totals", "Vendor GST No."];

export default function ReceiptAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [fileBase64, setFileBase64] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (f: File) => {
    setResult("");
    if (f.type.startsWith("image/")) {
      const { base64 } = await compressImage(f);
      setPreview(`data:image/jpeg;base64,${base64}`);
      setFileBase64(base64);
      setFile(new File([f], f.name, { type: "image/jpeg" }));
    } else {
      // PDF — send raw, server extracts text
      setFile(f);
      setPreview("");
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        setFileBase64(dataUrl.split(",")[1]);
      };
      reader.readAsDataURL(f);
    }
  };

  const analyze = async () => {
    if (!file || !fileBase64) return;
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "receipt", fileBase64, mimeType: file.type }),
      });
      const data = await res.json();
      setResult(data.text || data.error);
    } catch {
      setResult("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => { setFile(null); setPreview(""); setFileBase64(""); setResult(""); };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-display font-bold text-white mb-1">Receipt & Tax Analyzer</h2>
        <p className="text-gray-400 text-sm">Upload any Indian receipt or invoice — get GST, TDS, and full tax breakdown instantly.</p>
      </div>

      {/* Feature tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {TAX_TAGS.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-[#f5a623]/10 text-[#f5a623] border border-[#f5a623]/20">{t}</span>
        ))}
      </div>

      {!file ? (
        <div
          onDrop={(e) => { e.preventDefault(); e.dataTransfer.files[0] && handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-white/20 hover:border-[#f5a623]/50 rounded-2xl p-14 text-center cursor-pointer transition-colors group"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#f5a623]/10 group-hover:bg-[#f5a623]/20 flex items-center justify-center mx-auto mb-4 transition-colors">
            <Receipt className="w-7 h-7 text-[#f5a623]" />
          </div>
          <p className="text-white font-medium mb-1">Upload receipt or invoice</p>
          <p className="text-gray-500 text-sm">JPG, PNG, PDF — up to 4 MB</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,.pdf"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: preview + button */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-300">Uploaded File</h3>
              <button onClick={reset} className="text-gray-500 hover:text-white text-xs flex items-center gap-1 transition-colors">
                <X className="w-3.5 h-3.5" /> Remove
              </button>
            </div>

            {preview ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={preview} alt="Receipt preview" className="w-full rounded-xl border border-white/10 max-h-72 object-contain bg-gray-800" />
            ) : (
              <div className="w-full h-36 rounded-xl border border-white/10 bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <Receipt className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm truncate px-4">{file.name}</p>
                </div>
              </div>
            )}

            <button
              onClick={analyze}
              disabled={loading}
              className="btn-gold w-full justify-center mt-4 disabled:opacity-50"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Analyzing...</>
              ) : result ? (
                <><RefreshCw className="w-4 h-4" /> Re-analyze</>
              ) : (
                <><Receipt className="w-4 h-4" /> Analyze Receipt</>
              )}
            </button>
          </div>

          {/* Right: results */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-3">Tax Breakdown</h3>
            {!result && !loading && (
              <div className="h-40 rounded-xl border border-white/10 bg-gray-800/40 flex items-center justify-center">
                <p className="text-gray-500 text-sm text-center px-4">Click &quot;Analyze Receipt&quot; to extract tax details</p>
              </div>
            )}
            {loading && (
              <div className="h-40 rounded-xl border border-white/10 bg-gray-800/40 flex items-center justify-center">
                <div className="text-center">
                  <Loader2 className="w-8 h-8 text-[#f5a623] animate-spin mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Reading receipt...</p>
                </div>
              </div>
            )}
            {result && !loading && (
              <div className="bg-gray-800/60 border border-white/10 rounded-xl p-4 max-h-96 overflow-y-auto">
                <div className="text-sm text-gray-200 whitespace-pre-wrap leading-relaxed">{result}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

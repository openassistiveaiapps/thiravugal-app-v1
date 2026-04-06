"use client";

import { useState, useRef, useEffect } from "react";
import { Upload, Send, FileText, X, Bot, User, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_PROMPTS = [
  "Summarize this document",
  "What are the key points?",
  "Extract all action items",
  "List the main conclusions",
];

export default function DocumentChat() {
  const [file, setFile] = useState<File | null>(null);
  const [fileBase64, setFileBase64] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleFile = (f: File) => {
    setFile(f);
    setMessages([]);
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setFileBase64(dataUrl.split(",")[1]);
    };
    reader.readAsDataURL(f);
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || !file || loading) return;
    const userMsg: Message = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "document-chat",
          fileBase64,
          mimeType: file.type,
          chatHistory: newMessages,
        }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.text || data.error }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Connection error. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-display font-bold text-white mb-1">Document Chat</h2>
        <p className="text-gray-400 text-sm">Upload any document and ask questions or get an instant summary.</p>
      </div>

      {!file ? (
        <div
          onDrop={(e) => { e.preventDefault(); e.dataTransfer.files[0] && handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-white/20 hover:border-[#29abe2]/50 rounded-2xl p-14 text-center cursor-pointer transition-colors group"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#1a237e]/40 group-hover:bg-[#1a237e]/60 flex items-center justify-center mx-auto mb-4 transition-colors">
            <Upload className="w-7 h-7 text-[#29abe2]" />
          </div>
          <p className="text-white font-medium mb-1">Drop your document here</p>
          <p className="text-gray-500 text-sm">PDF, TXT, images — up to 4 MB</p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.txt,.md,image/*"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
        </div>
      ) : (
        <div className="flex flex-col" style={{ height: "calc(100vh - 260px)", minHeight: 480 }}>
          {/* File chip */}
          <div className="flex items-center gap-3 mb-4 p-3 bg-[#1a237e]/20 border border-[#29abe2]/20 rounded-xl">
            <FileText className="w-5 h-5 text-[#29abe2] shrink-0" />
            <span className="text-sm text-white flex-1 truncate">{file.name}</span>
            <button
              onClick={() => { setFile(null); setFileBase64(""); setMessages([]); }}
              className="text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-1">
            {messages.length === 0 && (
              <div>
                <p className="text-gray-500 text-sm text-center mb-4">Ask anything about your document</p>
                <div className="grid grid-cols-2 gap-2">
                  {QUICK_PROMPTS.map((p) => (
                    <button
                      key={p}
                      onClick={() => sendMessage(p)}
                      className="text-left text-sm p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-[#29abe2]" : "bg-[#1a237e]"}`}>
                  {msg.role === "user" ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                </div>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-[#29abe2] text-white"
                    : "bg-gray-800/80 text-gray-100 border border-white/10"
                }`}>
                  <div className="whitespace-pre-wrap">{msg.content}</div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1a237e] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-800/80 border border-white/10 rounded-2xl px-4 py-3">
                  <Loader2 className="w-4 h-4 text-[#29abe2] animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage(input)}
              placeholder="Ask a question about your document..."
              disabled={loading}
              className="flex-1 bg-gray-800/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#29abe2] focus:outline-none transition-colors"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              className="bg-[#1a237e] hover:bg-[#29abe2] disabled:opacity-40 px-4 rounded-xl transition-colors"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

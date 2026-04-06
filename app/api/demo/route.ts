import Groq from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";
import { PDFParse } from "pdf-parse";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const TEXT_MODEL = "llama-3.3-70b-versatile";
const VISION_MODEL = "meta-llama/llama-4-scout-17b-16e-instruct";
const MAX_TEXT_CHARS = 20000;

async function extractText(base64: string, mimeType: string): Promise<string> {
  let text = "";
  if (mimeType === "application/pdf") {
    const buffer = Buffer.from(base64, "base64");
    const parser = new PDFParse({ data: buffer });
    const result = await parser.getText();
    text = result.text.trim();
  } else {
    text = Buffer.from(base64, "base64").toString("utf-8");
  }
  return text.length > MAX_TEXT_CHARS
    ? text.slice(0, MAX_TEXT_CHARS) + "\n\n[...truncated...]"
    : text;
}

const SYSTEM_PROMPTS: Record<string, string> = {
  "document-chat": `You are a helpful document assistant. The user has uploaded a document and may ask questions, request summaries, or want key information extracted. Be concise and accurate. Use markdown formatting when it improves clarity.`,

  receipt: `You are an expert Indian tax and accounting assistant. When analyzing receipts or invoices, extract and present in a clean structured format:
- Vendor/Supplier name and GST number (if visible)
- Date and Invoice/Receipt number
- Line items with amounts
- Subtotal
- GST breakdown: CGST, SGST, IGST (whichever applies)
- TDS deduction (if any)
- Total payable amount
- HSN/SAC codes (if visible)
- Payment method (if shown)

Flag any discrepancies or missing information. Use ₹ for amounts.`,

  resume: `You are an expert HR consultant and career advisor in the Indian IT industry. Analyze the provided resume against the job description and return:

1. **Overall Match Score** (X/100)
2. **Key Strengths** — skills and experience that align well
3. **Critical Gaps** — missing skills or experience the JD requires
4. **Improvement Suggestions** — specific, actionable steps
5. **Interview Preparation Tips** — based on the gaps identified

Be constructive, specific, and actionable. Use markdown with clear section headers.`,
};

export async function POST(req: NextRequest) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ error: "GROQ_API_KEY not configured on server." }, { status: 500 });
    }

    const body = await req.json();
    const { mode, fileBase64, mimeType, chatHistory, jobDescription } = body;

    const isImage = mimeType?.startsWith("image/");
    const isPdf = mimeType === "application/pdf";
    const model = isImage ? VISION_MODEL : TEXT_MODEL;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let messages: any[] = [];

    if (mode === "document-chat") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const built: any[] = [];
      for (const [idx, msg] of (chatHistory as { role: string; content: string }[]).entries()) {
        if (idx === 0 && fileBase64) {
          if (isImage) {
            built.push({
              role: "user",
              content: [
                { type: "image_url", image_url: { url: `data:${mimeType};base64,${fileBase64}` } },
                { type: "text", text: msg.content },
              ],
            });
          } else {
            const text = await extractText(fileBase64, mimeType);
            built.push({ role: "user", content: `Document contents:\n\n${text}\n\n---\n\n${msg.content}` });
          }
        } else {
          built.push({ role: msg.role, content: msg.content });
        }
      }
      messages = [{ role: "system", content: SYSTEM_PROMPTS["document-chat"] }, ...built];
    } else if (mode === "receipt") {
      const userContent = isImage
        ? [
            { type: "image_url", image_url: { url: `data:${mimeType};base64,${fileBase64}` } },
            { type: "text", text: "Analyze this receipt/invoice and extract all tax and financial details in a structured format." },
          ]
        : `Receipt contents:\n\n${await extractText(fileBase64, mimeType)}\n\nExtract all tax and financial details.`;
      messages = [
        { role: "system", content: SYSTEM_PROMPTS["receipt"] },
        { role: "user", content: userContent },
      ];
    } else if (mode === "resume") {
      const userContent = isImage
        ? [
            { type: "image_url", image_url: { url: `data:${mimeType};base64,${fileBase64}` } },
            { type: "text", text: `Job Description:\n\n${jobDescription}\n\nAnalyze this resume against the job description.` },
          ]
        : `Resume:\n\n${await extractText(fileBase64, mimeType)}\n\nJob Description:\n\n${jobDescription}`;
      messages = [
        { role: "system", content: SYSTEM_PROMPTS["resume"] },
        { role: "user", content: userContent },
      ];
    }

    console.log(`[demo] mode=${mode} model=${model} isPdf=${isPdf} base64_len=${fileBase64?.length ?? 0}`);
    const response = await groq.chat.completions.create({
      model,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      messages: messages as any,
      max_tokens: 2048,
    });

    const text = response.choices[0]?.message?.content ?? "";
    return NextResponse.json({ text });
  } catch (err) {
    console.error("Demo API error:", err);
    return NextResponse.json({ error: "Failed to process request. Please try again." }, { status: 500 });
  }
}

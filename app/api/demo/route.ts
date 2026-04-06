import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

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
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({ error: "API key not configured on server." }, { status: 500 });
    }

    const body = await req.json();
    const { mode, fileBase64, mimeType, chatHistory, jobDescription } = body;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let messages: any[] = [];

    if (mode === "document-chat") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      messages = (chatHistory as { role: string; content: string }[]).map((msg, idx) => {
        if (idx === 0 && fileBase64) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const fileContent: any[] = [];
          if (mimeType === "application/pdf") {
            fileContent.push({ type: "document", source: { type: "base64", media_type: "application/pdf", data: fileBase64 } });
          } else if (mimeType?.startsWith("image/")) {
            fileContent.push({ type: "image", source: { type: "base64", media_type: mimeType, data: fileBase64 } });
          } else {
            const text = Buffer.from(fileBase64, "base64").toString("utf-8");
            fileContent.push({ type: "text", text: `Document contents:\n\n${text}` });
          }
          fileContent.push({ type: "text", text: msg.content });
          return { role: "user", content: fileContent };
        }
        return { role: msg.role, content: msg.content };
      });
    } else if (mode === "receipt") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const content: any[] = [];
      if (mimeType?.startsWith("image/")) {
        content.push({ type: "image", source: { type: "base64", media_type: mimeType, data: fileBase64 } });
      } else if (mimeType === "application/pdf") {
        content.push({ type: "document", source: { type: "base64", media_type: "application/pdf", data: fileBase64 } });
      }
      content.push({ type: "text", text: "Please analyze this receipt/invoice and extract all tax and financial details in a structured format." });
      messages = [{ role: "user", content }];
    } else if (mode === "resume") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const content: any[] = [];
      if (mimeType === "application/pdf") {
        content.push({ type: "document", source: { type: "base64", media_type: "application/pdf", data: fileBase64 } });
      } else if (mimeType?.startsWith("image/")) {
        content.push({ type: "image", source: { type: "base64", media_type: mimeType, data: fileBase64 } });
      }
      content.push({ type: "text", text: `Job Description:\n\n${jobDescription}\n\nPlease analyze this resume against the job description above.` });
      messages = [{ role: "user", content }];
    }

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 2048,
      system: SYSTEM_PROMPTS[mode] ?? "",
      messages,
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json({ text });
  } catch (err) {
    console.error("Demo API error:", err);
    return NextResponse.json({ error: "Failed to process request. Please try again." }, { status: 500 });
  }
}

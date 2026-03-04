import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

// Update BASE_URL once your domain is registered
const BASE_URL = "https://www.thiravugal.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Thiravugal | AI & ML, DSA & System Design Training | Chennai",
    template: "%s | Thiravugal",
  },
  description:
    "Thiravugal is an IT training platform in Chennai teaching AI/ML, DSA & System Design, Full Stack, and Cloud — by industry SMEs. Learn to architect solutions, build real-world systems, and become AI-ready.",

  keywords: [
    "AI ML training Chennai",
    "DSA training Chennai",
    "system design course India",
    "IT training Chennai",
    "software engineering course",
    "LLM AI agents training",
    "RAG MCP course",
    "full stack development course",
    "DevOps cloud training",
    "engineering student training",
    "working professional IT course",
    "placement training Chennai",
    "Thiravugal",
    "industry SME training",
    "AI native engineering",
  ],

  authors: [{ name: "Thiravugal", url: BASE_URL }],
  creator: "Thiravugal",
  publisher: "Thiravugal",

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Thiravugal",
    title: "Thiravugal | AI & ML, DSA & System Design Training | Chennai",
    description:
      "Learn AI/ML, DSA, Full Stack & System Design from industry SMEs. Build real-world systems like CRM, ERP, and AI Agents. Get industry-ready with Thiravugal.",
    locale: "en_IN",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Thiravugal – Unlock Your Potential",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Thiravugal | AI & ML, DSA & System Design Training",
    description:
      "Learn AI/ML, DSA, Full Stack & System Design from industry SMEs in Chennai. Build real-world systems and become AI-ready.",
    images: ["/logo.jpeg"],
    creator: "@thiravugal",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  verification: {
    // Add your Google Search Console verification code here once registered:
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

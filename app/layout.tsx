import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thiravugal – Unlock Your Potential",
  description:
    "India's premier IT training and placement platform. Master IT skills, DSA, and AI with industry experts. Empowering engineering students and professionals to become industry-ready.",
  keywords: [
    "IT training",
    "placement",
    "DSA",
    "AI training",
    "engineering students",
    "working professionals",
    "Thiravugal",
  ],
  openGraph: {
    title: "Thiravugal – Unlock Your Potential",
    description:
      "Master IT, DSA & AI skills with industry experts. Get placed in top companies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

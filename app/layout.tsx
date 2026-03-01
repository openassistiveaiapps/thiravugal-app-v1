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
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

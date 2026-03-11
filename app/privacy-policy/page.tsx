import Navbar from "@/components/Navbar";
import FestivalBanner from "@/components/FestivalBanner";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "Personal identification information — name, email address, phone number — provided when you fill out our contact or enquiry form.",
      "Usage data — pages visited, time spent, device/browser type — collected automatically via analytics tools.",
      "Communication data — messages or queries you send us via the contact form or email.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "To respond to your enquiries and provide information about our training programs or AI solutions.",
      "To send you course updates, promotional offers, and relevant communications (you may opt out at any time).",
      "To improve our website experience based on usage patterns.",
      "To comply with legal obligations and resolve any disputes.",
    ],
  },
  {
    title: "3. Data Sharing & Disclosure",
    content: [
      "We do not sell, trade, or rent your personal information to third parties.",
      "We may share data with trusted service providers (e.g., form submission services, analytics) solely to operate our website — they are obligated to keep your data confidential.",
      "We may disclose information if required by law or to protect the rights and safety of Thiravugal and its users.",
    ],
  },
  {
    title: "4. Cookies",
    content: [
      "Our website may use cookies to enhance your browsing experience and analyse site traffic.",
      "You can instruct your browser to refuse cookies. However, some parts of the site may not function properly without them.",
    ],
  },
  {
    title: "5. Data Security",
    content: [
      "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, or disclosure.",
      "While we strive to protect your information, no method of transmission over the internet is 100% secure.",
    ],
  },
  {
    title: "6. Data Retention",
    content: [
      "We retain your personal data only as long as necessary to fulfil the purposes outlined in this policy, or as required by law.",
      "You may request deletion of your data at any time by contacting us at support@thiravugal.in.",
    ],
  },
  {
    title: "7. Your Rights",
    content: [
      "You have the right to access, correct, or delete the personal information we hold about you.",
      "You may opt out of marketing communications at any time by replying 'STOP' or contacting us directly.",
      "To exercise any of your rights, email us at support@thiravugal.in.",
    ],
  },
  {
    title: "8. Third-Party Links",
    content: [
      "Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date. Continued use of our website after changes constitutes acceptance.",
    ],
  },
  {
    title: "10. Contact Us",
    content: [
      "If you have any questions about this Privacy Policy, please contact us:",
      "📧 support@thiravugal.in",
      "📞 +91 99418 74780",
      "📍 Chennai, Tamil Nadu, India",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <FestivalBanner />
        <Navbar />
      </div>

      <main className="bg-gray-50 min-h-screen pt-20">
        {/* Hero */}
        <div style={{ background: "linear-gradient(135deg, #0d1b4b 0%, #1a237e 60%, #0d2f4f 100%)" }} className="py-16 px-4 text-center">
          <p className="text-[#29abe2] text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/60 text-sm max-w-xl mx-auto">
            Effective Date: March 2025 &nbsp;·&nbsp; Last Updated: March 2025
          </p>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-gray-600 text-base leading-relaxed mb-10">
            Thiravugal (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard your information when you
            visit <strong>thiravugal.in</strong> or interact with our services.
          </p>

          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-display font-bold text-gray-900 mb-3">{s.title}</h2>
                <ul className="space-y-2">
                  {s.content.map((line, i) => (
                    <li key={i} className="text-gray-600 text-sm leading-relaxed flex gap-2">
                      <span className="text-[#29abe2] mt-1 shrink-0">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer hideCta />
    </>
  );
}

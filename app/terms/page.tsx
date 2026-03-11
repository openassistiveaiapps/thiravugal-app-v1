import Navbar from "@/components/Navbar";
import FestivalBanner from "@/components/FestivalBanner";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using thiravugal.in and any services offered by Thiravugal, you agree to be bound by these Terms & Conditions.",
      "If you do not agree with any part of these terms, please discontinue use of our website and services.",
    ],
  },
  {
    title: "2. Services Offered",
    content: [
      "Thiravugal provides IT training programs (AI/ML, DSA, Full Stack Development, Cloud & DevOps, Backend Engineering) and AI product development services for businesses.",
      "Program details, curriculum, and fees are subject to change. The latest information will always be available on our website or via our counselling team.",
    ],
  },
  {
    title: "3. Enrolment & Eligibility",
    content: [
      "Enrolment in any training program is subject to availability and confirmation by our team.",
      "We reserve the right to decline enrolment at our discretion.",
      "Participants must be at least 18 years of age or have parental/guardian consent.",
    ],
  },
  {
    title: "4. Fees & Payment",
    content: [
      "All fees are as communicated by our counselling team and are subject to change without prior notice.",
      "Payments are non-refundable unless otherwise explicitly stated in a written agreement at the time of enrolment.",
      "EMI or instalment plans, if offered, must be adhered to as agreed. Late payments may result in suspension of access to course materials.",
    ],
  },
  {
    title: "5. Intellectual Property",
    content: [
      "All content on thiravugal.in — including text, graphics, course materials, videos, and code — is the intellectual property of Thiravugal and is protected by applicable copyright laws.",
      "You may not reproduce, distribute, or commercially exploit any content without prior written permission from Thiravugal.",
      "Course materials provided to enrolled students are for personal learning only and may not be shared or redistributed.",
    ],
  },
  {
    title: "6. Code of Conduct",
    content: [
      "Students and users are expected to engage respectfully with instructors, mentors, and fellow learners.",
      "Any form of harassment, plagiarism, or academic dishonesty may result in immediate termination of enrolment without refund.",
    ],
  },
  {
    title: "7. AI Product Development Services",
    content: [
      "For businesses engaging Thiravugal for AI product development, specific terms of service, timelines, deliverables, and payment schedules will be governed by a separate written agreement.",
      "Thiravugal retains the right to display completed projects in its portfolio unless a non-disclosure agreement is in place.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    content: [
      "Thiravugal shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.",
      "We do not guarantee specific outcomes such as job placement, salary increases, or business results from our training or AI solutions. Outcomes depend on individual effort and market conditions.",
    ],
  },
  {
    title: "9. Third-Party Links",
    content: [
      "Our website may contain links to external websites. Thiravugal is not responsible for the content or practices of third-party sites.",
    ],
  },
  {
    title: "10. Modifications to Terms",
    content: [
      "Thiravugal reserves the right to update these Terms & Conditions at any time. Continued use of our services after updates constitutes acceptance of the revised terms.",
      "We encourage you to review this page periodically.",
    ],
  },
  {
    title: "11. Governing Law",
    content: [
      "These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.",
    ],
  },
  {
    title: "12. Contact Us",
    content: [
      "For any questions regarding these Terms & Conditions, please reach out:",
      "📧 support@thiravugal.in",
      "📞 +91 99418 74780",
      "📍 Chennai, Tamil Nadu, India",
    ],
  },
];

export default function Terms() {
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
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">Terms &amp; Conditions</h1>
          <p className="text-white/60 text-sm max-w-xl mx-auto">
            Effective Date: March 2025 &nbsp;·&nbsp; Last Updated: March 2025
          </p>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-gray-600 text-base leading-relaxed mb-10">
            Please read these Terms &amp; Conditions carefully before using thiravugal.in or enrolling in
            any program offered by Thiravugal. These terms govern your use of our website and services.
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

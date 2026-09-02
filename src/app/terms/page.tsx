import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ShiftSBAR terms of service.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Nav />
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-12">
        <h1 className="font-heading font-bold text-3xl mb-6">Terms of Service</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-4 text-text-secondary">
          <p className="text-xs font-mono">Last updated: April 2026</p>

          <h2 className="font-heading font-semibold text-lg text-text">Service Description</h2>
          <p>ShiftSBAR is an AI-powered documentation tool that helps nurses structure shift handoff notes into SBAR format. It is a documentation assistant, not a medical device, clinical decision support system, or electronic health record.</p>

          <h2 className="font-heading font-semibold text-lg text-text">Not Medical Advice</h2>
          <p>ShiftSBAR does not provide medical advice, diagnosis, or treatment recommendations. AI-generated reports are based on user input and may contain errors. Users must always verify AI-generated content against patient charts and exercise independent clinical judgment.</p>

          <h2 className="font-heading font-semibold text-lg text-text">User Responsibilities</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Do not enter protected health information (PHI) including full patient names, dates of birth, medical record numbers, or Social Security numbers</li>
            <li>Use patient initials and room numbers only</li>
            <li>Verify all AI-generated clinical content before use</li>
            <li>Comply with your facility&apos;s policies regarding electronic documentation tools</li>
          </ul>

          <h2 className="font-heading font-semibold text-lg text-text">Free and Pro Plans</h2>
          <p>The Free plan provides 3 reports per day at no cost. The Pro plan ($9.99/month) provides unlimited reports. Pro subscriptions are billed monthly through Stripe and can be cancelled at any time.</p>

          <h2 className="font-heading font-semibold text-lg text-text">Limitation of Liability</h2>
          <p>ShiftSBAR is provided &quot;as is&quot; without warranties of any kind. We are not liable for any clinical decisions made based on AI-generated reports, any errors or omissions in AI-generated content, or any damages resulting from use of the service.</p>

          <h2 className="font-heading font-semibold text-lg text-text">Changes to Terms</h2>
          <p>We may update these terms from time to time. Continued use of ShiftSBAR after changes constitutes acceptance of the updated terms.</p>

          <h2 className="font-heading font-semibold text-lg text-text">Contact</h2>
          <p>Questions about these terms? Contact us at legal@shiftsbar.com.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

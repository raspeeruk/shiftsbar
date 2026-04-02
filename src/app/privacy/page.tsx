import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ShiftSBAR privacy policy — how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Nav />
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-12">
        <h1 className="font-heading font-bold text-3xl mb-6">Privacy Policy</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-4 text-text-secondary">
          <p className="text-xs font-mono">Last updated: April 2026</p>

          <h2 className="font-heading font-semibold text-lg text-text">What We Collect</h2>
          <p>ShiftSBAR processes audio recordings and text input to generate SBAR reports. We collect minimal data:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong className="text-text">Audio recordings</strong> are sent to OpenAI Whisper for transcription and are not stored on our servers.</li>
            <li><strong className="text-text">Text input</strong> is sent to Anthropic Claude for SBAR generation and is not stored after processing.</li>
            <li><strong className="text-text">Generated reports</strong> exist only in your browser session (sessionStorage) and are not saved to any server.</li>
            <li><strong className="text-text">Analytics</strong> (Google Analytics 4) collect anonymous usage data — pages visited, feature usage — with no personal identifiers.</li>
          </ul>

          <h2 className="font-heading font-semibold text-lg text-text">What We Don&apos;t Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>We do not store audio files</li>
            <li>We do not store transcriptions</li>
            <li>We do not store generated SBAR reports</li>
            <li>We do not collect names, emails, or personal information (unless you subscribe to Pro)</li>
          </ul>

          <h2 className="font-heading font-semibold text-lg text-text">HIPAA Disclaimer</h2>
          <p>ShiftSBAR is not a HIPAA-covered entity and is not designed to store or transmit protected health information (PHI). Users are responsible for ensuring they do not input identifiable patient information. Use initials and room numbers only.</p>

          <h2 className="font-heading font-semibold text-lg text-text">Third-Party Services</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong className="text-text">OpenAI</strong> (audio transcription) — <a href="https://openai.com/policies/privacy-policy" className="text-accent hover:underline">Privacy Policy</a></li>
            <li><strong className="text-text">Anthropic</strong> (AI generation) — <a href="https://www.anthropic.com/privacy" className="text-accent hover:underline">Privacy Policy</a></li>
            <li><strong className="text-text">Stripe</strong> (payments, Pro plan only) — <a href="https://stripe.com/privacy" className="text-accent hover:underline">Privacy Policy</a></li>
            <li><strong className="text-text">Google Analytics</strong> (anonymous usage) — <a href="https://policies.google.com/privacy" className="text-accent hover:underline">Privacy Policy</a></li>
          </ul>

          <h2 className="font-heading font-semibold text-lg text-text">Contact</h2>
          <p>Questions about privacy? Contact us at privacy@shiftsbar.com.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PulseBar from "@/components/PulseBar";

export default function HomePage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-3xl mx-auto px-4 pt-16 pb-12 text-center">
          <div className="mb-6">
            <PulseBar active className="max-w-md mx-auto opacity-60" />
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-4 leading-tight">
            Speak your shift.
            <br />
            <span className="text-accent">Get a perfect handoff.</span>
          </h1>

          <p className="text-text-secondary text-lg max-w-lg mx-auto mb-8">
            Brain dump your shift notes by voice or text. AI structures
            everything into a clean SBAR report with flagged priorities —
            in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/record"
              className="bg-accent hover:bg-accent-hover text-bg font-semibold px-6 py-3 rounded-md text-base transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                <path d="M19 10v2a7 7 0 01-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </svg>
              Start Recording — Free
            </Link>
            <Link
              href="/guides/what-is-sbar-nursing"
              className="bg-surface hover:bg-border text-text border border-border font-semibold px-6 py-3 rounded-md text-base transition-colors inline-flex items-center justify-center"
            >
              What is SBAR?
            </Link>
          </div>

          <p className="text-text-secondary text-xs mt-4">
            3 free reports per day. No account needed.
          </p>
        </section>

        {/* How it works */}
        <section className="bg-surface/50 border-y border-border py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-heading font-bold text-2xl text-center mb-10">
              Three Steps. One Perfect Handoff.
            </h2>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Record",
                  desc: "Hit record and brain dump your shift — meds, vitals, assessments, concerns. Talk naturally.",
                  icon: (
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                      <path d="M19 10v2a7 7 0 01-14 0v-2" />
                    </svg>
                  ),
                },
                {
                  step: "02",
                  title: "AI Structures",
                  desc: "OpenAI Whisper transcribes, then Claude parses everything into the four SBAR sections with flagged priorities.",
                  icon: (
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                    </svg>
                  ),
                },
                {
                  step: "03",
                  title: "Handoff",
                  desc: "Review your structured report on screen or download a PDF. Clean, complete, nothing missed.",
                  icon: (
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14,2 14,8 20,8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.step} className="bg-bg border border-border rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-accent">{item.icon}</span>
                    <span className="font-mono text-xs text-text-secondary">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="font-heading font-bold text-2xl text-center mb-10">
            Built for Night Shifts and Loud Units
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Medical-Grade Transcription",
                desc: "OpenAI Whisper handles drug names, abbreviations (BID, PRN, TID), and medical terminology other speech tools mangle.",
              },
              {
                title: "Priority Flagging",
                desc: "Critical labs, concerning vitals, and urgent status changes are automatically flagged with amber and red badges.",
              },
              {
                title: "Dark Mode Only",
                desc: "Designed for 3am use. No bright white screens burning your retinas on night shift.",
              },
              {
                title: "Text Fallback",
                desc: "Too noisy to speak? Switch to text input. Same AI structuring, no microphone needed.",
              },
              {
                title: "PDF Export",
                desc: "Download a branded PDF with cover page, all four SBAR sections, and a signature block.",
              },
              {
                title: "No Account Required",
                desc: "Start recording immediately. No sign-up, no email, no friction. 3 free reports every day.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-surface border border-border rounded-lg p-4"
              >
                <h3 className="font-heading font-semibold text-sm mb-1">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-surface/50 border-y border-border py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-2xl mb-4">
              Stop Buying Paper Brain Sheets
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto mb-6">
              Nurses spend $8-15 on Amazon brain sheet pads. They scribble notes
              all shift, then struggle to organize them for handoff. ShiftSBAR
              replaces the paper with a voice-first digital workflow that
              produces a structured report in seconds.
            </p>
            <Link
              href="/record"
              className="bg-accent hover:bg-accent-hover text-bg font-semibold px-6 py-3 rounded-md text-base transition-colors inline-block"
            >
              Try Your First Report Free
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

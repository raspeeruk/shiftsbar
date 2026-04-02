import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { generateGuideMetadata } from "@/components/GuideLayout";

export const metadata: Metadata = generateGuideMetadata({
  title: "What is SBAR in Nursing? Complete Guide",
  description:
    "SBAR stands for Situation, Background, Assessment, Recommendation. Learn how nurses use this communication framework for safe patient handoffs.",
  slug: "what-is-sbar-nursing",
});

export default function WhatIsSbarPage() {
  return (
    <GuideLayout
      title="What is SBAR in Nursing?"
      faq={[
        {
          question: "What does SBAR stand for?",
          answer:
            "SBAR stands for Situation, Background, Assessment, Recommendation. It's a structured communication technique used in healthcare to ensure clear, concise information transfer between providers.",
        },
        {
          question: "Why is SBAR important in nursing?",
          answer:
            "SBAR reduces communication errors during handoffs, which are a leading cause of sentinel events. The Joint Commission recommends standardized handoff communication, and SBAR is the most widely adopted framework.",
        },
        {
          question: "When should nurses use SBAR?",
          answer:
            "Nurses should use SBAR during shift handoffs, when calling physicians about patient changes, during rapid response situations, and when transferring patients between units.",
        },
        {
          question: "Can SBAR be used for written reports?",
          answer:
            "Yes. While SBAR was originally designed for verbal communication, it works equally well as a written framework for shift reports, chart notes, and documentation.",
        },
      ]}
    >
      <p>
        SBAR is the gold standard communication framework used by nurses worldwide
        for patient handoffs. Originally developed by the US Navy for nuclear
        submarine crews, it was adapted for healthcare by Kaiser Permanente in the
        early 2000s and is now recommended by the Joint Commission, WHO, and every
        major nursing organization.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        The Four Sections
      </h2>

      <div className="space-y-4">
        <div className="bg-surface border border-border rounded-lg p-4 border-l-4 border-l-accent">
          <h3 className="font-heading font-semibold text-text mb-1">
            S — Situation
          </h3>
          <p className="text-sm">
            What is happening right now? State the patient&apos;s name (initials),
            room, primary diagnosis, and the reason you&apos;re giving the report.
            This grounds the listener immediately.
          </p>
        </div>

        <div className="bg-surface border border-border rounded-lg p-4 border-l-4 border-l-blue-500">
          <h3 className="font-heading font-semibold text-text mb-1">
            B — Background
          </h3>
          <p className="text-sm">
            What is the clinical context? Relevant medical history, current
            medications, allergies, IV access, and baseline vitals. Give the
            incoming nurse what they need to understand the full picture.
          </p>
        </div>

        <div className="bg-surface border border-border rounded-lg p-4 border-l-4 border-l-warning">
          <h3 className="font-heading font-semibold text-text mb-1">
            A — Assessment
          </h3>
          <p className="text-sm">
            What do you think is going on? Current vitals, neuro status, pain
            level, I&O, labs of note, and your nursing assessment. This is where
            clinical judgment matters.
          </p>
        </div>

        <div className="bg-surface border border-border rounded-lg p-4 border-l-4 border-l-danger">
          <h3 className="font-heading font-semibold text-text mb-1">
            R — Recommendation
          </h3>
          <p className="text-sm">
            What needs to happen next? Pending orders, pending labs, anticipated
            changes, discharge progress, and your recommendation for the next
            shift. This is the actionable handoff.
          </p>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        Why Paper Brain Sheets Fall Short
      </h2>
      <p>
        Most nurses use paper &quot;brain sheets&quot; — pre-printed templates you can buy
        on Amazon for $8-15 per pad. You scribble notes throughout your 12-hour
        shift, then try to organize them during handoff. The problem: your notes
        are disorganized, you miss details under pressure, and the incoming nurse
        has to decode your handwriting.
      </p>
      <p>
        <Link href="/record" className="text-accent hover:underline font-semibold">
          ShiftSBAR
        </Link>{" "}
        replaces paper brain sheets with a voice-first digital workflow. Speak
        your brain dump at the end of your shift — medications, vitals,
        assessments, everything — and AI structures it into a clean SBAR report
        in seconds.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        SBAR Examples by Unit
      </h2>
      <p>
        See real SBAR examples tailored to your unit:
      </p>
      <ul className="grid grid-cols-2 gap-2 text-sm">
        {[
          { label: "Med-Surg", href: "/guides/examples/med-surg" },
          { label: "ICU", href: "/guides/examples/icu" },
          { label: "Pediatric", href: "/guides/examples/pediatric" },
          { label: "Emergency", href: "/guides/examples/emergency" },
          { label: "Postpartum", href: "/guides/examples/postpartum" },
          { label: "Psychiatric", href: "/guides/examples/psychiatric" },
          { label: "Orthopedic", href: "/guides/examples/orthopedic" },
          { label: "Cardiac", href: "/guides/examples/cardiac" },
        ].map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-accent hover:underline"
            >
              {link.label} SBAR Example
            </Link>
          </li>
        ))}
      </ul>
    </GuideLayout>
  );
}

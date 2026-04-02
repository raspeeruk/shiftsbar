import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { generateGuideMetadata } from "@/components/GuideLayout";

export const metadata: Metadata = generateGuideMetadata({
  title: "SBAR vs ISBAR: What's the Difference?",
  description:
    "Compare SBAR and ISBAR communication frameworks for nursing handoffs. Learn what the I stands for, when to use each format, and which is better for your unit.",
  slug: "sbar-vs-isbar",
});

export default function SbarVsIsbarPage() {
  return (
    <GuideLayout
      title="SBAR vs ISBAR: What's the Difference?"
      faq={[
        {
          question: "What does the I in ISBAR stand for?",
          answer:
            "The I in ISBAR stands for Introduction (sometimes called Identification). It requires the communicating nurse to state their name, role, location, and the patient's name and identifier before beginning the Situation section. This ensures both parties know exactly who is speaking and about which patient.",
        },
        {
          question: "Is ISBAR better than SBAR?",
          answer:
            "Neither is objectively better — they serve different contexts. ISBAR is better for phone calls to physicians and inter-facility transfers where the receiving party may not know who is calling or about which patient. SBAR is more efficient for same-unit shift handoffs where both nurses already know each other and are handing off a shared patient assignment.",
        },
        {
          question: "Do hospitals in the US use SBAR or ISBAR?",
          answer:
            "Most US hospitals use SBAR for shift handoffs, though many have adopted ISBAR for phone communications with physicians. ISBAR is more common in Australia, New Zealand, and the UK, where it is the nationally recommended standard. The Joint Commission endorses standardized handoff communication without specifying SBAR vs ISBAR.",
        },
        {
          question: "Can ShiftSBAR generate ISBAR reports?",
          answer:
            "ShiftSBAR generates SBAR-format reports by default, which is the standard for shift handoffs. If your facility uses ISBAR, you can add the Introduction verbally at the start of your recording (your name, role, unit, patient identifier) and the AI will structure it appropriately.",
        },
      ]}
    >
      <p>
        If your facility uses ISBAR instead of SBAR — or you have seen both
        terms in nursing school and wondered what the difference is — this
        guide explains exactly what sets them apart, when each format is
        preferred, and why it matters less than you think.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        The Core Difference: One Extra Letter
      </h2>

      <p>
        ISBAR adds an &quot;I&quot; section at the beginning of the standard
        SBAR framework. The I stands for <strong className="text-text">Introduction</strong>{" "}
        (also called <strong className="text-text">Identification</strong> in
        some systems). Everything else is identical.
      </p>

      <div className="bg-surface border border-border rounded-lg p-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <h3 className="font-heading font-semibold text-text text-sm mb-2">
              SBAR
            </h3>
            <ul className="text-sm space-y-1.5">
              <li>
                <span className="text-accent font-semibold">S</span> — Situation
              </li>
              <li>
                <span className="text-accent font-semibold">B</span> — Background
              </li>
              <li>
                <span className="text-accent font-semibold">A</span> — Assessment
              </li>
              <li>
                <span className="text-accent font-semibold">R</span> — Recommendation
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-text text-sm mb-2">
              ISBAR
            </h3>
            <ul className="text-sm space-y-1.5">
              <li>
                <span className="text-blue-400 font-semibold">I</span> — Introduction / Identification
              </li>
              <li>
                <span className="text-accent font-semibold">S</span> — Situation
              </li>
              <li>
                <span className="text-accent font-semibold">B</span> — Background
              </li>
              <li>
                <span className="text-accent font-semibold">A</span> — Assessment
              </li>
              <li>
                <span className="text-accent font-semibold">R</span> — Recommendation
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        What the Introduction Section Includes
      </h2>

      <p>
        The I section is a brief identification block that answers three
        questions before the clinical content begins:
      </p>

      <div className="bg-surface border border-border rounded-lg p-4">
        <ul className="text-sm space-y-2">
          <li>
            <span className="font-semibold text-text">Who are you?</span>{" "}
            — Your name, role, and unit. &quot;This is Sarah Kim, RN, on 4
            West.&quot;
          </li>
          <li>
            <span className="font-semibold text-text">Who is the patient?</span>{" "}
            — Patient name and at least one identifier (DOB or MRN).
            &quot;I&apos;m calling about Mr. Robert Chen, DOB March 14, 1951.&quot;
          </li>
          <li>
            <span className="font-semibold text-text">Who are you contacting?</span>{" "}
            — Confirmation of who you are speaking to, especially on phone
            calls. &quot;Am I speaking with Dr. Patel, the on-call hospitalist?&quot;
          </li>
        </ul>
      </div>

      <p>
        After the Introduction, the report proceeds with the standard SBAR
        sections. The clinical content is identical — ISBAR just front-loads the
        identification.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        When to Use SBAR vs ISBAR
      </h2>

      <div className="space-y-3">
        <div className="bg-surface border border-border rounded-lg p-4 border-l-4 border-l-accent">
          <h3 className="font-heading font-semibold text-text text-sm mb-1">
            Use SBAR for same-unit shift handoffs
          </h3>
          <p className="text-sm">
            When you are handing off to a nurse on the same unit who knows you
            and is taking your patients, the Introduction is redundant. You
            are standing next to each other (or at the bedside together). You
            both know who you are. Jump straight into Situation.
          </p>
        </div>
        <div className="bg-surface border border-border rounded-lg p-4 border-l-4 border-l-blue-400">
          <h3 className="font-heading font-semibold text-text text-sm mb-1">
            Use ISBAR for phone calls to physicians
          </h3>
          <p className="text-sm">
            When you call a doctor at 0300 about a patient concern, they need
            to know who is calling, from where, and about which patient before
            you start describing the situation. The I section prevents the
            &quot;wait, who is this?&quot; back-and-forth that wastes time and
            causes confusion.
          </p>
        </div>
        <div className="bg-surface border border-border rounded-lg p-4 border-l-4 border-l-blue-400">
          <h3 className="font-heading font-semibold text-text text-sm mb-1">
            Use ISBAR for inter-facility transfers
          </h3>
          <p className="text-sm">
            Transferring a patient to another hospital or unit where the
            receiving nurse has never met you or seen the patient? The
            Introduction is essential. State your name, role, sending facility,
            and patient identifiers clearly before starting the clinical report.
          </p>
        </div>
        <div className="bg-surface border border-border rounded-lg p-4 border-l-4 border-l-accent">
          <h3 className="font-heading font-semibold text-text text-sm mb-1">
            Use SBAR for rapid response situations
          </h3>
          <p className="text-sm">
            When calling a rapid response or code, brevity is critical. The
            team arriving to the room can see who you are and which patient
            needs help. Go straight to Situation: &quot;Room 412, unresponsive,
            no pulse.&quot;
          </p>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        Regional Differences
      </h2>

      <p>
        The choice between SBAR and ISBAR often comes down to geography and
        institutional policy, not clinical evidence:
      </p>

      <div className="bg-surface border border-border rounded-lg p-4">
        <ul className="text-sm space-y-1.5">
          <li>
            <span className="font-semibold text-text">United States:</span>{" "}
            SBAR is dominant. Most nursing schools teach SBAR. The Joint
            Commission references SBAR specifically in its handoff
            recommendations.
          </li>
          <li>
            <span className="font-semibold text-text">Australia & New Zealand:</span>{" "}
            ISBAR is the national standard. The Australian Commission on
            Safety and Quality in Health Care mandates ISBAR for all clinical
            handoffs.
          </li>
          <li>
            <span className="font-semibold text-text">United Kingdom:</span>{" "}
            Both are used. NHS trusts vary — some use SBAR, others ISBAR, and
            some use the variant RSVP (Reason, Story, Vital signs, Plan).
          </li>
          <li>
            <span className="font-semibold text-text">Canada:</span>{" "}
            SBAR is more common, with some facilities adopting I-PASS for
            resident handoffs.
          </li>
        </ul>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        Other SBAR Variants
      </h2>

      <p>
        ISBAR is the most common variant, but you may encounter others:
      </p>

      <div className="bg-surface border border-border rounded-lg p-4">
        <ul className="text-sm space-y-1.5">
          <li>
            <span className="font-semibold text-text">SBAR-R</span> — Adds a
            Read-back confirmation step at the end
          </li>
          <li>
            <span className="font-semibold text-text">SBAR-Q</span> — Adds
            Questions (opportunity for receiver to ask questions)
          </li>
          <li>
            <span className="font-semibold text-text">iSoBAR</span> —
            Identify, Situation, Observations, Background, Agreed plan,
            Read-back (Australian variant)
          </li>
          <li>
            <span className="font-semibold text-text">I-PASS</span> — Illness
            severity, Patient summary, Action list, Situation awareness,
            Synthesis (used in residency programs)
          </li>
        </ul>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        The Bottom Line
      </h2>

      <p>
        The difference between SBAR and ISBAR is one line of identification at
        the top. Use whatever your facility requires. The critical thing is not
        which acronym you use — it is that you use the same structure every
        time, for every patient, and never skip the Recommendation section.
      </p>

      <p>
        <Link href="/record" className="text-accent hover:underline font-semibold">
          ShiftSBAR
        </Link>{" "}
        structures your voice notes into SBAR format automatically — speak your
        brain dump and get a clean, organized report ready for handoff. Whether
        your unit calls it SBAR or ISBAR, the output keeps you structured and
        thorough.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        Related Guides
      </h2>
      <ul className="space-y-1 text-sm">
        <li>
          <Link
            href="/guides/what-is-sbar-nursing"
            className="text-accent hover:underline"
          >
            What is SBAR in Nursing?
          </Link>
        </li>
        <li>
          <Link
            href="/guides/sbar-examples"
            className="text-accent hover:underline"
          >
            SBAR Examples for Every Nursing Unit
          </Link>
        </li>
        <li>
          <Link
            href="/guides/nursing-handoff-best-practices"
            className="text-accent hover:underline"
          >
            Nursing Handoff Best Practices (2026)
          </Link>
        </li>
        <li>
          <Link
            href="/guides/bedside-shift-report"
            className="text-accent hover:underline"
          >
            Bedside Shift Report: Complete Guide
          </Link>
        </li>
      </ul>
    </GuideLayout>
  );
}

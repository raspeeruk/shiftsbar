import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { generateGuideMetadata } from "@/components/GuideLayout";

export const metadata: Metadata = generateGuideMetadata({
  title: "Bedside Shift Report: Complete Guide for Nurses",
  description:
    "Learn how to conduct an effective bedside shift report. Covers benefits, step-by-step process, patient involvement, and common pitfalls to avoid.",
  slug: "bedside-shift-report",
});

export default function BedsideShiftReportPage() {
  return (
    <GuideLayout
      title="Bedside Shift Report: Complete Guide for Nurses"
      faq={[
        {
          question: "What is a bedside shift report?",
          answer:
            "A bedside shift report is a nursing handoff that takes place at the patient's bedside rather than at the nursing station. Both the outgoing and incoming nurse review the patient together, verify safety checks, introduce the incoming nurse, and allow the patient to participate in their care discussion.",
        },
        {
          question: "What are the benefits of bedside shift report?",
          answer:
            "Research shows bedside shift reports reduce fall rates by 28%, decrease call light usage in the first hour by 31%, improve patient satisfaction scores (HCAHPS), catch safety issues like disconnected IV lines or incorrect infusion rates in real-time, and reduce the incoming nurse's first assessment time by 15-20 minutes.",
        },
        {
          question: "How do you handle sensitive information during bedside report?",
          answer:
            "Sensitive topics (psychiatric history, substance abuse, abuse concerns, end-of-life discussions, difficult family dynamics) should be discussed at the station before going to the bedside. Use a brief at-station pre-report for sensitive items, then complete the clinical handoff at the bedside. Never discuss sensitive information within earshot of other patients or visitors.",
        },
        {
          question: "How long should a bedside shift report take?",
          answer:
            "A bedside shift report should take 2-4 minutes per patient. This includes introducing the incoming nurse, reviewing the SBAR elements, performing a quick safety scan (lines, drains, equipment), and allowing the patient to ask questions. For a 5-patient assignment, total handoff time should be 15-20 minutes.",
        },
      ]}
    >
      <p>
        Bedside shift report has become the standard at most US hospitals — and
        for good reason. When you hand off at the bedside instead of the nursing
        station, you catch problems in real-time, involve the patient in their
        care, and give the incoming nurse a head start on their assessment.
      </p>

      <p>
        This guide covers what bedside shift report is, why it works, how to do
        it well, and how to handle the parts that make it difficult.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        What is Bedside Shift Report?
      </h2>

      <p>
        Bedside shift report (BSR) is a nursing handoff conducted at the
        patient&apos;s bedside with both the outgoing and incoming nurse
        present. The patient and any family members are included in the
        conversation. The outgoing nurse provides the SBAR report while both
        nurses visually verify lines, drains, skin, and equipment.
      </p>

      <p>
        It replaced the traditional at-station report where nurses would sit in
        a break room or at the nursing station and verbally relay information
        without ever seeing the patient together. The shift was driven by
        patient safety data showing that at-station handoffs missed critical
        visual cues and delayed the incoming nurse&apos;s first assessment.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        Why Bedside Report Works
      </h2>

      <div className="space-y-3">
        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="font-heading font-semibold text-text text-sm mb-1">
            Catches what words miss
          </h3>
          <p className="text-sm">
            The outgoing nurse says &quot;IV running fine&quot; — but when both
            nurses look at the site, the incoming nurse notices early phlebitis
            the outgoing nurse habituated to over 12 hours. Visual verification
            catches issues that verbal reports do not.
          </p>
        </div>
        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="font-heading font-semibold text-text text-sm mb-1">
            Reduces falls in the first hour
          </h3>
          <p className="text-sm">
            The highest-risk period for patient falls is the first hour after
            shift change, when the incoming nurse is still reviewing charts. At
            bedside report, the incoming nurse has already seen the patient,
            verified bed alarm status, and assessed mobility — eliminating the
            dangerous gap.
          </p>
        </div>
        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="font-heading font-semibold text-text text-sm mb-1">
            Patients catch errors
          </h3>
          <p className="text-sm">
            When patients hear their handoff, they correct mistakes: &quot;No,
            I&apos;m allergic to codeine, not Tylenol&quot; or &quot;My pain is
            actually worse than this morning, not better.&quot; This error
            correction is impossible at an at-station report.
          </p>
        </div>
        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="font-heading font-semibold text-text text-sm mb-1">
            Improves HCAHPS scores
          </h3>
          <p className="text-sm">
            Patients who experience bedside report consistently rate higher on
            the &quot;nurses communicated well&quot; and &quot;nurses listened
            carefully&quot; HCAHPS domains. They feel included in their care
            rather than being talked about in a hallway.
          </p>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        How to Do Bedside Shift Report Effectively
      </h2>

      <p>
        A good bedside shift report follows this sequence:
      </p>

      <div className="bg-surface border border-border rounded-lg p-4">
        <ol className="text-sm space-y-3 list-decimal list-inside">
          <li>
            <span className="font-semibold text-text">Pre-report at station (1-2 min):</span>{" "}
            Cover sensitive information privately — psych history, substance
            abuse, family conflicts, code status discussions in progress. This
            stays between nurses.
          </li>
          <li>
            <span className="font-semibold text-text">Enter the room together:</span>{" "}
            Outgoing nurse introduces the incoming nurse by name.
            &quot;Mrs. Garcia, this is Sarah — she&apos;ll be your nurse
            tonight. I&apos;m going to fill her in on how your day went.&quot;
          </li>
          <li>
            <span className="font-semibold text-text">Deliver SBAR at bedside (2-3 min):</span>{" "}
            Use the standard SBAR structure. Speak clearly, face the patient,
            and pause between sections. Use language the patient can understand
            — avoid excessive jargon.
          </li>
          <li>
            <span className="font-semibold text-text">Safety scan (30 sec):</span>{" "}
            Both nurses verify: IV site and rate, ID band, fall risk bracelet,
            bed alarm (if applicable), Foley/drain output, oxygen setup, call
            light within reach.
          </li>
          <li>
            <span className="font-semibold text-text">Patient questions:</span>{" "}
            Ask the patient: &quot;Is there anything we missed or anything
            you&apos;d like Sarah to know?&quot; Then address any questions.
          </li>
          <li>
            <span className="font-semibold text-text">Incoming nurse acknowledgment:</span>{" "}
            Incoming nurse confirms they have what they need. If not, ask
            clarifying questions now — not 2 hours later via text.
          </li>
        </ol>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        Handling Difficult Situations
      </h2>

      <div className="space-y-3">
        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="font-heading font-semibold text-text text-sm mb-1">
            The patient is asleep
          </h3>
          <p className="text-sm">
            Do not wake them for report. Conduct the handoff quietly at the
            doorway or just inside the room where you can still visually verify
            lines and equipment. Perform the safety scan without waking the
            patient.
          </p>
        </div>
        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="font-heading font-semibold text-text text-sm mb-1">
            The patient talks too much
          </h3>
          <p className="text-sm">
            Redirect kindly: &quot;Mr. Chen, I want to make sure Sarah has all
            the important information. Let me finish the report, and then
            you&apos;ll have time to talk with her about your concerns.&quot;
            Set the expectation at the start that this will be brief.
          </p>
        </div>
        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="font-heading font-semibold text-text text-sm mb-1">
            Visitors are present
          </h3>
          <p className="text-sm">
            Ask the patient if they are comfortable with family hearing the
            report. If yes, proceed. If no, politely ask visitors to step out
            for 3 minutes. Never assume — HIPAA requires the patient&apos;s
            explicit consent to share information with family.
          </p>
        </div>
        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="font-heading font-semibold text-text text-sm mb-1">
            Isolation rooms
          </h3>
          <p className="text-sm">
            For contact or droplet isolation, report at the doorway or window
            to avoid unnecessary PPE use. Have the incoming nurse do their own
            full bedside assessment when they round after report.
          </p>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        Prepare Your Bedside Report in 30 Seconds
      </h2>

      <p>
        The hardest part of bedside report is being organized enough to deliver
        a smooth SBAR without fumbling through your notes. Instead of
        rewriting your brain sheet before handoff, use{" "}
        <Link href="/record" className="text-accent hover:underline font-semibold">
          ShiftSBAR
        </Link>{" "}
        to speak your patient notes and get a clean, structured SBAR report on
        your phone. Walk into the room, pull up the report, and deliver a
        confident bedside handoff every time.
      </p>

      <div className="bg-surface border border-border rounded-lg p-4 text-center">
        <p className="text-sm mb-3">
          Speak your shift notes. Get a structured SBAR. Walk into bedside
          report fully prepared.
        </p>
        <Link
          href="/record"
          className="bg-accent hover:bg-accent-hover text-bg font-semibold px-6 py-2.5 rounded-md text-sm transition-colors inline-block"
        >
          Record Your Shift Report
        </Link>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        Common Pitfalls to Avoid
      </h2>

      <ul className="list-disc list-inside text-sm space-y-1.5">
        <li>
          Discussing sensitive information at the bedside that should have
          stayed at the station
        </li>
        <li>
          Rushing through the safety scan — this is where you catch real
          problems
        </li>
        <li>
          Using too much medical jargon — patients lose trust when they
          cannot understand their own care discussion
        </li>
        <li>
          Skipping bedside report for &quot;easy&quot; patients — consistency
          matters more than perceived acuity
        </li>
        <li>
          Not introducing the incoming nurse by name — patients need to know
          who is caring for them
        </li>
      </ul>

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
            href="/guides/nursing-handoff-best-practices"
            className="text-accent hover:underline"
          >
            Nursing Handoff Best Practices (2026)
          </Link>
        </li>
        <li>
          <Link
            href="/guides/shift-report-template"
            className="text-accent hover:underline"
          >
            Free Nursing Shift Report Template
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
      </ul>
    </GuideLayout>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { generateGuideMetadata } from "@/components/GuideLayout";

export const metadata: Metadata = generateGuideMetadata({
  title: "Free Nursing Shift Report Template (SBAR Format)",
  description:
    "Download a free nursing shift report template using the SBAR format. Compare paper brain sheets vs digital tools and learn what every shift report should include.",
  slug: "shift-report-template",
});

export default function ShiftReportTemplatePage() {
  return (
    <GuideLayout
      title="Free Nursing Shift Report Template (SBAR Format)"
      faq={[
        {
          question: "What should a nursing shift report include?",
          answer:
            "A complete shift report should cover: patient identification, primary diagnosis, code status, relevant medical history, allergies, current medications (especially drips, scheduled meds, and PRNs given), vital sign trends, assessment findings, I&O totals, lab results of note, procedures or interventions performed, pending orders, and clear recommendations for the next shift.",
        },
        {
          question: "What is the best format for a nursing shift report?",
          answer:
            "SBAR (Situation, Background, Assessment, Recommendation) is the most widely recommended format. It is endorsed by the Joint Commission, WHO, and most healthcare organizations because it provides a consistent structure that reduces omissions and keeps handoffs focused.",
        },
        {
          question: "Are paper brain sheets still effective?",
          answer:
            "Paper brain sheets work but have significant limitations: they can't be shared electronically, handwriting is often illegible under time pressure, sections get cramped with complex patients, and they're discarded after handoff — leaving no searchable record. Digital SBAR tools address all of these issues while keeping the same structured approach.",
        },
        {
          question: "How long should a shift report take per patient?",
          answer:
            "A focused SBAR shift report should take 2-3 minutes per patient for verbal handoff. If you're spending more than 5 minutes per patient, the report likely includes too much background that could be found in the chart. Focus on what changed during your shift and what the next nurse needs to act on.",
        },
      ]}
    >
      <p>
        Every nurse needs a shift report template that captures the right
        information without taking 20 minutes to fill out at the end of a
        12-hour shift. The best templates follow the SBAR format — not because
        it is trendy, but because it forces you to organize information the way
        the incoming nurse needs to receive it.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        What a Good Shift Report Template Includes
      </h2>

      <p>
        Regardless of format (paper or digital), your shift report template
        needs these sections:
      </p>

      <div className="bg-surface border border-border rounded-lg p-4">
        <h3 className="font-heading font-semibold text-text mb-3 text-sm">
          Essential Template Sections
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex gap-2">
            <span className="text-accent font-semibold shrink-0">S:</span>
            <span>
              Patient ID, room, age, primary diagnosis, code status, reason for
              admission, attending physician
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-accent font-semibold shrink-0">B:</span>
            <span>
              Relevant PMH, allergies, current medications (scheduled + PRN),
              IV access/fluids, diet, activity level, isolation precautions
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-accent font-semibold shrink-0">A:</span>
            <span>
              Latest vitals + trends, head-to-toe assessment highlights, pain
              level, I&O, labs/imaging of note, procedures done this shift
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-accent font-semibold shrink-0">R:</span>
            <span>
              Pending orders, anticipated changes, discharge progress, things to
              watch for, family/social updates
            </span>
          </div>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        Paper Brain Sheets vs Digital Shift Reports
      </h2>

      <p>
        Most nurses have a drawer full of paper brain sheets — photocopied
        templates with boxes for vitals, meds, and assessments. They work, but
        they come with real tradeoffs that get worse as patient loads increase.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="font-heading font-semibold text-text mb-2 text-sm">
            Paper Brain Sheets
          </h3>
          <ul className="text-sm space-y-1.5">
            <li className="flex gap-2">
              <span className="text-accent shrink-0">+</span>
              <span>No tech required — works anywhere</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">+</span>
              <span>Familiar and tactile</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">+</span>
              <span>Cheap ($8-15 per pad)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-danger shrink-0">-</span>
              <span>Illegible handwriting under pressure</span>
            </li>
            <li className="flex gap-2">
              <span className="text-danger shrink-0">-</span>
              <span>Fixed layout — no room for complex patients</span>
            </li>
            <li className="flex gap-2">
              <span className="text-danger shrink-0">-</span>
              <span>Thrown away after handoff — no record</span>
            </li>
            <li className="flex gap-2">
              <span className="text-danger shrink-0">-</span>
              <span>Can&apos;t share electronically</span>
            </li>
          </ul>
        </div>

        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="font-heading font-semibold text-text mb-2 text-sm">
            Digital SBAR Tools
          </h3>
          <ul className="text-sm space-y-1.5">
            <li className="flex gap-2">
              <span className="text-accent shrink-0">+</span>
              <span>Always legible and structured</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">+</span>
              <span>Adapts to any patient complexity</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">+</span>
              <span>Shareable — text, email, clipboard</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">+</span>
              <span>Voice input saves time at end of shift</span>
            </li>
            <li className="flex gap-2">
              <span className="text-danger shrink-0">-</span>
              <span>Needs phone or tablet</span>
            </li>
            <li className="flex gap-2">
              <span className="text-danger shrink-0">-</span>
              <span>Learning curve for new tools</span>
            </li>
            <li className="flex gap-2">
              <span className="text-danger shrink-0">-</span>
              <span>HIPAA considerations for cloud storage</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        The Voice-First Approach
      </h2>

      <p>
        The fastest shift report template is the one you do not have to write
        at all.{" "}
        <Link href="/record" className="text-accent hover:underline font-semibold">
          ShiftSBAR
        </Link>{" "}
        lets you speak your patient notes — medications, vitals, assessments,
        everything you would normally scribble on paper — and AI structures it
        into a clean SBAR report. No handwriting, no cramped boxes, no missed
        fields.
      </p>

      <div className="bg-surface border border-border rounded-lg p-4">
        <h3 className="font-heading font-semibold text-text mb-2 text-sm">
          How It Works
        </h3>
        <ol className="text-sm space-y-1.5 list-decimal list-inside">
          <li>
            Tap record at the end of your shift
          </li>
          <li>
            Speak your brain dump — vitals, meds, assessments, anything you
            would normally write down
          </li>
          <li>
            AI organizes everything into Situation, Background, Assessment,
            Recommendation
          </li>
          <li>
            Copy, share, or read directly from your phone during handoff
          </li>
        </ol>
      </div>

      <p>
        No template to fill out. No boxes to check. Just talk, and the
        structure appears. Try it now — it is free and takes 30 seconds.
      </p>

      <div className="text-center">
        <Link
          href="/record"
          className="bg-accent hover:bg-accent-hover text-bg font-semibold px-6 py-2.5 rounded-md text-sm transition-colors inline-block"
        >
          Record Your First Shift Report
        </Link>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        Tips for Better Shift Reports
      </h2>

      <div className="space-y-3">
        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="font-heading font-semibold text-text text-sm mb-1">
            Lead with what changed
          </h3>
          <p className="text-sm">
            The incoming nurse can read the chart for baseline info. Focus your
            report on what happened during your shift — new orders, vital sign
            changes, patient complaints, family conversations.
          </p>
        </div>
        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="font-heading font-semibold text-text text-sm mb-1">
            Never skip the Recommendation
          </h3>
          <p className="text-sm">
            This is the most actionable part of your report. Tell the incoming
            nurse what you expect to happen next, what to watch for, and
            what is pending. A report without recommendations is just a data
            dump.
          </p>
        </div>
        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="font-heading font-semibold text-text text-sm mb-1">
            Use specific numbers
          </h3>
          <p className="text-sm">
            &quot;BP has been trending up&quot; is vague. &quot;BP was 142/88 at
            start of shift, now 168/96 at 1800&quot; is actionable. Give
            specific values, times, and doses.
          </p>
        </div>
      </div>

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
            Nursing Handoff Best Practices
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

import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { generateGuideMetadata } from "@/components/GuideLayout";

export const metadata: Metadata = generateGuideMetadata({
  title: "Med-Surg SBAR Example: Shift Report Template",
  description:
    "Detailed Med-Surg SBAR example for nursing shift handoff. Post-op appendectomy patient with pain management, ambulation status, and discharge planning.",
  slug: "examples/med-surg",
});

export default function MedSurgExamplePage() {
  return (
    <GuideLayout
      title="Med-Surg SBAR Example: Shift Report Template"
      faq={[
        {
          question: "What makes a Med-Surg SBAR different from other units?",
          answer:
            "Med-Surg SBAR reports tend to cover a broader scope because patients have diverse diagnoses and comorbidities. You need to address surgical site status, pain management progression, activity advancement, diet tolerance, and discharge readiness — often all in the same report. The key is organizing these into the SBAR framework so nothing gets buried.",
        },
        {
          question:
            "How do I handle multiple active problems in a Med-Surg SBAR?",
          answer:
            "Prioritize by clinical urgency. Lead with what changed during your shift or what the incoming nurse needs to act on first. For a post-op patient, the surgical concern comes first, then pain management, then routine assessments. Use the Assessment section to flag anything trending in the wrong direction, even if it hasn't reached a critical threshold yet.",
        },
        {
          question:
            "Should I include discharge planning in my Med-Surg SBAR handoff?",
          answer:
            "Absolutely. Discharge planning is a core part of Med-Surg nursing and should be addressed in the Recommendation section. Include anticipated discharge date, criteria that still need to be met (tolerating diet, adequate pain control on PO meds, independent ambulation), and any pending consults or teaching that needs to happen before discharge.",
        },
      ]}
    >
      <p>
        Med-Surg is where most nurses spend the bulk of their career — and where
        SBAR handoffs matter most. With patient loads of 4-6 patients across
        wildly different diagnoses, a structured handoff prevents the kind of
        information loss that leads to missed meds, delayed discharges, and
        safety events.
      </p>

      <p>
        The example below covers a common Med-Surg scenario: a post-operative
        patient progressing toward discharge. Notice how the SBAR format keeps
        the handoff focused on what changed, what matters, and what needs to
        happen next — without drowning the incoming nurse in chart history.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        SBAR Example: Post-Op Day 2 Appendectomy
      </h2>

      <div className="bg-surface border border-border rounded-lg p-4 space-y-3">
        <div className="border-l-4 border-l-accent pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Situation
          </h3>
          <p className="text-sm">
            Mr. Ramirez, room 318, 34-year-old male, POD 2 laparoscopic
            appendectomy for perforated appendicitis. Reporting end-of-day-shift
            handoff. He had a rough morning with nausea and increased pain but has
            improved significantly since noon. Currently tolerating regular diet
            and ambulated three times today, including one lap around the unit
            independently.
          </p>
        </div>
        <div className="border-l-4 border-l-blue-500 pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Background
          </h3>
          <p className="text-sm">
            PMH: otherwise healthy, no chronic conditions. Home meds: none.
            Allergies: morphine (severe nausea/vomiting — documented, NOT
            anaphylaxis). Surgical history: none prior. IV: 22g L hand, NS at
            75mL/hr — surgeon wants it D/C&apos;d once tolerating 1L PO. He had a
            wound vac placed intra-op due to contamination from perforation —
            wound vac changed this AM by surgical team, wound bed pink with
            minimal serous drainage. Jackson-Pratt drain removed POD 1, site
            clean and dry. Antibiotics: IV piperacillin-tazobactam 3.375g q6h
            (day 3 of planned 5-day course, next dose at 2200). ID consulted —
            plan to transition to PO amoxicillin-clavulanate for remaining 2
            days if WBC continues to downtrend.
          </p>
        </div>
        <div className="border-l-4 border-l-warning pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Assessment
          </h3>
          <p className="text-sm">
            VS: BP 122/74, HR 76, RR 16, T 99.1 (down from 100.4 this AM), SpO2
            98% RA. Pain currently 2/10 at rest, 4/10 with movement —
            well-controlled on PO oxycodone 5mg q4h PRN (transitioned from PCA
            this AM, used 2 doses today). Morning nausea resolved with ondansetron
            4mg IV x1. Ate 75% of lunch and all of dinner. Abdomen soft, mildly
            tender RLQ near incision, no rebound or guarding. Wound vac intact,
            negative pressure reading -125mmHg, canister output minimal. Bowel
            sounds active all 4 quadrants, first BM this afternoon. Labs AM: WBC
            12.1 (down from 16.4 on admission), H/H 13.2/39, BMP normal. Voiding
            without difficulty, I&O roughly even.
          </p>
        </div>
        <div className="border-l-4 border-l-danger pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Recommendation
          </h3>
          <p className="text-sm">
            Continue antibiotics — pip/tazo at 2200 and 0400. Monitor temp
            closely overnight; if spikes above 101.5, get blood cultures and call
            surgical team. D/C IV fluids once he drinks at least 1L by midnight
            (currently at 600mL PO). Wound vac should stay in place — next change
            scheduled for tomorrow AM by wound care. Surgeon Dr. Patel rounding
            early, anticipates discharge tomorrow PM if WBC continues to drop and
            no fever. Discharge teaching started today: wound vac management at
            home (home health referral placed), activity restrictions, and
            follow-up appointment scheduled for Thursday. He&apos;ll need PO
            antibiotic prescription at discharge — pharmacy is aware. Wife is
            primary support, was here today for wound vac teaching, seems
            comfortable with the process.
          </p>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        Key Takeaways for Med-Surg SBAR Reports
      </h2>

      <p>
        This example highlights several Med-Surg best practices. The Situation
        section immediately tells the incoming nurse the trajectory — rough
        morning, improving afternoon. The Background section flags the morphine
        allergy prominently (which matters for overnight PRN pain management).
        The Assessment gives trend data (WBC down, temp down, pain score
        improving) rather than just isolated numbers. And the Recommendation
        section lays out clear overnight actions with specific triggers for
        escalation.
      </p>

      <p>
        The discharge planning details in the Recommendation section are
        critical. The night nurse can now reinforce wound vac teaching,
        ensure oral intake targets are met, and flag any setbacks to the
        surgeon during early morning rounds — all without having to dig
        through the chart.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        Skip the Writing — Record Your Handoff Instead
      </h2>

      <p>
        With 5 patients to hand off, writing SBAR reports from scratch takes
        forever.{" "}
        <Link href="/record" className="text-accent hover:underline font-semibold">
          ShiftSBAR&apos;s voice recorder
        </Link>{" "}
        lets you speak your brain dump for each patient and get a structured SBAR
        back in seconds — pain scores, labs, IV access, drains, and discharge
        plans all organized into the right sections automatically.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        More Unit-Specific Examples
      </h2>
      <ul className="space-y-1 text-sm">
        <li>
          <Link href="/guides/examples/icu" className="text-accent hover:underline">
            ICU SBAR Example
          </Link>
        </li>
        <li>
          <Link href="/guides/examples/emergency" className="text-accent hover:underline">
            Emergency Department SBAR Example
          </Link>
        </li>
        <li>
          <Link href="/guides/examples/orthopedic" className="text-accent hover:underline">
            Orthopedic SBAR Example
          </Link>
        </li>
        <li>
          <Link href="/guides/sbar-examples" className="text-accent hover:underline">
            All SBAR Examples
          </Link>
        </li>
      </ul>
    </GuideLayout>
  );
}

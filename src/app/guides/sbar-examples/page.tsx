import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { generateGuideMetadata } from "@/components/GuideLayout";

export const metadata: Metadata = generateGuideMetadata({
  title: "SBAR Examples for Every Nursing Unit",
  description:
    "Real SBAR report examples for Med-Surg, ICU, ER, Pediatric, and more. Copy these structured handoff templates to improve your shift communication.",
  slug: "sbar-examples",
});

export default function SbarExamplesPage() {
  return (
    <GuideLayout
      title="SBAR Examples for Every Nursing Unit"
      faq={[
        {
          question: "Where can I find SBAR examples for my specific unit?",
          answer:
            "ShiftSBAR provides unit-specific SBAR examples for Med-Surg, ICU, Pediatric, Emergency, Postpartum, Psychiatric, Orthopedic, and Cardiac units. Each example follows the standard Situation-Background-Assessment-Recommendation format tailored to the clinical context of that unit.",
        },
        {
          question: "Can I use these SBAR examples as templates?",
          answer:
            "Yes. These examples are designed as starting templates you can adapt to your patients. However, the fastest approach is to use ShiftSBAR — speak your notes and get a perfectly structured SBAR report generated automatically, customized to your unit type.",
        },
        {
          question: "How long should an SBAR report be?",
          answer:
            "A verbal SBAR handoff should take 2-3 minutes per patient. Written SBAR reports typically run 150-300 words — enough to be thorough without burying the incoming nurse in irrelevant detail. Focus on what changed during your shift and what needs to happen next.",
        },
        {
          question:
            "What is the most common mistake nurses make with SBAR reports?",
          answer:
            "The most common mistake is skipping or rushing the Recommendation section. Nurses tend to be thorough with Situation and Background but leave the incoming nurse without clear next steps. Always state what you expect to happen, what's pending, and what to watch for.",
        },
      ]}
    >
      <p>
        Seeing a well-written SBAR report is worth more than reading ten pages
        of theory. Below are three real-world examples from different nursing
        units — each showing how the same four-section framework adapts to
        completely different clinical scenarios.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        Example 1: Med-Surg — Post-Op Cholecystectomy
      </h2>

      <div className="bg-surface border border-border rounded-lg p-4 space-y-3">
        <div className="border-l-4 border-l-accent pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Situation
          </h3>
          <p className="text-sm">
            Mrs. Johnson, room 412, 62-year-old female, POD 1 laparoscopic
            cholecystectomy. Reporting for end-of-shift handoff. Currently
            stable, tolerating clear liquids, ambulated twice today.
          </p>
        </div>
        <div className="border-l-4 border-l-blue-500 pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Background
          </h3>
          <p className="text-sm">
            PMH: HTN, Type 2 DM (A1c 7.2), GERD. Home meds: metformin 1000mg
            BID (held), lisinopril 10mg daily, omeprazole 20mg daily.
            Allergies: sulfa (rash). IV: 20g R forearm, NS at 75mL/hr. JP drain
            in place, 30mL serosanguinous output this shift.
          </p>
        </div>
        <div className="border-l-4 border-l-warning pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Assessment
          </h3>
          <p className="text-sm">
            VS stable: BP 138/82, HR 78, RR 16, T 98.9, SpO2 97% RA. Pain
            3/10, well-controlled on PO Norco q4h PRN (last dose 1400). BS
            active, no nausea. Incision sites clean, dry, intact. BG 162 at
            1600 — covered with sliding scale. Voided x2, 650mL total output.
          </p>
        </div>
        <div className="border-l-4 border-l-danger pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Recommendation
          </h3>
          <p className="text-sm">
            Advance diet to regular as tolerated per surgeon. Monitor JP drain
            output — call surgeon if &gt;100mL/shift or changes to bilious.
            Anticipate discharge tomorrow AM if tolerating regular diet. BG
            check at 2100, resume metformin once eating. PT to reassess AM
            ambulation.
          </p>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        Example 2: ICU — Sepsis with Pressors
      </h2>

      <div className="bg-surface border border-border rounded-lg p-4 space-y-3">
        <div className="border-l-4 border-l-accent pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Situation
          </h3>
          <p className="text-sm">
            Mr. Davis, bed 7, 74-year-old male, admitted 36 hours ago with
            urosepsis from E. coli bacteremia. Currently intubated on AC mode,
            on norepinephrine drip. MAP trending down over last 2 hours.
          </p>
        </div>
        <div className="border-l-4 border-l-blue-500 pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Background
          </h3>
          <p className="text-sm">
            PMH: BPH, CKD stage 3 (baseline Cr 1.8), Afib on Eliquis (held).
            Allergies: PCN (anaphylaxis). Access: R IJ triple lumen, 18g L AC,
            Foley draining scant dark amber urine. Antibiotics: meropenem 1g
            q8h (started 0200 yesterday), blood cultures growing E. coli
            sensitive to meropenem. Code status: full code per family discussion
            this AM.
          </p>
        </div>
        <div className="border-l-4 border-l-warning pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Assessment
          </h3>
          <p className="text-sm">
            VS: BP 88/52 (MAP 64 — was 72 at start of shift), HR 102 Afib, RR
            18 (vent), T 101.4, SpO2 94% on FiO2 50%. Norepi at 12mcg/min (up
            from 8 at start of shift). Lactic acid 4.2 (was 3.8). UO 15mL/hr
            last 3 hours. Cr up to 2.4. Sedated on propofol, RASS -3. Exam:
            abdomen soft, warm extremities but mottled knees bilaterally.
          </p>
        </div>
        <div className="border-l-4 border-l-danger pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Recommendation
          </h3>
          <p className="text-sm">
            Watch MAP closely — if &lt;65 despite norepi titration to 15mcg/min,
            notify fellow to discuss adding vasopressin. Repeat lactic acid at
            2200. Renal team aware, may need CRRT if UO stays below 20mL/hr.
            Next ABG at 2000. Family updated — daughter is HCP, phone number on
            whiteboard.
          </p>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        Example 3: Emergency — Chest Pain Workup
      </h2>

      <div className="bg-surface border border-border rounded-lg p-4 space-y-3">
        <div className="border-l-4 border-l-accent pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Situation
          </h3>
          <p className="text-sm">
            Mr. Torres, bay 9, 55-year-old male, presented 3 hours ago with
            substernal chest pain radiating to left arm. Currently on telemetry,
            pain resolved after NTG x2. Awaiting serial troponin results.
          </p>
        </div>
        <div className="border-l-4 border-l-blue-500 pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Background
          </h3>
          <p className="text-sm">
            PMH: HTN, hyperlipidemia, 30-pack-year smoking history (quit 2
            years ago). Home meds: amlodipine 5mg daily, atorvastatin 40mg
            daily. Allergies: NKDA. Access: 20g R AC, NS TKO. EKG showed
            nonspecific ST changes V3-V5, no acute STEMI pattern. First troponin
            0.03 (borderline). ASA 325mg given on arrival.
          </p>
        </div>
        <div className="border-l-4 border-l-warning pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Assessment
          </h3>
          <p className="text-sm">
            VS: BP 152/88, HR 86 NSR on tele, RR 18, T 98.2, SpO2 99% RA.
            Pain 0/10 currently (was 7/10 on arrival). Repeat EKG unchanged.
            CBC, BMP, coags within normal limits. CXR clear. Second troponin
            due at 2130. Patient anxious, wife at bedside.
          </p>
        </div>
        <div className="border-l-4 border-l-danger pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Recommendation
          </h3>
          <p className="text-sm">
            Second troponin at 2130 — if elevated, notify cardiology for
            possible cath lab. If negative, third troponin at 0130 per chest
            pain protocol. Keep on tele, call for any ST changes or recurrent
            pain. Heparin drip ordered but not started pending troponin result.
            Social work notified for smoking cessation referral.
          </p>
        </div>
      </div>

      <p>
        Notice how each example follows the same SBAR structure but the clinical
        content is completely different. The framework gives consistency; your
        clinical knowledge fills in the substance.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        Generate Your Own SBAR Reports Instantly
      </h2>

      <p>
        Instead of writing SBAR reports from scratch, use{" "}
        <Link href="/record" className="text-accent hover:underline font-semibold">
          ShiftSBAR&apos;s voice recorder
        </Link>{" "}
        to speak your patient notes at the end of your shift. The AI organizes
        everything into a clean SBAR format — correctly categorized, nothing
        missed, ready to hand off. It takes 30 seconds instead of 10 minutes of
        writing.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        Unit-Specific Examples
      </h2>
      <p>
        Dive deeper with SBAR examples tailored to your specific unit:
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
            <Link href={link.href} className="text-accent hover:underline">
              {link.label} SBAR Example
            </Link>
          </li>
        ))}
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
            href="/guides/shift-report-template"
            className="text-accent hover:underline"
          >
            Free Nursing Shift Report Template
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
      </ul>
    </GuideLayout>
  );
}

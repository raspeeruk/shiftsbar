import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { generateGuideMetadata } from "@/components/GuideLayout";

export const metadata: Metadata = generateGuideMetadata({
  title: "Cardiac SBAR Example: Cardiac Unit Shift Report",
  description:
    "Detailed Cardiac SBAR example for cardiac unit nursing handoff. Post-cardiac cath patient with groin site assessment, rhythm monitoring, and anticoagulation management.",
  slug: "examples/cardiac",
});

export default function CardiacExamplePage() {
  return (
    <GuideLayout
      title="Cardiac SBAR Example: Cardiac Unit Shift Report"
      faq={[
        {
          question: "What are the critical elements of a Cardiac SBAR handoff?",
          answer:
            "Cardiac SBARs must cover rhythm and telemetry findings (current rhythm, any arrhythmias during the shift, ST changes), hemodynamic status, access site assessment (for post-cath patients), anticoagulation management (drips, INR targets, bridging), cardiac medication timing and response, activity restrictions, and any chest pain recurrence. For post-procedure patients, include what was done in the cath lab, which vessels were stented, and any complications.",
        },
        {
          question: "How do I document groin site checks in a post-cath SBAR?",
          answer:
            "Document the closure device used (Angioseal, Mynx, or manual pressure), the current site appearance (hematoma size if present — measure and mark it), presence of bruit, distal pulse comparison to pre-procedure baseline, and any bleeding or oozing. Include the time the sheath was pulled, how long the patient must remain on bed rest, and when they can ambulate. If a hematoma is present, mark the borders with a skin marker and note the time so the incoming nurse can monitor for expansion.",
        },
        {
          question: "Should I include the cath lab findings in my nursing SBAR?",
          answer:
            "Include a brief summary — which coronary arteries were involved, what intervention was performed (stent type and location, balloon angioplasty, diagnostic only), and any complications during the procedure. You do not need to recite the full cath report, but the incoming nurse needs to know what vessels are at risk so they can correlate any new symptoms. For example: 'LAD stented with drug-eluting stent, 95% proximal lesion now 0% residual stenosis' is enough context.",
        },
      ]}
    >
      <p>
        Cardiac unit nursing requires constant vigilance — rhythm changes can be
        subtle, access site complications can escalate rapidly, and
        anticoagulation management has a narrow therapeutic window. A well-
        structured cardiac SBAR ensures the incoming nurse knows exactly what
        rhythm to expect on the monitor, what the access site looks like, and what
        the medication timing demands will be overnight.
      </p>

      <p>
        The example below covers a post-cardiac catheterization patient — a
        scenario that every cardiac nurse handles regularly. Notice how the cath
        lab findings, access site status, and anticoagulation plan are documented
        in specific, measurable terms.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        SBAR Example: Post-Cardiac Catheterization with Stent Placement
      </h2>

      <div className="bg-surface border border-border rounded-lg p-4 space-y-3">
        <div className="border-l-4 border-l-accent pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Situation
          </h3>
          <p className="text-sm">
            Mr. Kowalski, room 310, 63-year-old male, returned from cath lab at
            1300 today after diagnostic cardiac catheterization converted to PCI
            with drug-eluting stent placement to the LAD. Right femoral access,
            Angioseal closure device deployed. He is currently 5 hours post-
            procedure, has been flat on bed rest, groin site stable, no chest
            pain since the procedure. He is a new admission to this unit — came
            in through the ED this morning with NSTEMI. Wife Sandra is at
            bedside, appears calm and well-informed. Reporting end-of-day-shift
            handoff.
          </p>
        </div>
        <div className="border-l-4 border-l-blue-500 pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Background
          </h3>
          <p className="text-sm">
            PMH: HTN, hyperlipidemia, Type 2 DM (A1c 7.8), prior smoker (quit
            10 years ago, 25-pack-year), obesity (BMI 33), mild CKD (baseline Cr
            1.3). No prior cardiac history or interventions. Family hx: brother
            had CABG at age 58. Home meds: metoprolol succinate 50mg daily,
            lisinopril 20mg daily, atorvastatin 40mg daily (being increased —
            see Recommendation), metformin 500mg BID, ASA 81mg daily. Allergies:
            iodine contrast — pretreated with prednisone 50mg PO x3 doses and
            diphenhydramine 50mg IV prior to cath (tolerated contrast without
            reaction today). Access: 18g R AC, saline locked. Right femoral
            access site — 6Fr sheath, Angioseal deployed at 1245. Flat bed rest
            x6 hours from sheath pull (can elevate HOB to 1400 at 1845). Full
            ambulation at 2045.
            <br />
            <strong>Cath findings:</strong> 95% proximal LAD stenosis — drug-
            eluting stent placed (3.0 x 18mm Xience), 0% residual stenosis,
            TIMI 3 flow. Circumflex: 40% mid-vessel (non-intervened,
            medically managed). RCA: clean. LV gram: EF estimated 50%.
            Contrast volume: 180mL. No procedural complications reported by
            interventionalist Dr. Gupta.
            <br />
            <strong>Post-cath medications started:</strong> Clopidogrel 600mg
            loading dose given in cath lab, then 75mg daily (DAPT — must take
            with ASA for minimum 12 months). Atorvastatin increased to 80mg
            daily. Metoprolol continued. Lisinopril continued. IV heparin bolus
            given in cath lab — NOT on heparin drip post-procedure.
          </p>
        </div>
        <div className="border-l-4 border-l-warning pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Assessment
          </h3>
          <p className="text-sm">
            <strong>Cardiac:</strong> VS: BP 128/76, HR 68 NSR on telemetry
            (sinus rhythm all shift, no ectopy, no ST changes on monitor). Pain:
            0/10 chest pain — no recurrence since cath lab. No dyspnea, no
            diaphoresis, no nausea. 12-lead EKG post-cath: NSR, rate 72, ST
            segments normalizing in V3-V5 compared to admission EKG that showed
            1.5mm ST depression. Troponin trend: 0.82 on admission (ED), 1.44 at
            6 hours (expected post-PCI rise). Next troponin at 2100 (expect it
            to peak and begin trending down).
            <br />
            <strong>Access site (R groin):</strong> Angioseal site intact. Small
            hematoma present — 3cm x 2cm, borders marked with skin marker at
            1400 and 1700, NO expansion between marks. No active oozing, no
            bruit on auscultation. R pedal pulse 2+ palpable (same as pre-
            procedure baseline documented in cath lab chart). R foot warm, pink,
            brisk capillary refill, full sensation, can wiggle toes and
            dorsiflex against resistance. L pedal pulse 2+ for comparison.
            Patient on flat bed rest, tolerating well, using urinal without
            difficulty.
            <br />
            <strong>Renal:</strong> Cr pre-cath 1.3. 180mL contrast used (on the
            higher side for his CKD). NS bolus 500mL given pre-cath, running NS
            at 100mL/hr post-cath for hydration (1L given so far post-
            procedure). UO adequate — 400mL since return from cath lab (using
            urinal). Will recheck Cr in AM.
            <br />
            <strong>General:</strong> T 98.4, RR 16, SpO2 98% RA. Ate dinner in
            bed (full meal). BG checked at 1700: 186 — covered with sliding
            scale. Metformin held today (contrast), resume tomorrow per
            nephrology protocol if Cr stable.
          </p>
        </div>
        <div className="border-l-4 border-l-danger pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Recommendation
          </h3>
          <p className="text-sm">
            <strong>Activity:</strong> HOB can be elevated at 1845 (6 hours
            post-sheath pull). Full ambulation at 2045 (8 hours) — assist first
            time, assess for groin site bleeding or orthostatic hypotension
            before walking. If any bleeding at groin site when he first stands,
            return to flat bed rest and apply manual pressure for 15 minutes,
            then reassess. Notify interventionalist Dr. Gupta if bleeding
            requires more than 15 minutes of pressure.
            <br />
            <strong>Groin site:</strong> Check q1h until ambulation, then q4h.
            Compare hematoma borders to skin marker — if expansion beyond marks,
            apply manual pressure and call Dr. Gupta. Check R pedal pulse with
            each groin check. If pulse diminishes or foot becomes cool/pale,
            stat vascular assessment.
            <br />
            <strong>Cardiac:</strong> Continue telemetry — call for any ST
            elevation, new arrhythmia, or runs of VT. Troponin at 2100 — expect
            it to peak, then trend down. If troponin continues to rise beyond
            2100 draw or patient develops new chest pain, call cardiology fellow
            (on-call pager on unit whiteboard). Post-cath EKG in AM.
            <br />
            <strong>Medications:</strong> Clopidogrel 75mg with breakfast
            tomorrow (CRITICAL: do NOT hold — stent thrombosis risk). ASA 81mg
            with breakfast. Metoprolol 50mg at 2100. Atorvastatin 80mg at HS
            (new dose). Lisinopril in AM. Hold metformin until AM Cr results —
            if Cr stable or down from 1.3, can resume. BG check at 2100,
            sliding scale.
            <br />
            <strong>Renal:</strong> Continue IV hydration at 100mL/hr overnight,
            reassess with AM Cr. Encourage PO fluids to flush contrast. Goal UO
            above 0.5mL/kg/hr.
            <br />
            <strong>Discharge:</strong> Anticipate discharge tomorrow AM if
            groin site stable, no chest pain, Cr stable, and able to ambulate
            independently. Cardiac rehab referral placed. DAPT education
            started today — wife understood but Mr. Kowalski was drowsy, repeat
            teaching tomorrow before discharge. Prescriptions for atorvastatin
            80mg and clopidogrel 75mg need to be sent to pharmacy before he
            leaves. Follow-up with Dr. Gupta in 2 weeks, PCP in 1 week.
          </p>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        The Post-Cath Handoff Priorities
      </h2>

      <p>
        This example demonstrates the three highest-priority items in any
        post-cath handoff: access site stability, stent-related medication
        compliance, and renal function after contrast. The Angioseal site
        assessment is documented with measurable hematoma dimensions and skin
        marker comparisons — not a vague &quot;looks okay.&quot; The clopidogrel
        is explicitly flagged as critical because stent thrombosis from missed
        DAPT is a life-threatening complication. And the renal monitoring plan
        accounts for the contrast load in a patient with baseline CKD.
      </p>

      <p>
        The activity progression timeline is spelled out in exact hours so the
        night nurse does not have to calculate when bed rest ends. This kind of
        precision prevents both premature ambulation (bleeding risk) and
        unnecessary prolonged bed rest (patient discomfort, DVT risk).
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        Record Your Cardiac Handoff in Seconds
      </h2>

      <p>
        Post-cath handoffs are dense with times, doses, and site checks.{" "}
        <Link href="/record" className="text-accent hover:underline font-semibold">
          ShiftSBAR&apos;s voice recorder
        </Link>{" "}
        captures your spoken notes and structures them into a cardiac-specific
        SBAR — cath findings, site status, medication timing, and activity
        restrictions all organized for the incoming nurse.
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
          <Link href="/guides/examples/med-surg" className="text-accent hover:underline">
            Med-Surg SBAR Example
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

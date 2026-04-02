import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { generateGuideMetadata } from "@/components/GuideLayout";

export const metadata: Metadata = generateGuideMetadata({
  title: "ICU SBAR Example: Critical Care Shift Report",
  description:
    "Detailed ICU SBAR example for critical care nursing handoff. Ventilated sepsis patient on vasopressors with ABG results, titration notes, and organ support planning.",
  slug: "examples/icu",
});

export default function IcuExamplePage() {
  return (
    <GuideLayout
      title="ICU SBAR Example: Critical Care Shift Report"
      faq={[
        {
          question: "How detailed should an ICU SBAR be compared to floor nursing?",
          answer:
            "Significantly more detailed. ICU handoffs need to cover ventilator settings, drip rates and titration parameters, hemodynamic targets, organ-by-organ assessment, and hourly trends — not just current values. The incoming nurse needs to understand the trajectory and the ceiling for each intervention before calling the team.",
        },
        {
          question: "Should I include vent settings in my ICU SBAR report?",
          answer:
            "Yes — always. Include the mode, rate, tidal volume, FiO2, PEEP, and the most recent ABG with the time it was drawn. Also include any recent changes to settings and the reason for the change. The incoming nurse needs this to evaluate whether the patient is trending toward extubation or deterioration.",
        },
        {
          question: "How do I communicate vasopressor changes in an SBAR handoff?",
          answer:
            "Report the current drip, the rate, the trend (increasing or weaning), and the hemodynamic target the team is shooting for. For example: 'Norepinephrine at 12mcg/min, up from 8 at start of shift, target MAP above 65. Fellow aware, vasopressin to be added if norepi exceeds 15mcg/min.' This gives the incoming nurse the ceiling, the target, and the escalation plan.",
        },
      ]}
    >
      <p>
        ICU handoffs are the highest-stakes communication event in nursing. A
        critical care patient can have 8-12 active drips, an invasive line in
        every vessel, and multiple organ systems in active failure — all of which
        the incoming nurse needs to absorb in minutes. SBAR provides the
        scaffolding to deliver this density without losing the thread.
      </p>

      <p>
        The example below covers a ventilated sepsis patient on vasopressors — one
        of the most common and complex ICU scenarios. Pay attention to how organ
        systems are reported systematically and how titration parameters give the
        incoming nurse a clear action plan.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        SBAR Example: Ventilated Sepsis Patient on Vasopressors
      </h2>

      <div className="bg-surface border border-border rounded-lg p-4 space-y-3">
        <div className="border-l-4 border-l-accent pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Situation
          </h3>
          <p className="text-sm">
            Mr. Okafor, bed 4, 68-year-old male, ICU day 3, admitted with
            pneumonia-related septic shock. Currently intubated on
            volume-controlled AC mode, on norepinephrine and vasopressin drips.
            He has been hemodynamically tenuous all shift — required norepi
            titration up twice. Lactic acid is trending down but renal function
            is worsening. Attending Dr. Shah is aware of the current status and
            plans to reassess on evening rounds at 2000.
          </p>
        </div>
        <div className="border-l-4 border-l-blue-500 pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Background
          </h3>
          <p className="text-sm">
            PMH: COPD (home 2L O2), CHF (EF 35%), Type 2 DM, CKD stage 3
            (baseline Cr 1.6). Allergies: vancomycin (Red Man syndrome — pretreat
            with diphenhydramine and slow infusion). Access: R subclavian
            triple-lumen (day 2, dressing clean), 20g L forearm, R radial a-line.
            Foley draining scant concentrated urine. OG tube to low intermittent
            suction, minimal output. Antibiotics: meropenem 1g q8h + azithromycin
            500mg daily (day 3 — sputum culture grew MSSA, sensitivities pending
            for de-escalation). Blood cultures from admission: 2/4 bottles grew
            gram-positive cocci, speciation pending. Procalcitonin trending down:
            18 on admission, 9.2 yesterday, 5.4 today. Code status: DNR per
            patient&apos;s advance directive — full treatment including pressors
            and vent, but no chest compressions or defibrillation. POA is wife,
            updated this afternoon.
          </p>
        </div>
        <div className="border-l-4 border-l-warning pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Assessment
          </h3>
          <p className="text-sm">
            <strong>Hemodynamics:</strong> BP 92/58 (MAP 69), HR 98 Afib with RVR
            (rate controlled compared to this AM — was 120s). Norepi at 14mcg/min
            (up from 10 at start of shift). Vasopressin at 0.04 units/min (fixed
            dose, started yesterday). CVP 12. Received 500mL LR bolus at 1400 for
            MAP drop to 60 — responded transiently.
            <br />
            <strong>Respiratory:</strong> Vent: AC, TV 450, RR 18, FiO2 45%, PEEP
            8. Last ABG at 1600: pH 7.32, pCO2 38, pO2 82, HCO3 19, BE -6. SpO2
            94%. Bilateral coarse breath sounds, suctioned for moderate thick
            yellow secretions x3 this shift. CXR this AM showed bilateral
            infiltrates, slightly improved from yesterday.
            <br />
            <strong>Renal:</strong> UO 10mL/hr last 4 hours (was 25mL/hr this AM).
            Cr 2.8 (up from 2.1 yesterday, baseline 1.6). BUN 48. K+ 5.1 —
            treated with 30g kayexalate PO via OG at 1500, recheck at 2000.
            Nephrology consulted, recommending CRRT if UO stays below 15mL/hr
            over next 6 hours.
            <br />
            <strong>Neuro:</strong> Sedated on propofol 30mcg/kg/min, RASS -2.
            Follows commands intermittently when lightened. Pupils 3mm equal and
            reactive.
            <br />
            <strong>Lactic acid:</strong> 3.1 (down from 4.8 at start of shift,
            7.2 on admission). Trending appropriately.
          </p>
        </div>
        <div className="border-l-4 border-l-danger pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Recommendation
          </h3>
          <p className="text-sm">
            Critical watch points overnight: (1) If MAP drops below 65 despite
            norepi at 15mcg/min, call fellow Dr. Nguyen to discuss
            phenylephrine as third pressor. (2) Recheck K+ at 2000 — if still
            above 5.0, repeat kayexalate and get stat EKG. (3) Strict I&O — if
            UO remains below 15mL/hr by midnight, page nephrology on call for
            CRRT initiation (dialysis catheter consent already signed by wife).
            (4) Next ABG at 2200 to reassess metabolic acidosis. (5) Meropenem
            due at 2200, azithromycin at 0600. (6) Blood culture speciation
            should result overnight — micro lab will call. (7) Propofol sedation
            holiday at 0600 for neuro check per unit protocol. No plan for
            extubation at this time. Wife plans to visit at 0800 — she is
            emotionally struggling, chaplain referral placed.
          </p>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        Why Organ-by-Organ Matters in ICU Handoffs
      </h2>

      <p>
        The Assessment section above is organized by organ system rather than as a
        single paragraph — hemodynamics, respiratory, renal, neuro. This is
        deliberate. In the ICU, each organ system has its own trajectory, its own
        team, and its own escalation thresholds. An incoming nurse needs to
        rapidly locate the information relevant to each system without scanning
        through a wall of text.
      </p>

      <p>
        Notice how the Recommendation section is numbered. When you have 7
        overnight action items for a single patient, a numbered list prevents
        anything from being lost. Each item includes the trigger, the action, and
        who to call — everything the night nurse needs without opening the chart.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        Record Your ICU Handoff in 60 Seconds
      </h2>

      <p>
        ICU reports are information-dense. Instead of typing out vent settings,
        drip rates, and organ assessments,{" "}
        <Link href="/record" className="text-accent hover:underline font-semibold">
          speak your brain dump into ShiftSBAR
        </Link>{" "}
        and get a structured, organ-by-organ SBAR report back instantly. It
        catches the details you might forget at hour 12 of a shift.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        More Unit-Specific Examples
      </h2>
      <ul className="space-y-1 text-sm">
        <li>
          <Link href="/guides/examples/med-surg" className="text-accent hover:underline">
            Med-Surg SBAR Example
          </Link>
        </li>
        <li>
          <Link href="/guides/examples/cardiac" className="text-accent hover:underline">
            Cardiac Unit SBAR Example
          </Link>
        </li>
        <li>
          <Link href="/guides/examples/emergency" className="text-accent hover:underline">
            Emergency Department SBAR Example
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

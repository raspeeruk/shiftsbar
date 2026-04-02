import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { generateGuideMetadata } from "@/components/GuideLayout";

export const metadata: Metadata = generateGuideMetadata({
  title: "Emergency Department SBAR Example: ED Handoff Report",
  description:
    "Detailed Emergency Department SBAR example for ED nursing handoff. Chest pain workup with troponins pending, serial EKGs, and disposition planning.",
  slug: "examples/emergency",
});

export default function EmergencyExamplePage() {
  return (
    <GuideLayout
      title="Emergency Department SBAR Example: ED Handoff Report"
      faq={[
        {
          question: "How is an ED SBAR different from an inpatient SBAR?",
          answer:
            "ED SBARs focus on the active workup, pending results, and disposition planning rather than ongoing management. The patient may have been in the department for only a few hours, so Background emphasizes the presenting complaint and initial workup rather than hospital course. Critically, the Recommendation section must address disposition — is the patient being admitted, discharged, or still in diagnostic limbo?",
        },
        {
          question: "Should I include pending lab results in an ED SBAR handoff?",
          answer:
            "Absolutely — pending results are often the most important part of an ED handoff. State exactly what is pending, when it was drawn, when you expect it back, and what the result will change. For example: 'Second troponin drawn at 2100, expect result by 2130. If elevated, cardiology already notified and standing by for cath lab activation.' This saves the incoming nurse from having to reconstruct the diagnostic plan.",
        },
        {
          question: "How do I handle mid-workup ED handoffs?",
          answer:
            "Be explicit about where you are in the diagnostic algorithm. State what has been completed, what is pending, and what the decision tree looks like. Use the Recommendation section to lay out the if/then logic: 'If troponin positive, activate cath lab protocol. If negative, third troponin at 0130 per chest pain pathway. If all three negative plus stress test low-risk, discharge with cardiology follow-up.' The incoming nurse needs the complete decision map.",
        },
      ]}
    >
      <p>
        Emergency Department handoffs are uniquely challenging because you are
        often handing off a patient mid-workup. Unlike inpatient units where the
        diagnosis is established and the plan is in motion, ED patients may still
        be in diagnostic limbo — and the incoming nurse needs to know exactly
        where in the workup you are, what is pending, and what each result means
        for the patient&apos;s disposition.
      </p>

      <p>
        The example below covers the classic ED scenario: a chest pain workup
        with serial troponins pending. Notice how the SBAR framework captures not
        just the current clinical picture but the entire decision tree that the
        incoming nurse will need to navigate.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        SBAR Example: Chest Pain Workup — Troponins Pending
      </h2>

      <div className="bg-surface border border-border rounded-lg p-4 space-y-3">
        <div className="border-l-4 border-l-accent pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Situation
          </h3>
          <p className="text-sm">
            Mr. Warren, bay 11, 58-year-old male, presented at 1745 via EMS with
            acute onset substernal chest pressure radiating to his jaw while
            mowing the lawn. Pain was 8/10 on arrival, now 2/10 after
            nitroglycerin x3 and morphine 4mg IV. He is currently on continuous
            cardiac telemetry and waiting on his second troponin. ED attending
            Dr. Kim is managing, cardiology has been given a heads-up but not
            formally consulted yet. Patient is anxious but cooperative. Wife is
            in the family waiting area.
          </p>
        </div>
        <div className="border-l-4 border-l-blue-500 pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Background
          </h3>
          <p className="text-sm">
            PMH: HTN (poorly controlled per PCP notes — often forgets
            medications), hyperlipidemia, Type 2 DM (A1c 8.1 per last labs 3
            months ago), former smoker (quit 5 years ago, 40-pack-year history),
            family hx significant for father with MI at age 52. Home meds:
            metoprolol 50mg BID, lisinopril 20mg daily, atorvastatin 40mg daily,
            metformin 1000mg BID — patient admits he hasn&apos;t taken meds in
            about a week due to a pharmacy issue. Allergies: NKDA. Access: 18g L
            AC, 20g R hand (both patent). Given on arrival: ASA 325mg PO, NTG
            0.4mg SL x3 (3 minutes apart), morphine 2mg IV x2, heparin 5000
            units IV bolus per chest pain protocol. EKG #1 (1800): ST depression
            1mm in V4-V6 and lead II, no ST elevation. EKG #2 (1930): unchanged
            from first. First troponin (drawn 1810): 0.08 ng/mL (elevated —
            normal &lt;0.04). CBC: WBC 9.2, H/H 14.1/42. BMP: Cr 1.1, K 4.2,
            glucose 218. Coags: INR 1.0, PTT 28. CXR: cardiomegaly, no
            pulmonary edema or infiltrate. BNP 340 (mildly elevated).
          </p>
        </div>
        <div className="border-l-4 border-l-warning pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Assessment
          </h3>
          <p className="text-sm">
            VS current: BP 148/92 (was 172/98 on arrival), HR 82 NSR on tele
            (was 104 on arrival), RR 18, T 98.4, SpO2 98% RA. Pain 2/10,
            pressure-like, no radiation currently. Tele showing NSR with
            occasional PVCs — no runs of VT, no ST changes on monitor. Lungs
            clear bilaterally. Peripheral pulses 2+ all extremities. No JVD, no
            peripheral edema. Diaphoresis resolved. Patient calmer after morphine
            but remains worried — asking repeatedly if he is having a heart
            attack. Second troponin drawn at 2015 (3-hour mark) — result
            expected by 2045. Heparin drip started at 18 units/kg/hr per weight-
            based protocol at 2000, no bolus repeat. PTT due 6 hours after drip
            started (0200). BG 218 — sliding scale insulin coverage given per
            protocol (4 units regular insulin).
          </p>
        </div>
        <div className="border-l-4 border-l-danger pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Recommendation
          </h3>
          <p className="text-sm">
            Second troponin result expected by 2045 — this is the critical
            decision point. If troponin is rising (above 0.08 or significantly
            higher), Dr. Kim plans to formally consult cardiology for possible
            cath lab tonight. Cardiology fellow Dr. Abrams is aware and expecting
            the call if needed. If troponin is stable or trending down, third
            troponin at 2345 (6-hour mark) and plan for admission to telemetry
            floor for observation and cardiology consult in the morning. Serial
            EKGs: next EKG due at 2100 — repeat immediately if patient reports
            any recurrence of chest pain. Call attending if any new ST changes on
            tele monitor. Heparin drip: titrate per weight-based protocol, PTT
            at 0200. Keep NPO in case of cath lab — patient is aware and has been
            told no food or drink. Wife in family waiting area, bay 11 number is
            on the tracking board — Dr. Kim plans to update her after second
            troponin results. If patient is admitted, bed request already placed
            for telemetry unit — bed control said approximately 2-3 hour wait.
            Admission orders are drafted but not signed pending troponin.
          </p>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        Why Decision Trees Matter in ED Handoffs
      </h2>

      <p>
        The Recommendation section in this example reads like a decision tree, and
        that is intentional. ED nursing is fundamentally about moving patients
        through a diagnostic algorithm toward disposition — and the incoming nurse
        needs to know exactly where in that algorithm the patient sits, what the
        branch points are, and who to call at each branch.
      </p>

      <p>
        Also notice the first troponin was elevated (0.08 vs normal of less than
        0.04). This is flagged in the Background but its clinical significance is
        explored in the Recommendation: the second troponin will determine whether
        this is an acute NSTEMI requiring urgent cath or a more stable presentation
        appropriate for observation. That if/then logic is exactly what the
        incoming nurse needs.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        Speak Your ED Handoff, Get Instant SBAR
      </h2>

      <p>
        ED shifts are chaotic. Between the patient in bay 11 and the three new
        arrivals in triage, writing structured handoffs is a luxury you do not
        have.{" "}
        <Link href="/record" className="text-accent hover:underline font-semibold">
          ShiftSBAR lets you speak your patient update
        </Link>{" "}
        in 30 seconds and generates a structured SBAR — pending results,
        disposition plans, and escalation criteria all organized automatically.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        More Unit-Specific Examples
      </h2>
      <ul className="space-y-1 text-sm">
        <li>
          <Link href="/guides/examples/cardiac" className="text-accent hover:underline">
            Cardiac Unit SBAR Example
          </Link>
        </li>
        <li>
          <Link href="/guides/examples/icu" className="text-accent hover:underline">
            ICU SBAR Example
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

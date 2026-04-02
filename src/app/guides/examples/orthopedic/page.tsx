import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { generateGuideMetadata } from "@/components/GuideLayout";

export const metadata: Metadata = generateGuideMetadata({
  title: "Orthopedic SBAR Example: Ortho Nursing Handoff",
  description:
    "Detailed Orthopedic SBAR example for ortho nursing handoff. Post-op total knee replacement with neurovascular checks, PT progress, and VTE prophylaxis documentation.",
  slug: "examples/orthopedic",
});

export default function OrthopedicExamplePage() {
  return (
    <GuideLayout
      title="Orthopedic SBAR Example: Ortho Nursing Handoff"
      faq={[
        {
          question: "What are the critical elements of an Ortho SBAR handoff?",
          answer:
            "Orthopedic SBARs must cover neurovascular status of the affected extremity (the 5 Ps: pain, pulse, pallor, paresthesia, paralysis), surgical drain output, VTE prophylaxis compliance, pain management effectiveness (including multimodal approach), mobility/PT progress, and weight-bearing status. Missing any of these can delay discharge or miss a compartment syndrome.",
        },
        {
          question: "How often should neurovascular checks be documented in an Ortho SBAR?",
          answer:
            "In your SBAR handoff, report the most recent neurovascular check and any changes or trends during your shift. Post-op patients typically need neurovascular checks every 2-4 hours for the first 24-48 hours. If any abnormality was found and resolved, document that in the Assessment. The incoming nurse needs to know the frequency, the current status, and any concerning trends — not every individual check result.",
        },
        {
          question: "Should I include PT/OT progress in my Ortho SBAR?",
          answer:
            "Yes — PT progress is a primary discharge criterion for orthopedic patients. Document what exercises were done, what the patient achieved (distance walked, stairs attempted, ROM measurements), what the PT's assessment was, and what the goals are for the next session. Include the patient's pain level during PT and whether they required pre-medication, as this directly affects their participation and recovery trajectory.",
        },
      ]}
    >
      <p>
        Orthopedic nursing handoffs revolve around two things: protecting the
        surgical site and getting the patient moving. Every ortho SBAR needs to
        clearly communicate neurovascular status, pain management effectiveness,
        mobility progress, and VTE prevention — because these are the four factors
        that determine whether the patient goes home on time or develops a
        complication.
      </p>

      <p>
        The example below covers a post-op day 1 total knee replacement, one of
        the most common orthopedic procedures. Pay attention to how neurovascular
        checks, PT milestones, and multimodal pain management are documented with
        enough specificity for the incoming nurse to continue the plan seamlessly.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        SBAR Example: POD 1 Total Knee Replacement
      </h2>

      <div className="bg-surface border border-border rounded-lg p-4 space-y-3">
        <div className="border-l-4 border-l-accent pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Situation
          </h3>
          <p className="text-sm">
            Mrs. Patterson, room 422, 67-year-old female, POD 1 right total knee
            arthroplasty performed by Dr. Hernandez. Reporting end-of-day-shift
            handoff. She had a productive day — PT got her up and walking 50
            feet with a front-wheeled walker, and she used the CPM machine for 2
            hours this afternoon. Pain management has been the main challenge:
            she needed a PCA adjustment at 1000 after reporting pain 8/10, which
            brought her down to 4/10 and allowed her to participate in afternoon
            PT. Neurovascular checks have been intact all shift. She is motivated
            and asking about discharge timeline.
          </p>
        </div>
        <div className="border-l-4 border-l-blue-500 pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Background
          </h3>
          <p className="text-sm">
            PMH: severe osteoarthritis R knee (bone-on-bone, failed conservative
            management for 2 years), HTN, hypothyroidism, osteoporosis. Home
            meds: amlodipine 5mg daily, levothyroxine 75mcg daily, calcium
            with vitamin D, weekly alendronate. Allergies: tramadol (seizure —
            CRITICAL ALLERGY, flagged in red on MAR). Surgical hx: L total hip
            2 years ago at same facility (uncomplicated, discharged POD 2). She
            was an anxious patient during her hip replacement, and her chart notes
            that early and aggressive pain management improved her PT
            participation significantly — surgeon noted this in preop orders.
            Access: 20g L AC, saline lock (IVF discontinued this AM). Hemovac
            drain R knee in place, functioning. Adductor canal nerve block
            placed by anesthesia preop (single shot, expected duration 18-24
            hours — likely wearing off now). DVT prophylaxis: enoxaparin 40mg
            subQ daily (first dose given 0600 this AM, next dose 0600
            tomorrow), SCDs bilateral when in bed, TED hose bilateral.
          </p>
        </div>
        <div className="border-l-4 border-l-warning pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Assessment
          </h3>
          <p className="text-sm">
            <strong>Neurovascular (R lower extremity):</strong> Toes warm, pink,
            brisk capillary refill. Pedal pulse 2+ palpable, confirmed with
            Doppler at 0800 (strong signal). Sensation intact — she can
            distinguish sharp/dull on dorsum and plantar surface of R foot.
            Able to dorsiflex and plantarflex R foot against resistance. No
            numbness or tingling reported. Mild edema R knee and distal thigh
            (expected). No calf tenderness, no Homan&apos;s sign. Neurovascular
            checks have been q2h, all consistent.
            <br />
            <strong>Surgical site:</strong> Dressing intact, ACE wrap over
            abdominal pad over incision. Small amount of sanguinous drainage
            visible on outer dressing (quarter-sized, marked with time). Not
            expanding. Hemovac drain: 150mL sanguinous output this shift
            (total since OR: 280mL). Drain patent, suction maintained.
            <br />
            <strong>Pain:</strong> Multimodal approach: PCA hydromorphone —
            demand dose 0.2mg, lockout 8 minutes, 4-hour limit 2.4mg (adjusted
            from 0.15mg at 1000 after she reported breakthrough pain of 8/10).
            PCA usage this shift: total 1.6mg over 12 hours, 22 demands/18
            delivered. Scheduled: acetaminophen 1000mg q6h ATC, celecoxib 200mg
            BID. Gabapentin 300mg TID (for neuropathic/surgical pain — started
            preop). Ice machine on R knee 20 minutes on / 20 minutes off. Current
            pain: 4/10 at rest, 6/10 with movement. Nerve block is wearing
            off — she noticed increased pain in the medial knee area starting
            around 1500, which is consistent with the expected 18-24 hour
            duration.
            <br />
            <strong>Mobility:</strong> PT session at 1300 — ambulated 50 feet
            with FWW, contact guard assist, weight-bearing as tolerated on R.
            Tolerated well but fatigued after. Sat in bedside chair for 45
            minutes after lunch. CPM machine: 2 hours this afternoon, 0-45
            degrees (goal 0-90 by discharge). PT pleased with progress, plans
            to advance to 80-100 feet tomorrow and trial with stairs.
            <br />
            <strong>General:</strong> VS: BP 132/76, HR 74, RR 14, T 98.8, SpO2
            97% RA. Foley removed at 0800, voided x3 since (200mL, 350mL,
            275mL). Diet: regular, eating well. BM: none yet (expected, on
            bowel protocol). Labs AM: H/H 10.8/32.4 (down from preop 12.2/37 —
            expected post-op drop), BMP normal, PT/INR normal.
          </p>
        </div>
        <div className="border-l-4 border-l-danger pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Recommendation
          </h3>
          <p className="text-sm">
            Pain will likely increase overnight as the nerve block fully wears
            off — keep PCA accessible and encourage her to stay ahead of pain
            (remind her to press the button before pain reaches 6/10, not after).
            Acetaminophen at 2000, celecoxib at 2100, gabapentin at 2100. Ice
            machine: continue 20 on / 20 off overnight, she can self-manage the
            positioning. CRITICAL: NO tramadol under any circumstances — seizure
            history with it, documented in allergy list. If PCA is not controlling
            pain (consistent reports above 7/10), notify orthopedic PA on call
            to discuss bolus or dose adjustment. Neurovascular checks: continue
            q2h overnight, transition to q4h tomorrow AM if stable (per unit
            protocol). Hemovac drain: empty and record at 2200 and 0600 — call
            surgeon if output exceeds 200mL in a single 8-hour period or if
            drainage changes to bright red active bleeding. DVT prophylaxis:
            enoxaparin at 0600, keep SCDs on whenever in bed, encourage ankle
            pumps. CPM machine: she can use it overnight if she wakes up stiff,
            but it is not mandatory. PT at 0900 tomorrow — pre-medicate with PCA
            bolus 30 minutes before (she did better with this approach during her
            hip replacement). Discharge goal: POD 2 (tomorrow afternoon) if she
            meets PT milestones (100 feet ambulation, stair demonstration, 60
            degrees active flexion). Case manager has initiated home PT referral.
            Daughter picking her up — single-story home, no barriers.
          </p>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        Pain Management Is the Thread
      </h2>

      <p>
        Notice how pain management is discussed in every section of this SBAR, not
        just the Assessment. The Situation mentions the PCA adjustment. The
        Background provides the critical tramadol allergy and the note about early
        pain management improving PT participation. The Assessment details the
        multimodal approach and the nerve block wearing off. The Recommendation
        gives pre-medication timing for tomorrow&apos;s PT. Pain is the thread
        that connects everything in ortho nursing — it determines mobility, which
        determines discharge, which determines outcomes.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        Record Your Ortho Handoff Effortlessly
      </h2>

      <p>
        Ortho handoffs are detail-heavy — neurovascular checks, drain outputs, PT
        milestones, multimodal pain regimens.{" "}
        <Link href="/record" className="text-accent hover:underline font-semibold">
          ShiftSBAR&apos;s voice recorder
        </Link>{" "}
        captures all of it from your spoken notes and organizes it into a clean
        SBAR that hits every section the incoming nurse needs.
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
          <Link href="/guides/examples/icu" className="text-accent hover:underline">
            ICU SBAR Example
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

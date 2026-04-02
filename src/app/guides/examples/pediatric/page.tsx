import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { generateGuideMetadata } from "@/components/GuideLayout";

export const metadata: Metadata = generateGuideMetadata({
  title: "Pediatric SBAR Example: Peds Nursing Handoff",
  description:
    "Detailed Pediatric SBAR example for peds nursing handoff. Bronchiolitis patient with respiratory status, weight-based dosing, and parent involvement documentation.",
  slug: "examples/pediatric",
});

export default function PediatricExamplePage() {
  return (
    <GuideLayout
      title="Pediatric SBAR Example: Peds Nursing Handoff"
      faq={[
        {
          question:
            "What extra information should a Pediatric SBAR include compared to adult units?",
          answer:
            "Pediatric SBARs need weight-based dosing verification, developmental stage context, parent/guardian involvement and understanding, feeding tolerance specifics (especially for infants), and age-appropriate pain assessment scales (FLACC for pre-verbal, Wong-Baker FACES for younger children). Always include the child's weight in kg since every medication dose depends on it.",
        },
        {
          question:
            "How do I document parent involvement in a Peds SBAR handoff?",
          answer:
            "Include parent names, who has been present, their understanding of the plan, any teaching that was done, and their emotional state. Parents are part of the care team in pediatrics — the incoming nurse needs to know if mom is anxious and needs extra explanation, if dad is the primary contact overnight, or if there are custody or language considerations.",
        },
        {
          question:
            "Should I use different pain scales in Pediatric SBAR reports?",
          answer:
            "Yes. Always specify which pain scale you used and why. FLACC (Face, Legs, Activity, Cry, Consolability) for ages 0-3 or pre-verbal children. Wong-Baker FACES for ages 3-7. Numeric 0-10 for children 8 and older who can self-report. Document the scale used so the incoming nurse continues with the same assessment method.",
        },
      ]}
    >
      <p>
        Pediatric nursing handoffs carry a unique challenge: the patient often
        cannot self-report, medication dosing is weight-dependent, and the family
        is an active part of the care plan. A strong Peds SBAR addresses all three
        — clinical status, precise dosing, and parent dynamics — so the incoming
        nurse walks in with a complete picture.
      </p>

      <p>
        The example below covers bronchiolitis in a 4-year-old, one of the most
        common winter admissions on a Peds floor. Notice how weight, developmental
        context, and family communication are woven throughout every section.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        SBAR Example: 4-Year-Old with Bronchiolitis
      </h2>

      <div className="bg-surface border border-border rounded-lg p-4 space-y-3">
        <div className="border-l-4 border-l-accent pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Situation
          </h3>
          <p className="text-sm">
            Lily Chen, room 214 bed A, 4-year-old female, weight 16.2kg, admitted
            yesterday for RSV bronchiolitis with moderate respiratory distress.
            Reporting end-of-day-shift handoff. She has improved today — weaned
            from high-flow nasal cannula to regular nasal cannula this afternoon.
            Taking PO fluids better, though still refusing most solid food. Mom
            (Jennifer) has been at bedside all day and is comfortable with the
            plan. Dad will be here overnight.
          </p>
        </div>
        <div className="border-l-4 border-l-blue-500 pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Background
          </h3>
          <p className="text-sm">
            PMH: born at 36 weeks (late preterm), resolved neonatal jaundice,
            recurrent otitis media (3 episodes in past year), no prior
            hospitalizations. Immunizations UTD. Home meds: none. Allergies: NKDA.
            Developmentally appropriate — speaks in full sentences, attends
            preschool. Older sibling (7yo) had URI symptoms last week. IV: 22g R
            hand (placed in ED, site clean, flushes well). RSV rapid antigen
            positive on admission. CXR admission: bilateral perihilar
            peribronchial thickening, no consolidation. No antibiotics — viral
            illness. Started on 2L high-flow NC in ED, weaned to 1L regular NC
            at 1400 today. Maintenance IVF D5 1/2 NS + 20 KCl at 55mL/hr
            (running since admission, decreased from 65mL/hr this AM as PO intake
            improved).
          </p>
        </div>
        <div className="border-l-4 border-l-warning pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Assessment
          </h3>
          <p className="text-sm">
            VS: HR 118 (age-appropriate, down from 140s on admission), RR 28 (was
            42 yesterday), T 99.4 (trending down from 101.8 last night), BP
            92/58, SpO2 95-96% on 1L NC (desats to 91-92% when NC removed for
            more than 2 minutes). Mild subcostal retractions still present but no
            nasal flaring or accessory muscle use. Lung sounds: transmitted upper
            airway sounds bilaterally, scattered expiratory wheezes R &gt; L,
            improved air entry compared to this AM. Suctioned nasally x2 this
            shift — moderate clear to white secretions. FLACC pain score 0 at
            rest. Oral intake: drank approximately 400mL Pedialyte and apple juice
            today, ate 4 crackers and half a popsicle. Refused chicken nuggets at
            dinner. Last wet diaper 1530, adequate output. IV site R hand — no
            redness, swelling, or infiltration. Mood: playful this afternoon,
            watched tablet, colored with mom. Cried briefly during nasal
            suctioning but consoled quickly.
          </p>
        </div>
        <div className="border-l-4 border-l-danger pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Recommendation
          </h3>
          <p className="text-sm">
            Continue 1L NC overnight — do NOT attempt to wean to room air until
            morning, per Dr. Patel. If SpO2 drops below 92% sustained on 1L, go
            back to 2L and notify resident. Nasal suctioning PRN before feeds and
            when audibly congested — she tolerates it better if you let her hold
            the suction tubing first (mom&apos;s tip). Encourage PO fluids
            overnight — she prefers apple juice over Pedialyte, drinks better
            from a straw cup (mom brought one from home, it&apos;s on the bedside
            table). If PO intake drops below 200mL overnight, keep IVF running.
            If she&apos;s drinking well, IVF can be decreased to 40mL/hr. RT
            assessment at 2200 and 0200. Discharge criteria discussed with
            family: needs 12 hours on room air with SpO2 above 94%, adequate PO
            intake, and no increased work of breathing. Earliest discharge
            likely tomorrow afternoon if wean goes well in the morning. Dad
            arriving at 2000 — mom will brief him. He is quieter but asks good
            questions, may need you to check in with him directly.
          </p>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        What Makes This Peds SBAR Effective
      </h2>

      <p>
        Several details in this report are specific to pediatric nursing. The
        weight is stated upfront because every dose calculation depends on it. The
        developmental context (speaks in sentences, attends preschool) helps the
        incoming nurse set expectations for interaction. The family dynamics are
        specific: mom is comfortable, dad is arriving and may need direct
        communication. Even the detail about the straw cup and the suction tubing
        trick — these are the kind of practical notes that make a night shift run
        smoothly.
      </p>

      <p>
        The Recommendation section gives clear wean parameters (don&apos;t wean
        overnight, specific SpO2 thresholds for escalation) and discharge
        criteria, so the night nurse can assess progress without waking the
        resident for routine questions.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        Record Your Peds Handoff in Seconds
      </h2>

      <p>
        Pediatric handoffs have a lot of moving parts — respiratory support,
        feeding, family dynamics, developmental context.{" "}
        <Link href="/record" className="text-accent hover:underline font-semibold">
          ShiftSBAR&apos;s voice recorder
        </Link>{" "}
        captures everything you say and sorts it into the right SBAR sections,
        including family details and age-appropriate clinical context.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        More Unit-Specific Examples
      </h2>
      <ul className="space-y-1 text-sm">
        <li>
          <Link href="/guides/examples/postpartum" className="text-accent hover:underline">
            Postpartum SBAR Example
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

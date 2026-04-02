import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { generateGuideMetadata } from "@/components/GuideLayout";

export const metadata: Metadata = generateGuideMetadata({
  title: "Psychiatric SBAR Example: Psych Nursing Handoff",
  description:
    "Detailed Psychiatric SBAR example for psych nursing handoff. Acute psychosis patient with medication compliance, safety precautions, and therapeutic communication notes.",
  slug: "examples/psychiatric",
});

export default function PsychiatricExamplePage() {
  return (
    <GuideLayout
      title="Psychiatric SBAR Example: Psych Nursing Handoff"
      faq={[
        {
          question: "What should a Psych SBAR emphasize that medical SBARs do not?",
          answer:
            "Psychiatric SBARs must emphasize safety status (suicidal ideation, homicidal ideation, elopement risk, self-harm behavior), behavioral observations over the shift (agitation levels, sleep patterns, interactions with peers and staff), medication response and side effects, legal status (voluntary vs involuntary, commitment hearing dates), and therapeutic rapport — which staff members the patient responds to and what communication approaches work or escalate them.",
        },
        {
          question: "How do I document safety precautions in a Psych SBAR?",
          answer:
            "Be specific about the current precaution level, what triggered it, and what would change it. Instead of 'patient is on suicide precautions,' state: 'Q15 safety checks, sharps restriction, accompanied to bathroom, no shoelaces or cords. Precautions initiated on admission due to SI with plan (overdose). Denied SI today during 1:1 at 1400 but psychiatrist wants to maintain Q15 until reassessed tomorrow.' This tells the incoming nurse exactly what to do and why.",
        },
        {
          question: "Should I include details about therapeutic interactions in an SBAR?",
          answer:
            "Yes — this is some of the most valuable information in a psych handoff. Document what topics the patient was willing to discuss, what triggered agitation or withdrawal, what de-escalation techniques worked, and what their affect and thought content were during your interactions. A note like 'responds well to direct, calm redirection but escalates if spoken to in a patronizing tone' can prevent a crisis on the next shift.",
        },
      ]}
    >
      <p>
        Psychiatric nursing handoffs require a fundamentally different emphasis
        than medical or surgical units. While vital signs and lab values matter,
        the most critical handoff information is behavioral — how the patient
        interacted, what their safety risk is, whether medications are working,
        and what communication approach keeps them engaged rather than escalated.
      </p>

      <p>
        The example below covers a patient with acute psychosis on an inpatient
        psychiatric unit. Notice how behavioral observations, safety status, and
        therapeutic rapport details are given equal weight to medication and
        clinical data.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        SBAR Example: Acute Psychosis — Medication Compliance and Safety
      </h2>

      <div className="bg-surface border border-border rounded-lg p-4 space-y-3">
        <div className="border-l-4 border-l-accent pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Situation
          </h3>
          <p className="text-sm">
            Mr. Whitfield, room 6 bed B (closest to nursing station), 29-year-old
            male, admitted 72 hours ago via ED on involuntary hold (danger to self
            and others) for acute psychotic episode. Diagnosis: schizophrenia,
            paranoid type, with current exacerbation — he stopped taking his
            medications approximately 3 weeks ago. Today was his best day so far.
            He accepted all oral medications, ate in the dining room with peers
            for the first time, and had a 20-minute conversation with this nurse
            about his dog without decompensating. He remains on Q15 safety checks
            but has not required any PRN interventions or restraints today.
          </p>
        </div>
        <div className="border-l-4 border-l-blue-500 pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Background
          </h3>
          <p className="text-sm">
            PMH: schizophrenia diagnosed at age 22 (3 prior inpatient
            admissions, last one 14 months ago), cannabis use disorder (in early
            remission per his report — last use approximately 1 month ago). No
            medical comorbidities. Home meds prior to noncompliance: olanzapine
            15mg HS, benztropine 1mg BID. He stopped medications because he
            &quot;felt fine and didn&apos;t like the weight gain.&quot; Allergies:
            NKDA. Legal status: involuntary 72-hour hold, converted to 14-day
            certification yesterday — commitment hearing scheduled for next
            Wednesday (April 8). Has a public defender assigned (card on chart).
            Family: mother is emergency contact and visited yesterday — patient
            was initially agitated by her visit (believed she &quot;sent people
            to spy on him&quot;) but calmed after 30 minutes. Mother is supportive
            and wants to be involved in discharge planning. No restraint use
            this admission. Day 1: received IM haloperidol 5mg + lorazepam 2mg
            for acute agitation in ED. Day 2: transitioned to PO olanzapine
            10mg HS (lower dose than prior to assess tolerance), accepted
            reluctantly. Day 3 (today): took olanzapine 10mg PO willingly at
            2100 last night, benztropine 1mg BID started today.
          </p>
        </div>
        <div className="border-l-4 border-l-warning pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Assessment
          </h3>
          <p className="text-sm">
            <strong>Safety:</strong> Denies SI/HI when asked directly today (on
            admission, expressed vague HI toward &quot;the people following
            me&quot;). No self-harm behavior observed. Q15 checks maintained —
            all accounted for this shift. Sharps restriction in place. Room
            safety check done at 0700, no contraband.
            <br />
            <strong>Mental status:</strong> Alert, oriented x3 (was oriented x1
            on admission). Affect flat but intermittently reactive — smiled once
            when talking about his dog. Speech: normal rate and volume (was
            pressured and loud on admission). Thought process: mostly linear
            today, occasional tangentiality. Thought content: still endorses
            belief that neighbors are recording him through the walls, but
            intensity has decreased — today he said &quot;maybe I&apos;m not sure
            about that&quot; versus admission when he was certain and agitated
            about it. Denies AVH today (reported command auditory hallucinations
            on admission — &quot;voices telling me to protect myself&quot;). No
            grandiosity.
            <br />
            <strong>Behavior:</strong> Slept 5 hours last night (improvement from
            2 hours night 1). Ate 60% of breakfast, 80% of lunch in dining room
            with 2 peers without incident, 50% of dinner in room (said he was
            tired). Hygiene: showered independently this morning with verbal
            prompting (first time since admission). Participated in afternoon
            group therapy for 15 minutes before requesting to leave — OT noted
            this was a positive step. No aggression, no property destruction, no
            elopement attempts today.
            <br />
            <strong>Physical:</strong> VS: BP 124/78, HR 72, T 98.2. Weight 94kg
            (baseline). Glucose 112 fasting (olanzapine metabolic monitoring).
            Fasting lipid panel drawn this AM — results pending. No EPS symptoms
            (no rigidity, tremor, or akathisia observed). Bowel movement today.
          </p>
        </div>
        <div className="border-l-4 border-l-danger pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Recommendation
          </h3>
          <p className="text-sm">
            Continue Q15 checks — psychiatrist Dr. Moore plans to reassess
            tomorrow for possible step-down to Q30 if progress continues.
            Olanzapine 10mg due at 2100 tonight — he took it willingly last night
            but may need gentle encouragement. Do NOT present it as optional or
            ask &quot;do you want your medication&quot; — use matter-of-fact
            approach: &quot;Here is your evening medication, Mr.
            Whitfield.&quot; If he refuses, do not push — document refusal,
            notify psychiatrist on call. Benztropine 1mg due at 2100 as well.
            Monitor for EPS especially over next 48 hours as olanzapine reaches
            steady state. Sleep: he requested his room light be left off
            overnight and door cracked (not closed) — this is consistent with
            unit policy for his safety level. If he becomes agitated overnight:
            first try verbal de-escalation (calm, direct, do not argue with
            delusions — acknowledge his distress without confirming the content).
            If verbal de-escalation fails, PRN lorazepam 1mg PO ordered. IM
            haloperidol 5mg + lorazepam 2mg ordered as last resort. Mother
            planning to visit tomorrow afternoon — he seems ambivalent about this.
            Social worker Lisa is coordinating family meeting for Thursday to
            discuss discharge planning and medication adherence support.
            Commitment hearing prep: public defender may visit tomorrow or Friday.
          </p>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        Why Behavioral Detail Matters in Psych Handoffs
      </h2>

      <p>
        In psychiatric nursing, the most important clinical data is often
        observational. The note about his delusions shifting from certainty to
        &quot;maybe I&apos;m not sure&quot; is a significant clinical finding —
        it suggests the olanzapine is beginning to work. Similarly, the
        medication administration technique (matter-of-fact, not framed as a
        question) is a practical detail that can mean the difference between
        compliance and refusal.
      </p>

      <p>
        The safety section is structured to tell the incoming nurse exactly what
        level of monitoring is in place, what the specific risks are, and what
        has changed since admission. This is far more useful than a generic
        &quot;patient is on precautions.&quot;
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        Record Your Psych Handoff Quickly
      </h2>

      <p>
        Psychiatric handoffs are heavy on narrative detail — behavioral
        observations, therapeutic interactions, de-escalation strategies.{" "}
        <Link href="/record" className="text-accent hover:underline font-semibold">
          ShiftSBAR captures your spoken observations
        </Link>{" "}
        and organizes them into structured SBAR sections, ensuring safety status,
        medication details, and behavioral notes all land in the right place.
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
          <Link href="/guides/examples/emergency" className="text-accent hover:underline">
            Emergency Department SBAR Example
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

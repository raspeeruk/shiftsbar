import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { generateGuideMetadata } from "@/components/GuideLayout";

export const metadata: Metadata = generateGuideMetadata({
  title: "Postpartum SBAR Example: L&D Nursing Handoff",
  description:
    "Detailed Postpartum SBAR example for L&D nursing handoff. Post C-section patient with fundus assessment, breastfeeding status, and newborn care coordination.",
  slug: "examples/postpartum",
});

export default function PostpartumExamplePage() {
  return (
    <GuideLayout
      title="Postpartum SBAR Example: L&D Nursing Handoff"
      faq={[
        {
          question: "What is unique about a Postpartum SBAR compared to other surgical patients?",
          answer:
            "Postpartum SBARs cover two patients simultaneously — the mother and the newborn. You need to address surgical recovery (if C-section), fundal assessment, lochia, breastfeeding or feeding status, bonding, pain management, and emotional state for the mother, plus the baby's feeding, voiding, stooling, jaundice risk, and any NICU concerns. The family dynamics — partner involvement, support system, prior children — are also clinically relevant.",
        },
        {
          question: "Should the newborn be included in the mother's SBAR or documented separately?",
          answer:
            "In most postpartum units, the mother and baby are handed off together since the same nurse cares for the couplet. Include the newborn status as a subsection within the Assessment, covering feeding method, latch quality, voiding/stooling pattern, bilirubin risk factors, and any concerns. If the baby has been separated (NICU admission), note the baby's location, current status, and mother's access plan.",
        },
        {
          question: "How do I document breastfeeding challenges in an SBAR handoff?",
          answer:
            "Be specific and clinical. Rather than 'breastfeeding going okay,' document latch quality, which positions have been tried, how long the baby fed at each breast, whether mom is using a nipple shield, and if lactation has been consulted. Include the baby's feeding cues, output (wet and dirty diapers), and any supplementation given. This level of detail prevents the incoming nurse from starting over with assessment and lets them build on what you've already tried.",
        },
      ]}
    >
      <p>
        Postpartum nursing is one of the few specialties where you are responsible
        for two patients at once. A strong L&D SBAR handoff covers the
        mother&apos;s surgical or vaginal recovery, her emotional state, feeding
        progress, and newborn status — all organized so the incoming nurse can
        prioritize what needs attention first.
      </p>

      <p>
        The example below covers a G2P2 on postpartum day 1 after a C-section.
        Notice how the mother&apos;s recovery and the newborn&apos;s status are
        both addressed, with breastfeeding documented in specific, actionable
        detail rather than vague terms.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        SBAR Example: G2P2 Day 1 Post C-Section
      </h2>

      <div className="bg-surface border border-border rounded-lg p-4 space-y-3">
        <div className="border-l-4 border-l-accent pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Situation
          </h3>
          <p className="text-sm">
            Mrs. Adeyemi, room 508, 31-year-old G2P2, POD 1 from repeat
            C-section under spinal anesthesia. Baby girl, 3.4kg, rooming in,
            born at 0814 yesterday. Mom and baby are both stable. Main focus
            today has been pain management and establishing breastfeeding — she
            breastfed her first child for 14 months and is motivated, but this
            baby is a sleepy feeder. Husband Marcus is at bedside, has been
            helpful. Their 3-year-old is with grandparents.
          </p>
        </div>
        <div className="border-l-4 border-l-blue-500 pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Background
          </h3>
          <p className="text-sm">
            <strong>Mother:</strong> PMH: gestational diabetes (diet-controlled
            this pregnancy, resolved), mild preeclampsia with first pregnancy (no
            issues this time — BPs have been normal throughout). Home meds: prenatal
            vitamin. Allergies: codeine (nausea). Surgical hx: primary C-section
            3 years ago for failure to progress, repeat C-section this admission
            (elective, uncomplicated, EBL 700mL). Blood type: O positive,
            antibody screen negative. GBS negative. Rubella immune, HIV/RPR
            negative. IV: 20g L forearm, LR at 125mL/hr (will D/C when
            tolerating PO well). Foley removed at 0600 today, voided x2 since
            (350mL, 275mL). Incision: low transverse, staples in place, steri-
            strips over, dressing removed this AM — clean, dry, well-approximated,
            no erythema.
            <br />
            <strong>Baby:</strong> Born 39+2, Apgars 8 and 9. Birth weight
            3.4kg. Vitamin K and erythromycin given. Hepatitis B vaccine given
            with maternal consent. Newborn screen collected at 24 hours of life.
            Circumcision NOT planned. Pediatrician Dr. Reeves rounded this AM —
            exam normal, no concerns. Car seat at bedside.
          </p>
        </div>
        <div className="border-l-4 border-l-warning pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Assessment
          </h3>
          <p className="text-sm">
            <strong>Mother:</strong> VS: BP 118/72, HR 78, RR 16, T 98.6, SpO2
            99% RA. Pain 4/10 at rest, 6/10 with movement. Current pain regimen:
            ibuprofen 600mg q6h ATC (last dose 1400), oxycodone 5mg q4h PRN
            (took 2 doses today — at 0800 and 1600, good relief). Fundus firm,
            midline, 1 fingerbreadth below umbilicus. Lochia moderate rubra, no
            clots, normal odor. Incision intact as described. Abdomen soft, +BS.
            Tolerating regular diet, ate 80% of meals today. Ambulated x3 with
            assistance, steady gait, mild dizziness first time (resolved). Legs:
            no edema, no calf tenderness, SCDs on when in bed. Emotionally: tearful
            briefly this afternoon (normal day 1 hormone shift), responded well
            to reassurance, bonding well with baby, good eye contact and
            responsive to cues. Edinburgh Postnatal Depression screen: 4 (low
            risk).
            <br />
            <strong>Baby:</strong> VS: HR 142, RR 38, T 97.8 axillary (skin-to-
            skin helped bring up from 97.4 this AM). SpO2 not indicated. Weight
            today: 3.28kg (3.5% loss from birth weight — within normal). Color
            pink, mild physiologic jaundice to face only (transcutaneous bili not
            indicated yet). Active when awake, good tone. Feeding: breastfed x5
            today, latch is shallow on right breast (mom is right-handed, less
            comfortable positioning on that side). Left breast: good deep latch
            in cross-cradle. Longest feed: 18 minutes left breast. Shortest: 5
            minutes right breast (baby fell asleep). Tried football hold on right
            side — slightly better. No supplementation given. Output: 3 wet
            diapers, 2 meconium stools today. Lactation consultant Megan visited
            at 1100 — worked on right-side positioning, recommended nipple shield
            trial if latch does not improve by tomorrow.
          </p>
        </div>
        <div className="border-l-4 border-l-danger pl-3">
          <h3 className="font-heading font-semibold text-text text-sm">
            Recommendation
          </h3>
          <p className="text-sm">
            <strong>Mother:</strong> Continue ibuprofen ATC (next dose 2000) and
            oxycodone PRN — she prefers to take it before attempting breastfeeding
            so she can position comfortably. Encourage ambulation at least x2
            overnight. Monitor fundus and lochia — call if fundus boggy or lochia
            heavy/clots. Staple removal planned for POD 3 (tomorrow AM) by OB
            team during rounds. D/C IV when she has tolerated 1L PO (currently
            at approximately 750mL). Stool softener scheduled — has not had BM
            yet, which is expected POD 1.
            <br />
            <strong>Baby:</strong> Watch for feeding cues overnight — this baby
            gives subtle cues (rooting, hand-to-mouth) before crying, and feeds
            better when caught early. Encourage mom to try football hold on right
            side for overnight feeds. If baby goes longer than 3 hours without
            feeding, wake and attempt. If unable to latch for 2 consecutive
            attempts, offer 10mL expressed colostrum via syringe (mom hand-
            expressed successfully this afternoon, small amount in labeled syringe
            in milk fridge). Lactation returning tomorrow AM. Monitor weight —
            if loss exceeds 7% by tomorrow, discuss supplementation plan with
            pediatrician. Jaundice: visual check with each feed, transcutaneous
            bili if jaundice extends below nipple line. Hearing screen not yet
            done — scheduled for tomorrow before discharge. Estimated discharge
            POD 2 (tomorrow) if both mom and baby meet criteria.
          </p>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-xl text-text">
        The Couplet Care Approach
      </h2>

      <p>
        This example demonstrates effective couplet care documentation — the
        mother and baby are reported together because their care is
        interdependent. The breastfeeding details bridge both patients: the
        mother&apos;s pain affects her positioning ability, which affects the
        baby&apos;s latch, which affects the baby&apos;s weight, which determines
        the discharge timeline. A good postpartum SBAR makes these connections
        explicit.
      </p>

      <p>
        The detail about the baby&apos;s subtle feeding cues is the kind of
        observation that only comes from spending 12 hours with a patient. Passing
        it along in the SBAR prevents the night nurse from missing feeding
        windows and potentially triggering supplementation that could have been
        avoided.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        Record Your L&D Handoff Quickly
      </h2>

      <p>
        Postpartum handoffs are long because you are covering two patients.{" "}
        <Link href="/record" className="text-accent hover:underline font-semibold">
          ShiftSBAR&apos;s voice recorder
        </Link>{" "}
        lets you speak your notes about mom and baby together and automatically
        organizes everything — fundal checks, feeding logs, baby output, pain
        management — into a clean SBAR format.
      </p>

      <h2 className="font-heading font-semibold text-xl text-text">
        More Unit-Specific Examples
      </h2>
      <ul className="space-y-1 text-sm">
        <li>
          <Link href="/guides/examples/pediatric" className="text-accent hover:underline">
            Pediatric SBAR Example
          </Link>
        </li>
        <li>
          <Link href="/guides/examples/med-surg" className="text-accent hover:underline">
            Med-Surg SBAR Example
          </Link>
        </li>
        <li>
          <Link href="/guides/examples/psychiatric" className="text-accent hover:underline">
            Psychiatric SBAR Example
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

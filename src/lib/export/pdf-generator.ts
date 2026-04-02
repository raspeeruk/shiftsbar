import { jsPDF } from "jspdf";
import type { SbarReport } from "@/types";

const COLORS = {
  bg: "#1E1E2E",
  surface: "#2A2A3C",
  text: "#F0F0F5",
  textSecondary: "#9CA3AF",
  accent: "#22C55E",
  warning: "#FBBF24",
  danger: "#EF4444",
  border: "#3F3F5C",
  situation: "#22C55E",
  background: "#3B82F6",
  assessment: "#FBBF24",
  recommendation: "#EF4444",
};

export function generateSbarPdf(report: SbarReport): jsPDF {
  const doc = new jsPDF({ format: "a4", unit: "mm" });
  const pageWidth = 210;
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = 0;

  // Cover page
  doc.setFillColor(COLORS.bg);
  doc.rect(0, 0, pageWidth, 297, "F");

  // Accent bar at top
  doc.setFillColor(COLORS.accent);
  doc.rect(0, 0, pageWidth, 3, "F");

  // Logo area
  y = 40;
  doc.setTextColor(COLORS.accent);
  doc.setFontSize(32);
  doc.setFont("helvetica", "bold");
  doc.text("ShiftSBAR", margin, y);

  y += 12;
  doc.setTextColor(COLORS.textSecondary);
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("SBAR Shift Handoff Report", margin, y);

  // Patient info block
  y += 30;
  doc.setFillColor(COLORS.surface);
  doc.roundedRect(margin, y, contentWidth, 40, 3, 3, "F");

  y += 12;
  doc.setTextColor(COLORS.text);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text(`${report.patient.initials} — Room ${report.patient.room}`, margin + 8, y);

  y += 10;
  doc.setTextColor(COLORS.textSecondary);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text(
    `${report.patient.age}y ${report.patient.sex} | ${report.metadata.unit} | ${report.metadata.shiftType} shift`,
    margin + 8,
    y
  );

  y += 8;
  doc.text(
    `Primary Dx: ${report.situation.primaryDiagnosis}`,
    margin + 8,
    y
  );

  // Priority flags on cover
  if (report.recommendation.priorityFlags.length > 0) {
    y += 20;
    doc.setTextColor(COLORS.danger);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("PRIORITY FLAGS", margin, y);

    report.recommendation.priorityFlags.forEach((flag) => {
      y += 8;
      const color = flag.level === "critical" ? COLORS.danger : COLORS.warning;
      doc.setFillColor(color);
      doc.circle(margin + 2, y - 1.5, 1.5, "F");
      doc.setTextColor(COLORS.text);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(flag.message, margin + 8, y);
    });
  }

  // Footer on cover
  doc.setTextColor(COLORS.textSecondary);
  doc.setFontSize(8);
  doc.text(
    `Generated ${new Date(report.metadata.generatedAt).toLocaleString()} | ShiftSBAR | Not a medical record`,
    margin,
    280
  );

  // SBAR content pages
  doc.addPage();
  doc.setFillColor(COLORS.bg);
  doc.rect(0, 0, pageWidth, 297, "F");
  y = 20;

  // Helper to add sections
  const addSection = (
    title: string,
    color: string,
    content: () => void
  ) => {
    if (y > 260) {
      doc.addPage();
      doc.setFillColor(COLORS.bg);
      doc.rect(0, 0, pageWidth, 297, "F");
      y = 20;
    }

    doc.setFillColor(color);
    doc.rect(margin, y, 2, 8, "F");
    doc.setTextColor(COLORS.text);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(title, margin + 6, y + 6);
    y += 14;

    content();
    y += 6;
  };

  const addField = (label: string, value: string) => {
    if (!value || value === "Not specified") return;
    if (y > 275) {
      doc.addPage();
      doc.setFillColor(COLORS.bg);
      doc.rect(0, 0, pageWidth, 297, "F");
      y = 20;
    }
    doc.setTextColor(COLORS.textSecondary);
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.text(label.toUpperCase(), margin + 4, y);
    y += 4;
    doc.setTextColor(COLORS.text);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const lines = doc.splitTextToSize(value, contentWidth - 8);
    doc.text(lines, margin + 4, y);
    y += lines.length * 4.5 + 2;
  };

  const addList = (label: string, items: string[]) => {
    if (!items || items.length === 0) return;
    addField(label, items.join(", "));
  };

  // Situation
  addSection("SITUATION", COLORS.situation, () => {
    addField("Primary Diagnosis", report.situation.primaryDiagnosis);
    addField("Admission Date", report.situation.admissionDate);
    addField("Reason for Handoff", report.situation.reasonForHandoff);
    addField("Code Status", report.situation.codeStatus);
    if (report.situation.isolation) {
      addField("Isolation", report.situation.isolation);
    }
    addField("Summary", report.situation.summary);
  });

  // Background
  addSection("BACKGROUND", COLORS.background, () => {
    addList("Relevant History", report.background.relevantHistory);
    addList("Surgeries", report.background.surgeries);
    addList("Allergies", report.background.allergies);
    if (report.background.currentMedications.length > 0) {
      const medText = report.background.currentMedications
        .map((m) => `${m.name} ${m.dose} ${m.route} ${m.frequency}`)
        .join("; ");
      addField("Medications", medText);
    }
    const vitals = Object.entries(report.background.baselineVitals)
      .filter(([, v]) => v && v !== "Not specified")
      .map(([k, v]) => `${k}: ${v}`)
      .join(" | ");
    if (vitals) addField("Baseline Vitals", vitals);
    addList("IV Access", report.background.ivAccess);
  });

  // Assessment
  addSection("ASSESSMENT", COLORS.assessment, () => {
    const currentVitals = Object.entries(report.assessment.currentVitals)
      .filter(([, v]) => v && v !== "Not specified")
      .map(([k, v]) => `${k}: ${v}`)
      .join(" | ");
    if (currentVitals) addField("Current Vitals", currentVitals);
    addField("Neuro Status", report.assessment.neuroStatus);
    addField(
      "Pain",
      `${report.assessment.painLevel.score}/10 — ${report.assessment.painLevel.location} (${report.assessment.painLevel.management})`
    );
    addField("Skin", report.assessment.skinIntegrity);
    addField("Intake", report.assessment.intake);
    addField("Output", report.assessment.output);
    if (report.assessment.labsOfNote.length > 0) {
      const labText = report.assessment.labsOfNote
        .map(
          (l) =>
            `${l.test}: ${l.value}${l.flag !== "normal" ? ` [${l.flag.toUpperCase()}]` : ""}`
        )
        .join("; ");
      addField("Labs", labText);
    }
    addField("Nursing Assessment", report.assessment.nursingAssessment);
  });

  // Recommendation
  addSection("RECOMMENDATION", COLORS.recommendation, () => {
    addList("Pending Orders", report.recommendation.pendingOrders);
    addList("Pending Labs", report.recommendation.pendingLabs);
    addList("Anticipated Changes", report.recommendation.anticipatedChanges);
    addField("Discharge Progress", report.recommendation.dischargeProgress);
    addField("Family Communication", report.recommendation.familyCommunication);
    addField("Nurse Recommendation", report.recommendation.nurseRecommendation);
  });

  // Verification block
  if (y > 240) {
    doc.addPage();
    doc.setFillColor(COLORS.bg);
    doc.rect(0, 0, pageWidth, 297, "F");
    y = 20;
  }

  y += 10;
  doc.setDrawColor(COLORS.border);
  doc.setLineWidth(0.3);
  doc.line(margin, y, margin + contentWidth, y);
  y += 8;
  doc.setTextColor(COLORS.textSecondary);
  doc.setFontSize(8);
  doc.text("Oncoming Nurse Signature: _______________________________", margin, y);
  y += 6;
  doc.text("Date/Time: _________________", margin, y);
  y += 10;
  doc.setFontSize(7);
  doc.text(
    "This report was generated by ShiftSBAR AI. It is not a medical record. Always verify against the patient chart.",
    margin,
    y
  );

  return doc;
}

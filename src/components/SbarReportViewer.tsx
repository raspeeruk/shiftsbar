"use client";

import type { SbarReport } from "@/types";
import Card from "./ui/card";
import Badge from "./ui/badge";
import PriorityFlag from "./PriorityFlag";
import { sbarSections } from "@/data/sbar-fields";

export default function SbarReportViewer({ report }: { report: SbarReport }) {
  return (
    <div className="space-y-4">
      {/* Patient header */}
      <Card className="flex items-center justify-between">
        <div>
          <span className="font-heading font-bold text-lg">
            {report.patient.initials}
          </span>
          <span className="text-text-secondary text-sm ml-2">
            Rm {report.patient.room}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
          <span>
            {report.patient.age}y {report.patient.sex}
          </span>
          <span>|</span>
          <span className="uppercase">{report.metadata.unit}</span>
          <span>|</span>
          <span>{report.metadata.shiftType} shift</span>
        </div>
      </Card>

      {/* Priority flags */}
      {report.recommendation.priorityFlags.length > 0 && (
        <div className="space-y-2">
          {report.recommendation.priorityFlags.map((flag, i) => (
            <PriorityFlag key={i} flag={flag} />
          ))}
        </div>
      )}

      {/* Situation */}
      <SectionCard
        label={sbarSections[0].label}
        color={sbarSections[0].color}
      >
        <Field label="Primary Dx" value={report.situation.primaryDiagnosis} />
        <Field label="Admitted" value={report.situation.admissionDate} />
        <Field label="Handoff Reason" value={report.situation.reasonForHandoff} />
        <Field label="Code Status" value={report.situation.codeStatus} />
        {report.situation.isolation && (
          <Field label="Isolation" value={report.situation.isolation} />
        )}
        <div className="mt-2 text-sm text-text">{report.situation.summary}</div>
      </SectionCard>

      {/* Background */}
      <SectionCard
        label={sbarSections[1].label}
        color={sbarSections[1].color}
      >
        <ListField label="History" items={report.background.relevantHistory} />
        <ListField label="Surgeries" items={report.background.surgeries} />
        <ListField label="Allergies" items={report.background.allergies} />
        {report.background.currentMedications.length > 0 && (
          <div className="mt-2">
            <span className="text-xs text-text-secondary font-mono">MEDICATIONS</span>
            <div className="mt-1 space-y-1">
              {report.background.currentMedications.map((med, i) => (
                <div key={i} className="text-sm flex gap-2 flex-wrap">
                  <span className="text-text font-semibold">{med.name}</span>
                  <span className="text-text-secondary">
                    {med.dose} {med.route} {med.frequency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        <VitalsGrid label="Baseline Vitals" vitals={report.background.baselineVitals} />
        <ListField label="IV Access" items={report.background.ivAccess} />
      </SectionCard>

      {/* Assessment */}
      <SectionCard
        label={sbarSections[2].label}
        color={sbarSections[2].color}
      >
        <VitalsGrid label="Current Vitals" vitals={report.assessment.currentVitals} />
        <Field label="Neuro" value={report.assessment.neuroStatus} />
        <div className="mt-2">
          <span className="text-xs text-text-secondary font-mono">PAIN</span>
          <div className="text-sm mt-0.5">
            <span className="font-semibold">{report.assessment.painLevel.score}/10</span>
            {report.assessment.painLevel.location && (
              <span className="text-text-secondary"> — {report.assessment.painLevel.location}</span>
            )}
            {report.assessment.painLevel.management && (
              <span className="text-text-secondary"> ({report.assessment.painLevel.management})</span>
            )}
          </div>
        </div>
        <Field label="Skin" value={report.assessment.skinIntegrity} />
        <div className="grid grid-cols-2 gap-2 mt-2">
          <Field label="Intake" value={report.assessment.intake} />
          <Field label="Output" value={report.assessment.output} />
        </div>
        {report.assessment.labsOfNote.length > 0 && (
          <div className="mt-2">
            <span className="text-xs text-text-secondary font-mono">LABS</span>
            <div className="mt-1 flex flex-wrap gap-2">
              {report.assessment.labsOfNote.map((lab, i) => (
                <Badge
                  key={i}
                  variant={
                    lab.flag === "critical"
                      ? "critical"
                      : lab.flag === "abnormal"
                      ? "warning"
                      : "default"
                  }
                >
                  {lab.test}: {lab.value}
                </Badge>
              ))}
            </div>
          </div>
        )}
        <div className="mt-2 text-sm text-text">
          {report.assessment.nursingAssessment}
        </div>
      </SectionCard>

      {/* Recommendation */}
      <SectionCard
        label={sbarSections[3].label}
        color={sbarSections[3].color}
      >
        <ListField label="Pending Orders" items={report.recommendation.pendingOrders} />
        <ListField label="Pending Labs" items={report.recommendation.pendingLabs} />
        <ListField label="Anticipated Changes" items={report.recommendation.anticipatedChanges} />
        <Field label="Discharge" value={report.recommendation.dischargeProgress} />
        <Field label="Family" value={report.recommendation.familyCommunication} />
        <div className="mt-2 text-sm text-text">
          {report.recommendation.nurseRecommendation}
        </div>
      </SectionCard>

      {/* Metadata */}
      <div className="text-[10px] font-mono text-text-secondary text-center">
        Generated {new Date(report.metadata.generatedAt).toLocaleString()} | ShiftSBAR
      </div>
    </div>
  );
}

function SectionCard({
  label,
  color,
  children,
}: {
  label: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1 h-5 rounded-full" style={{ backgroundColor: color }} />
        <h2 className="font-heading font-bold text-sm tracking-wide uppercase">
          {label}
        </h2>
      </div>
      <div className="space-y-1">{children}</div>
    </Card>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  if (!value || value === "Not specified") return null;
  return (
    <div className="mt-1">
      <span className="text-xs text-text-secondary font-mono">{label.toUpperCase()}</span>
      <div className="text-sm text-text">{value}</div>
    </div>
  );
}

function ListField({ label, items }: { label: string; items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mt-2">
      <span className="text-xs text-text-secondary font-mono">{label.toUpperCase()}</span>
      <ul className="mt-0.5 text-sm text-text space-y-0.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-1.5">
            <span className="text-text-secondary mt-1.5 w-1 h-1 rounded-full bg-text-secondary shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function VitalsGrid({
  label,
  vitals,
}: {
  label: string;
  vitals: Record<string, string>;
}) {
  const entries = Object.entries(vitals).filter(([, v]) => v && v !== "Not specified");
  if (entries.length === 0) return null;
  return (
    <div className="mt-2">
      <span className="text-xs text-text-secondary font-mono">{label.toUpperCase()}</span>
      <div className="mt-1 grid grid-cols-3 gap-2">
        {entries.map(([key, val]) => (
          <div key={key} className="bg-bg rounded px-2 py-1">
            <span className="text-[10px] text-text-secondary font-mono block">{key}</span>
            <span className="text-sm font-semibold">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

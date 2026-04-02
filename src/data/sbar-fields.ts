export const sbarSections = [
  {
    key: "situation" as const,
    label: "Situation",
    color: "#22C55E",
    description: "What is going on with the patient?",
    fields: [
      "Admission date",
      "Primary diagnosis",
      "Reason for handoff",
      "Code status",
      "Isolation precautions",
    ],
  },
  {
    key: "background" as const,
    label: "Background",
    color: "#3B82F6",
    description: "What is the clinical background or context?",
    fields: [
      "Relevant history",
      "Surgeries/procedures",
      "Allergies",
      "Current medications",
      "Baseline vitals",
      "IV access",
    ],
  },
  {
    key: "assessment" as const,
    label: "Assessment",
    color: "#FBBF24",
    description: "What do I think the problem is?",
    fields: [
      "Current vitals",
      "Neuro status",
      "Pain level",
      "Skin integrity",
      "I&O",
      "Labs of note",
      "Nursing assessment",
    ],
  },
  {
    key: "recommendation" as const,
    label: "Recommendation",
    color: "#EF4444",
    description: "What do I recommend be done?",
    fields: [
      "Pending orders",
      "Pending labs",
      "Anticipated changes",
      "Discharge progress",
      "Family communication",
      "Priority flags",
    ],
  },
] as const;

export const shiftTypes = [
  { value: "day", label: "Day Shift (7a-7p)" },
  { value: "night", label: "Night Shift (7p-7a)" },
  { value: "evening", label: "Evening Shift (3p-11p)" },
] as const;

export const commonUnits = [
  "Med-Surg",
  "ICU",
  "CCU",
  "NICU",
  "PICU",
  "L&D",
  "Postpartum",
  "ED",
  "OR/PACU",
  "Psych",
  "Rehab",
  "Oncology",
  "Ortho",
  "Cardiac",
  "Neuro",
  "Step-Down",
  "Tele",
] as const;

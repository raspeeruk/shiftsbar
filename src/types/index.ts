export interface SbarReport {
  patient: {
    initials: string;
    room: string;
    age: number;
    sex: string;
  };
  situation: {
    admissionDate: string;
    primaryDiagnosis: string;
    reasonForHandoff: string;
    codeStatus: string;
    isolation: string | null;
    summary: string;
  };
  background: {
    relevantHistory: string[];
    surgeries: string[];
    allergies: string[];
    currentMedications: Medication[];
    baselineVitals: Record<string, string>;
    ivAccess: string[];
  };
  assessment: {
    currentVitals: Record<string, string>;
    neuroStatus: string;
    painLevel: {
      score: number;
      location: string;
      management: string;
    };
    skinIntegrity: string;
    intake: string;
    output: string;
    labsOfNote: LabResult[];
    nursingAssessment: string;
  };
  recommendation: {
    pendingOrders: string[];
    pendingLabs: string[];
    anticipatedChanges: string[];
    dischargeProgress: string;
    familyCommunication: string;
    priorityFlags: PriorityFlag[];
    nurseRecommendation: string;
  };
  metadata: {
    generatedAt: string;
    shiftType: "day" | "night" | "evening";
    unit: string;
  };
}

export interface Medication {
  name: string;
  dose: string;
  route: string;
  frequency: string;
}

export interface LabResult {
  test: string;
  value: string;
  flag: "normal" | "abnormal" | "critical";
}

export interface PriorityFlag {
  level: "critical" | "warning";
  message: string;
}

export interface TranscriptionResult {
  text: string;
  duration: number;
}

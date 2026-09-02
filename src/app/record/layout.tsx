import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create a Nursing Shift Report",
  description:
    "Record or type your nursing shift notes and turn them into a structured SBAR handoff report.",
  alternates: { canonical: "/record" },
};

export default function RecordLayout({ children }: { children: React.ReactNode }) {
  return children;
}

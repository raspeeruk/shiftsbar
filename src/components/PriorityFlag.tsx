import type { PriorityFlag as PriorityFlagType } from "@/types";
import Badge from "./ui/badge";

export default function PriorityFlag({ flag }: { flag: PriorityFlagType }) {
  return (
    <div
      className={`flex items-start gap-2 p-2 rounded-md border ${
        flag.level === "critical"
          ? "bg-danger/5 border-danger/20"
          : "bg-warning/5 border-warning/20"
      }`}
    >
      <Badge variant={flag.level === "critical" ? "critical" : "warning"}>
        {flag.level === "critical" ? "CRITICAL" : "WATCH"}
      </Badge>
      <span className="text-sm text-text">{flag.message}</span>
    </div>
  );
}

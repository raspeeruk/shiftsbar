type Variant = "warning" | "critical" | "success" | "default";

const variants: Record<Variant, string> = {
  warning: "bg-warning/15 text-warning border-warning/30",
  critical: "bg-danger/15 text-danger border-danger/30",
  success: "bg-accent/15 text-accent border-accent/30",
  default: "bg-surface text-text-secondary border-border",
};

export default function Badge({
  variant = "default",
  children,
  className = "",
}: {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

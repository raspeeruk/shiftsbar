export default function ProgressBar({
  progress,
  label,
}: {
  progress: number;
  label?: string;
}) {
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-xs text-text-secondary mb-1">
          <span>{label}</span>
          <span className="font-mono">{Math.round(progress)}%</span>
        </div>
      )}
      <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden border border-border">
        <div
          className="h-full bg-accent rounded-full transition-all duration-300"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </div>
  );
}

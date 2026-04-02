"use client";

export default function PulseBar({
  active = false,
  className = "",
}: {
  active?: boolean;
  className?: string;
}) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
        className="w-full h-8"
      >
        {active ? (
          <path
            className="pulse-wave-path"
            d="M 0 25 Q 5 25 10 25 T 20 25 T 30 25 T 40 25 T 50 25 T 60 25 T 70 25 T 80 25 T 90 25 T 100 25"
          />
        ) : (
          <path
            className="pulse-wave-flat"
            d="M 0 25 L 100 25"
          />
        )}
      </svg>
    </div>
  );
}

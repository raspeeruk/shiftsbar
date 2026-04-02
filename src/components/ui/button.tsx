import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "danger" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent hover:bg-accent-hover text-bg font-semibold",
  secondary:
    "bg-surface hover:bg-border text-text border border-border",
  danger:
    "bg-danger/10 hover:bg-danger/20 text-danger border border-danger/30",
  ghost:
    "text-text-secondary hover:text-text hover:bg-surface",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={`px-4 py-2 rounded-md text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

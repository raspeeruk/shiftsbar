import { HTMLAttributes } from "react";

export default function Card({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`bg-surface border border-border rounded-lg p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

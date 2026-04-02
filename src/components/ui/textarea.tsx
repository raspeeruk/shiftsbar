import { TextareaHTMLAttributes } from "react";

export default function Textarea({
  className = "",
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm text-text placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 resize-none font-body ${className}`}
      {...props}
    />
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-heading font-bold text-sm tracking-tight">
                ShiftSBAR
              </span>
            </div>
            <p className="text-text-secondary text-xs max-w-xs">
              Speak your shift. Get a perfect handoff. AI-powered SBAR reports
              for nurses.
            </p>
          </div>

          <div className="flex gap-8 text-xs">
            <div className="flex flex-col gap-2">
              <span className="font-heading font-semibold text-text-secondary uppercase tracking-wider text-[10px]">
                Product
              </span>
              <Link href="/record" className="text-text-secondary hover:text-accent transition-colors">
                Record
              </Link>
              <Link href="/pricing" className="text-text-secondary hover:text-accent transition-colors">
                Pricing
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-heading font-semibold text-text-secondary uppercase tracking-wider text-[10px]">
                Resources
              </span>
              <Link href="/guides/what-is-sbar-nursing" className="text-text-secondary hover:text-accent transition-colors">
                What is SBAR?
              </Link>
              <Link href="/guides/sbar-examples" className="text-text-secondary hover:text-accent transition-colors">
                SBAR Examples
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-heading font-semibold text-text-secondary uppercase tracking-wider text-[10px]">
                Legal
              </span>
              <Link href="/privacy" className="text-text-secondary hover:text-accent transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-text-secondary hover:text-accent transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-border text-text-secondary text-[10px] font-mono">
          &copy; {new Date().getFullYear()} ShiftSBAR. Not a medical device. For
          documentation assistance only.
        </div>
      </div>
    </footer>
  );
}

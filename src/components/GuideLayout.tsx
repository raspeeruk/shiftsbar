import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export function generateGuideMetadata({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `https://shiftsbar.com/guides/${slug}` },
    openGraph: {
      title: `${title} | ShiftSBAR`,
      description,
      type: "article",
    },
  };
}

export default function GuideLayout({
  title,
  children,
  faq,
}: {
  title: string;
  children: React.ReactNode;
  faq?: { question: string; answer: string }[];
}) {
  return (
    <div className="min-h-dvh flex flex-col">
      <Nav />
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-12">
        <nav className="text-xs text-text-secondary mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/guides/what-is-sbar-nursing"
            className="hover:text-accent transition-colors"
          >
            Guides
          </Link>
          <span>/</span>
          <span className="text-text">{title}</span>
        </nav>

        <article>
          <h1 className="font-heading font-bold text-3xl mb-6">{title}</h1>
          <div className="space-y-6 text-text-secondary leading-relaxed">
            {children}
          </div>
        </article>

        {faq && faq.length > 0 && (
          <section className="mt-12 border-t border-border pt-8">
            <h2 className="font-heading font-bold text-xl mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faq.map((item, i) => (
                <div key={i} className="bg-surface border border-border rounded-lg p-4">
                  <h3 className="font-heading font-semibold text-sm text-text mb-2">
                    {item.question}
                  </h3>
                  <p className="text-sm text-text-secondary">{item.answer}</p>
                </div>
              ))}
            </div>

            {/* FAQ Schema */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faq.map((item) => ({
                    "@type": "Question",
                    name: item.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: item.answer,
                    },
                  })),
                }),
              }}
            />
          </section>
        )}

        {/* CTA */}
        <section className="mt-12 bg-surface border border-border rounded-lg p-6 text-center">
          <h2 className="font-heading font-bold text-lg mb-2">
            Try ShiftSBAR Free
          </h2>
          <p className="text-text-secondary text-sm mb-4">
            Speak your shift brain dump. Get a structured SBAR handoff in
            seconds.
          </p>
          <Link
            href="/record"
            className="bg-accent hover:bg-accent-hover text-bg font-semibold px-6 py-2.5 rounded-md text-sm transition-colors inline-block"
          >
            Start Recording — Free
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}

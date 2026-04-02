import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://shiftsbar.com"),
  title: {
    default: "ShiftSBAR — Voice-to-SBAR Shift Reports for Nurses",
    template: "%s | ShiftSBAR",
  },
  description:
    "Speak your shift brain dump. AI structures it into a clean SBAR handoff report with flagged priorities. Free for nurses.",
  openGraph: {
    type: "website",
    siteName: "ShiftSBAR",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&family=Outfit:wght@300;400;600&family=Overpass+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text font-body antialiased">
        {children}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}

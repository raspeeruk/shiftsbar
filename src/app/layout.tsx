import type { Metadata } from "next";
import Script from "next/script";
import AcquisitionNotice from "@/components/AcquisitionNotice";
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
  alternates: { canonical: "/" },
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
        <script
          id="roger-group-consent-default"
          dangerouslySetInnerHTML={{ __html: "window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',functionality_storage:'denied',personalization_storage:'denied',security_storage:'granted',wait_for_update:500});" }}
        />
        <Script
          id="roger-group-consent"
          src="https://rogerson-signups.netlify.app/consent-widget.js"
          strategy="beforeInteractive"
          data-brand="ShiftSBAR"
          data-domain="shiftsbar.com"
          data-analytics="true"
          data-marketing="false"
        />
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
        <AcquisitionNotice />
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

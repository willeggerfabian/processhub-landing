import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import { getConsent } from "@/lib/consent";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://processhub.com"),
  title: "ProcessHub – Termin- & Prozessautomatisierung für Dienstleister in 10–14 Tagen",
  description: "Weniger No-Shows, mehr fixe Termine und transparente KPIs. ProcessHub automatisiert Ihre Termin- und Backoffice-Prozesse ohne Systemwechsel – in 10–14 Tagen live, DSGVO-konform.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "ProcessHub – Termin- & Prozessautomatisierung",
    description: "No-Shows senken, Auslastung steigern, KPIs im Blick – in 10–14 Tagen live.",
    url: "https://processhub.com",
    siteName: "ProcessHub",
    images: [{ url: "https://processhub.com/assets/og-preview.jpg", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "ProcessHub – Termin- & Prozessautomatisierung",
    description: "Automatisierte Termin- & Backoffice-Prozesse ohne Systemwechsel.",
    images: ["https://processhub.com/assets/og-preview.jpg"]
  },
  keywords: [
    "Termin Automatisierung","No-Show reduzieren","Friseur Online-Termin","KFZ Reifenwechsel Termin",
    "Make.com Automationen","Zapier für KMU","Kalender Sync Google","DSGVO Terminbuchung",
    "Lead-Erfassung","Reminder SMS E-Mail","KPI Dashboard Dienstleister"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Consent wird auf Client-Seite ausgewertet; hier nur Grundstruktur
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* GA4 & Meta Pixel werden nur nach Consent dynamisch injiziert (siehe unten in body) */}
      </head>
      <body className={inter.className}>
        {children}
        <CookieBanner />
        {/* Consent-gesteuerte Skripte */}
        <ConsentScripts />
      </body>
    </html>
  );
}

/** Client-Komponente lädt GA4 & Meta Pixel nur bei Zustimmung */
function ConsentScripts() {
  if (typeof window === "undefined") return null as any;
  const consent = getConsent();
  const gaId = "G-XXXXXXXXXX";
  const pixelId = "123456789012345";

  return (
    <>
      {consent?.analytics && gaId && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { anonymize_ip: true });
              `
            }}
          />
        </>
      )}
      {consent?.marketing && pixelId && (
        <>
          <script dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('consent', 'grant');
              fbq('track', 'PageView');
            `
          }} />
          <noscript>
            <img height="1" width="1" style={{ display: "none" }} src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`} />
          </noscript>
        </>
      )}
    </>
  );
}
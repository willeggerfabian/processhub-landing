import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import { getConsent } from "@/lib/consent";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://processhub.at"),
  title: "ProcessHub – Digitalisierung, Automation & Paketlösungen für KMU",
  description:
    "Pilot-Pakete für Friseure & Restaurants ab 299 €. In 10–14 Tagen live, DSGVO-konform. Weniger No-Shows, mehr Auslastung, klare KPIs.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "ProcessHub – Digitalisierung & Automation für KMU",
    description:
      "Messbare Ergebnisse in 10–14 Tagen: Termin- & Workflow-Automatisierung, KPI-Transparenz.",
    url: "https://processhub.at",
    siteName: "ProcessHub",
    images: [{ url: "/assets/brand/og-processhub.jpg", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "ProcessHub – Digitalisierung & Automation",
    description: "Paketlösungen für KMU. DSGVO-konform, ohne Systemwechsel.",
    images: ["/assets/brand/og-processhub.jpg"]
  },
  keywords: [
    "Digitalisierung KMU","Automatisierung Friseur","Reservierungssystem Restaurant",
    "No-Show reduzieren","Social Media Automatisierung","Make Zapier n8n","DSGVO konform"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-AT">
      <head>
        <link rel="icon" href="/assets/brand/favicon.png" />
      </head>
      <body className={inter.className}>
        {children}
        <CookieBanner />
        <ConsentScripts />
      </body>
    </html>
  );
}

function ConsentScripts() {
  if (typeof window === "undefined") return null as any;
  const consent = getConsent();
  const gaId = "G-XXXXXXXXXX";            // ← deine GA4-ID einsetzen
  const pixelId = "123456789012345";      // ← deine Meta-Pixel-ID einsetzen
  return (
    <>
      {consent?.analytics && gaId && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
          <script dangerouslySetInnerHTML={{__html:`
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date()); gtag('config','${gaId}',{ anonymize_ip:true });
          `}} />
        </>
      )}
      {consent?.marketing && pixelId && (
        <>
          <script dangerouslySetInnerHTML={{__html:`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
            s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
            (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','${pixelId}'); fbq('consent','grant'); fbq('track','PageView');
          `}} />
          <noscript>
            <img height="1" width="1" style={{display:"none"}} src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`} />
          </noscript>
        </>
      )}
    </>
  );
}

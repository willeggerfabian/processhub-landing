"use client";

import Badge from "@/components/Badge";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import { motion } from "framer-motion";
import clsx from "clsx";

const DATA = {
  brand: { name: "ProcessHub", logo: "https://processhub.com/assets/logo.svg" },
  heroImage: "https://processhub.com/assets/hero-process-automation.jpg",
  gallery: [
    "https://processhub.com/assets/flow-terminbuchung.png",
    "https://processhub.com/assets/dashboard-kpi.png",
    "https://processhub.com/assets/integration-make-zapier.png"
  ],
  video: "https://processhub.com/assets/demo-60s.mp4",
  calendly: "https://calendly.com/processhub/15min-kurzcheck",
  webhook: "https://hooks.zapier.com/hooks/catch/24399240/uh9nbfw/",
  claims: [
    "–20–30 % No-Shows durch Reminder-Flows",
    "+15–25 % mehr fixe Termine durch schnelle Lead-Erfassung",
    "Go-Live in 10–14 Tagen ohne Systemwechsel",
    "Dialekt- & CI-Texte inklusive",
    "Transparente KPIs: Anfragen, Termine, Stornos, Reaktionszeit"
  ],
  pricing: [
    {
      name: "Starter",
      price: "€ 990 Setup + € 149/Monat",
      features: [
        "Termin-Automation (SMS/E-Mail-Reminder)",
        "Google/Outlook Kalender-Sync",
        "Lead-Form + Zapier Hook",
        "Basic KPI Dashboard (Monat)"
      ],
      cta: "Anfragen"
    },
    {
      name: "Pro",
      price: "€ 1.900 Setup + € 290/Monat",
      popular: true,
      features: [
        "Alles aus Starter",
        "WhatsApp-Flows + No-Show Ausfall-Slots",
        "KPI Dashboard (Woche + Monat)",
        "Dialekt/CI-Copy & Templates"
      ],
      cta: "Kurzcheck buchen"
    },
    {
      name: "Scale",
      price: "ab € 3.900 Setup + ab € 590/Monat",
      features: [
        "Multi-Standort & Rollen",
        "CRM-/POS-Integrationen",
        "Priorisierte SLAs",
        "Custom KPI & BI-Exports"
      ],
      cta: "Beratung anfordern"
    }
  ]
};

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <LogosTrust />
      <PainSolution />
      <Features />
      <Benefits />
      <UseCases />
      <ProcessTimeline />
      <KpiProof />
      <Pricing />
      <FAQSection />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="container-narrow flex items-center justify-between h-14">
        <a href="#hero" className="flex items-center gap-3">
          <img src={DATA.brand.logo} alt="ProcessHub Logo" width={28} height={28} />
          <span className="font-semibold">ProcessHub</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#usecases" className="hover:underline">Use-Cases</a>
          <a href="#pricing" className="hover:underline">Preise</a>
          <a href="#faq" className="hover:underline">FAQ</a>
          <a className="cta" href={DATA.calendly} target="_blank" rel="noopener">15-Minuten Kurzcheck</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="section">
      <div className="container-narrow grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Badge>In 10–14 Tagen live • Ohne Systemwechsel</Badge>
          <h1 className="mt-4 text-4xl md:text-5xl leading-tight">
            Automatisierte Termin- & Prozessabläufe für lokale Dienstleister
          </h1>
          <p className="mt-4 text-lg text-secondary">
            Weniger No-Shows, mehr fixe Termine und transparente KPIs – DSGVO-konform, dialekt- & CI-gerecht.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="cta" href={DATA.calendly} target="_blank" rel="noopener">15-Minuten Kurzcheck buchen</a>
            <a className="cta-secondary" href="#kontakt">Angebot anfordern</a>
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-secondary">
            {DATA.claims.map((c,i)=> <li key={i}>• {c}</li>)}
          </ul>
        </div>
        <div className="relative">
          <img src={DATA.heroImage} alt="Automationsbeispiel ProcessHub" className="rounded-2xl shadow-card w-full h-auto" loading="eager" />
          <a href={DATA.video} className="absolute bottom-4 right-4 badge">Demo 60s</a>
        </div>
      </div>
    </section>
  );
}

function LogosTrust() {
  return (
    <section className="py-8 border-y border-gray-100 bg-gray-50">
      <div className="container-narrow flex flex-wrap items-center justify-center gap-8 opacity-80">
        <img src="https://processhub.com/assets/integration-make-zapier.png" alt="Integrationen" className="h-8 w-auto" loading="lazy" />
        <img src="https://processhub.com/assets/dashboard-kpi.png" alt="KPI" className="h-8 w-auto" loading="lazy" />
        <img src="https://processhub.com/assets/flow-terminbuchung.png" alt="Flow" className="h-8 w-auto" loading="lazy" />
      </div>
    </section>
  );
}

function PainSolution() {
  return (
    <section className="section">
      <div className="container-narrow grid md:grid-cols-2 gap-10">
        <div className="card">
          <h2 className="text-2xl mb-3">Typische Pain Points</h2>
          <ul className="list-disc pl-5 text-secondary space-y-2">
            <li>Manuelle Terminvergabe & Medienbrüche</li>
            <li>No-Shows & unklare Auslastung</li>
            <li>Fehlende Reports & Transparenz</li>
            <li>Einwände: Aufwand, DSGVO, Kosten/Nutzen, Ton/CI</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-2xl mb-3">Die ProcessHub Lösung</h2>
          <ul className="list-disc pl-5 text-secondary space-y-2">
            <li>Self-Service Terminbuchung + Kalender-Sync</li>
            <li>Reminder-Flows (SMS/E-Mail/WA) + Ausfall-Slots</li>
            <li>KPI-Dashboard: Anfragen, Termine, Stornos, Reaktionszeit</li>
            <li>Go-Live in 10–14 Tagen, ohne Systemwechsel</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { t: "Reminder-Flows", d: "Mehrstufige Erinnerungen & Bestätigungen senken No-Shows um 20–30%." },
    { t: "Lead-Erfassung", d: "Schnelle Form-to-Calendar Konvertierung steigert fixe Termine um 15–25%." },
    { t: "Kalender-Sync", d: "Google/Outlook/Apple – konfliktfrei und in Echtzeit." },
    { t: "Dialekt & CI", d: "Texte im passenden Ton – verständlich für Ihre Kund:innen." },
    { t: "KPI-Transparenz", d: "Anfragen, Termine, Stornos, Reaktionszeit – klar im Dashboard." },
    { t: "DSGVO-Sicherheit", d: "AV-Verträge, Datensparsamkeit, EU-Hosting (sofern möglich)." }
  ];
  return (
    <section id="features" className="section bg-gray-50">
      <div className="container-narrow">
        <h2 className="text-3xl mb-8">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it,i)=>(
            <div key={i} className="card hover:shadow-lg transition">
              <h3 className="font-semibold">{it.t}</h3>
              <p className="text-secondary mt-2">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { t: "Planbare Auslastung", d: "Klare Sicht auf freie Slots und Engpässe." },
    { t: "Weniger Telefonate", d: "Kund:innen buchen selbstständig – Team wird entlastet." },
    { t: "Höhere Conversion", d: "Schnelle Reaktion auf Anfragen, weniger Abbrüche." }
  ];
  return (
    <section className="section">
      <div className="container-narrow grid md:grid-cols-3 gap-6">
        {items.map((it,i)=>(
          <div key={i} className="card">
            <h3 className="font-semibold">{it.t}</h3>
            <p className="text-secondary mt-2">{it.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function UseCases() {
  const items = [
    { t:"Friseure & Beauty", d:"Schnitt, Farbe, Kosmetik – Paketlogik, Ressourcen & Räume." },
    { t:"KFZ-Werkstätten", d:"Reifenwechsel-Slots, HU/Pickerl, Ersatzwagen-Koordination." },
    { t:"Physio & Health", d:"Ersttermine mit Fragebogen, Folge-Sessions, Erinnerungen." },
    { t:"Dienstleister allgemein", d:"Vor-Ort-Termine, Angebote, Nachfass-Automationen." }
  ];
  return (
    <section id="usecases" className="section bg-gray-50">
      <div className="container-narrow">
        <h2 className="text-3xl mb-8">Use-Cases</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it,i)=>(
            <div key={i} className="card">
              <h3 className="font-semibold">{it.t}</h3>
              <p className="text-secondary mt-2">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  const steps = [
    { n: "1", t: "Kurzcheck (15 Min)", d: "Zielbild & Ist-Prozess verstehen." },
    { n: "2", t: "Blueprint", d: "Flows, Kanäle, Rollen, DSGVO grob prüfen." },
    { n: "3", t: "Setup", d: "Kalender-Sync, Formulare, Reminder, KPIs." },
    { n: "4", t: "Testlauf", d: "Dry-Run & Feinschliff der Texte (Dialekt/CI)." },
    { n: "5", t: "Go-Live", d: "Team-Onboarding, Monitoring, Übergabe." }
  ];
  return (
    <section className="section">
      <div className="container-narrow">
        <h2 className="text-3xl mb-8">In 10–14 Tagen live</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((s,i)=>(
            <div key={i} className="card text-center">
              <div className="text-primary text-2xl font-bold">{s.n}</div>
              <div className="font-semibold mt-1">{s.t}</div>
              <div className="text-secondary mt-1">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KpiProof() {
  return (
    <section className="section bg-gray-50">
      <div className="container-narrow grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl">Transparente KPIs</h2>
          <p className="text-secondary mt-2">
            Dashboard mit Anfragen, Terminen, Stornos & Reaktionszeiten – wöchentlich & monatlich. Exportierbar für Reporting.
          </p>
          <ul className="mt-4 text-secondary space-y-2">
            <li>• –20–30% No-Shows durch Reminder-Flows</li>
            <li>• +15–25% mehr fixe Termine durch schnelle Lead-Erfassung</li>
          </ul>
        </div>
        <div>
          <img src="https://processhub.com/assets/dashboard-kpi.png" alt="KPI Dashboard" className="rounded-2xl shadow-card w-full h-auto" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = DATA.pricing;
  return (
    <section id="pricing" className="section">
      <div className="container-narrow">
        <h2 className="text-3xl mb-8">Preise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p,i)=>(
            <div key={i} className={clsx("card flex flex-col", p.popular && "ring-2 ring-primary")}>
              {p.popular && <span className="self-start badge">Meist gewählt</span>}
              <h3 className="text-xl mt-2">{p.name}</h3>
              <p className="text-2xl mt-1">{p.price}</p>
              <ul className="mt-4 text-secondary space-y-2">
                {p.features.map((f,idx)=><li key={idx}>• {f}</li>)}
              </ul>
              <div className="mt-6">
                <a className="cta w-full" href={i===1 ? "https://calendly.com/processhub/15min-kurzcheck" : "#kontakt"}>
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container-narrow">
        <h2 className="text-3xl mb-8">FAQ</h2>
        <FAQ />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="section">
      <div className="container-narrow grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl">Kontakt & Lead</h2>
          <p className="text-secondary mt-2">Senden Sie uns Ihr Zielbild – wir melden uns kurzfristig mit einem Vorschlag oder buchen Sie direkt den 15-Minuten Kurzcheck.</p>
          <div className="mt-4 flex gap-3">
            <a className="cta" href="https://calendly.com/processhub/15min-kurzcheck" target="_blank" rel="noopener">Kurzcheck buchen</a>
            <a className="cta-secondary" href="#pricing">Pakete ansehen</a>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2">
            {DATA.gallery.map((src,i)=>(
              <img key={i} src={src} alt={`Beispiel ${i+1}`} loading="lazy" className="rounded-xl border" />
            ))}
          </div>
        </div>
        <LeadForm webhook={DATA.webhook} />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-gray-100">
      <div className="container-narrow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-sm text-secondary">
          © {new Date().getFullYear()} ProcessHub. Alle Rechte vorbehalten.
        </div>
        <div className="flex gap-4 text-sm">
          <a href="https://processhub.com/impressum" target="_blank" rel="noopener">Impressum</a>
          <a href="https://processhub.com/datenschutz" target="_blank" rel="noopener">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}

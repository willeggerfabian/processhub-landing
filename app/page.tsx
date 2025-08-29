"use client";
import Badge from "@/components/Badge";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import clsx from "clsx";

const DATA = {
  brand: {
    name: "ProcessHub",
    logoMark: "/assets/brand/processhub-icon.svg",
    logoFull: "/assets/brand/processhub-logo.svg",
    banner: "/assets/brand/processhub-banner.jpg"
  },
  domain: "processhub.at",
  calendly: "https://calendly.com/processhub/15min-kurzcheck",
  webhook: "https://hooks.zapier.com/hooks/catch/XXXXXXX/XXXXXXX", // <- dein Hook
  hero: {
    title: "Digitalisierung, Automation & Prozessoptimierung für KMU",
    sub: "In 10–14 Tagen zu messbaren Ergebnissen – ohne Systemwechsel, DSGVO-konform.",
    ctaPrimary: "15-Minuten Kurzcheck buchen",
    ctaSecondary: "Angebot anfordern",
    claims: [
      "Pilot-Pakete für Friseure & Restaurants ab 299 €",
      "Go-Live in 10–14 Tagen",
      "Messbar weniger No-Shows & mehr Auslastung",
      "Transparente KPIs: Termine, Reservierungen, Reichweite",
      "DSGVO-konforme Implementierung"
    ]
  },
  proof: ["n8n","Make","Zapier","Google Workspace","Microsoft 365","Notion","Calendly","Cal.com"],
  pricing: [
    { name:"Friseur – Pilot", setup:299, month:0, features:[
      "Online-Terminbuchung inkl. Reminder",
      "Google My Business Optimierung",
      "Social Media Grundsetup (3 Templates)",
      "DSGVO-Doku (Impressum/Datenschutz)"], cta:"Pilot starten" },
    { name:"Friseur – Retainer", setup:0, month:149, features:[
      "Terminbuchungs-System inkl. Warteliste",
      "4 Social Media Posts/Monat",
      "Automatisierte Google-Review-Reminder",
      "Support bis 1h/Monat"], cta:"Retainer buchen" },
    { name:"Friseur – Pro", setup:0, month:249, popular:true, features:[
      "Alle Leistungen aus Retainer",
      "8 Social Media Posts + 4 Story-Pakete",
      "Monatliches Reporting (KPIs)",
      "Quartalsweise Strategie-Call"], cta:"Pro buchen" },
    { name:"Restaurant – Pilot", setup:299, month:0, features:[
      "Online-Reservierungssystem inkl. Tischmanagement",
      "Google Maps Profil-Optimierung",
      "Speisekarte Online-Einbindung",
      "3 Social Media Templates"], cta:"Pilot starten" },
    { name:"Restaurant – Retainer", setup:0, month:149, features:[
      "Reservierungsbestätigung + Reminder",
      "4 Social Media Posts/Monat",
      "Automatisierte Gäste-Feedbacks",
      "Support bis 1h/Monat"], cta:"Retainer buchen" },
    { name:"Restaurant – Pro", setup:0, month:249, features:[
      "Alle Leistungen aus Retainer",
      "8 Social Media Posts + 4 Story-Pakete",
      "Monatliches Reporting (KPIs)",
      "Quartalsweise Strategie-Call"], cta:"Pro buchen" },
  ]
};

export default function Page(){
  return (
    <main>
      <Nav />
      <Hero />
      <Logos />
      <LeistungenIntro />
      <Pricing />
      <FAQSection />
      <Kontakt />
      <Footer />
    </main>
  );
}

function Nav(){
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="container-narrow flex items-center justify-between h-14">
        <a href="/" className="flex items-center gap-3">
          <img src={DATA.brand.logoMark} alt="ProcessHub" width={28} height={28}/>
          <span className="font-semibold">ProcessHub</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/leistungen" className="hover:underline">Leistungen</a>
          <a href="#pricing" className="hover:underline">Pakete</a>
          <a href="#faq" className="hover:underline">FAQ</a>
          <a className="cta" href={DATA.calendly} target="_blank" rel="noopener">{DATA.hero.ctaPrimary}</a>
        </nav>
      </div>
    </header>
  );
}

function Hero(){
  return (
    <section className="section">
      <div className="container-narrow grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Badge>processhub.at • DSGVO-konform</Badge>
          <h1 className="mt-4 text-4xl md:text-5xl leading-tight">{DATA.hero.title}</h1>
          <p className="mt-4 text-lg text-secondary">{DATA.hero.sub}</p>
          <div className="mt-6 flex gap-3">
            <a className="cta" href={DATA.calendly} target="_blank" rel="noopener">{DATA.hero.ctaPrimary}</a>
            <a className="cta-secondary" href="#kontakt">{DATA.hero.ctaSecondary}</a>
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-secondary">
            {DATA.hero.claims.map((c,i)=><li key={i}>• {c}</li>)}
          </ul>
        </div>
        <div>
          <img src={DATA.brand.banner} alt="ProcessHub Banner" className="rounded-2xl shadow-card w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

function Logos(){
  return (
    <section className="py-8 border-y border-gray-100 bg-gray-50">
      <div className="container-narrow flex flex-wrap items-center justify-center gap-8 opacity-80">
        <img src="/assets/brand/processhub-icon.svg" alt="ProcessHub Icon" className="h-8 w-auto"/>
        {DATA.proof.map((p,i)=><span key={i} className="text-sm text-secondary">{p}</span>)}
      </div>
    </section>
  );
}

function LeistungenIntro(){
  const items = [
    { href:"/leistungen/terminautomatisierung", t:"Terminautomatisierung", d:"Self-Service Buchung, Kalender-Sync, Reminder-Flows, Ausfall-Slots, KPI-Dashboard." },
    { href:"/leistungen/workflow-optimierung", t:"Workflow-Optimierung", d:"End-to-End Workflows (Lead→Rechnung), Integrationen, Monitoring & Freigaben." },
    { href:"/leistungen/lead-generierung", t:"Lead-Generierung", d:"to be continued." },
    { href:"/leistungen/finanz-reporting", t:"Automation Finanz-Reporting", d:"to be continued." }
  ];
  return (
    <section className="section bg-gray-50">
      <div className="container-narrow">
        <h2 className="text-3xl mb-8">Leistungen</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map(c=>(
            <a key={c.href} href={c.href} className="card hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{c.t}</h3>
              <p className="text-secondary mt-2">{c.d}</p>
              <div className="mt-3 text-primary">Mehr erfahren →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing(){
  const plans = DATA.pricing;
  return (
    <section id="pricing" className="section">
      <div className="container-narrow">
        <h2 className="text-3xl mb-8">Pakete</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p,i)=>(
            <div key={i} className={clsx("card flex flex-col", p.popular && "ring-2 ring-primary")}>
              {p.popular && <span className="self-start badge">Meist gewählt</span>}
              <h3 className="text-xl mt-2">{p.name}</h3>
              <p className="text-2xl mt-1">{p.setup ? `€ ${p.setup} einmalig` : "€ 0 Setup"} · {p.month ? `€ ${p.month}/Monat` : "monatlich auf Anfrage"}</p>
              <ul className="mt-4 text-secondary space-y-2">{p.features.map((f: string,idx:number)=><li key={idx}>• {f}</li>)}</ul>
              <div className="mt-6">
                <a className="cta w-full" href="#kontakt">{p.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection(){
  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container-narrow">
        <h2 className="text-3xl mb-8">FAQ</h2>
        <FAQ/>
      </div>
    </section>
  );
}

function Kontakt(){
  return (
    <section id="kontakt" className="section">
      <div className="container-narrow grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl">Kontakt & Pilot anfragen</h2>
          <p className="text-secondary mt-2">Sende uns kurz dein Zielbild – oder buche direkt den 15-Minuten Kurzcheck.</p>
          <div className="mt-4 flex gap-3">
            <a className="cta" href={DATA.calendly} target="_blank" rel="noopener">Kurzcheck buchen</a>
            <a className="cta-secondary" href="#pricing">Pakete ansehen</a>
          </div>
        </div>
        <LeadForm webhook={DATA.webhook}/>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer className="py-10 border-t border-gray-100">
      <div className="container-narrow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/assets/brand/processhub-icon.svg" alt="ProcessHub" width={22} height={22}/>
          <span className="text-sm text-secondary">© {new Date().getFullYear()} ProcessHub e.U.</span>
        </div>
        <div className="flex gap-4 text-sm">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="https://www.linkedin.com/company/processhub-at" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://www.instagram.com/processhub.at" target="_blank" rel="noopener">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

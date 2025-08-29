export const metadata = {
  title: "Leistungen – ProcessHub",
  description: "Terminautomatisierung, Workflow-Optimierung, Lead-Generierung, Finanz-Reporting."
};

export default function Leistungen(){
  const cards = [
    { href:"/leistungen/terminautomatisierung", t:"Terminautomatisierung", d:"Self-Service Buchung, Kalender-Sync, Reminder-Flows, Ausfall-Slots, KPI-Dashboard." },
    { href:"/leistungen/workflow-optimierung", t:"Workflow-Optimierung", d:"Lead→Angebot→Auftrag→Rechnung, Integrationen, Monitoring & Freigaben." },
    { href:"/leistungen/lead-generierung", t:"Lead-Generierung", d:"to be continued." },
    { href:"/leistungen/finanz-reporting", t:"Automation Finanz-Reporting", d:"to be continued." }
  ];
  return (
    <main className="section">
      <div className="container-narrow">
        <h1 className="text-4xl font-semibold">Leistungen</h1>
        <p className="text-secondary mt-2">Modular. DSGVO-konform. In 10–14 Tagen live.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {cards.map(c=>(
            <a key={c.href} href={c.href} className="card hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">{c.t}</h2>
              <p className="text-secondary mt-2">{c.d}</p>
              <div className="mt-3 text-primary">Mehr erfahren →</div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

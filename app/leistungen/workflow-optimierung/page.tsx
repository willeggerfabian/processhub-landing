export const metadata = {
  title: "Workflow-Optimierung – ProcessHub",
  description: "Medienbrüche eliminieren, Backoffice automatisieren – n8n/Make/Zapier, API-first."
};

export default function Page(){
  return (
    <main className="section">
      <div className="container-narrow">
        <a href="/leistungen" className="text-primary">← Leistungen</a>
        <h1 className="text-4xl font-semibold mt-2">Workflow-Optimierung</h1>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="card">
            <h2 className="font-semibold">Kernprozesse</h2>
            <ul className="list-disc pl-5 text-secondary mt-2 space-y-1">
              <li>Lead → Angebot → Auftrag → Rechnung</li>
              <li>Datenabgleich CRM/POS/Sheets</li>
              <li>Dokugenerierung & E-Signatur</li>
              <li>Monitoring & Human-in-the-Loop</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="font-semibold">Systeme & Integrationen</h2>
            <ul className="list-disc pl-5 text-secondary mt-2 space-y-1">
              <li>n8n, Make, Zapier</li>
              <li>REST/Webhooks, Notion</li>
              <li>Google Workspace, Microsoft 365</li>
            </ul>
            <p className="text-secondary mt-2">DSGVO: AVV, EU-Hosting möglich.</p>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <a className="cta" href="/#kontakt">Blueprint anfordern</a>
          <a className="cta-secondary" href="https://calendly.com/processhub/15min-kurzcheck" target="_blank" rel="noopener">Kurzcheck buchen</a>
        </div>
      </div>
    </main>
  );
}

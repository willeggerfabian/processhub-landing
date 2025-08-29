export const metadata = {
  title: "Terminautomatisierung – ProcessHub",
  description: "Online-Buchung, Kalender-Sync, Reminder-Flows, Ausfall-Slots und KPI-Dashboard."
};

export default function Page(){
  return (
    <main className="section">
      <div className="container-narrow">
        <a href="/leistungen" className="text-primary">← Leistungen</a>
        <h1 className="text-4xl font-semibold mt-2">Terminautomatisierung</h1>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="card">
            <h2 className="font-semibold">Zielbild & KPIs</h2>
            <ul className="list-disc pl-5 text-secondary mt-2 space-y-1">
              <li>No-Shows ↓ (20–30%)</li>
              <li>Fixe Termine ↑ (15–25%)</li>
              <li>Reaktionszeit ↓</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="font-semibold">Funktionen</h2>
            <ul className="list-disc pl-5 text-secondary mt-2 space-y-1">
              <li>Online-Buchung (Widget/Formular)</li>
              <li>Kalender-Sync (Google/Outlook)</li>
              <li>Reminder per SMS/E-Mail/WhatsApp</li>
              <li>Ausfall-Slot-Logik</li>
              <li>KPI-Dashboard (Woche/Monat)</li>
            </ul>
          </div>
        </div>

        <div className="card mt-6">
          <h2 className="font-semibold">Branchenspezifische Flows</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-3 text-secondary">
            <div>
              <div className="font-medium">Friseur/Beauty</div>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Paketlogik (Schnitt/Farbe)</li>
                <li>Stylist:innen-Auswahl</li>
                <li>No-Show-Policy</li>
              </ul>
            </div>
            <div>
              <div className="font-medium">KFZ</div>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Servicearten (Pickerl/Reifenwechsel)</li>
                <li>Slot-Logik je Service</li>
                <li>Warteliste bei Storno</li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Physio/Health</div>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Ersttermin-Intake</li>
                <li>Therapeut:innen-Kalender</li>
                <li>DSGVO-Einwilligung</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card mt-6">
          <h2 className="font-semibold">Beispiele</h2>
          <p className="text-secondary mt-2">
            Friseur reduziert No-Shows um 20 %, KFZ-Werkstatt füllt Stornos in 3 Std. nach,
            Physio-Praxis halbiert Wartezeiten.
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          <a className="cta" href="https://calendly.com/processhub/15min-kurzcheck" target="_blank" rel="noopener">Kurzcheck buchen</a>
          <a className="cta-secondary" href="/#pricing">Pakete ansehen</a>
        </div>
      </div>
    </main>
  );
}

"use client";
import { useState } from "react";

const items = [
  {
    q: "Brauchen wir einen Systemwechsel?",
    a: "Nein. Wir integrieren Ihre bestehende Umgebung (Google/Outlook Kalender, vorhandene CRM/Tools) und automatisieren die Terminvergabe, Erinnerungen und KPI-Erfassung ohne Wechsel."
  },
  {
    q: "Wie reduzieren Sie No-Shows?",
    a: "Mehrstufige Reminder-Flows per SMS/E-Mail/WhatsApp, einfache Bestätigung/Absage, automatische Nachfasslogik und Ausfall-Slots – so sinken No-Shows typischerweise um 20–30%."
  },
  {
    q: "Sind wir DSGVO-konform?",
    a: "Ja. Auftragsverarbeitungsverträge, Datensparsamkeit, minimal notwendige Felder, Löschkonzepte sowie Hosting in der EU, sofern technisch möglich."
  },
  {
    q: "Wie schnell sind wir live?",
    a: "In 10–14 Tagen inkl. Setup, Texte im passenden Dialekt/CI, Testlauf und Go-Live."
  },
  {
    q: "Was kostet das?",
    a: "Transparente Pakete (Setup + Monatsbetreuung). Der Mehrwert entsteht durch mehr fixe Termine, weniger No-Shows und klare KPIs."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <div key={i} className="card">
          <button
            className="w-full text-left flex items-center justify-between gap-4"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open===i}
            aria-controls={`faq-${i}`}
          >
            <span className="font-medium">{it.q}</span>
            <span className="text-primary">{open===i ? "–" : "+"}</span>
          </button>
          {open===i && (
            <div id={`faq-${i}`} className="mt-3 text-secondary">{it.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
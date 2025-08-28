"use client";
import { useState } from "react";

type Props = {
  webhook: string;
};

export default function LeadForm({ webhook }: Props) {
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    // Simple client-side validation
    if (!data.name || !data.email || !data.einwilligung) {
      alert("Bitte Name, E-Mail und Einwilligung ausfüllen.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "processhub-landing", ...data })
      });
      if (!res.ok) throw new Error("Network");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card" aria-label="Kontaktformular Lead">
      <div className="grid md:grid-cols-2 gap-4">
        <Input name="name" label="Name*" required />
        <Input name="email" label="E-Mail*" type="email" required />
        <Input name="telefon" label="Telefon" />
        <Input name="unternehmen" label="Unternehmen" />
        <Input name="branche" label="Branche" />
        <Input name="standort" label="Standort" />
        <Input name="bevorzugter_kanal" label="Bevorzugter Kanal (Tel/WhatsApp/E-Mail)" />
        <Input name="anzahl_standorte" label="Anzahl Standorte" type="number" min={1} />
        <Input name="aktueller_kalender" label="Aktueller Kalender (Google/Outlook/andere)" />
        <Input name="bevorzugte_zeit" label="Bevorzugte Zeit" />
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1" htmlFor="nachricht">Nachricht</label>
          <textarea id="nachricht" name="nachricht" className="w-full rounded-xl border border-gray-300 p-3" rows={4} placeholder="Kurz Ihr Ziel & Ist-Zustand…" />
        </div>
        <div className="md:col-span-2 flex items-start gap-2">
          <input id="einwilligung" name="einwilligung" type="checkbox" className="mt-1" required />
          <label htmlFor="einwilligung" className="text-sm">
            Ich willige in die Verarbeitung meiner Daten zum Zweck der Kontaktaufnahme ein. Details in der&nbsp;
            <a className="underline" href="https://processhub.com/datenschutz" target="_blank" rel="noopener">Datenschutzerklärung</a>.
          </label>
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <button type="submit" className="cta" disabled={status==="loading"}>
          {status==="loading" ? "Sende…" : "Anfrage senden"}
        </button>
        <a href="https://calendly.com/processhub/15min-kurzcheck" target="_blank" rel="noopener" className="cta-secondary">
          15-Minuten Kurzcheck buchen
        </a>
      </div>

      {status==="ok" && <p role="status" className="mt-4 text-accent">Danke! Wir melden uns kurzfristig. (Formular erfolgreich übermittelt)</p>}
      {status==="error" && <p role="alert" className="mt-4 text-red-600">Übermittlung fehlgeschlagen. Bitte später erneut versuchen oder per E-Mail kontaktieren.</p>}
    </form>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  const id = rest.id || String(rest.name);
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1">{label}</label>
      <input id={id} {...rest} className="w-full rounded-xl border border-gray-300 p-3" />
    </div>
  );
}
"use client";
import { useEffect, useState } from "react";
import { CONSENT_KEY, setConsent } from "@/lib/consent";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const has = localStorage.getItem(CONSENT_KEY);
    if (!has) setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="container-narrow">
        <div className="card flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="font-semibold">Cookies & Datenschutz</p>
            <p className="text-sm text-secondary">
              Wir verwenden Cookies für Statistik (GA4) und Marketing (Meta Pixel) – nur nach Ihrer Einwilligung. Details in unserer&nbsp;
              <a className="underline" href="https://processhub.com/datenschutz" target="_blank" rel="noopener">Datenschutzerklärung</a>.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => { setConsent({ analytics: false, marketing: false }); setOpen(false); }}
              className="cta-secondary"
            >
              Nur notwendige
            </button>
            <button
              onClick={() => { setConsent({ analytics: true, marketing: true }); setOpen(false); }}
              className="cta"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
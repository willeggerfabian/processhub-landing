# ProcessHub Landing (Next.js + Tailwind)

### 0) Was ist das?
Eine fertige, DSGVO-freundliche Landingpage (Next 14 + Tailwind) mit Lead-Formular (Zapier), Cookiebanner, FAQ, Pricing und Calendly-CTA.

---

## So bekommst du sie live – ohne Programmierkenntnisse

### 1) GitHub anlegen
1. Auf https://github.com anmelden (Account erstellen, falls noch keiner vorhanden).
2. Oben rechts: **+** → **New repository** → Name `processhub-landing` → **Create repository**.

### 2) Dateien hochladen
1. Öffne dein neues Repo → Button **"uploading an existing file"**.
2. Ziehe den gesamten Inhalt dieses Ordners (oder die ZIP entpackt) ins Browserfenster.
3. **Commit changes** klicken.

### 3) Vercel verbinden (Hosting)
1. https://vercel.com → **Continue with GitHub** → Zugriff erlauben.
2. **Add New… → Project** → dein Repo `processhub-landing` auswählen → **Import**.
3. Build-Einstellungen erkennt Vercel automatisch (Framework: Next.js) → **Deploy**.

### 4) Domain verbinden (optional)
- In Vercel: Project → **Domains** → `processhub.com` hinzufügen und DNS-Hinweise befolgen.

### 5) Platzhalter anpassen
- `app/page.tsx`: `webhook` (Zapier), **Calendly-URL**, Bild-URLs falls nötig.
- `app/layout.tsx`: GA4-ID (`gaId`) und Meta-Pixel (`pixelId`).
- Footer: Adresse/UID/Social ergänzen.

### 6) Test
- Cookiebanner: erscheint? Nur notwendige → keine GA/Pixel; Alle akzeptieren → GA/Pixel aktiv.
- Formular: einmal senden → in Zapier prüfen, ob ein Lead ankommt.
- CTAs: Calendly öffnet korrekt.

Fertig 🎉

---

## Dev lokal (optional)
```bash
npm i
npm run dev
# http://localhost:3000
```
export const CONSENT_KEY = "ph_consent";

export type ConsentState = {
  analytics: boolean;
  marketing: boolean;
};

export const getConsent = (): ConsentState | null => {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(CONSENT_KEY);
  return raw ? JSON.parse(raw) as ConsentState : null;
};

export const setConsent = (s: ConsentState) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_KEY, JSON.stringify(s));
};
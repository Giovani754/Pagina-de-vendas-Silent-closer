/* ─────────────────────────────────────────────
   src/analytics/metaPixel.js
   Pixel init + PageView vivem SOMENTE em index.html.
   Este módulo apenas chama window.fbq('track'/'trackCustom').
   ───────────────────────────────────────────── */

function fbqAvailable() {
  return typeof window !== "undefined" && typeof window.fbq === "function";
}

/** Gera eventID único para deduplicação */
export function makeEventId(prefix = "sc") {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

/** Dispara evento padrão (fbq track) */
export function track(eventName, params = {}, options = {}) {
  if (!fbqAvailable()) return false;
  try {
    window.fbq("track", eventName, params, options);
    return true;
  } catch {
    return false;
  }
}

/** Dispara evento custom (fbq trackCustom) */
export function trackCustom(eventName, params = {}, options = {}) {
  if (!fbqAvailable()) return false;
  try {
    window.fbq("trackCustom", eventName, params, options);
    return true;
  } catch {
    return false;
  }
}

/** ViewContent — evento padrão com eventID automático */
export function trackViewContent(params = {}) {
  const eventID = makeEventId("vc");
  return track("ViewContent", params, { eventID });
}

/** InitiateCheckout — evento padrão com eventID automático */
export function trackInitiateCheckout(params = {}) {
  const eventID = makeEventId("ic");
  return track("InitiateCheckout", params, { eventID });
}

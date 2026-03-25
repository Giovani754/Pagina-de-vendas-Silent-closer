/* ─────────────────────────────────────────────
   src/lib/meta.js  —  Meta Pixel helpers
   Pixel init + PageView estão SOMENTE em index.html.
   Este módulo NUNCA injeta <script> nem chama fbq('init').
   ───────────────────────────────────────────── */

export const PIXEL_ID = "735901399460413";

/** Chama fbq somente se estiver disponível */
function fbqSafe(...args) {
  if (typeof window === "undefined") return false;
  if (typeof window.fbq !== "function") return false;
  window.fbq(...args);
  if (window.__SC_DEBUG__) {
    console.debug("[SC Pixel]", ...args);
  }
  return true;
}

/** Gera eventID único para deduplicação server-side */
function newEventId(prefix = "sc") {
  return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export function trackViewContent(params = {}) {
  const eventID = newEventId("vc");
  const sent = fbqSafe("track", "ViewContent", { ...params }, { eventID });
  return sent ? eventID : null;
}

export function trackInitiateCheckout(params = {}) {
  const eventID = newEventId("ic");
  const sent = fbqSafe("track", "InitiateCheckout", { ...params }, { eventID });
  return sent ? eventID : null;
}

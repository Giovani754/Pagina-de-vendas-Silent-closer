export const PIXEL_ID = "735901399460413";

export function fbqSafe(...args) {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq(...args);
}

export function newEventId(prefix = "evt") {
  return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export function trackViewContent(params = {}) {
  const eventID = newEventId("vc");
  fbqSafe("track", "ViewContent", { ...params }, { eventID });
  return eventID;
}

export function trackInitiateCheckout(params = {}) {
  const eventID = newEventId("ic");
  fbqSafe("track", "InitiateCheckout", { ...params }, { eventID });
  return eventID;
}

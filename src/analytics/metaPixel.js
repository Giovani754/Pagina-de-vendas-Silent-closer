export function fbqAvailable() {
  return typeof window !== "undefined" && typeof window.fbq === "function";
}
export function makeEventId(prefix = "sc") {
  return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}
export function track(eventName, params = {}, options = {}) {
  if (!fbqAvailable()) return false;
  try {
    window.fbq("track", eventName, params, options);
    return true;
  } catch {
    return false;
  }
}
export function trackCustom(eventName, params = {}, options = {}) {
  if (!fbqAvailable()) return false;
  try {
    window.fbq("trackCustom", eventName, params, options);
    return true;
  } catch {
    return false;
  }
}

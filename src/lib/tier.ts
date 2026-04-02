const FREE_DAILY_LIMIT = 3;

export type Tier = "free" | "pro";

export function getTier(): Tier {
  // For v1: always free. Stripe integration will check subscription status.
  return "free";
}

export function canGenerate(): boolean {
  if (typeof window === "undefined") return true;

  const tier = getTier();
  if (tier === "pro") return true;

  const today = new Date().toISOString().slice(0, 10);
  const key = `shiftsbar_usage_${today}`;
  const count = parseInt(sessionStorage.getItem(key) || "0", 10);

  return count < FREE_DAILY_LIMIT;
}

export function recordUsage(): void {
  if (typeof window === "undefined") return;

  const today = new Date().toISOString().slice(0, 10);
  const key = `shiftsbar_usage_${today}`;
  const count = parseInt(sessionStorage.getItem(key) || "0", 10);

  sessionStorage.setItem(key, String(count + 1));
}

export function getRemainingReports(): number {
  if (typeof window === "undefined") return FREE_DAILY_LIMIT;

  const tier = getTier();
  if (tier === "pro") return Infinity;

  const today = new Date().toISOString().slice(0, 10);
  const key = `shiftsbar_usage_${today}`;
  const count = parseInt(sessionStorage.getItem(key) || "0", 10);

  return Math.max(0, FREE_DAILY_LIMIT - count);
}

export function formatDate(date: Date): string {
  // publishDate frontmatter values are bare dates (e.g. 2026-09-14), which
  // Astro/YAML parses as UTC midnight. Without pinning the timezone here,
  // rendering on a server west of UTC (e.g. America/New_York) rolls that
  // back to the previous calendar day — every article showing "one day
  // earlier" than its actual frontmatter date.
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export function estimateReadingTime(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

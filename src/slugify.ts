export function slugify(text: string): string {
  const trimmed = text.trim().toLowerCase();
  const cleaned = trimmed.replace(/[^a-z0-9\s-]/g, "");
  return cleaned.replace(/[\s-]+/g, (match) => "-".repeat(match.length));
}

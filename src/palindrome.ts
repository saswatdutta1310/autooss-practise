export function isPalindrome(text: string): boolean {
  const trimmed = text.trim();
  const reversed = trimmed.split("").reverse().join("");
  return trimmed === reversed;
}

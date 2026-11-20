import { describe, it, expect } from "vitest";
import { isPalindrome } from "../src/palindrome.js";

describe("isPalindrome", () => {
  it("recognizes a simple palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("recognizes complex palindrome with punctuation and mixed casing", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });
});

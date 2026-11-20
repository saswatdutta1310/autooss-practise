import { describe, it, expect } from "vitest";
import { slugify } from "../src/slugify.js";

describe("slugify", () => {
  it("converts simple text to slug", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("handles multiple spaces between words", () => {
    expect(slugify("Hello   World")).toBe("hello-world");
  });
});

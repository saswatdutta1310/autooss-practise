import { describe, it, expect } from "vitest";
import { chunk } from "../src/chunk.js";

describe("chunk", () => {
  it("chunks arrays evenly divisible by chunk size", () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });

  it("chunks single element groups when size is 1", () => {
    expect(chunk(["a", "b", "c"], 1)).toEqual([["a"], ["b"], ["c"]]);
  });
});

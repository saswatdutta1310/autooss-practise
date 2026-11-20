import { describe, it, expect } from "vitest";
import { average } from "../src/average.js";

describe("average", () => {
  it("calculates the average of positive numbers", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });

  it("calculates the average including negative numbers", () => {
    expect(average([-10, 10, 20])).toBe(( -10 + 10 + 20 ) / 3);
  });
});

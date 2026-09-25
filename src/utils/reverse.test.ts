import { describe, expect, test } from "vitest";
import { reverseString } from "./reverse";

describe("reverseString", () => {
  test("перевертає рядок", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("перевертає український рядок", () => {
    expect(reverseString("привіт")).toBe("тівирп");
  });

  test("працює з порожнім рядком", () => {
    expect(reverseString("")).toBe("");
  });
});

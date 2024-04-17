import { describe, test, expect } from "vitest";
import { capitalise } from "./strings";

describe("capitalise", () => {
  test("capitalizes the first letter of a string", () => {
    const str = "hello";
    const result = capitalise(str);
    expect(result).toBe("Hello");
  });

  test("capitalizing empty string", () => {
    const str = "";
    const result = capitalise(str);
    expect(result).toBe("");
  });
});

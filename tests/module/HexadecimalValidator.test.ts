import { describe, it, expect, test } from "vitest";
import HexadecimalValidator from "../../src/HexadecimalValidator";

describe("Validate a hex code to standared format", () => {
  it("Should return 2 digit code to each range ", () => {
    expect(HexadecimalValidator("7654654")).toHaveLength(7);
  });
});

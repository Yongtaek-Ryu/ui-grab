import { describe, expect, it } from "vitest";
import { getPackagesToInstall } from "../src/utils/install.js";

describe("getPackagesToInstall", () => {
  it("should return ui-grab when includeUiGrab is true", () => {
    const packages = getPackagesToInstall(true);

    expect(packages).toEqual(["ui-grab"]);
  });

  it("should return empty array when includeUiGrab is false", () => {
    const packages = getPackagesToInstall(false);

    expect(packages).toEqual([]);
  });
});

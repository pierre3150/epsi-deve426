import { getProductTitle } from "../functions/getProductTitle.js";
import { expect, test, vi } from "vitest";

test("stubGlobal mock getProductTitle", async () => {
  vi.stubGlobal("fetch", async () => {
    return {
      json: async () => ({
        title: "Market",
      }),
    };
  });
  const response = await getProductTitle();
  expect(response).toBe("Market");

  vi.restoreAllMocks();
});

test("throws error when fetch fails", async () => {
  vi.stubGlobal("fetch", async () => {
    throw new Error("API down");
  });
  await expect(getProductTitle(1)).rejects.toThrow("Failed to fetch product");
});
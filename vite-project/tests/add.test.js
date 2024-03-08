import { add } from "../functions/add.js";
import { expect, test } from "vitest";

test("add two number", () => {
  expect(add(5, 1)).toBe(6);
});

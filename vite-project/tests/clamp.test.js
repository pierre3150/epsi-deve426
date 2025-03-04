import {clamp} from "../functions/clamp.js";
import {expect, test} from "vitest";

test.each([
    [-10, -5, 5, -5],
    [10, -5, 5, 5],
    [0, -5, 5, 0],
    [5, -5, 5, 5],
    [-5, -5, 5, -5],
    [6, -5, 5, 5],
    [-6, -5, 5, -5],
    [5.5, -5, 5, 5],
    [-5.5, -5, 5, -5],
])("clamp(%d, %d, %d) should return %d", (number, lower, upper, expected) => {
    expect(clamp(number, lower, upper)).toBe(expected);
});
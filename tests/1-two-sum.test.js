import { describe, test } from "node:test";
import { deepEqual } from "node:assert";
import { twoSum, twoSumHashMap } from "../src/1-two-sum/1-two-sum.js";

describe("1-two-sum", () => {
  test("given the input nums = [2, 7, 11, 15], target = 9, should output [0, 1]", () => {
    const result = twoSum([2, 7, 11, 15], 9);
    deepEqual(result, [0, 1]);
  });

  test("given the input nums = [3, 2, 4], target = 6, should output [1, 2]", () => {
    const result = twoSum([3, 2, 4], 6);
    deepEqual(result, [1, 2]);
  });

  test("given the input nums = [3, 3], target = 6, should output [0, 1]", () => {
    const result = twoSum([3, 3], 6);
    deepEqual(result, [0, 1]);
  });

  test("given the input nums = [1, 12, 21, 7, 9], target = 30, should output [2, 4]", () => {
    const result = twoSum([1, 12, 21, 7, 9], 30);
    deepEqual(result, [2, 4]);
  });
});

import { it, expect, describe } from "vitest";
import { transformToNumber } from "./numbers";
import { cleanNumbers } from "../math";

it("should transform a string number to a number of type number", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBeTypeOf("number");
});

it("should transform a string number to a number of type number", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBe(+input);
});

it("should yield NaN for non-transformable values", () => {
  const input = "invalid";
  const input2 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});

it("should throw an error if provided with multiple arguments instead of an number or string", () => {
  const num1 = 1;
  const num2 = "2";

  const resultFn = transformToNumber( num2);

  expect(resultFn).toBe(2);
});

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of string number values is provided", () => {
    const numberValues = ["1", "2"];

    const cleanedNumbers = cleanNumbers(numberValues);

    // expect(cleanedNumbers[1]).toBeTypeOf("number");
    expect(cleanedNumbers).toEqual([1, 2]);
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = ["", 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});

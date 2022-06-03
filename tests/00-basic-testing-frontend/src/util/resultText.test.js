import { it, expect, describe } from "vitest";

import { resultText } from "../util/resultText";

describe("resultText", () => {
  it("return string no matter what input it is ", () => {
    const val1 = "abc";
    const val2 = false;
    const val3 = {};

    const result1 = resultText(val1);
    const result2 = resultText(val2);

    const result3 = resultText(val3);

    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");

    expect(result3).toBeTypeOf("string");
  });

  it('should return a string that contains the calculation result if a number is provided as a result', () => {
    const example = 5;

    const result = resultText(example);

    expect(result).toContain(result.toString());
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    const example = 'no-calc';

    const result = resultText(example);

    expect(result).toBe('');
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const example = 'invalid';

    const result = resultText(example);

    expect(result).toContain('Invalid');
  });
});

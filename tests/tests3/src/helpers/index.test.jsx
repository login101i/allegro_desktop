import { getLetterMatchCount } from "./";

describe("getLetterMatchCount", () => {
	const secretWord = "piorun";
	test("return correct count whten there are no matching words", () => {
		const letterMatchCount = getLetterMatchCount("ketek", secretWord);
		expect(letterMatchCount).toBe(0);
	});
	test("return correct count whten there are  matching words", () => {
		const letterMatchCount = getLetterMatchCount("firma", secretWord);
		expect(letterMatchCount).toBe(2);
	});
	test("return correct count whten there are duplicate letters in matching words", () => {
		const letterMatchCount = getLetterMatchCount("papier", secretWord);
		expect(letterMatchCount).toBe(3);
	});
});

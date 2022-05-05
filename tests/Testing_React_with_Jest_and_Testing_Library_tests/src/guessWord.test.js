import { mount } from "enzyme";

import JottoApp from "./JottoApp";
import { searchByTestAtrr } from "./tests/testUtils";

const setup = (state = {}) => {
	const wrapper = mount(<JottoApp />);

	// add value to input block
	const inputBox = searchByTestAtrr(wrapper, "input-box");
	inputBox.simulate("change", { target: { value: "train" } });

	// simulate click on button
	const submitButton = searchByTestAtrr(wrapper, "submit-button");
	submitButton.simulate("click", { preventDefault() {} });

	return wrapper;
};

describe.skip("no words guessed", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({
			secretWord: "domek",
			success: false,
			guessedWords: []
		});
	});
	test("creates GuessedWords table with one row", () => {
		const guessWordRows = searchByTestAtrr(wrapper, "guessed-word");
		expect(guessWordRows).toHaveLength(1);
	});
});

describe.skip("some words guessed", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({
			secretWord: "domek",
			success: false,
			guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 }]
		});
	});
	test("creates GuessedWords table with two row", () => {
		const guessWordRows = searchByTestAtrr(wrapper, "guessed-word");
		expect(guessWordRows).toHaveLength(2);
	});
});

describe.skip("guess words guessed", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({
			secretWord: "domek",
			success: false,
			guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 }]
		});

		const inputBox = searchByTestAtrr(wrapper, "input-box");
		inputBox.simulate("change", { target: { value: "domek" } });

		const submitButton = searchByTestAtrr(wrapper, "submit-button");
		submitButton.simulate("click", { preventDefault() {} });
	});
	test("creates guessedWords table with three row", () => {
		const guessWordRows = searchByTestAtrr(wrapper, "guessed-word");
		expect(guessWordRows).toHaveLength(3);

		const congratTitle = searchByTestAtrr(wrapper, "congrats-message");
		expect(congratTitle.exist()).toBe(true);
	});

	test("does not display input component contents", () => {
		const inputBox = searchByTestAtrr(wrapper, "input-box");
		expect(inputBox.exists()).toBe(true);

		const submitButton = searchByTestAtrr(wrapper, "submit-button");
		expect(submitButton.exists()).toBe(false);
	});
});

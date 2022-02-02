import { shallow } from "enzyme";

import GuessedWords from "./GuessedWords";
import { searchByTestAtrr, checkProps } from "../tests/testUtils";

const defaultProps = {
	guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<GuessedWords {...setupProps} />);
};

test("render Congrats without error", () => {});

test("does not throw warning with expected props", () => {
	checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({ guessedWords: [] });
	});

	test("renders component without error", () => {
		const component = searchByTestAtrr(wrapper, "component-geussedWords");
		expect(component.length).toBe(1);
	});

	test("renders instructions without error", () => {
		const instructions = searchByTestAtrr(wrapper, "guess-instructions");
		expect(instructions.text().length).not.toBe(0);
	});
});

describe("if there are   words guessed", () => {});

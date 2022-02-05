import React from "react";
import { shallow } from "enzyme";
import { searchByTestAtrr, checkProps } from "../tests/testUtils";

import Input from "./Input";

// to have useState on import

const mockSetCurrentGuess = jest.fn();
jest.mock("react", () => ({
	...jest.requireActual("react"),
	useState: (initialState) => [initialState, mockSetCurrentGuess]
}));

const defaultProps = {
	secretWord: "polka",
	success: false
};

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<Input {...setupProps} />);
};

test("renders component without error", () => {
	const wrapper = setup();
	const component = searchByTestAtrr(wrapper, "component-input");
	expect(component.length).toBe(1);
});

test("does not throw warning with expected props", () => {
	checkProps(Input, defaultProps);
});
describe("render", () => {
	describe("state controlled input field", () => {
		let wrapper;
		let originalUseState;
		beforeEach(() => {
			mockSetCurrentGuess.mockClear();
			originalUseState = React.useState;
			wrapper = setup();
		});

		afterEach(() => {
			React.useState = originalUseState;
		});
		test("state updates with value of input with onChage", () => {
			const inputBox = searchByTestAtrr(wrapper, "input-box");
			const mockEvent = { target: { value: "train" } };
			inputBox.simulate("change", mockEvent);

			expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
		});

		test("currentGuess is called", () => {
			const submitButton = searchByTestAtrr(wrapper, "submit-button");
			submitButton.simulate("click", { preventDefault() {} });
			expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
		});
	});

	describe("success is true", () => {
		let wrapper;
		beforeEach(() => {
			wrapper = setup({success:true});
		});
		test("Input renders without error", () => {
			const component = searchByTestAtrr(wrapper, "component-input");
			expect(component.length).toBe(1);
		});
		test("input box does not show", () => {
			const inputBox = searchByTestAtrr(wrapper, "input-box");
			expect(inputBox.exists()).toBe(false);
		});
		test("submit button  does not show", () => {
			const submitButton = searchByTestAtrr(wrapper, "submit-button");
			expect(submitButton.exists()).toBe(false);
		});
	});

	describe("success is false", () => {
		let wrapper;
		beforeEach(() => {
			wrapper = setup({ success: false });
		});
		test("Input renders without error", () => {
			const component = searchByTestAtrr(wrapper, "component-input");
			expect(component.length).toBe(1);
		});
		test("input box  shows", () => {
			const inputBox = searchByTestAtrr(wrapper, "input-box");
			expect(inputBox.exists()).toBe(true);
		});
		test("submit button shows", () => {
			const submitButton = searchByTestAtrr(wrapper, "submit-button");
			expect(submitButton.exists()).toBe(true);
		});
	});
});

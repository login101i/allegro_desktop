import { shallow } from "enzyme";
import { searchByTestAtrr, checkProps } from "../tests/testUtils";

import Input from "./Input";

const defaultProps = {
	secretWord: "polka"
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

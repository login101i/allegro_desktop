import { shallow } from "enzyme";
import { searchByTestAtrr, checkProps } from "../tests/testUtils";

import Input from "./Input";

const setup = (props = {}) => {
	return shallow(<Input />);
};
const defaultProps = {};

test("renders component without error", () => {
	const wrapper = setup();
	const component = searchByTestAtrr(wrapper, "component-input");
	expect(component.length).toBe(1);
});

test("does not throw warning with expected props", () => {
	checkProps(Input, defaultProps);
});

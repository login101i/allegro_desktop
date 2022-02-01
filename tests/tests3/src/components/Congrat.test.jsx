import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import Congrats from "./Congrats";
import { searchByTestAtrr, checkProps } from "../tests/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: true };

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<Congrats {...setupProps} />);
};

// cr
// even if there is no prop the test passes?
test("render Congrats without error", () => {
	const wrapper = setup({ success: false });
	const appComponent = searchByTestAtrr(wrapper, "component-congrats");
	expect(appComponent.length).toBe(1);
});

test("renders no text when 'sucess' prop is false", () => {
	const wrapper = setup({ success: false });
	const appComponent = searchByTestAtrr(wrapper, "component-congrats");
	expect(appComponent.text()).toBe("");
});

test("renders no empty congrats when 'success' prop is true", () => {
	const wrapper = setup({ success: true });
	const appComponent = searchByTestAtrr(wrapper, "component-congrats");
	expect(appComponent.text().length).not.toBe(0);
});

test("does not trow warning with expected props", () => {
	const expectedProps = { success: false };
	checkProps(Congrats, expectedProps);
});

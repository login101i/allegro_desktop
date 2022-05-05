import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function ot create a ShallowWrapper for the App Component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
	return shallow(<App />);
};

// why I cannot namt it "findByTestAtribute"? There is an error
const searchByTestAtrr = (wrapper, val) => {
	return wrapper.find(`[data-test="${val}"]`);
};
test("renders without crashing", () => {
	const wrapper = setup();
	const appComponent = searchByTestAtrr(wrapper, "component-app");
	expect(appComponent.length).toBe(1);
});

test("renders counter title", () => {
	const wrapper = setup();
	const counterTitle = searchByTestAtrr(wrapper, "counter-title");
	expect(counterTitle.length).toBe(1);
});

test("renders increment button", () => {
	const wrapper = setup();
	const button = searchByTestAtrr(wrapper, "increment-button");
	expect(button.length).toBe(1);
});

test("renders properly  counter display", () => {
	const wrapper = setup();
	const counterDisplay = searchByTestAtrr(wrapper, "counter-display");
	expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
	const wrapper = setup();
	const count = searchByTestAtrr(wrapper, "count").text();
	expect(count).toBe("0");
});

test("clicking button increments counter", () => {
	const wrapper = setup();
	const button = searchByTestAtrr(wrapper, "increment-button");
	button.simulate("click");
	const count = searchByTestAtrr(wrapper, "count").text();
	expect(count).toBe("1");
});
test("clicking button decrement counter", () => {
	const wrapper = setup();
	const button = searchByTestAtrr(wrapper, "decrement-button");
	button.simulate("click");
	const count = searchByTestAtrr(wrapper, "count").text();
	expect(count).toBe("0");
});

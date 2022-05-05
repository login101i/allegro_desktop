import { shallow } from "enzyme";
import { searchByTestAtrr } from "./tests/testUtils";

import JottoApp from "./JottoApp";

const setup = () => {
	return shallow(<JottoApp />);
};

test("renders without error", () => {
	const wrapper = setup();
    const appComponent = searchByTestAtrr(wrapper, "component-jotto");
    expect(appComponent).toHaveLength(1)
});

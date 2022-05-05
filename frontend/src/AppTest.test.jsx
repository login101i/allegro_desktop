import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


import { AppTest } from "./AppTest";

test("should render a div element", () => {
	render(<AppTest />);
	const divElement = screen.getByText(/AppTest/i);
	expect(divElement).toBeInTheDocument();
});

test("should also render a div element one more", () => {
	render(<AppTest />);
	const divElement = screen.getByText(/AppTest/i);
	expect(divElement.textContent).toBe("AppTest");
});

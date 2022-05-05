import { render, screen } from "@testing-library/react";
import React from "react";

import { ProductDetails } from "./ProductDetails";

test("should render a div element", () => {
	render(<ProductDetails />);
	const divElement = screen.getByText(/hello test/i);
	expect(divElement).toBeInTheDocumnet();
});



import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
	// const { getByTestId } = render(<TitleComponent />);
	const component = render(<TitleComponent />);
	getByTestId = component.getByTestId;
});

test("header renders with correct text", () => {
	const headerEl = getByTestId("header");
	expect(headerEl.textContent).toBe("My Counter");
});

test("counter initally start with tex of 0", () => {
	const counterEl = getByTestId("counter");
	expect(counter.textContent).toBe("0");
});

// this runs in react by default
afterEach(() => {
	cleanup();
});

afterAll(() => {
	cleanup();
});

it("should show title element", () => {
	render(<TitleComponent />);
	const titleElement = screen.getByText(/Counter/i);
	expect(titleElement).toBeInTheDocument();
});


// ________________________________________

test("should render a button ", () => {
	render(<App />);
	const colorButton = screen.getByRole("button", { name: "change to blue" });
	expect(colorButton).toHaveStyle({ backgroundColor: "red" });

	fireEvent.click(colorButton);
	expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
	expect(colorButotn.textContent).toBe("change to red");
});


test("initial conditions", ()=>{
	render(<App/>);
	const colorButton =screen.getByRole("button", {name: "change to blue"})
	expect(colorButton).toBeEnabled()


	const checkbox=screen.getByRole('checkbox')
	expect(checkbox).not.toBeChecked()

})
// ________________________________________

describe("Header", () => {
	it("should render same text passed into title prop", () => {
		render(<Header title="todo" />);
		const h1Element = screen.getByText(/todo/i);
		//     const h1Element = screen.getByRole("heading");
		//     const h1Element = screen.getByRole("heading", { name: /todo/i });
		//     const h1Element = screen.getByTitle("Header");
		//     const h2Element = screen.getByTestId("header-2");

		// async () => {
		//     const h1Element = await screen.findByText(/todo/i);

		//     const h1Element = screen.queryByText(/dogs/i);
		//  expect(h1Element).not.toBeInTheDocument;

		//     const h1Elements = screen.getAllByText(/todo/i);
		//     expect(h1Elements.length).toBe(1);

		// const h1Elements=screen.getAllByRole("heading")
		// expect(h1Elements.length).tobe(2)

		//  expect(pElement).toBeTruthy();

		// <p data=testid="para"
		//   const pElement = screen.getByTestId("para");

		//   expect(pElement).not.toBeFalsy();

		//   expect(pElement.textContent).toBe("1 task left");

		expect(pElement).toContainHTML("p");

		// const eElement=screen.getByRole("paragraph")
		//   expect(pElement).toHaveTextContent("1 task left");

		expect(pElement).toBeVisible();

		expect(h1Element).toBeInTheDocument();
	});
});

// ----------------------------------------------------------

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
	it("should render input element", () => {
		render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
		const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
		expect(inputElement).toBeInTheDocument();
	});

	it("should be able to type into input", () => {
		render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
		const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
		fireEvent.click(inputElement);
		fireEvent.change(inputElement, {
			target: { value: "Go Grocery Shopping" }
		});
		expect(inputElement.value).toBe("Go Grocery Shopping");
		const buttonElement = screen.getByRole("button", { name: /Add/i });
		fireEvent.click(buttonElement);

		expect(mockedSetTodo).toBeCalled();
	});
});

// Integration Tests ------------------------------

it("should be able to type into input", () => {
	render(<MockTodo />);

	const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
	const buttonElement = screen.getByRole("button", { name: /Add/i });

	fireEvent.change(inputElement, { target: { value: task } });
	fireEvent.click(buttonElement);

	const divElement = screen.getByText(/Go Grocery Shopping/i);
	expect(divElement).toBeInTheDocument();
});

const MockTodo = () => {
	return (
		<BrowserRouter>
			<Todo />
		</BrowserRouter>
	);
};

const addTask = (tasks) => {
	const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
	const buttonElement = screen.getByRole("button", { name: /Add/i });
	tasks.forEach((task) => {
		fireEvent.change(inputElement, { target: { value: task } });
		fireEvent.click(buttonElement);
	});
};

it("should render multiple items", () => {
	render(<MockTodo />);
	addTask([
		"Go Grocery Shopping",
		"Go Grocery Shopping",
		"Go Grocery Shopping"
	]);
	const divElements = screen.queryAllByText(/Go Grocery Shopping/i);
	const divElements = screen.getAllByText(/Go Grocery Shopping/i);

	expect(divElements.length).toBe(3);
});

it("task should not have complete class when initally rendered", () => {
	render(<MockTodo />);
	addTask(["Go Grocery Shopping"]);
	const divElement = screen.getByText(/Go Grocery Shopping/i);
	expect(divElement).not.toHaveClass("todo-item-active");
});

it("task should have complete class when clicked", () => {
	render(<MockTodo />);
	addTask(["Go Grocery Shopping"]);
	const divElement = screen.getByText(/Go Grocery Shopping/i);
	fireEvent.click(divElement);
	expect(divElement).toHaveClass("todo-item-active");
});

describe("FollowersList", () => {
	it("should fetch and render input element", async () => {
		render(<MockFollowersList />);
		const followerDivElement = await screen.findByTestId(`follower-item-0`);
		expect(followerDivElement).toBeInTheDocument();
	});
});

// React by default reset mock every single time
// go to nodemodules /react-scripts/scripts/utils/create-jest-config  line 69 resetMocks: false, reset npm test

// Hooks : put them inside describe block
beforeEach(() => {
	// console.log("RUNS BEFORE EACH TEST")
	jest.mock("../../../__mocks__/axios");
});

// beforeAll(() => {
//     console.log("RUNS ONCE BEFORE ALL TESTS")
// })

// afterEach(() => {
//     console.log("RUNS AFTER EACH TEST")
// })

// afterAll(() => {
//     console.log("RUNS ONCE AFTER ALL TESTS")
// })

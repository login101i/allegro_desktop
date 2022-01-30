import { useState } from "react";

import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [error, setError] = useState(false);
	console.log(count);
	console.log(error);

	const message = <span>You can not decrement below zero.</span>;

	function handleIncrement() {
		if (count >= 0) {
			setCount(count + 1);
			setError(false);
		}
	}

	function handleDecrement() {
		if (count <= 0) setError(true);
		else {
			setCount(count - 1);
		}
	}

	return (
		<div className="App" data-test="component-app">
			<h1 data-test="counter-title">The counter display</h1>
			<button data-test="decrement-button" onClick={handleDecrement}>
				Decrement
			</button>
			<button data-test="increment-button" onClick={handleIncrement}>
				Increment
			</button>

			<p data-test="counter-display">
				<span data-test="count">{count}</span>
			</p>
			{error && message}
		</div>
	);
}

export default App;

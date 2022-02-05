import React, { useState } from "react";
import PropTypes from "prop-types";

import { getLetterMatchCount } from "../helpers";

const Input = ({ success, secretWord }) => {
	const [currentGuess, setCurrentGuess] = useState("");

	const checkGuessedWord = (event, currentGuess) => {
		console.log(getLetterMatchCount(currentGuess, secretWord));
		event.preventDefault();
		setCurrentGuess("");
	};
	if (success) {
		return <div data-test="component-input" />;
	}
	return (
		<div data-test="component-input">
			<form action="" className="form-inline">
				<input
					data-test="input-box"
					className="mb-2 mx-sm-2"
					type="text"
					value={currentGuess}
					onChange={(event) => setCurrentGuess(event.target.value)}
					placeholder="enter your guess"
				></input>
				<button
					data-test="submit-button"
					className="btn ml-2 btn-primary mb-2"
					onClick={(event) => checkGuessedWord(event)}
				>
					Sumbit
				</button>
			</form>
		</div>
	);
};

Input.propTypes = {
	secretWord: PropTypes.string.isRequired
};

export default Input;

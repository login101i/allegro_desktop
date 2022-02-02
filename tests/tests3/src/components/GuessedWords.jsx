import React from "react";
import PropTypes from "prop-types";

const GuessedWords = ({ guessedWords }) => {
	if (guessedWords.length===0) {
		return (
			<div data-test="component-geussedWords">
				<span data-test="guess-instructions">
					Please, type in input words to geuess.
				</span>
			</div>
		);
	} else {
		return <div>That's not correct word. Try again.</div>;
	}
};

GuessedWords.propTypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			guessedWord: PropTypes.string.isRequired,
			letterMatchCount: PropTypes.number.isRequired
		})
	).isRequired
};

export default GuessedWords;

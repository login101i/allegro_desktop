import React from "react";
import PropTypes from "prop-types";

const GuessedWords = ({ guessedWords }) => {
	if (guessedWords.length === 0) {
		return (
			<div data-test="component-geussedWords">
				<span data-test="guess-instructions">
					Please, type in input words to geuess.
				</span>
			</div>
		);
	} else {
		const guessedWordsRows = guessedWords.map((word, index) => (
			<tr key={index} data-test="guessed-word">
				<td>{word.guessedWord}</td>
				<td>{word.letterMatchCount}</td>
			</tr>
		));
		return (
			<div>
				<div data-test="component-geussedWords">
					<div data-test="guessed-words">
						<h3>Guessed Words</h3>
						<table className="table table-sm">
							<thead className="thead-light">
								<tr>
									<th>Guess</th>
									<th>Matching Letters</th>
								</tr>
							</thead>
							<tbody>{guessedWordsRows}</tbody>
						</table>
					</div>
				</div>
			</div>
		);
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

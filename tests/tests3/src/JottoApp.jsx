import React from "react";

import Congrats from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";
import Input from "./components/Input";

const JottoApp = () => {
	const success = false;
	const secretWord = "domek";
	const guessedWords = [];

	return (
		<div className="container " data-test="component-jotto">
			<h2>Jotto</h2>
			<Input secretWord={secretWord} success={success} />
			<Congrats success={true} />
			<GuessedWords guessedWords={guessedWords} />
		</div>
	);
};

export default JottoApp;

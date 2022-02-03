import React from "react";

import Congrats from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";

const JottoApp = () => {
	return (
		<div className="container">
			<h2>Jotto</h2>
			<Congrats success={true} />
			<GuessedWords
				guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
			/>
		</div>
	);
};

export default JottoApp;

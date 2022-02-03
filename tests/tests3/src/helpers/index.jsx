export function getLetterMatchCount(guessedWord, secretWord) {
	const secreLetters = secretWord.split("");

	const guessedLetterSet = new Set(guessedWord);

	return secreLetters.filter(letter => guessedLetterSet.has(letter)).length
}

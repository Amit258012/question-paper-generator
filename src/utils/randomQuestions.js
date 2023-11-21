const { getRandomIndex } = require("../utils/randomIndex");

function getRandomQuestions(numQuestions, questions) {
	const uniqueQuestions = new Set();

	while (uniqueQuestions.size < numQuestions) {
		const randomIndex = getRandomIndex(questions.length);
		const randomQuestion = questions[randomIndex];

		// Add the question to the set (ensures uniqueness)
		uniqueQuestions.add(randomQuestion);
	}

	// Convert the Set back to an array
	return Array.from(uniqueQuestions);
}

module.exports = {
	getRandomQuestions,
};

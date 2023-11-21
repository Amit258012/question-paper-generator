const { questionStore } = require("./questionStore");
const questionBank = require("../models/questions.json");
const { getRandomQuestions } = require("../utils/randomQuestions");

// create {difficulty: marks} map
const diffMarks = {};
for (let i = 0; i < questionBank.length; i++) {
	let currentQuestion = questionBank[i];
	if (!diffMarks[currentQuestion.difficulty]) {
		diffMarks[currentQuestion.difficulty] = currentQuestion.marks;
	}
}

function generateQuestionPaper(totalMarks, difficultyDistribution) {
	const questionPaper = [];

	// Validate difficulty distribution
	const validDifficulties = ["Easy", "Medium", "Hard"];
	const totalDistribution = Object.values(difficultyDistribution).reduce(
		(acc, val) => acc + val,
		0
	);

	// NOTE : check for 100% diff distribution and every difficulty question must be there
	if (
		totalDistribution !== 1 ||
		!validDifficulties.every(
			(difficulty) => difficulty in difficultyDistribution
		)
	) {
		throw new Error("Invalid difficulty distribution");
	}

	// Calculate the number of questions for each difficulty
	const numQuestions = {};
	validDifficulties.forEach((difficulty) => {
		// FIXME : Make the format readable
		numQuestions[difficulty] = Math.floor(
			(totalMarks * difficultyDistribution[difficulty]) /
				diffMarks[difficulty]
		);
	});

	// Distribute questions from the store to the question paper
	validDifficulties.forEach((difficulty) => {
		const filteredQuestions = questionStore.filter(
			(question) => question.difficulty === difficulty
		);

		if (filteredQuestions.length < numQuestions[difficulty]) {
			throw new Error(
				`Insufficient questions of difficulty ${difficulty}`
			);
		}

		// randomQuestions(numQuestions[difficulty], filteredQuestions);

		// TODO: get the questions randomly from question strore
		questionPaper.push(
			...getRandomQuestions(numQuestions[difficulty], filteredQuestions)
		);
	});

	return questionPaper;
}

module.exports = generateQuestionPaper;

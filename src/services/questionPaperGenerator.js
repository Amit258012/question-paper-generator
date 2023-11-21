const { questionStore } = require("./questionStore");
const qBank = require("../models/questions.json");

// create difficulty: marks map
const diffMarks = {};
for (let i = 0; i < qBank.length; i++) {
	let currQues = qBank[i];
	if (!diffMarks[currQues.difficulty]) {
		diffMarks[currQues.difficulty] = currQues.marks;
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

		// TODO: get the questions randomly from question strore
		questionPaper.push(
			...filteredQuestions.slice(0, numQuestions[difficulty])
		);
	});

	return questionPaper;
}

module.exports = generateQuestionPaper;

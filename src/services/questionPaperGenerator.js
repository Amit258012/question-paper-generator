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

	// NOTE : Total difficulty distribution must be 100%
	if (totalDistribution !== 1) {
		throw new Error("Invalid difficulty distribution");
	}

	// Calculate the totalMarks for each difficulty
	const totalMarksForDifficulty = {};
	validDifficulties.forEach((difficulty) => {
		// FIXME : consider only total marks not number of questions
		totalMarksForDifficulty[difficulty] = Math.floor(
			totalMarks * difficultyDistribution[difficulty]
		);
	});

	// Distribute questions from the store to the question paper
	validDifficulties.forEach((difficulty) => {
		const filteredQuestions = questionStore.filter(
			(question) => question.difficulty === difficulty
		);

		let curDifficultyMarks = filteredQuestions.reduce(
			(acc, cur) => acc + cur.marks,
			0
		);
		// BUG
		// console.log(
		// 	"🫡",
		// 	curDifficultyMarks,
		// 	totalMarksForDifficulty[difficulty]
		// );

		if (curDifficultyMarks < totalMarksForDifficulty[difficulty]) {
			throw new Error(
				`Insufficient questions of difficulty ${difficulty}`
			);
		}
		questionPaper.push(
			...getRandomQuestions(
				totalMarksForDifficulty[difficulty],
				filteredQuestions,
				difficulty
			)
		);
	});

	return questionPaper;
}

module.exports = generateQuestionPaper;

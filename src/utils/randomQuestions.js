const { getRandomIndex } = require("../utils/randomIndex");
const { possibleQuestionsGenerator } = require("../utils/possibleQuestions");

function getRandomQuestions(totalMarksForDifficulty, questions, difficulty) {
	questions.sort((a, b) => a.marks - b.marks);
	let possibleQuestionSet = possibleQuestionsGenerator(
		questions,
		totalMarksForDifficulty
	);
	let randomIndex = getRandomIndex(possibleQuestionSet.length);
	console.log(
		`Total possible way to genearate questions : ${possibleQuestionSet.length}`
	);
	if (possibleQuestionSet.length === 0) {
		let marks = 0;
		questions.forEach((question) => {
			if (marks + question.marks <= totalMarksForDifficulty) {
				marks += question.marks;
			}
		});
		throw new Error(
			`-------------------------------------------------------------------\n🚫 ${marks} mark ${difficulty.toLowerCase()} question required.-------------------------------------------------------------------\n`
		);
	}
	if (possibleQuestionSet.length > 0) {
		return possibleQuestionSet[randomIndex];
	}
	throw new Error(
		"-------------------------------------------------------------------\n🚫 Insufficient questions to generate the question paper.-------------------------------------------------------------------\n"
	);
}

module.exports = {
	getRandomQuestions,
};

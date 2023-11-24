const generateQuestionPaper = require("../services/questionPaperGenerator");
const { printQuestions } = require("./printQuestions");
const { totalMarks, difficultyRatios } = require("../../src/userInput");

function getQuestionPaper() {
	// Generate a question paper
	const questionPaper = generateQuestionPaper(totalMarks, difficultyRatios);

	// Log the generated question paper
	console.log("\nGenerated Question Paper:");
	printQuestions(questionPaper);

	// Total marks of question paper
	const totalMarksOfGeneratedQuestionPaper = questionPaper.reduce(
		(acc, cur) => acc + cur.marks,
		0
	);
	console.log(
		`\nRequired question paper of Marks -> ${totalMarks} ,\nGenearted question paper of Marks -> ${totalMarksOfGeneratedQuestionPaper}`
	);
}

module.exports = getQuestionPaper;

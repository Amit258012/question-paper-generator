const { questionStore } = require("./src/services/questionStore");
const generateQuestionPaper = require("./src/services/questionPaperGenerator");

// Display all loaded questions
console.log("All Loaded Questions:");
// questionStore.forEach((question, index) => {
// 	console.log(
// 		`${index + 1}. ${question.question} - Difficulty: ${
// 			question.difficulty
// 		} - Marks: ${question.marks}`
// 	);
// });

// Generate a question paper
const difficultyDistribution = { Easy: 0.2, Medium: 0.5, Hard: 0.3 };
const questionPaper = generateQuestionPaper(100, difficultyDistribution);

// Log the generated question paper
console.log("\nGenerated Question Paper:");
questionPaper.forEach((question, index) => {
	console.log(
		`${index + 1}. ${question.question} - Difficulty: ${
			question.difficulty
		} - Marks: ${question.marks}`
	);
});

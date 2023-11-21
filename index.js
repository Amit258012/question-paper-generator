// const { questionStore } = require("./src/services/questionStore");
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

// TODO: in main file just call functions
// TODO: Create Input file and take the values from there
// TODO: How to distribute questions correctly
// TODO: Handle edge cases
// TODO: Think of this, easy question can carry marks =[1..5] and medium question marks =[6...12] and hard question marks = [13...20]

// Generate a question paper
const totalMarks = 50;
const difficultyDistribution = { Easy: 0.3, Medium: 0.4, Hard: 0.3 };
const questionPaper = generateQuestionPaper(totalMarks, difficultyDistribution);

// Log the generated question paper
console.log("\nGenerated Question Paper:");
questionPaper.forEach((question, index) => {
	console.log(
		`${index + 1}. ${question.question}     ( Difficulty: ${
			question.difficulty
		} ) - ( Marks: ${question.marks} )`
	);
});

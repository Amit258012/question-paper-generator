const generateQuestionPaper = require("./src/services/questionPaperGenerator");
// const { questionStore } = require("./src/services/questionStore");
const { totalMarks, difficultyRatios } = require("./src/userInput");
const { printQuestions } = require("./src/utils/printQuestions");

// Display all loaded questions
// printQuestions(questionStore);

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

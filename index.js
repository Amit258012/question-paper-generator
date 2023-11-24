const generateQuestionPaper = require("./src/services/questionPaperGenerator");
// const { questionStore } = require("./src/services/questionStore");
const { totalMarks, difficultyRatios } = require("./src/userInput");
const { getQuestions } = require("./src/utils/getQuestions");

// Display all loaded questions
// getQuestions(questionStore);

// Generate a question paper
const questionPaper = generateQuestionPaper(totalMarks, difficultyRatios);

// Log the generated question paper
console.log("\nGenerated Question Paper:");
getQuestions(questionPaper);

// Total marks of question paper
const totalMarksOfGeneratedQuestionPaper = questionPaper.reduce(
	(acc, cur) => acc + cur.marks,
	0
);
console.log(
	`\nRequired question paper of Marks -> ${totalMarks} ,\nGenearted question paper of Marks -> ${totalMarksOfGeneratedQuestionPaper}`
);

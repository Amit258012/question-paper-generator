const generateQuestionPaper = require("./src/services/questionPaperGenerator");
const { questionStore } = require("./src/services/questionStore");
const { totalMarks, difficultyRatios } = require("./src/userInput");
const { getQuestions } = require("./src/utils/getQuestions");

// FIXME : User input not working
// const {
// 	totalMarks,
// 	difficultyRatios,
// 	getUserInput,
// } = require("./src/userInput");

// getUserInput();

// Display all loaded questions
getQuestions(questionStore);

// Generate a question paper
const questionPaper = generateQuestionPaper(totalMarks, difficultyRatios);

// Log the generated question paper
console.log("\nGenerated Question Paper:");
getQuestions(questionPaper);

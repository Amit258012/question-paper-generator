const fs = require("fs");
const path = require("path");
const Question = require("../models/question");

const questionStore = [];

function addQuestion(question) {
	questionStore.push(question);
}

function loadQuestionsFromJsonFile(filePath) {
	try {
		const jsonContent = fs.readFileSync(filePath, "utf-8");
		const questions = JSON.parse(jsonContent);

		questions.forEach((questionData) => {
			const question = new Question(
				questionData.question,
				questionData.subject,
				questionData.topic,
				questionData.difficulty,
				questionData.marks
			);

			addQuestion(question);
		});

		console.log("Questions loaded successfully.");
	} catch (error) {
		console.error("Error loading questions:", error.message);
	}
}

// Assuming the JSON file is in the same directory as questionStore.js
const jsonFilePath = path.join(__dirname, "../models", "questions.json");
loadQuestionsFromJsonFile(jsonFilePath);

module.exports = {
	questionStore,
	addQuestion,
};

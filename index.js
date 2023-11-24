const getQuestionPaper = require("./src/utils/getQuestionPaper");
// const { questionStore } = require("./src/services/questionStore");

const ps = require("prompt-sync");
const prompt = ps({ sigint: true });

// Display all loaded questions
// printQuestions(questionStore);

let generateAgain = true;

while (generateAgain) {
	getQuestionPaper();
	let input = prompt(
		"Do you want different questions set for same input? (y/n) : "
	).toLowerCase();

	if (input === "y") {
		getQuestionPaper();
	} else {
		generateAgain = false;
	}
}

console.log("Have a nice day😁");

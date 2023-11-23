const ps = require("prompt-sync");
const prompt = ps({ sigint: true });

const difficulties = ["Easy", "Medium", "Hard"];
const difficultyRatios = {};
const totalMarks = parseInt(prompt("Enter total Marks : "));

console.log("Enter the below data in percentage, ex :- 30%");
difficulties.forEach((difficulty) => {
	percent = parseFloat(prompt(`Enter ${difficulty} % :  `)) / 100;
	difficultyRatios[difficulty] = percent;
});

console.log(difficultyRatios);

module.exports = { totalMarks, difficultyRatios };

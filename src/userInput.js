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

/*************************
Uncomment the below 2 line code and comment the above the code: - to generate random questions on every execution with same requirements
**************************/

// const totalMarks = 100;
// const difficultyRatios = { Easy: 0.3, Medium: 0.5, Hard: 0.2 };

let areAllIntegers = true;

for (const difficultyLevel of difficulties) {
	const marks = difficultyRatios[difficultyLevel] * totalMarks;
	if (!Number.isInteger(marks)) {
		areAllIntegers = false;
		break;
	}
}

if (!areAllIntegers) {
	throw new Error(
		"-------------------------------------------------------------------\n🚫 Marks cannot be divided evenly among the difficulties.\nPlease Provide the proper distribution.\n-------------------------------------------------------------------\n"
	);
}
module.exports = { totalMarks, difficultyRatios };

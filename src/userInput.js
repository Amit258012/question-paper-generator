// const readline = require("readline");
// const difficultyLevels = ["easy", "medium", "hard"];
// const difficultyRatios = {};

// let totalMarks; // Declare totalMarks at a higher scope
// FIXME : difficulty ratio is not working it is returning {}

// function getUserInput() {
// 	const rl = readline.createInterface({
// 		input: process.stdin,
// 		output: process.stdout,
// 	});

// 	// Function to recursively get input for each difficulty level
// 	function getDifficultyRatio(index) {
// 		if (index < difficultyLevels.length) {
// 			const difficultyLevel = difficultyLevels[index];
// 			rl.question(
// 				`Enter difficulty ratio for ${difficultyLevel}: `,
// 				(ratioInput) => {
// 					const ratio = parseFloat(ratioInput);
// 					if (isNaN(ratio)) {
// 						console.error(
// 							"Invalid input. Please enter a valid numeric value."
// 						);
// 						getDifficultyRatio(index); // Ask the same question again
// 					} else {
// 						difficultyRatios[difficultyLevel] = ratio;
// 						getDifficultyRatio(index + 1); // Move to the next difficulty level
// 					}
// 				}
// 			);
// 		} else {
// 			// All difficulty ratios collected, process the input
// 			const userInput = {
// 				totalMarks,
// 				difficultyRatios,
// 			};
// 			console.log("User input:", userInput);
// 			rl.close();
// 		}
// 	}

// 	// Ask the user for the total marks
// 	rl.question("Enter the total marks: ", (totalMarksInput) => {
// 		totalMarks = parseInt(totalMarksInput);

// 		if (isNaN(totalMarks)) {
// 			console.error("Invalid input. Please enter a valid numeric value.");
// 			rl.close();
// 			return;
// 		}

// 		// Start getting input for each difficulty level
// 		getDifficultyRatio(0);
// 	});

// 	console.log("Waiting for user input...");
// }

// // Exporting totalMarks and difficultyRatios for use in other parts of the project
// module.exports = {
// 	getUserInput,
// 	totalMarks,
// 	difficultyRatios,
// };

const totalMarks = 30;
const difficultyRatios = { Easy: 0.1, Medium: 0.4, Hard: 0.5 };

module.exports = { totalMarks, difficultyRatios };

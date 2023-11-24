// Print questions to console

function printQuestions(questionStore) {
	// formatting the output
	const maxDifficultyLength = Math.max(
		...questionStore.map((q) => q.difficulty.length)
	);
	const maxMarksLength = Math.max(
		...questionStore.map((q) => q.marks.toString().length)
	);
	questionStore.forEach((question, index) => {
		console.log(
			`${index + 1}. ${question.question.padEnd(
				70
			)} ( Difficulty: ${question.difficulty.padEnd(
				maxDifficultyLength
			)} ) - ( Marks: ${question.marks
				.toString()
				.padEnd(maxMarksLength)} )`
		);
	});
}
module.exports = { printQuestions };

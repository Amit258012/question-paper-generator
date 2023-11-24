// Finds all possible set of questions, that sum up to totalMarks
function possibleQuestionsGenerator(questions, totalMarks) {
	const possibleQuestions = [];

	function helper(i, cur, total) {
		if (total === totalMarks) {
			possibleQuestions.push([...cur]);
			return;
		}

		if (i >= questions.length || total > totalMarks) {
			return;
		}

		cur.push(questions[i]);
		helper(i + 1, cur, total + questions[i].marks);

		cur.pop();
		helper(i + 1, cur, total);
	}

	helper(0, [], 0);

	return possibleQuestions;
}

module.exports = { possibleQuestionsGenerator };

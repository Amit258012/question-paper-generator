// Find random value between 0 and maxIndex
function getRandomIndex(maxIndex) {
	return Math.floor(Math.random() * maxIndex);
}

module.exports = {
	getRandomIndex,
};

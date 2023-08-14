const { log } = require("console");
const fs = require("fs");
const { reverse, uniq } = require("lodash");
function textManipulation(){
fs.readFile("data.txt", "utf-8", function (err, data) {
	if (err) throw err;
	// console.log(data);
	let count = 1;
	for (let i = 0; i < data.length; i++) {
		if (data[i] === " ") count++;
	}

	const space = count;
	console.log(count);
	const words = data.split("");
	const words1 = data.split(" ");
	const revWords = reverse(words);
	console.log(words1);
	// console.log(words.length);
	// console.log(revWords.join(""));
	// console.log(uniq(words1).join(" "));
	// console.log(uniq(words1).join.length);

	function nonRepeatingWords(arr) {
		const wordFrequency = {};

		// Count word frequencies
		arr.forEach((word) => {
			if (wordFrequency[word]) {
				wordFrequency[word]++;
			} else {
				wordFrequency[word] = 1;
			}
		});

		// Filter out non-repeating words
		const nonRepeatingWords = Object.keys(wordFrequency).filter(
			(word) => wordFrequency[word] === 1
		);

		return nonRepeatingWords;
	}
	const notDbl = nonRepeatingWords(words1);
	console.log(notDbl);
    const capital = notDbl.join(' ').toUpperCase();
    console.log(capital);
});
}
// // # Anagram Detector
// //
// // Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word. A word is an anagram if its letters can be rearranged to create a new word.
// //
// // In other words, given: `"listen"` and `["enlists" "google" "inlets" "banana"]` the program should return "inlets".
//
// //compare letters in input word to other words. if all letters are the same, return the words
//
// // const anagramDetector = function (inWord, possibles) {
// 	// //set anagram boolean
// 	// let anagram = true;
// 	// // initialise output variable
// 	// let output;
// 	// //put inWord into an array
// 	// const letters = inWord.split('');
// // 	//loop to cycle each word to be compared
// // 	for (i=0; i < possibles.length; i++) {
// // 		let currentWord = possibles[i]
// // 		//loop to compare letters of a possible anagram
// // 		for (j=0; j < currentWord.length; j++) {
// // 			 if (currentWord.length !== inWord.length) {
// // 				anagram = false
// // 				console.log(`${currentWord}, ${anagram}`);
// // 				break
// // 			} else if (!letters.includes(currentWord[j])) {
// // 				anagram = false;
// // 				console.log(`${currentWord}, ${anagram}`);
// // 				break
// // 			} else {
// // 				return anagram = true;
// // 				console.log(`${currentWord}, ${anagram}`);
// // 				break
// // 			}
// // 		}
// // 		console.log(`${currentWord}, ${anagram}`);
// //
// //
// // 	}
// // }
//
// anagramDetector('listen',["enlists", "google", "inlets", "banana"]);
//
// const = singleAnagram function(inWord, possible) {
//
// 	//set anagram boolean
// 	let anagram = true;
// 	// initialise output variable
// 	let output;
// 	//put inWord into an array
// 	const letters = inWord.split('');
//
// 	for (j=0; j < possible.length; j++) {
// 	 	if (possible.length !== inWord.length) {
// 			anagram = false
// 			console.log(`${possible}, ${anagram}`);
// 			break
// 		} else if (!letters.includes(possible[j])) {
// 			anagram = false;
// 			console.log(`${possible}, ${anagram}`);
// 			break
// 		} else {
// 			return anagram = true;
// 			console.log(`${possible}, ${anagram}`);
// 			break
// 		}
// 	}
// }


const anagram = function (potentialAnagram, words) {
	const matches =[]
	const sortedAnagram = potentialAnagram.split('').sort().join('').trim('');
	console.log(words.split(''))

	for (let i = 0; i < words.length; i++) {
		const sortedWord = words.split('').sort().join('').trim('');

		if (sortedAnagram === sortedWord) {
				matches.push(words[i]);
		}
		return matches;
	}

}


console.log(anagram('define anagram', ['google', 'joke', 'nerd fame again']));

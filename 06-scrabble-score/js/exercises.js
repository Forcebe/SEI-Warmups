// # Scrabble Score
//
// Write a program that, given a word, computes the scrabble score for that word.
//
// ```javascript
// scrabble('cabbage');
// // => 14
// scrabble('cabbage'); // with b doubled, g tripled and a double word
// // => 42
// ```
//
// ## Letter Values
//
// ```plain
// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// ```
//
// ## Extensions
//
// - You can play a `:double` or a `:triple` letter.
// - You can play a `:double` or a `:triple` word.


// const points = {
// 	a: 1,
// 	e: 1,
// 	i: 1,
// 	o: 1,
// 	u: 1,
// 	l: 1,
// 	n: 1,
// 	r: 1,
// 	s: 1,
// 	t: 1,
// 	d: 2,
// 	g: 2,
// 	b: 3,
// 	c: 3,
// 	m: 3,
// 	p: 3,
// 	f: 4,
// 	h: 4,
// 	v: 4,
// 	w: 4,
// 	y: 4,
// 	k: 5,
// 	j: 8,
// 	x: 8,
// 	q: 10,
// 	z: 10,
// };
//
//
// const scrabbleScore = function(word) {
//   let score = 0;
//   for ( i = 0; i < word.length; i++ ) {
//     let currentLetter = word[i];
//       score = score + points[currentLetter];
//   }
//   return score;
// }
//
// console.log(scrabbleScore('cabbage'));

const points = {
	a: 1,
	e: 1,
	i: 1,
	o: 1,
	u: 1,
	l: 1,
	n: 1,
	r: 1,
	s: 1,
	t: 1,
	d: 2,
	g: [ 2, `triple` ],
	b: [ 3, `double` ],
	c: 3,
	m: 3,
	p: 3,
	f: 4,
	h: 4,
	v: 4,
	w: 4,
	y: 4,
	k: 5,
	j: 8,
	x: 8,
	q: 10,
	z: 10,
  word: `double`
};


const scrabbleModScore = function(word) {
  let score = 0;
  for ( i = 0; i < word.length; i++ ) {
    let currentLetter = word[i];
    let multLetterScore = points[currentLetter][0];
    if (points[currentLetter][1] === `double`) {
      console.log(`double ${currentLetter} = ${multLetterScore * 2}`);
      score = score + (multLetterScore * 2);
      console.log(`score = ${score}`);
    } else if (points[currentLetter][1] === `triple`) {
      console.log(`triple ${currentLetter} = ${multLetterScore * 3}`);
      score = score + (multLetterScore * 3);
      console.log(`score = ${score}`)
    } else {
      console.log(`${currentLetter} = ${points[currentLetter]}`)
      score = score + points[currentLetter];
      console.log(`score = ${score}`)
    }
  }
  if (points.word === `double`) {
    return score * 2;
  } else if (points.word === `triple`) {
    return score * 3;
  } else {
    return score;
  }
}

console.log(scrabbleModScore('cabbage')); //with b doubled, g tripled and a double word

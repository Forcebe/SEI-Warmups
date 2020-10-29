// # Filter
//
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
//
// ## Example:
//
// Input:
//
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta '
//
// Output:
//
// 'alpha beta gamma delta'
//
// # Bonus question
//
// Create a function that returns a string 'banana'. The catch is you can only use letters 'a' and 'b'.
// Super extra bonus points for proving "how well engineered Javascript really is".


//NOTE: This code is not DRY. Runing the loop once resulted in some repeats being left active.
//hoo boy this didn't work...

// const filter = function(string) {
//   let array = string.split(' ');
//   let output;
//   for (i = 1; i < array.length; i++) {
//     if (array[i] == array[i - 1]) {
//       array.splice(i, 1);
//     }
//   }
//   for (i = 1; i < array.length; i++) {
//     if (array[i] == array[i - 1]) {
//       array.splice(i, 1);
//     }
//   }
//   for (i = 1; i < array.length; i++) {
//     output += `${array[i]} `;
//   }
//   console.log(output);
// }
//
// const string1 = "apha beta beta gamma gamma gamma gamma delta alpha beta beta gamma gamma gamma delta delta";
//
// filter(string1);


const originalWords = function(words) {
  const splitWords = words.split(' ');
  const originals = [];

  for (let i = 0; i < splitWords.length; i ++) {
    if (originals.includes(splitWords[i]) === false) {
      originals.push(splitWords[i])
    }
  }

  return originals.join(' ')
}

console.log(originalWords("apha beta beta gamma gamma gamma gamma delta alpha beta beta gamma gamma gamma delta delta"))

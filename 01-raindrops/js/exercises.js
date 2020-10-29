// # Warmup - Raindrops
//
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
//

// MY SOLUTION:
// const raindrops = function(num) {
//   let three = "";
//   let five = "";
//   let seven = "";
//   if (Number.isInteger(num / 3));
//     three = 'Pling';
//   if (Number.isInteger(num / 5));
//     five = 'Plang';
//   if (Number.isInteger(num / 7))
//     seven = 'Plong'
//   else  {
//     console.log(num);
//   };
//   console.log(three + five + seven);
// };
//
// raindrops(6);
// raindrops(6);
// raindrops(105);
// raindrops(28);
// raindrops(1755);
// raindrops(34);
// Inconsitent outputs; would often print num when not intentional

// COURSE SOLUTION

const raindrops = function(number) {
  let output = "";

  if (number % 3 === 0) {
    output = output + 'Pling';
  }
  if (number % 5 === 0) {
    output += 'Plang';
  }
  if (number % 7 === 0) {
    output += 'Plong' ;
  }
  if (output.length === 0) {
    output += number;
  }
  console.log(output);
}

raindrops(6);
raindrops(6);
raindrops(105);
raindrops(28);
raindrops(1755);
raindrops(34);

// ### Examples
//
// 28 has 7 as a factor.
// In raindrop-speak, this would be a simple "Plong".
// 1755 has 3 and 5 as factors.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has neither 3, 5 nor 7 as a factor.
// Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

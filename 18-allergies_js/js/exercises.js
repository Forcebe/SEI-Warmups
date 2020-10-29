// # Allergies Warmup
//
// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).
//
// The list of items (and their value) that were tested are:
//
// - eggs (1)
// - peanuts (2)
// - shellfish (4)
// - strawberries (8)
// - tomatoes (16)
// - chocolate (32)
// - pollen (64)
// - cats (128)
//
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.
//
// Now, given just that score of 34, your program should be able to say:
//
// - Whether Tom is allergic to any one of those allergens listed above.
// - All the allergens Tom is allergic to.
//
// ```
// scorecard: {
//   1: "eggs",
//   2: "peanuts",
//   4: "shellfish",
//   8: "strawberries",
//   16: "tomatoes",
//   32: "chocolate",
//   64: "pollen",
//   128: "cats"
// }
// ```

console.log('test, test');



const allergies = function(score) {

	const scorecard = {
	  1: "eggs",
	  2: "peanuts",
	  4: "shellfish",
	  8: "strawberries",
	  16: "tomatoes",
	  32: "chocolate",
	  64: "pollen",
	  128: "cats"
	};

	const scores = Object.keys(scorecard)
	let tally = score
	for (var i = (scores.length - 1); i >= 0; i -= 1) {
		if (tally >= scores[i]) {
			console.log(scorecard[scores[i]]);
			tally = tally - scores[i];
		}
		if (tally === 0) {
			break;
		}
	};
};


allergies(34)

// console.log('hello. Please enter an age in seconds and a planet, or all for all planets');
//
// const planets = {
// 	{name: 'Mercury',
// 	 orbitalPeriod: 0.2408467},
// 	{name: 'Venus',
// 	 orbitalPeriod: 0.61519726},
// 	{name: 'Mars',
// 	 orbitalPeriod: 1.8808158},
// 	{name: 'Jupiter',
// 	 orbitalPeriod: 11.862615},
// 	{name: 'Saturn',
// 	 orbitalPeriod: 29.447498},
// 	{name: 'Uranus',
// 	 orbitalPeriod: 84.016846},
// 	{name: 'Neptune',
// 	 orbitalPeriod: 164.79132},
//
//
//
// const spaceAge = function(age, planet) {
// 	const dayAge = ((age/60)/60)/24;
// 	const earthAge = dayAge/365.25;
// 	// console.log(earthAge);
// 	if (planet === 'all') {
// 		console.log(`You are ${earthAge} Earth-years old`)
// 		for (i = 0; i < planets.length; i++) {
// 			const planetAge = earthAge / planets[i].orbitalPeriod;
// 			console.log(`You are ${planetAge} ${planets[i].name}-years old.`);
// 	 }
//  } else {
// 	 const planetAge = planets
// 	 console.log(`You are ${planetAge} ${planets[i].name}-years old.`)
//
//  }
// }
//
// spaceAge(1000000000, 'all');

// Given an age in seconds, calculate how old someone would be on the following planets:
//
// Earth: orbital period 365.25 Earth days
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years
// So if you were told someone were 1,000,000,000 seconds old, you should be able to say:
//
// You are 31.68808781402895 Earth-years old
// You are 131.56953287725742 Mercury-years old
// You are 51.50882468824545 Venus-years old
// You are 16.848054878116695 Mars-years old
// You are 2.6712565327315225 Jupiter-years old
// You are 1.0760876124018737 Saturn-years old
// You are 0.37716350140100413 Uranus-years old
// You are 0.1922922142624317 Neptune-years old
// There are 31557600 seconds in an Earth year.
//
// Bonus:
// Have the option of either returning the ages on all planets, or any of the above planets individually.


console.log('hello. Please enter an age in seconds and a planet, or all for all planets');

const planets = {
	{name: 'Mercury',
	 orbitalPeriod: 0.2408467},
	{name: 'Venus',
	 orbitalPeriod: 0.61519726},
	{name: 'Mars',
	 orbitalPeriod: 1.8808158},
	{name: 'Jupiter',
	 orbitalPeriod: 11.862615},
	{name: 'Saturn',
	 orbitalPeriod: 29.447498},
	{name: 'Uranus',
	 orbitalPeriod: 84.016846},
	{name: 'Neptune',
	 orbitalPeriod: 164.79132},



const spaceAge = function(age, planet) {
	const dayAge = ((age/60)/60)/24;
	const earthAge = dayAge/365.25;
	// console.log(earthAge);
	if (planet === 'all') {
		console.log(`You are ${earthAge} Earth-years old`)
		for (i = 0; i < planets.length; i++) {
			const planetAge = earthAge / planets[i].orbitalPeriod;
			console.log(`You are ${planetAge} ${planets[i].name}-years old.`);
	 }
 } else {
	 const planetAge = planets
	 console.log(`You are ${planetAge} ${planets[i].name}-years old.`)

 }
}

spaceAge(1000000000, 'all');

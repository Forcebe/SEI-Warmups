// # Sum of arrays
//
// Write a function that receives two arguments, both of which are Arrays and sums them. These arrays contain only numbers.
// You don't know their length and they can contain both integers and floating point numbers.
//
// ## Example
//
// [2, 6.4, 3] + [3, 3.6, 2] = 20
// sum([2, 6.4, 3], [3, 3.6, 2]) => 20



const sumArray = function (a1, a2) {
	//set accumulators to first array value
	let sum1 = a1[0];
	let sum2 = a2[0]

	// loop through first array, adding values to accumulator sum1
	for (i=1; i < a1.length; i++) {
	 sum1 += a1[i];
	}

	// loop through second array, adding values to accumulator sum2
	for (j=1; j < a2.length; j++) {
	 sum2 += a2[j];
	}
	//return sum of accumulators
	return sum1 + sum2;
};

//method based on internet research
const internetSumArray = function (a1, a2) {
	//pass accumulator a into our reduce function. add current value b, set
	//initial value to 0. Reduces array to single value by adding a to b.
	let sum1 = a1.reduce(function(a,b) {
		return a + b
	}, 0);

	//repeat for second array
	let sum2 = a2.reduce(function(a,b) {
		return a + b
	}, 0);
	//return sum of the two reduced values
	return sum1 + sum2;
};

//function to sum a given array using above reduce method
const individualArraySum = function (arr) {
	return arr.reduce(function(a,b) {
		return a + b
	}, 0);
};
// calls sum function for each input array, adds result
const minimalSumArray = function (a1, a2) {
	return individualArraySum(a1) + individualArraySum(a2);
}

const individualArraySumLoop = function(arr) {
	let sum = arr[0]
	for (i=1; i < arr.length; i++) {
	 sum += arr[i];
	}
	return sum
}

const minimalSumArrayLoop = function (a1, a2) {
	return individualArraySumLoop(a1) + individualArraySumLoop(a2);
}

console.log(sumArray([2, 6.4, 3, 8], [3, 3.6, 2, 9, 12]));
console.log(sumArray([2, 6.4, 3], [3, 3.6, 2]));

console.log(internetSumArray([2, 6.4, 3, 8], [3, 3.6, 2, 9, 12]));
console.log(internetSumArray([2, 6.4, 3], [3, 3.6, 2]));

console.log(minimalSumArray([2, 6.4, 3, 8], [3, 3.6, 2, 9, 12]));
console.log(minimalSumArray([2, 6.4, 3], [3, 3.6, 2]));

console.log(minimalSumArrayLoop([2, 6.4, 3, 8], [3, 3.6, 2, 9, 12]));
console.log(minimalSumArrayLoop([2, 6.4, 3], [3, 3.6, 2]));

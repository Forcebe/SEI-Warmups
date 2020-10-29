// ### 1. Create an array of the days of the week
// - Create a variable named `days_of_the_week` as an array of the following:
//     - Monday
//     - Tuesday
//     - Wednesday
//     - Thursday
//     - Friday
//     - Saturday
//     - Sunday
//
// ### 2. My calendar says the first day is Sunday...
// - Remove Sunday from the last postion and move it to the first position.  Use array methods.
//
// ### 3. Create a new array of the days of the week:
// - The first inner array should be the weekdays
// - The second inner array should be the weekend days
//
// ### 4. Remove either the weekdays or the weekends
// Your choice...
//
// ### 5. Sort the remaining days alphabetically

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; //Array of weekdays

const firstDay = function(week) { //pop sunday and splice to week[0]
  let last  = week.pop();
  week.splice(0, 0, last);
}

const splitWeek = [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",], ["Saturday", "Sunday"]]; //Array of weekdays & weekend days

const rmWeekend = function(week) { //delete second sub array (weekend days)
  week.splice(1, 1);
}

const alphabetise = function(array) { //Sort remaining sub-array alphabetically
  array[0].sort();
}

firstDay(days);
console.log(`Sunday first: ${days}`);
rmWeekend(splitWeek);
console.log(`Weekdays only: ${splitWeek} `);
alphabetise(splitWeek);
console.log(`Alphabetised: ${splitWeek}`);

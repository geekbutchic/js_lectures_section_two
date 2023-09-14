"use strict";

// //Old Example
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// //Most common way
// const friends = ["Michael", "Steven", "Peter"];

// console.log(friends[2]); // Peter

// //Another way to write arrays
// const years = new Array(1991, 1984, 2020);
// //Arrays are zero based
// console.log(years[0]); // 1991

// //Retrieve number of elements in array
// console.log(friends.length); // 3

// //Retrieve last element of array
// console.log(friends[friends.length - 1]); // Peter

// friends[2] = "Jay";
// console.log(friends); // [ 'Michael', 'Steven', 'Jay' ]

// /*
// * Only primitive values are mutable! Arrays is not a primitive value so const does not apply...
// * Cannot replace entire array
// */

// const sonny = ["Sonny", "Valenzuela", 2023 - 1984, "Programmer", friends];
// console.log(sonny);

// Comment out above to see logs...
//========================= Second Half of Notes ================================

const calcAge = function(birthYear) {
  return 2023 - birthYear;
};

const years1 = [1990, 1967, 2002, 2010, 2018];

const age = calcAge(years1[0]); // 33
const age1 = calcAge(years1[1]); // 56 
const age2 = calcAge(years1[years1.length - 1]); //5
console.log(age, age1, age2); // 33 56 5

//Can place function calls into an array because it produces a value...
const ages = [
  calcAge(years1[0]),
  calcAge(years1[1]),
  calcAge(years1[years1.length - 1])
];
console.log(ages); // [ 33, 56, 5 ]
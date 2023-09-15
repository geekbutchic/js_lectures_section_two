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

/*
Lecture : Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice.  You may use the values you have been using previously. Store this array into a variable called 'populations'. 
2. Log to the console whether the array has 4 elements or not (true or false). 
3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values.
*/

const populations = [331900000, 1444216107, 47420000, 10420000];

const logValue = populations.length === 4;
console.log(logValue);

//The comparison operator === (strict equality) in JavaScript always returns either true or false based on whether the two operands being compared are equal or not.

function percentageOfWorld1(population) {
  const percentage = population / 7900000000 * 100;
  return `${percentage.toFixed(2)}%`;
}

// Calculate the percentage for each population value and store them in an array

// In this case, populations.map(...) is applying the percentageOfWorld1 function to each element in the populations array and creating a new array (percentages) with the calculated percentages for each population value.
const percentages = populations.map(population =>
  percentageOfWorld1(population)
);

console.log(Array.isArray(percentages), percentages); // Log the percentages array

/* 
When you use typeof to check the data type of an array in JavaScript, it will return "object". This is because, in JavaScript, arrays are a type of object. Arrays are a specialized type of object that has numeric indices and a length property, which makes them distinct from regular objects.

So, when you use typeof on an array, you get "object" as the result because arrays are technically a subtype of objects. To specifically check if a variable is an array, you can use the Array.isArray() method, like this:
*/
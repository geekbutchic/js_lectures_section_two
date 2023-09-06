//Lecture: Function Declarations vs Expressions.

//Example Declaration
const age = calcAge(1991);
console.log(`Function Declaration`, age);

function calcAge(birthYear) {
  return 2037 - birthYear;
}
/* 
Key characteristics of function declarations:

* Function declarations are hoisted: This means that you can call the function before its actual declaration in the code, and it will still work. This is because the function declaration is moved to the top of its scope during the compilation phase.
*  They are part of the normal program flow and can be used before their actual declaration.
* They create a variable with the function name in the current scope.
*/

//Example Expression
const calcAge1 = function(birthYear) {
  return 2037 - birthYear;
};

const age1 = calcAge1(1991);
console.log(`Function Expression`, age1);

/* 
Function Expressions:

A function expression involves creating a function and assigning it to a variable. It's done using a similar syntax to variable assignments. There are two common ways to create function expressions: using the function keyword or using arrow functions (=>).

Key characteristics of function expressions:

* Function expressions are not hoisted: You cannot call the function before its actual assignment in the code.
* They are treated like any other variable assignment.
* They allow you to create anonymous functions or functions with names.
*/

// Lecture : Function Declarations vs Expressions

/* 
1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents.  For example, China has 1441 million people, so it's about 18.2% of the world population.
2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100.
3.Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console.
4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations).
*/

// 1st Version
// function percentageOfWorld1(population) {
//   const percentage = population / 7900000000 * 100;
//   return percentage.toFixed(2);
// }

// const usa = percentageOfWorld1(331900000);
// console.log(
//   `USA has 331900000 million people, so it's about ${usa}% of the world population.`
// );

//Final version
function percentageOfWorld(countryPopulation, worldPopulation) {
  const percentage = countryPopulation / worldPopulation * 100;
  return percentage.toFixed(2); // Format the result to two decimal places
}

const usaPopulation = 331900000;
const worldPopulation = 7900000000;

const usaPercentage = percentageOfWorld(usaPopulation, worldPopulation);

console.log(
  `USA has ${usaPopulation.toLocaleString(
    "en-US"
  )} million people, so it's about ${usaPercentage}% of the worlds population.`
);

const chinaPopulation = 1444216107;
const chinaPercentage = percentageOfWorld(chinaPopulation, worldPopulation);

console.log(
  `China has ${chinaPopulation.toLocaleString(
    "en-US"
  )} billion people, so it's about ${chinaPercentage}% of the worlds population.`
);

const spainPopulation = 47420000;
const spainPercentage = percentageOfWorld(spainPopulation, worldPopulation);

console.log(
  `Spain has ${spainPopulation.toLocaleString(
    "en-US"
  )} million people, so it's about ${spainPercentage}% of the worlds population.`
);

/* 
USA has 331,900,000 million people, so it's about 4.20% of the worlds population.

China has 1,444,216,107 billion people, so it's about 18.28% of the worlds population.

Spain has 47,420,000 million people, so it's about 0.60% of the worlds population.
*/
console.log(`=====================================`);
// Function Expression Solution : Inverted Solution to show difference.
const usaPopulation2 = 331900000;
const chinaPopulation2 = 1444216107;
const spainPopulation2 = 47420000;
const worldPopulation2 = 7900000000;

const usaPercentage2 = percentageOfWorld(usaPopulation, worldPopulation);

console.log(`Function Declarations Version: `,
  `USA has ${usaPopulation2.toLocaleString(
    "en-US"
  )} million people, so it's about ${usaPercentage2}% of the worlds population.`
);

const chinaPercentage2 = percentageOfWorld(chinaPopulation, worldPopulation);

console.log(`Function Declarations Version: `,
  `China has ${chinaPopulation2.toLocaleString(
    "en-US"
  )} billion people, so it's about ${chinaPercentage2}% of the worlds population.`
);

const spainPercentage2 = percentageOfWorld(spainPopulation, worldPopulation);

console.log(`Function Declarations Version: `,
  `Spain has ${spainPopulation2.toLocaleString(
    "en-US"
  )} million people, so it's about ${spainPercentage2}% of the worlds population.`
);

const percentageOfWorld2 = function(countryPopulation, worldPopulation) {
  const percentage = countryPopulation / worldPopulation * 100;
  return percentage.toFixed(2);
};





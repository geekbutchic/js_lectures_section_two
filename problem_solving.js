"use strict";

//Problem:
/*
We work for a company building a smart home thermometer.  Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude.  Keep in mind that sometimes there might be a sensor error."
*/

// Calculating the "temperature amplitude" typically refers to determining the difference between the highest and lowest temperatures within a specific time period or data set.

/*
1) Understanding the problem
* What is temp amplitude? Difference between highest and lowest.
* How to compute max and min temperatures?
* What's a sensor error?
2) Breaking up into sub-problems
* How to ignore errors?
* Find max value in temp array?
* Find min value in temp array?
* Subtract min from max (amplitude) and return it.
*/

// ** When the loop encounters a non-numeric value (e.g., the string "err" in the example), the comparisons within the loop (currentNumber < min and currentNumber > max) will not evaluate to true. In JavaScript, comparisons between a number and a non-numeric value will return false **.

const temperatures = [3, -2, -6, -1, "err", 9, 13, 17, 15, 14, 9, 5];

let min = temperatures[0];
let max = temperatures[0];

for (let i = 0; i < temperatures.length; i++) {
  const currentNumber = temperatures[i];
  if (currentNumber < min) {
    min = currentNumber;
  }
  if (currentNumber > max) {
    max = currentNumber;
  }
}

console.log(`Max Value: `, max);
console.log(`Min Value: `, min);

const amplitude = max - min;
console.log(amplitude);

"use strict";

//Problem:
/*
We work for a company building a smart home thermometer.  Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude.  Keep in mind that sometimes there might be a sensor error."
*/

const temperatures = [3, -2, -6, -1, "err", 9, 13, 17, 15, 14, 9, 5];

// Calculating the "temperature amplitude" typically refers to determining the difference between the highest and lowest temperatures within a specific time period or data set.

// Initialize a variable to store the highest temperature
let highestTemperature = Number.NEGATIVE_INFINITY; // Start with a very low value

// Iterate through the array
for (let i = 0; i < temperatures.length; i++) {
    const currentTemperature = temperatures[i];
    
    // Check if the current value is a number and higher than the current highest temperature
    if (typeof currentTemperature === 'number' && currentTemperature > highestTemperature) {
        highestTemperature = currentTemperature;
    }
}

console.log("The highest temperature is:", highestTemperature);



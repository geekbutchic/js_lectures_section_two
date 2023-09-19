const readline = require("readline");
// Objects

// Arrays use order number to reference not names
const sonnyArray = [
  "Sonny",
  "Valenz",
  2023 - 1984,
  "Developer",
  ["Tom", "Victoria", "Frances"]
];

//Bracket notation position
console.log(sonnyArray[1]);

// Data Structure - Key : Value Pairs
const sonny = {
  // Literal syntax
  firstName: "Sonny",
  lastName: "Valenz",
  age: 2023 - 1984,
  job: "Developer",
  friends: ["Tom", "Victoria", "Frances"]
};
// Each key is called properties with value of etc...
// properties = firstName value = 'Sonny'

//.dot vs bracket notation

console.log(`Dot Notation: `, sonny.lastName);
console.log(`Bracket Notation: `, sonny["lastName"]);

// [We can insert any expression here...]
const nameKey = "Name";
console.log(sonny["first" + nameKey]);
console.log(sonny["last" + nameKey]);

sonny.location = "United States of America";
sonny["email"] = "sonnyleevalenz.com";
console.log(sonny);

/* 
The key point of interest is how you're using bracket notation to access properties. Instead of directly specifying the property name, like sonny.firstName, you're using an expression to construct the property name.

* sonny["first" + nameKey] is equivalent to sonny["firstName"]. Here, "first" + nameKey evaluates to "firstName", so it accesses the firstName property of the sonny object.

* sonny["last" + nameKey] is equivalent to sonny["lastName"]. Here, "last" + nameKey evaluates to "lastName", so it accesses the lastName property of the sonny object.

* This use of bracket notation is particularly useful when you need to access object properties dynamically based on variables or when the property names are not known until runtime. It allows you to compute the property name as a string and then use that string to access the corresponding property of the object.

*/

// Uncomment to show prompt
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question(
//   "What do you want to know about Sonny? Choose between firstName, lastName, age, job, and friends? ",
//   key => {
//     if (sonny.hasOwnProperty(key)) {
//       console.log(`Sonny's ${key} is: ${sonny[key]}`);
//     } else {
//       console.log(`Sorry, ${key} is not a valid property.`);
//     }
//     rl.close();
//   }
// );

/* 
* We use the rl.question() method to prompt the user to choose a key ("firstName", "lastName", "age", "job", or "friends").

* In the callback function, we check if the chosen key exists as a property in the sonny object using the hasOwnProperty() method. If it does, we access the corresponding value using sonny[key] and display it in the console.

* If the chosen key is not found in the sonny object, we inform the user that it's not a valid property.

* After processing the user's input, we close the readline interface using rl.close().

*/

// Challenge grab object values without hard coding...
console.log(
  `${sonny.firstName} has ${sonny.friends
    .length} and his best friend is called ${sonny.friends[0]}`
);

/*
Precedence
* left-to-right
* JavaScript, the dot notation (.) has a higher precedence than the square bracket notation ([]) when accessing object properties.
* 
*/

/* 
Lecture : Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbors' (an array like we used in previous assignments.) ✅
*/

const numberInMillion = 59.11 * 1000000;
console.log(numberInMillion);

const myCountry = {
  country: "Italia",
  capital: "Roma",
  language: "Italian",
  population: 59.11,
  neighbors: [
    "Austria",
    "France",
    "Holy See",
    "San Marino",
    "Slovenia",
    "Switzerland"
  ]
};

/*
Lecture : Dot vs Bracket Notation
* Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighboring countries and a capital called Helsinki'. ✅
* Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.
*/

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry
    .neighbors
    .length} neighboring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry);
myCountry.population -= 2;
console.log(myCountry);


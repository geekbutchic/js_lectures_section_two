// For loops through an array

/*
1. Initialization: This part is executed only once when the loop starts. It usually initializes a counter variable.

2. Condition: This is a Boolean expression that is evaluated before each iteration of the loop. If the condition is true, the loop continues; if it's false, the loop stops.

3. Increment/Decrement: After each iteration of the loop, this part is executed. It typically increments (or decrements) the counter variable, moving it closer to a value that will eventually make the condition false.
*/

const sonny = [
  "Sonny",
  "Valenz",
  2023 - 1984,
  "Developer",
  ["Tom", "Victoria", "Frances"],
  true
];

const types = [];

// Zero based
// sonny[5] does not exist
for (let i = 0; i < sonny.length; i++) {
  // Reading from sonny array
  console.log(typeof sonny[i], sonny[i]);
  // Filling an array
  types[i] = typeof sonny[i];
  // Another way of filling an array
  //   types.push(typeof sonny[i]);
}

/*
The line types[i] = typeof sonny[i]; assigns the data type of the current element to the corresponding index in the types array. This step fills the types array with the data types of the elements in the sonny array.
*/

console.log(types);

// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// const types = [];

// for (let i = 0; i < fruits.length; i++) {
//   // Reading from fruits array
//   console.log(fruits[i]);
//   // Filling an array
//   types[i] = typeof fruits[i];
// }

// console.log(types);

/*
When i is 0, fruits[i] is "apple".
When i is 1, fruits[i] is "banana".
When i is 2, fruits[i] is "cherry".
etc...
*/

const birthYears = [1991, 1984, 1969, 2020];

const ages = [];

for (let i = 0; i < birthYears.length; i++) {
  ages.push(2023 - birthYears[i]);
}

console.log(ages);

//Continue and Break
console.log(`-------ONLY STRINGS-------`);
for (let i = 0; i < sonny.length; i++) {
  if (typeof sonny[i] !== "string") continue;
  console.log(typeof sonny[i], sonny[i]);
}

console.log(`-----Only Number------`);
for (let i = 0; i < sonny.length; i++) {
  if (typeof sonny[i] === "number") break;
  console.log(typeof sonny[i], sonny[i]);
}

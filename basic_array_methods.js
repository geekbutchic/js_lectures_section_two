// Basic Array Methods

// Add Elements
const friends = ["Michael", "Steven", "Peter"];
//.push() is a method technically a
const newLength = friends.push("Jay");
//array is mutated
console.log(friends); // [ 'Michael', 'Steven', 'Peter', 'Jay' ]
console.log(newLength); // 4 returns length of array

friends.unshift("John"); // Adds element to front of Array
console.log(friends);

//================================================
//Remove elements .pop() removes last element
const popped = friends.pop(); // Removes last element
console.log(popped); // Jay

//Position of element .indexOf()
console.log(friends.indexOf("Peter")); // 3
console.log(friends); // [ 'John', 'Michael', 'Steven', 'Peter' ]

//Tests with strict equality ===
console.log(friends.includes("Steven")); // true

//Useful applications to write conditionals .includes()
if (friends.includes("Peter")) { // Returns a boolean
    console.log(`You have a friend called Peter...`);
}
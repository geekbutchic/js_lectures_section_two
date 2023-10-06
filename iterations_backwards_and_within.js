// // More for loops

// const sonny = [
//   "Sonny",
//   "Valenz",
//   2023 - 1984,
//   "Developer",
//   ["Tom", "Victoria", "Frances"]
// ];

// // The initialization : let i = sonny.length - 1 sets the loop counter variable i to the index of the last element in the sonny array.
// // Condition : is i greater than or equal to 0 ? The loop will continue until i becomes less than or 0, at which point it will exit.
// // Increment/Decrement: i - 1 which ends once 0 > -1
// for (let i = sonny.length - 1; i >= 0; i--) {
//   console.log(i, sonny[i]);
// }

// // x = x - 1 equivalent to (x--)
// // x = x + 1 equivalent to (x++)

// // Loop within a loop
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(
//       `Exercise ${exercise} Lifting Weights repetition ${rep} 🏋🏻‍♀️`
//     );
//   }
// }

/*
Lecture: Looping Backwards and loops in loops.
1. Store this array into a variable called 'listOfNeighbors' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
2. Log only the neighboring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbor: Canada' for each country.
3. You will need a loop inside a loop for this.
*/

const listOfNeighbors = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"]
];

//Loops through all the array and prints one by one.
for (let i = 0; i < listOfNeighbors.length; i++) {
  console.log(`First Iteration: `, listOfNeighbors[i]);
  for (let j = 0; j < listOfNeighbors[i].length; j++) {
    console.log(`Second Iteration: `, `${listOfNeighbors[i][j]}`);
  }
}

/*
The inner loop allows you to iterate over each element within the inner arrays and print them independently, making it seem like the elements are printed separately.
*/

console.log(`========== USA Neighboring Countries ==========`);
for (let i = 0; i < listOfNeighbors.length; i++) {
  for (let j = 0; j < listOfNeighbors[i].length; j++) {
    if (
      listOfNeighbors[i][j] === "Canada" ||
      listOfNeighbors[i][j] === "Mexico"
    ) {
      console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
    }
  }
}

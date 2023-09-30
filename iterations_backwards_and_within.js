// More for loops

const sonny = [
  "Sonny",
  "Valenz",
  2023 - 1984,
  "Developer",
  ["Tom", "Victoria", "Frances"]
];

// The initialization : let i = sonny.length - 1 sets the loop counter variable i to the index of the last element in the sonny array.
// Condition : is i greater than or equal to 0 ? The loop will continue until i becomes less than or 0, at which point it will exit.
// Increment/Decrement: i - 1 which ends once 0 > -1
for (let i = sonny.length - 1; i >= 0; i--) {
  console.log(i, sonny[i]);
}

// x = x - 1 equivalent to (x--)
// x = x + 1 equivalent to (x++)

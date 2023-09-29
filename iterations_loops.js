// Iterations / Loops

//10 times etc...
// console.log(`Lifting weights repetition 1 🏋🏻‍♀️`);
// console.log(`Lifting weights repetition 2 🏋🏻‍♀️`);

// For loops
// 1. Initial value let rep = 1
// 2. Condition - For loops keeps running while condition is true
// 3. Update the counter similar to rep = rep + 1
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏻‍♀️`);
}

/*
Lecture : Iteration for Loop
1. There are elections in your country! In a small town, there are only 50 voters.  Use a for loop to simulate the 50 people voting, by logging a string like this to the console.  `Voter number 1 is currently voting`.
*/

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}

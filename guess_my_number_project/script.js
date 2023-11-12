"use strict";

// Document is the entry point to the DOM document.querySelector()
// DOM Manipulation can change text, html, and css
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🤔 Correct Number???";

// // Changes in DOM
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;

// // With input filed we use .value
// document.querySelector(".guess").value = 23;

// Select element itself
// console.log(document.querySelector(".check"));

// generates a random number between 1 and 20 when loading page
let secretGuess = Math.trunc(Math.random() * 20) + 1;

let score = 20;

// Event listener function
document.querySelector(".check").addEventListener("click", () => {
  // converts to a number
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent =
      "Not a Number 🙄 Try Again!!!";
  } else if (guess === secretGuess) {
    //CSS SELECTOR DOM MANIPULATION - WHEN PLAYER WINS
    document.querySelector(".message").textContent = `🎉 Correct Number!`;
    document.querySelector(".number").textContent = secretGuess;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > secretGuess) {
    if (score > 1) {
      document.querySelector(".message").textContent = `Guess is Too high 🔺`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `You lost the game 😭`;
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretGuess) {
    if (score > 1) {
      document.querySelector(".message").textContent = `Guess is Too low 🔺`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `You lost the game 😭`;
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  // Clear the input field
  score = 20;
  secretGuess = Math.trunc(Math.random() * 20) + 1;

  // Reset the message
  document.querySelector(".message").textContent = "Start guessing...";

  // Reset the background color
  document.querySelector("body").style.backgroundColor = "#222";

  // Reset the width of the number display
  document.querySelector(".number").style.width = "15rem";

  // Clear the displayed secret number
  document.querySelector(".number").textContent = "?";

  // Input is always a string
  document.querySelector(".guess").value = "";

  // Reset the score
  document.querySelector(".score").textContent = score;
});

/*
1. document.querySelector(".check"): This line of code uses document.querySelector to select the first element in the document with the class "check". In this case, it selects the <button> element with the class "check". This button is typically used to check the user's guess.

2. .addEventListener("click", () => { ... }): After selecting the button element, the code adds an event listener for the "click" event. This means that when the button is clicked, the provided arrow function will be executed.

3. console.log(document.querySelector(".guess").value);: Inside the arrow function, the code logs the value of the element with the class "guess" to the console. This element is typically an <input> field where the user enters their guess. 

So, when the user clicks the button with the class "check", the JavaScript code logs the value entered in the "guess" input field to the console. This is a common pattern for capturing user input and performing actions based on that input in a web application.
*/

// REFACTORED VERSION
// let secretGuess, score;

// function initializeGame() {
//   secretGuess = Math.trunc(Math.random() * 20) + 1;
//   score = 20;
//   document.querySelector(".message").textContent = "Start guessing...";
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = "";
//   document.querySelector(".score").textContent = score;
// }

// function checkGuess() {
//   const guess = Number(document.querySelector(".guess").value);

//   if (!guess) {
//     document.querySelector(".message").textContent =
//       "Not a Number 🙄 Try Again!!!";
//   } else if (guess === secretGuess) {
//     document.querySelector(".message").textContent = `🎉 Correct Number!`;
//     document.querySelector(".number").textContent = secretGuess;
//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";
//   } else {
//     const message =
//       guess > secretGuess ? "Guess is Too high 🔺" : "Guess is Too low 🔻";
//     if (score > 1) {
//       document.querySelector(".message").textContent = message;
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = `You lost the game 😭`;
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// }

// document.querySelector(".check").addEventListener("click", checkGuess);
// document.querySelector(".again").addEventListener("click", initializeGame);

// initializeGame();

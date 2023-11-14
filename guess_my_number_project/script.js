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
let highScore = 0;

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
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
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

// let secretGuess, score, highScore;

// function initializeGame() {
//   secretGuess = Math.trunc(Math.random() * 20) + 1;
//   score = 20;
//   highScore = 0;
//   document.querySelector(".message").textContent = "Start guessing...";
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = "";
//   document.querySelector(".score").textContent = score;
// }

// function handleGuess() {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector(".message").textContent =
//       "Not a Number 🙄 Try Again!!!";
//   } else if (guess === secretGuess) {
//     document.querySelector(".message").textContent = `🎉 Correct Number!`;
//     document.querySelector(".number").textContent = secretGuess;
//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";
//     if (score > highScore) {
//       highScore = score;
//       document.querySelector(".highscore").textContent = highScore;
//     }
//   } else if (guess > secretGuess) {
//     document.querySelector(".message").textContent = `Guess is Too high 🔺`;
//     if (score > 1) {
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = `You lost the game 😭`;
//       document.querySelector(".score").textContent = 0;
//     }
//   } else if (guess < secretGuess) {
//     document.querySelector(".message").textContent = `Guess is Too low 🔺`;
//     if (score > 1) {
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = `You lost the game 😭`;
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// }

// document.querySelector(".check").addEventListener("click", handleGuess);
// document.querySelector(".again").addEventListener("click", initializeGame);

// initializeGame(); // Call this to initialize the game when the page loads

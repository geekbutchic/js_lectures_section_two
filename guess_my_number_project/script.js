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
console.log(document.querySelector(".check"));
 
document.querySelector(".check").addEventListener("click", () => {
  // converts to a number
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    // If not a guess or not a number
    document.querySelector(".message").textContent =
      "Not a Number 🙄 Try Again!!!";
  } else {
    console.log(guess);
  }
});

/*
1. document.querySelector(".check"): This line of code uses document.querySelector to select the first element in the document with the class "check". In this case, it selects the <button> element with the class "check". This button is typically used to check the user's guess.

2. .addEventListener("click", () => { ... }): After selecting the button element, the code adds an event listener for the "click" event. This means that when the button is clicked, the provided arrow function will be executed.

3. console.log(document.querySelector(".guess").value);: Inside the arrow function, the code logs the value of the element with the class "guess" to the console. This element is typically an <input> field where the user enters their guess. 

So, when the user clicks the button with the class "check", the JavaScript code logs the value entered in the "guess" input field to the console. This is a common pattern for capturing user input and performing actions based on that input in a web application.
*/

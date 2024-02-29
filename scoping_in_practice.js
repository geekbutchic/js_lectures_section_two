"use strict";

// Scoping in Practice

// Function Definition: calcAge
function calcAge(birthYear) {
  // Variable Declaration: age
  const age = 2024 - birthYear;

  // Inner Function: printAge
  function printAge() {
    // Variable Declaration: outPut
    const outPut = `You are ${age}, born in ${birthYear}!`;
    // Log Output
    console.log(outPut);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true; // Var is not block scoped, it is function scoped, something to note when reading older code
      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);
    }
    console.log(millennial);
  }

  // Call Inner Function: printAge
  printAge();

  // Return Age
  return age;
}

// Variable Declaration: firstName
const firstName = "Sonny";

// Call Function: calcAge
calcAge(1984);

/*

1. Function Definition: `calcAge`
* Defines a function called calcAge that takes a birthYear parameter.
* Inside this function, a constant variable `age` is declared, calculating the age based on the provided `birthYear`.
* `calcAge` also contains an inner function `printAge`.

2. Inner Function : `printAge` 
* Declares a constant variable `outPut` containing a string with interpolated values for `age` and `birthYear`.
* Logs the output string to the console.

3. Variable Declaration : `firstName`
* Declares a constant variable `firstName` and initializes it to `Sonny`.
* This variable is declared outside any function, making it accessible globally.

4. Calling the Function `calcAge(1984)`
* Invokes the `calcAge` function with `1984` as the `birthYear` argument.
* Inside `calcAge`, the `printAge` function is called, which logs the output to the console.
* The `age` variable, calculated within `calcAge`, is returned

Notes on Scoping 

1. Function Scope: Variables `age` and `printAge` are function-scoped within `calcAge`.  They are only accessible within the `calcAge` function.

2. BlockScope: Variables declared using `const` and `let` have block scope. In this case, `age` and `output` are block-scoped within their respective function blocks.

3. Global Scope : `firstName` is globally scoped since it's declared outside of any function.  It's accessible from anywhere in the code. 

4. Lexical Scope : `printAge` and `age` have access to the `birthYear` parameter of the outer function `calcAge`, demonstrating lexical scoping.

*/

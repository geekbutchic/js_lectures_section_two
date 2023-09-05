//Lecture: Function Declarations vs Expressions.

//Example Declaration
const age = calcAge(1991);
console.log(`Function Declaration`, age);

function calcAge(birthYear) {
  return 2037 - birthYear;
}
/* 
Key characteristics of function declarations:

* Function declarations are hoisted: This means that you can call the function before its actual declaration in the code, and it will still work. This is because the function declaration is moved to the top of its scope during the compilation phase.
*  They are part of the normal program flow and can be used before their actual declaration.
* They create a variable with the function name in the current scope.
*/


//Example Expression
const calcAge1 = function(birthYear) {
  return 2037 - birthYear;
};

const age1 = calcAge1(1991);
console.log(`Function Expression`, age1);

/* 
Function Expressions:

A function expression involves creating a function and assigning it to a variable. It's done using a similar syntax to variable assignments. There are two common ways to create function expressions: using the function keyword or using arrow functions (=>).

Key characteristics of function expressions:

* Function expressions are not hoisted: You cannot call the function before its actual assignment in the code.
* They are treated like any other variable assignment.
* They allow you to create anonymous functions or functions with names.
*/

// Lecture : 
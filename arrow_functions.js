// Arrow function added during ES6

/*
const name = (params) => {
expressions
};
*/

//Parameters (optional): Enclosed in parentheses (), you can specify zero or more parameters that the function takes. If there's only one parameter, you can omit the parentheses. If there are no parameters, you still need to include empty parentheses ().

//Arrow (=>): The arrow notation separates the parameter list from the function body.

//Function Body: Enclosed in curly braces {}, this is where you place the code that the function will execute. If the function body consists of a single expression, you can omit the curly braces and the return statement.

//Return Statement (optional): If the function body contains multiple statements or if you want to explicitly return a value, you can use the return statement to specify the result to be returned. If the function body consists of a single expression and you omit the curly braces, the result of that expression is automatically returned.

//Arrow function with one parameter:
const square1 = x => {
  return x * x;
};

console.log(square1(5));

//If you include curly braces {} in an arrow function, you must use the RETURN STATEMENT to explicitly specify what value the function should return. If you omit the return statement when using curly braces, the function will return undefined by default because it doesn't have an explicit return value.

//One liner version no {braces} no return statement : single expression
const square2 = x => x * x;
console.log(`One Liner: `, square2(5));

//Arrow function with multiple parameters:
const add1 = (a, b) => {
  return a + b;
};
console.log(add1(5, 5));

//Arrow function with multiple parameters - and single expression.
const add2 = (a, b) => a + b;
console.log(`One Liner: `, add2(5, 5));

//Arrow function with no parameters
const getCurrentYear = () => {
  const now = new Date();
  return now.getFullYear();
};

console.log(getCurrentYear());

// Return happens implicit
const calAge2 = birthYear => 2037 - birthYear;

console.log(calAge2(1991));

//Arrow function example with two parameters and two expressions.

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1984, "Sonny"));

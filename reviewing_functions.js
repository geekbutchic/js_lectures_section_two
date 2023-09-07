// Reviewing Functions

//Function Declaration Example: used before it's declared
function calAge2(birthYear) {
  return 2037 - birthYear;
}

//Function Expression: Essentially a function value stored in a variable
const calcAge3 = function(birthYear) {
  return 2037 - birthYear;
};

//Arrow Function: Great for a quick one-liner functions.
const calAge4 = birthYear => 2037 - birthYear;

//================================================

//Parameter is like a local variable
const calcAge = function(birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement = function(birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  const yearsSinceRetirement = Math.abs(retirement);
  //The Math.abs() function in JavaScript is used to calculate the absolute value of a number. The absolute value of a number is the non-negative value of the number, which means it turns negative numbers into positive ones, while leaving positive numbers unchanged.

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years.`;
  } else {
    return `${firstName} has been retired for ${yearsSinceRetirement} years.`;
  }
};

console.log(yearsUntilRetirement(1984, "Sonny"));
console.log(yearsUntilRetirement(1950, "Mike"));

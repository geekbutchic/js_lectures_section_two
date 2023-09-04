//Functions

function logger() {
  console.log(`My name is Sonny!`);
}

logger(); // Evoking the function
logger(); // Evoking the function

function fruitProcessor(apples, oranges) {
  //Two parameters which are like variables specific only to the function.
  //Will be defined once the function is called, represent input data.
  console.log(`Parameters logged: `, apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  console.log(`Juice String: `, juice);
  return juice;
}

//Parameters are called the arguments
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

/* 
function fruitProcessor(apples, oranges) {

These parameters will be placeholders for the values you provide when you call the function.

The console.log() statement logs the values of apples and oranges to the console, along with a text message. This line is just for debugging and showing the values of the parameters.

In the string juice, the concatenation is happening inside the template literal using the ${} syntax.
*/

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Objects

// Arrays use order number to reference not names
const sonnyArray = [
  "Sonny",
  "Valenz",
  2023 - 1984,
  "Developer",
  ["Tom", "Victoria", "Frances"]
];

// Data Structure - Key : Value Pairs
const sonny = {
  // Literal syntax
  firstName: "Sonny",
  lastName: "Valenz",
  age: 2023 - 1984,
  job: "Developer",
  friends: ["Tom", "Victoria", "Frances"]
};
// Each key is called properties with value of etc...
// properties = firstName value = 'Sonny'

//.dot vs bracket notation

console.log(sonny.lastName);
console.log(sonny["lastName"]);

// [We can insert any expression here...]
const nameKey = "Name";
console.log(sonny["first" + nameKey]);
console.log(sonny["last" + nameKey]);

/* 
The key point of interest is how you're using bracket notation to access properties. Instead of directly specifying the property name, like sonny.firstName, you're using an expression to construct the property name.

* sonny["first" + nameKey] is equivalent to sonny["firstName"]. Here, "first" + nameKey evaluates to "firstName", so it accesses the firstName property of the sonny object.

* sonny["last" + nameKey] is equivalent to sonny["lastName"]. Here, "last" + nameKey evaluates to "lastName", so it accesses the lastName property of the sonny object.

* This use of bracket notation is particularly useful when you need to access object properties dynamically based on variables or when the property names are not known until runtime. It allows you to compute the property name as a string and then use that string to access the corresponding property of the object.

*/
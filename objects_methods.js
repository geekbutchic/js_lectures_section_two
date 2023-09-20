"use strict";

//Object Methods
const sonny = {
  firstName: "Sonny",
  lastName: "Valenz",
  birthYear: 1984,
  job: "Developer",
  friends: ["Tom", "Victoria", "Frances"],
  hasDriversLicense: true,
  //   calcAge: function(birthYear) {
  //     return 2023 - birthYear;
  //   }
  //   calcAge: function() {
  //     console.log(`This Keyword Logged: `,this);
  //     return 2023 - this.birthYear;
  //   }
  calcAge: function() {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()} year old ${this
      .job} and has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
  }
};

console.log(sonny.calcAge());
// console.log(sonny["calcAge"]()); // Bracket notation
console.log(sonny.age);

//Inside the calcAge method, there's a console.log(this); statement. This logs the this keyword, which represents the sonny object, to the console. So, it will output the entire sonny object when the method is called.

//Challenge
//'Sonny is a 39 year old developer and has a driver license.

console.log(sonny.getSummary()); // Sonny is a 39 year old Developer and has a drivers license

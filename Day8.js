// Use template literals to create a string that icludes variables for a persons name and age, and log the string to the console.

const name = "shahbaz khan";
const age = 22;

const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// create a multi-line string using template literals and log it to the console.

const multiLineString = `This is the first line.
This is the second line.
This is the third line.`;

console.log(multiLineString);

// use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const numbers = [10, 20, 30, 40, 50];

const [first, second] = numbers;

console.log(`First element ${first}`);
console.log(`Second element ${second}`);

// use object destructuring to extract the title and auther from a book object and log them to the console

const book = {
  title: "destiny",
  auther: "shahbaz khan",
};

const { title, auther } = book;

console.log(`title: ${title} auther: ${auther}`);

// use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const numberOne = [1, 2, 3, 4, 5];
const numberTwo = [6, 7, 8, 9, 10];

const numbersCombined = [...numberOne, ...numberTwo];

console.log(numbersCombined);

// Use the rest operator in a function to accept an arbitary number of arguments, sum them, and return the result.

function sumAll(...numbers) {
  return numbers.reduce((total, sum) => total + sum, 0);
}

console.log(sumAll(1, 2, 3, 5, 6, 7));

// write a function that takes two parameters and returns their product, with second parameter having a default value of 1. log the result of calling this function with and without the second parameter.

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 10));
console.log(multiply(2));

// use enhanced object literals to create an object with methhdos and properties, and log the object to the conosole.

const myName = "Shahbaz Khan";
const myAge = 22;

const person = {
  name,
  age,

  greet() {
    return `Hello, my name is ${this.name}.`;
  },

  getInfo() {
    return `${this.name} is ${this.age} years old.`;
  },
};

console.log(person);
console.log(person.greet());
console.log(person.getInfo());

// create an object with computed property names based on variables and log the object to the console.

const key1 = "firstName";
const key2 = "lastName";

const person1 = {
  [key1]: "Shahbaz",
  [key2]: "Khan",
  age: 22,
};

console.log(person1);

// write a function to check if a number is even or odd and log the result to the console

function oddEven(number) {
  if (number % 2 === 0) {
    console.log("number is even" + number);
  } else {
    console.log("number is odd" + number);
  }
}

oddEven(7);
oddEven(8);

// write a function to calculate the square of a number and return the result

function calculteSquare(number) {
  return number * number;
}

let result = calculteSquare(5);
console.log(result);

// write a function expression to find the maximum of two numbers and log the result to the console.

const findMax = function (a, b) {
  let max = a > b ? a : b;
  console.log(" The maximum " + a + " and " + b + " is " + max);
};

findMax(20, 30);
findMax(50, 20);

// write a function expression to concatenate two strings and return the result.

function concatenate(str, str2) {
  return `${str} ${str2}`;
}

console.log(concatenate("shahbaz", "Khan"));

// write a aarow function to calculate the sum of two nuumber and return the result.

const calculateSum = (a, b) => {
  return a + b;
};

let result1 = calculateSum(10, 5);
console.log(result1);

// write a aarow function to check if a string conatins a specific character and return a boolean.

const containCharacter = (str, char) => {
  return str.includes(char);
};

let result2 = containCharacter("shahbaz", "j");
console.log(result2);

// write a function that takes two parameters and returns their product. Provide a default value for the second parameter]

function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(4));

// write a function that takes a persons name and age and resturn a greeting measage. Provide default value for the age

function greeting(name, age = 22) {
  return `Hello, ${name} Your are ${age} years old.`;
}

console.log(greeting("shahbaz"));

// write a highr order function that takes a function and a number, and calls the function that many times

// Higher-order function
function repeatFunction(fn, times) {
  return function (...args) {
    for (let i = 0; i < times; i++) {
      fn(...args);
    }
  };
}

// Example function to be repeated
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Create a new function that will call `greet` 3 times
const greetThreeTimes = repeatFunction(greet, 3);

// Call the new function with an argument
greetThreeTimes("Alice");

// write a highr order function that takes two function and values, apples the first function to the value and then applies the second function to the result.



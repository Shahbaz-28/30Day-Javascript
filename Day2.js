function addNumber(a, b) {
  return a + b;
}
const num1 = 5;
const num2 = 10;

console.log(num1 + num2);

// multiply//

function multiply(a, b) {
  return a + b;
}

const a = 8;
const b = 4;
console.log("multiply", a * b);

// log the remainder

const divided = 20;
const diviser = 3;

const remainder = divided % diviser;

console.log(`${divided} by ${diviser}: ${remainder}`);

// Assignment Operators

let number = 18; //Task 1
number += 8;
console.log("assigment Operetor", number);

let number2 = 10;
number2 -= 5;
console.log(number2);

// Comparision Operator Write a programm to comapre to number useing < > log the reslout

let numberOne = 22;
let numberTwo = 18;

if (numberOne > numberTwo) {
  console.log(`${numberOne} is greater than ${numberTwo}`);
} else {
  console.log(`${numberOne}is less than ${numberTwo}`);
}
// === opererator //

let equalNum = 10;
let NUmStr = "5";

if (equalNum === NUmStr) {
  console.log(`${equalNum} is strictly equal to ${NUmStr}`);
} else {
  console.log("Strictly not equal");
}

// Logical Operartor//

const x = 10;
const y = 5;

if (x > 5 && y < 10) {
  console.log("x is greater than 5 and y is less than 10");
}

if (x > 5 || y < 10) {
  console.log("x is greater than 5 Or y is greater than 10");
}

if (!(x === y)) {
  console.log("x is not equal to y");
}

// ternary operator (? :) write a programm that uses the ternary operator to check is number is positive  or negactive and log the relsult on console//

function checkNumber(num) {
  let result = num >= 0 ? "Positive" : "Negative";
  console.log(`The number ${num} is ${result}`);
}

checkNumber(10);
checkNumber(-20);

// Arithmetic Operation Script: Write a script that performs basic arithmetic operatins (addition, substraction, multiplication, division, remainder on two nuber and logs the results.//

function performOperations(num1, num2) {
  //Addition
  let addition = num1 + num2;

  console.log(`${num1} + ${num2} = ${addition}`);

  //Substraction
  let subtraction = num1 - num2;

  console.log(`${num1} - ${num2} = ${subtraction}`);

  //Multiplication

  let multipliy = num1 * num2;
  console.log(`${num1} * ${num2} = ${multipliy}`);

  //Division

  let division = num1 % num2;
  console.log(`${num1} % ${num2} = ${division}`);
}

performOperations(20, 15);
performOperations(20, 15);
performOperations(20, 15);

// Comparision Operation Script: Write a script that performs two numbers using diffrent comparision operators and combine conditions using logical operators and log the results

function performComparisons(num1, num2) {
    // Comparison operations
    console.log(`Comparing ${num1} and ${num2}:`);
    
    // Greater than (>)
    console.log(`${num1} > ${num2}:`, num1 > num2);

    // Less than (<)
    console.log(`${num1} < ${num2}:`, num1 < num2);

    // Greater than or equal to (>=)
    console.log(`${num1} >= ${num2}:`, num1 >= num2);

    // Less than or equal to (<=)
    console.log(`${num1} <= ${num2}:`, num1 <= num2);

    // Equal to (===)
    console.log(`${num1} === ${num2}:`, num1 === num2);

    // Not equal to (!==)
    console.log(`${num1} !== ${num2}:`, num1 !== num2);

    // Combined conditions with logical operators
    console.log(`Combined conditions:`);
    
    // Example with AND (&&)
    console.log(`(${num1} > 0) && (${num2} > 0):`, (num1 > 0) && (num2 > 0));

    // Example with OR (||)
    console.log(`(${num1} > 0) || (${num2} > 0):`, (num1 > 0) || (num2 > 0));

    // Example with NOT (!)
    console.log(`!(${num1} === ${num2}):`, !(num1 === num2));
}

// Test cases
performComparisons(10, 5);   // Test with positive numbers
performComparisons(15, 15);  // Test with equal numbers
performComparisons(-5, 0);   // Test with negative and zero


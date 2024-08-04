const array = [1, 2, 3, 4, 5];

console.log(array);

// Acces the first and last elements of the array and log them to the console.

const firstElement = array[0];
console.log("firstEelement", firstElement);

const lastElement = array[array.length - 1];

console.log("lastElement", lastElement);

// Use push method
const arr = [10, 20, 30, 40, 50];

arr.push(60);

console.log(arr);

// Use pop method

const popM = [1, 2, 3, 4, 5, 6];

popM.pop();

console.log(popM);

// Use shift method

const shiftM = [20, 30, 40, 50, 70];

shiftM.shift();

console.log("Shift Method", shiftM);

// Use unShift method

const unshiftM = [20, 30, 40, 50, 70];

unshiftM.unshift(50);

console.log("UnShift Method", unshiftM);

// Use the map method to create a new array where each number is doubled and log the new array.

const mapM = [2, 4, 5, 6];

const result = mapM.map(doubledNumber);

console.log("Map", result);
function doubledNumber(num) {
  return num * 2;
}

// Use the filter method to create a new array with only even numbers and log the new array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNUmber = numbers.filter((number) => number % 2 === 0);
console.log("filter", evenNUmber);

// Use reduce method to calculate the sum of all numbers in the array and log the result.
const reduceM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = reduceM.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

// Use a for loop to iterate over the array and log each elelment to the console.

const array1 = ["apple", "banana", "cherry", "date"];

for (let i = 0; i < array1.length; i++) {
  console.log("forLoop", array1[i]);
}

// Use a for each to iterate over the array and log each elelment to the console.

array1.forEach((element) => {
  console.log("forEach", element);
});

// create a two dimentional array (matrix) and log the entire array to the console.

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("two dimentional array", matrix);

// access and log a specific element from the two dimentional array.

const board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const row = 2;
const col = 2;

const element = board[row][col];
console.log(element);

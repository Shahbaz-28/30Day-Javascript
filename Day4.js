// write a program to print a number from 1 to 10 in for loop

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// write a program to print the multiplication table of 5 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

//   write a program to calculate the sum of numbers from 1 to 10 using while loop

let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}
console.log(`The sum of numbers from 1 to 10 is ${sum}`);

// write a program to prin a number from 10 to 1 using while loop

let b = 10;

while (b >= 1) {
  console.log(b);
  b--;
}

//  write a program to print a number from 1 to 10 in for do while loop

let c = 1;

do {
  console.log(c);
  c++;
} while (c <= 10);

// how i can print the star pattern using nesyted loop

let rows = 5;

for (let i = 1; i <= rows; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

// write a program to prin a number from 1 to 10 but skip the number 5 using the cntinue statement

// for (let i = 10; i >= 1; i--) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// // write a program to prin a number from 1 to 10 but stop the loop when number is 7 using break

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break; // Exit the loop when `i` is 5
  }
  console.log(i); // Print the number
}

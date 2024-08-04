function checkNumber(num) {
  if (num > 0) {
    console.log(`${num} is positive`);
  } else if (num < 0) {
    console.log(`${num} is negative`);
  } else {
    console.log(`${num} is zero`);
  }
}

checkNumber(10);
checkNumber(-5);
checkNumber(0);

// If a is eligible to vote

function eligibleToVote(age) {
  if (age >= 18) {
    console.log("eligible to vote");
  } else {
    console.log("not eligible");
  }
}

eligibleToVote(22);

// write a programm to find the largest of three numbers using nested if-else statement

function findLargest(num1, num2, num3) {
  let largest;
  if (num1 >= num2) {
    if (num1 >= num3) {
      largest = num1;
    } else {
      largest = num3;
    }
  } else {
    if (num2 >= num3) {
      largest = num2;
    } else {
      largest = num3;
    }
  }
  console.log(`The largest Number${largest}`);
}

findLargest(20, 30, 55);
findLargest(10, 30, 15);
findLargest(50, 60, 100);

// write a programm that uses a switch case to determine the day of the week based ona number (1-7) and log the day name to

function getDayName(dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 1:
      dayName = "Sunday";
      break;
    case 2:
      dayName = "Monday";
      break;
    case 3:
      dayName = "Tuesday";
      break;
    case 4:
      dayName = "Wednesday";
      break;
    case 5:
      dayName = "Thursday";
      break;
    case 6:
      dayName = "Friday";
      break;
    case 7:
      dayName = "Saturday";
      break;

    default:
      dayName = "Invalid day Number";
      break;
  }
  console.log(dayName);
}

getDayName(2);
getDayName(5);
getDayName(3);
getDayName(7);

// write a programm that uses a switch case to assign a grade (ABCDF) based on score and log the result

function getGrade(score) {
  let grade;

  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    case score >= 0:
      grade = "F";
      break;
    default:
      grade = "Invalid score";
      break;
  }

  console.log("The grade is " + grade);
}

getGrade(55);
getGrade(90);
getGrade(70);
getGrade(85);

// write a program that uses ternary operator to check if a number is even or odd and log result to the console

function checkEvenOdd(number) {
  let result = number % 2 === 0 ? "even" : "odd";
  console.log(`${number} is ${result}`);
}

checkEvenOdd(20);
checkEvenOdd(7);
checkEvenOdd(-5);

// write a program to check if a year is a leap year using multiple condition (divisible by 4, but not 100 unless also divisible by 400) and log the resu;t to the console

function checkLeapYear(year) {
  let isLeapYear;

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 == 0) {
    isLeapYear = true;
  } else {
    isLeapYear = false;
  }
  console.log(`${year} is ${isLeapYear ? "a leap year" : "not a leap year"}`);
}

checkLeapYear(2020);
checkLeapYear(1900);
checkLeapYear(2003);

let a = 34;
let b = 23;
let c = 42;
let d = 56;

if (a > 0) {
  console.log("a is positive");
} else if (a < 0) {
  console.log("a is negative");
} else {
  console.log("a is zero");
}

if (b >= 18) {
  console.log("you ara eligable for voting");
} else {
  console.log("not eligable");
}

if (a > b && a > c) {
  console.log("a is bigger than other");
} else if (b > a && b > c) {
  console.log("b is bigger than other");
} else {
  console.log("c is bigger than other");
}

switch (3) {
  case 1:
    console.log("monday");
    break;

  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
}

switch (true) {
  case d >= 80:
    console.log("A");
    break;

  case d >= 60:
    console.log("B");
    break;
  case d >= 40:
    console.log("C");
    break;
  case d >= 32:
    console.log("D");
    break;
}

console.log(d % 2 == 0 ? "even" : "odd");

//Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result.

let year = 2024; 

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

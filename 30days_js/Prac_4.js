// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Task 2: Write a program to print the multiplication table of 5 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log("5" + "*" + i + "=" + 5 * i);
}

//Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let a = 1;
let sum = 0;

while (a <= 10) {
  sum = sum + a;
  a++;
}
console.log(sum);

//Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let b = 10;
while (b >= 1) {
  console.log(b);
  b--;
}

//Task 5: Write a program to print numbers from 1 to 5 using a do... while loop.

let c = 1;
do {
  console.log(c);
  c++;
} while (c <= 5);

//Task 6: Write a program to calculate the factorial of a number using a do... while loop.

let fact = 1;
let i = 4;

do {
  fact = fact * c;
  c++;
} while (c <= i);
console.log(fact);

//Task 7: Write a program to print a pattern using nested for loops:

for(i=1;i<=5;i++)
    {
        for(j=1;j<=i;j++)
            {
                console.log("*")
            }
    }

//Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 1; i <=10; i++) {
   if(i==5)
    {
        continue;
    }
    console.log(i)

}
//Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let i = 1; i <=10; i++) {
   if(i==7)
    {
        break;
    }
    console.log(i)

}

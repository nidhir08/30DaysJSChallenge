/* Day 4: Loops */
/* Activity 1: For Loop */
//Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for(let i=1;i<11;i++){
    console.log(i);
}

//Task 2: Write a program to print the multiplication table of 5 using a for loop.
for(let i=1;i<11;i++){
    console.log(`5 X ${i} =` ,5*i);
}


/* Activity 2: While Loop */
//Task 3: Write a program to calculate the sum of numbers 1 to 10 using a while loop.
// let sum = 0;
// let i = 0;
// while(i<11){
//     sum +=i;
//     i++;
// }
// console.log(`sum: ${sum}`);

//Task 4: Write a program to print numbers from 10 to 1 using a while loop.
// let j = 10;
// while(j>=1){
//     console.log(j);
//     j--;
// }


/* Activity 3: Do...While Loop */
//Task 5: Write a program to print numbers from 1 to 5 using a do... while loop.
// let i=1;
// do{
//     console.log(i);
//      i++;
// }
// while(i<=5);

//Task 6: Write a program to calculate the factorial of a number using a do...while loop.
// let num = prompt("Enter your number");
// let i=1;
// let fact=1;
// do{
//      fact=fact*i;
//      i++;  
// }
// while(i<=num);
// console.log(fact);

/* Activity 4: Nested Loops */
//Task 7: Write a program to print a pattern using nested for loops.
let pattern = "";
for(let i=1;i<6;i++){
    for(let j=1;j<=i;j++){
     pattern += "*";
     pattern += "\n" ;  
    }
}
console.log(pattern);


/* Activity 5: Loop Control Statements */
//Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement
// for(let i=1;i<11;i++){
//     if(i==5)
//     continue;
//     console.log(i);
// }

//Task 9: Write a program to print the number from 1 to 10, but stop the loop when number is 7 using the break statement.
// for(let i=1;i<=10;i++){
//     if(i==7)
//         break;
//     console.log(i);
// }


/* Feature Request */
//1. Number Printing Script: Write a script that prints number form 1 to 10 using a for loop and a while loop.
// for(let i=1;i<=10;i++){
//     console.log(`Numbers using for Loop ${i}`);
// }
// let j=1;
// while(j<=10){
//     console.log(`Numbers using while Loop ${j}`);
//     j++;
// }

//2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
// for(let i=1;i<=10;i++){
//     console.log(`5 * ${i} = ${5*i}`);
// }

//3. Pattern Printing Script: Write a script that prints a pattern of stars using a nested loops.
let pattern = "";
for(let i=1;i<6;i++){
    for(let j=1;j<=i;j++){
        pattern += "*";
        pattern += "\n" ;
    }
}
console.log(pattern);


//4. Sum Calculation Script : Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
// let sum = 0;
// let i = 1;
// while(i<=10){
//     sum +=i ;
//     i++;
// }
// console.log(`Sum is ${sum}`);

//5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do... while loop.
let num = prompt("Enter a number ");
let fact=1;
let i=1;
do{
    fact*=i;
    i++;
}

while(i<=num);
console.log(`Factorial of Number is ${fact}`);


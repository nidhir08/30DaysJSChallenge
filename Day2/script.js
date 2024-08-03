/* Activity 1 : Arithmetic Operations*/ 
//Task 1 : Write a program to add two numbers and log the result to the console.
let a = 5;
let b = 6;
let sum = a + b;
console.log ("Sum of" , a ,'&',b ,"is", sum);
//Task 2 : Write a program to subtract two numbers and log the result to the console.
let x = 5;
let y = 6;
let difference = a - b;
console.log ("Difference of" , x ,'&',y ,"is", difference);
//Task 3 : Write a program to multiply two numbers and log the result to the console.
let p = 10;
let q = 6;
let multiply = p * q;
console.log ("Multiplication of" , p ,'&',q ,"is", multiply);
//Task 4 : Write a program to divide two numbers and log the result to the console.
let m = 5;
let n = 10;
let divide = m/n;
console.log ("Division of" , m,'&',n ,"is", divide);
//Task 5 : Write a program to find the remainder when one number is divided by another and log the result to the console.
let no1 = 10;
let no2 = 19;
let rem = no2%no1;
console.log ("Remainder of" , no2 ,'by', no1 ,"is", rem);


/* Activity 2 : Assignment Operators */
//Task 6: Use the += operator to add a number to a variable and log the result to the console.
let add = 7;
add += 8;
console.log(`Addition of num in a variable is ${add} `);
//Task 7: Use the -= operator to add a number to a variable and log the result to the console.
let sub = 10;
sub -= 8;
console.log(`Subtraction of num from a variable is ${sub} `);


/* Activity 3 : Comparison Operators */ 
//Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let num1 = 10;
let num2 = 20;
if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`);
}
else
console.log(`${num2} is greater than ${num1}`);
//Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
let num3 = 1;
let num4 = 2;
if(num3 >= num4){
    console.log(`${num3} is greater than ${num4}`);
}
else
console.log(`${num4} is greater than ${num3}`);
//Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let com1 = "2";
let com2 = 2;
if (com1 === com2){
    console.log(`${com1} === ${com2}`);
}
else if(com1 == com2){
    console.log(`${com1} == ${com2}`);
}
else
console.log(`nothing`);


/* Activity 4 : Logical Operators */
//Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let g = -1;
let h = 2;
if(g > 0 && h > 0){
    console.log("True");
}
else
console.log("False");
//Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
let isTrue = 1;
let isFalse = 0;
if(isTrue > 0 || isFalse < 0){
    console.log("True");
}
else
console.log("False");
//Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
let isOne = 1;
if(isOne!=1){
    console.log("True");
}
else
console.log("False");


/* Activity 5: Ternary Operator */
//Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let number = 6;
let result = number > 0 ? "Positive" : "Negative";
console.log(` The result is ${result}`);


//Feature Request
//1. Arithmetic Operations Script: Write a Script that performs basic arithmetic operations(addition, subtraction,multiplication,division,remainder) on two numbers and log the result.
let number1 = 10;
let number2 = 20;
let addResult = number1 + number2;
console.log(` Addition of ${number1} & ${number2} is ${addResult}`);
let subtractResult = number1 - number2;
console.log(` Subtraction of ${number1} & ${number2} is ${subtractResult}`);
let multiplyResult = number1 * number2;
console.log(` Multiplication of ${number1} & ${number2} is ${multiplyResult}`);
let divideResult = number1 / number2;
console.log(` Division of ${number1} by ${number2} is ${divideResult}`);
let remainderResult = number2%number1;
console.log(` Remainder of ${number2} by ${number1} is ${remainderResult}`);

//2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
let compare1 = 10;
let compare2 = 20;
if((compare1 > compare2)&& (compare1==compare2)){
    console.log(`${compare1} is NOT GREATER THAN ${compare2} && ${compare1} is NOT EQUALS TO ${compare2} `);
}
else if ((compare1 >= 10) || (compare2 > 20)){
    console.log(`${compare1} is GREATER THAN OR EQUALS TO 10 OR ${compare2} is GREATER THAN 20`);
}
else if (compare1!=9){
    console.log(`${compare1} is NOT EQUALS TO 9`);
}
else{
    console.log('Comparison and Logical Operators');
}

//3. Ternary Operator Script: Write a script that uses ternary operator to determine if a number is positive or negative and logs the result.
let ternaryNumber = -1;
let ternaryResult = (ternaryNumber>0)?"Positive": "Negative";
console.log(`Number is ${ternaryResult}`);

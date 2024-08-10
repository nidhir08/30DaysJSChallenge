/* Functions */
/* Activity 1: Function Declaration */
//Task 1: Write a function to check if a number is even or odd and log the result to the console.
// function isEvenOdd(num){
//     if(num%2==0){
//         console.log(`${num} is Even`);
//     }
//     else{
//         console.log(`${num} is Odd`);
//     }
// }

// let num = prompt("Enter a number");
// isEvenOdd(num);

//Task 2: Write a function to calculate the square of a number and return the result.
// function squareNumber(num){
//     num=num*num;
//     return num;
    
// }     
// let num1 = prompt("Enter a number");
// console.log(`Square of ${num1} is `,squareNumber(num1));


/* Activity 2: Function Expression */
//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
// let maxNum = function(a,b){
//     if(a>b){
//         console.log(`${a} is maximum`);
//     }
//     else {
//         console.log(`${b} is maximum`);
//     }
// }
// maxNum(10,20);

//Task 4: Write a function to concatenate two strings and return the result.
// let concatString = function(string1,string2){
//     let concatenate = string1+string2;
//     return concatenate;
// }
// console.log(`String after concatenation is`,concatString("Nidhi ","Rawat"));


/* Arrow Functions  */
//Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
// let sumNumbers = (a,b)=>{
//     let sum = a+b;
//    return sum;
// }
// const a = 3;
// const b = 5;
// console.log(`Sum of ${a} & ${b} is `,sumNumbers(a,b));

//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
let checkChar = (char)=>{
    let string = 'Hello, Welcome to Day5 JS Challenge';
    console.log(string.length);
    let found = false;
    for(let i = 0 ; i<string.length;i++){
        if(string[i]===char){
            found=true;
            break;
        }
    }
    if(found){
        return true;
    }
    else{
        return false;
    }
}
console.log(`Char is present `, checkChar('H'));


/* Activity 4: Function Parameters and Default Values */
//Task 7: Write a function that takes two parameters and return their product. Provide a default value for the second parameter.
let productNum = (a,b)=>{
    return a*b;
}
const a = 6;
console.log(`product is `, productNum(a,5));

//Task 8 : Write a function that takes a person's name and age returns a greeting message. Provide a default value for the age.
let greetPerson = (name,age)=>{
    console.log(`Greetings..Hello your name is ${name} & age is ${age} `);
}
const name = "Mohit";
greetPerson(name,25); 


/* Activity 5: Higher Order Functions */
//Task 9: Write a higher order function that takes a function and a number, and calls the function that many times.
let higherOrder = (func , number)=>{
    for(let i =0;i<number;i++){
        func();
        console.log('\n');
    }
}
let order = function()  {
    console.log("Hello");
}
higherOrder(order,5);

//Task 10: Write a higher order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
let higherOrder2 = (func1,func2,value)=>{
    let result = func1(value);
    return func2(result);
}
let order2 = function(){
    return 10;
}
let order3 = function(value){
    return value*2;
}
console.log(`result is `, higherOrder2(order2,order3,5));


/* Feature Request */
//1. Even or Odd Function script: Write a script that included a function to check if a number is even or odd and logs the result.
let evenOdd = (number) =>{
    if(number%2==0){
        console.log(`${number} is even`);
    }
    else{
        console.log(`${number} is odd`);
    }
}
evenOdd(2);

//2. Square Calculation Function Script: Create a script that includes a function to calculate thesquare of a number and returns the result.
// let square = (number) =>{
//     return number*number;
// }
// let number = prompt("Enter a Number");
// console.log(`Square of ${number} is `,square(number));

//3.Concatenation function script: Write a script that includes a function expression to concatenate two strings and return the result.
// let concat = (str1,str2) =>{
//     let concatenate = str1+str2;
//     return concatenate;
// }
// let str1 = prompt("Enter first string");
// let str2 = prompt("Enter second string");
// console.log(`Concatenated string is `,concat(str1,str2));

//4.Sum Calculation Arrow Function Script : Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
let sum = (num1,num2) =>{
    let add = num1+num2;
    return add;
}
let num1 = Number(prompt("Enter first number")); //prompt returns value as a string not number
let num2 = Number(prompt("Enter second number"));
console.log(`Sum of ${num1} and ${num2} is `,sum(num1,num2));

//5. Higher Order Function Script: Write a script that includes a higher order function to apply a given function multiple times.
let higherFunction = (func,times)=>{
    for(let i=0;i<times;i++){
        func();
        console.log('\n');
}
}
let script = function(){
    console.log("Hello");
}
higherFunction(script,10);
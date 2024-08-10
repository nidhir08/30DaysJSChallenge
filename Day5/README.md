# Functions in JavaScript
## 1. Functions

A function in JavaScript is a reusable block of code designed to perform a specific task. Functions can be defined using the function keyword and can be invoked or called to execute their code.

## 2. Function Expressions

A function expression is a way to define a function using an expression, often assigning it to a variable. Unlike function declarations, function expressions are not hoisted, meaning they cannot be used before they are defined.
### Example
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(2, 3)); 

## 3. Function Parameters

Function parameters are variables listed as part of the function definition. They act as placeholders for the values that will be passed to the function when it is invoked.

## 4. Default Parameters

Default parameters allow you to initialize parameters with default values if no argument is provided when the function is called. This helps handle cases where arguments might be missing.
### Example
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

greet();        // Output: Hello, Guest!

## 5. Arrow Functions

Arrow functions provide a concise syntax for writing functions. They are especially useful for short functions and have some differences compared to traditional functions, such as not having their own this context.

## 6. Higher-Order Functions

Higher-order functions are functions that either take other functions as arguments or return functions as their result. They are powerful tools in functional programming, enabling more abstract and flexible code.#